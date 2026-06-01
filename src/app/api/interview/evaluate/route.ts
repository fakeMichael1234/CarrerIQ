import { NextResponse } from "next/server";
import { getOpenAIClient } from "@/lib/openai";
import { clampScore } from "@/lib/utils";

type EvaluateBody = {
  question?: string;
  answer?: string;
  secondsUsed?: number;
  timeLimitSec?: number;
  difficulty?: string;
};

function heuristicScore(body: EvaluateBody) {
  const answer = body.answer?.trim() ?? "";
  const words = answer ? answer.split(/\s+/).length : 0;
  const timeLimit = body.timeLimitSec ?? 90;
  const secondsUsed = body.secondsUsed ?? timeLimit;
  const latePenalty = Math.max(0, secondsUsed - timeLimit * 0.72) * 0.65;
  const depthBonus = Math.min(34, words * 1.4);

  const accuracy = clampScore(52 + depthBonus);
  const clarity = clampScore(58 + Math.min(26, words));
  const relevance = clampScore(answer.toLowerCase().includes("tradeoff") ? 86 : 72);
  const depth = clampScore(48 + depthBonus);
  const timeEfficiency = clampScore(100 - latePenalty);
  const totalScore = clampScore(
    accuracy * 0.28 + clarity * 0.18 + relevance * 0.22 + depth * 0.2 + timeEfficiency * 0.12
  );

  return {
    accuracy,
    clarity,
    relevance,
    depth,
    timeEfficiency,
    totalScore,
    feedback:
      totalScore >= 80
        ? "Strong answer. Add one concrete metric or tradeoff to make it sharper."
        : "Good start. Improve specificity, cover tradeoffs, and connect the response to the role requirements.",
  };
}

export async function POST(request: Request) {
  const body = (await request.json()) as EvaluateBody;
  const client = getOpenAIClient();

  if (!client) {
    return NextResponse.json({
      source: "heuristic",
      evaluation: heuristicScore(body),
    });
  }

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.2,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "Evaluate a mock interview answer. Return JSON with integer scores 0-100 for accuracy, clarity, relevance, depth, timeEfficiency, totalScore, plus short feedback.",
      },
      {
        role: "user",
        content: JSON.stringify({
          question: body.question,
          answer: body.answer,
          secondsUsed: body.secondsUsed,
          timeLimitSec: body.timeLimitSec,
          difficulty: body.difficulty,
        }),
      },
    ],
  });

  const content = completion.choices[0]?.message.content;

  if (!content) {
    return NextResponse.json({
      source: "heuristic",
      evaluation: heuristicScore(body),
    });
  }

  return NextResponse.json({
    source: "openai",
    evaluation: JSON.parse(content),
  });
}
