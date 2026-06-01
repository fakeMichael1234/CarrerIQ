"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Clock3, Mic, Pause, Send, ShieldAlert, Sparkles } from "lucide-react";
import { ProgressBar } from "@/components/progress-bar";
import { evaluationDimensions, interviewQuestions } from "@/lib/mock-data";
import { clampScore } from "@/lib/utils";

type AnswerResult = {
  score: number;
  timeEfficiency: number;
  autoSubmitted: boolean;
};

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

export function LiveInterview() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(interviewQuestions[0].seconds);
  const [results, setResults] = useState<AnswerResult[]>([]);
  const [completed, setCompleted] = useState(false);
  const [paused, setPaused] = useState(false);

  const question = interviewQuestions[questionIndex];

  const averageScore = useMemo(() => {
    if (!results.length) {
      return 84;
    }

    return Math.round(results.reduce((sum, item) => sum + item.score, 0) / results.length);
  }, [results]);

  const poorRun = results.filter((item) => item.score < 45).length >= 2;

  function submitAnswer(autoSubmitted = false) {
    const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;
    const elapsed = question.seconds - timeLeft;
    const speedPenalty = Math.max(0, elapsed - question.seconds * 0.72) * 0.75;
    const timeEfficiency = clampScore(100 - speedPenalty - (autoSubmitted ? 14 : 0));
    const quality = clampScore(48 + wordCount * 2.2 + questionIndex * 5 - (autoSubmitted ? 12 : 0));
    const score = clampScore(quality * 0.68 + timeEfficiency * 0.32);
    const nextResults = [...results, { score, timeEfficiency, autoSubmitted }];

    setResults(nextResults);
    setAnswer("");

    const shouldEndEarly = nextResults.length >= 2 && nextResults.slice(-2).every((item) => item.score < 45);
    const isLastQuestion = questionIndex >= interviewQuestions.length - 1;

    if (shouldEndEarly || isLastQuestion) {
      setCompleted(true);
      return;
    }

    const nextIndex = questionIndex + 1;
    setQuestionIndex(nextIndex);
    setTimeLeft(interviewQuestions[nextIndex].seconds);
  }

  useEffect(() => {
    if (completed || paused) {
      return;
    }

    if (timeLeft <= 0) {
      submitAnswer(true);
      return;
    }

    const timer = window.setTimeout(() => setTimeLeft((current) => current - 1), 1000);
    return () => window.clearTimeout(timer);
  });

  if (completed) {
    return (
      <section className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-white/10 bg-fog p-6 text-ink">
          <p className="text-xs font-black uppercase text-black/45">Session Complete</p>
          <h1 className="mt-3 text-4xl font-black">Interview readiness: {averageScore}</h1>
          <p className="mt-4 text-sm leading-6 text-black/58">
            The candidate is strongest in structured explanations and pacing, with improvement needed on deeper system design follow-ups.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href="/report" className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-black uppercase text-white">
              View report
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => {
                setQuestionIndex(0);
                setResults([]);
                setAnswer("");
                setCompleted(false);
                setTimeLeft(interviewQuestions[0].seconds);
              }}
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-xs font-black uppercase text-ink"
            >
              Restart
            </button>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-black p-6">
          <p className="text-xs font-black uppercase text-white/42">Dimension Scores</p>
          <div className="mt-5 grid gap-4">
            {evaluationDimensions.map((dimension) => (
              <ProgressBar key={dimension.label} label={dimension.label} value={dimension.score} color={dimension.color} compact />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
      <aside className="rounded-lg border border-white/10 bg-black p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase text-white/42">Live Round</p>
            <h1 className="mt-2 text-2xl font-black text-white">AI interviewer</h1>
          </div>
          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            className="grid size-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-acid hover:text-acid"
            aria-label={paused ? "Resume timer" : "Pause timer"}
            title={paused ? "Resume timer" : "Pause timer"}
          >
            {paused ? <Mic className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
          </button>
        </div>

        <div className="mt-6 rounded-lg bg-fog p-5 text-ink">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-black uppercase text-black/48">Question {questionIndex + 1}</span>
            <span className="rounded-full bg-ink px-3 py-1 text-xs font-black text-acid">{question.difficulty}</span>
          </div>
          <div className="mt-5 flex items-end gap-2">
            <Clock3 className="mb-2 size-6 text-black/45" aria-hidden="true" />
            <span className="font-mono text-5xl font-black">{formatTime(timeLeft)}</span>
          </div>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-black/10">
            <div className="h-full rounded-full bg-acid" style={{ width: `${(timeLeft / question.seconds) * 100}%` }} />
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          {evaluationDimensions.map((dimension) => (
            <ProgressBar key={dimension.label} label={dimension.label} value={dimension.score} color={dimension.color} compact />
          ))}
        </div>
      </aside>

      <div className="rounded-[2rem] bg-fog p-4 text-ink shadow-soft">
        <div className="rounded-[1.5rem] bg-black p-5 text-white">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="grid size-10 place-items-center rounded-full bg-acid text-ink">
                <Sparkles className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-black">{question.type}</p>
                <p className="text-xs text-white/42">Adaptive difficulty engine</p>
              </div>
            </div>
            {poorRun ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-rose/35 bg-rose/10 px-3 py-2 text-xs font-black text-rose">
                <ShieldAlert className="size-4" aria-hidden="true" />
                termination risk
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-full border border-acid/35 bg-acid/10 px-3 py-2 text-xs font-black text-acid">
                <CheckCircle2 className="size-4" aria-hidden="true" />
                stable pacing
              </div>
            )}
          </div>

          <h2 className="mt-8 text-balance text-3xl font-black leading-tight sm:text-4xl">{question.prompt}</h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {question.idealSignals.map((signal) => (
              <span key={signal} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-white/62">
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_15rem]">
          <textarea
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            className="min-h-72 resize-y rounded-lg border border-black/10 bg-white p-5 text-sm leading-7 text-ink outline-none transition focus:border-acid"
            placeholder="Type the candidate response..."
          />
          <div className="flex flex-col rounded-lg border border-black/10 bg-black/[0.04] p-4">
            <p className="text-xs font-black uppercase text-black/45">State Machine</p>
            <div className="mt-4 space-y-3 text-sm font-bold text-black/66">
              <div className="flex items-center justify-between gap-3">
                <span>Round</span>
                <span>{questionIndex + 1}/{interviewQuestions.length}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Avg score</span>
                <span>{averageScore}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Answers</span>
                <span>{results.length}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => submitAnswer(false)}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-xs font-black uppercase text-white transition hover:bg-black"
            >
              Submit answer
              <Send className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
