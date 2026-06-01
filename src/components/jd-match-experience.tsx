"use client";

import { useMemo, useState } from "react";
import { ClipboardCheck, Lightbulb, Sparkles } from "lucide-react";
import { ProgressBar } from "@/components/progress-bar";
import { jdRequirements } from "@/lib/mock-data";

const starterDescription =
  "We are hiring a full-stack engineer with strong Next.js, TypeScript, PostgreSQL, Prisma, OpenAI API integration, production ownership, and experience building clean dashboard interfaces.";

export function JDMatchExperience() {
  const [description, setDescription] = useState(starterDescription);
  const [matched, setMatched] = useState(true);

  const score = useMemo(() => {
    const base = jdRequirements.reduce((sum, item) => sum + item.match, 0) / jdRequirements.length;
    const bonus = description.toLowerCase().includes("openai") ? 3 : 0;
    return Math.min(99, Math.round(base + bonus));
  }, [description]);

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
      <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase text-acid">Job Description</p>
            <h1 className="mt-3 text-3xl font-black text-white">Requirement matching</h1>
            <p className="mt-3 text-sm leading-6 text-white/58">
              Paste a role description and convert it into skill requirements, interview topics, and matching risk areas.
            </p>
          </div>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-acid text-ink">
            <ClipboardCheck className="size-5" aria-hidden="true" />
          </span>
        </div>

        <textarea
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
            setMatched(false);
          }}
          className="mt-6 min-h-80 w-full resize-y rounded-lg border border-white/10 bg-black/55 p-5 text-sm leading-7 text-white outline-none transition placeholder:text-white/30 focus:border-acid/70"
          placeholder="Paste the job description here..."
        />

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-white/42">{description.length} characters analyzed</p>
          <button
            type="button"
            onClick={() => setMatched(true)}
            className="inline-flex items-center gap-2 rounded-full bg-acid px-4 py-2 text-xs font-black uppercase text-ink transition hover:bg-mint"
          >
            <Sparkles className="size-4" aria-hidden="true" />
            Match JD
          </button>
        </div>
      </section>

      <aside className="rounded-lg border border-white/10 bg-black p-5">
        <div className="rounded-lg bg-fog p-5 text-ink">
          <p className="text-xs font-black uppercase text-black/48">Resume vs JD</p>
          <div className="mt-3 flex items-end gap-2">
            <span className="text-6xl font-black">{score}</span>
            <span className="pb-2 text-xl font-black text-black/45">%</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-black/58">
            Strong product engineering match with a visible gap in advanced system design evidence.
          </p>
        </div>

        {matched ? (
          <div className="mt-6 grid gap-4">
            {jdRequirements.map((item, index) => (
              <ProgressBar
                key={item.label}
                label={item.label}
                value={item.match}
                color={index % 3 === 0 ? "bg-acid" : index % 3 === 1 ? "bg-signal" : "bg-ember"}
                compact
              />
            ))}

            <div className="rounded-lg border border-ember/30 bg-ember/10 p-4">
              <div className="flex items-center gap-2 text-ember">
                <Lightbulb className="size-5" aria-hidden="true" />
                <p className="text-sm font-black">Interview blueprint</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/58">
                Prioritize Next.js architecture first, then probe database design, OpenAI cost control, and ownership stories.
              </p>
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
