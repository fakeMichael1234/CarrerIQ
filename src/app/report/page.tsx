import Link from "next/link";
import { ArrowRight, BadgeCheck, ClipboardList, Download, Flame, ShieldCheck, Target } from "lucide-react";
import { PageFrame } from "@/components/page-frame";
import { ProgressBar } from "@/components/progress-bar";
import { ScoreRing } from "@/components/score-ring";
import { SectionHeading } from "@/components/section-heading";
import { improvementPlan, skillBreakdown, strengths, weaknesses } from "@/lib/mock-data";

export default function ReportPage() {
  return (
    <PageFrame>
      <section className="mx-auto w-full max-w-6xl px-4 pt-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-fog p-5 text-ink shadow-soft">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase text-black/45">Final Report</p>
                <h1 className="mt-3 text-4xl font-black leading-tight">Hiring readiness indicator</h1>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-black uppercase text-acid">
                <ShieldCheck className="size-4" aria-hidden="true" />
                hire-ready
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-black/58">
              Candidate is ready for frontend-heavy full-stack interviews, with targeted practice needed for system design depth and data modeling tradeoffs.
            </p>
            <div className="mt-6 max-w-sm">
              <ScoreRing score={84} label="Interview Readiness" />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-black uppercase text-white">
                <Download className="size-4" aria-hidden="true" />
                Export PDF
              </button>
              <Link href="/analytics" className="inline-flex items-center gap-2 rounded-full border border-black/12 px-4 py-2 text-xs font-black uppercase text-ink">
                Analytics
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-lg border border-white/10 bg-black p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Skill-wise Performance</p>
                  <h2 className="mt-2 text-2xl font-black text-white">Breakdown</h2>
                </div>
                <ClipboardList className="size-6 text-acid" aria-hidden="true" />
              </div>
              <div className="mt-5 grid gap-4">
                {skillBreakdown.map((skill, index) => (
                  <ProgressBar
                    key={skill.skill}
                    label={skill.skill}
                    value={skill.score}
                    color={index % 3 === 0 ? "bg-acid" : index % 3 === 1 ? "bg-signal" : "bg-ember"}
                    compact
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-lg border border-acid/30 bg-acid/10 p-5">
                <div className="flex items-center gap-2 text-acid">
                  <BadgeCheck className="size-5" aria-hidden="true" />
                  <h2 className="font-black">Strengths</h2>
                </div>
                <div className="mt-4 grid gap-3">
                  {strengths.map((item) => (
                    <p key={item} className="text-sm leading-6 text-white/68">{item}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-rose/30 bg-rose/10 p-5">
                <div className="flex items-center gap-2 text-rose">
                  <Flame className="size-5" aria-hidden="true" />
                  <h2 className="font-black">Weaknesses</h2>
                </div>
                <div className="mt-4 grid gap-3">
                  {weaknesses.map((item) => (
                    <p key={item} className="text-sm leading-6 text-white/68">{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeading
            eyebrow="Improvement"
            title="Personalized practice plan"
            description="A focused follow-up sequence based on resume evidence, role requirements, adaptive interview results, and time behavior."
          />
          <div className="grid gap-4">
            {improvementPlan.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-acid text-sm font-black text-ink">
                  {index + 1}
                </span>
                <div>
                  <p className="font-black text-white">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-white/50">Recommended before the next hard round.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16">
        <div className="rounded-[2rem] bg-fog p-5 text-ink lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase text-black/45">Recommendation</p>
              <h2 className="mt-3 text-4xl font-black">Proceed to technical screen with system design prep.</h2>
            </div>
            <Link href="/interview" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-black uppercase text-white">
              Run another round
              <Target className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
