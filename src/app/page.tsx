import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { InterviewVisual } from "@/components/interview-visual";
import { MetricTile } from "@/components/metric-tile";
import { PageFrame } from "@/components/page-frame";
import { SectionHeading } from "@/components/section-heading";
import { WorkflowStrip } from "@/components/workflow-strip";
import { featureCards, landingStats } from "@/lib/mock-data";

export default function LandingPage() {
  return (
    <PageFrame>
      <section className="mx-auto w-full max-w-6xl px-4 pt-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-fog p-4 text-ink shadow-soft sm:p-6 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-full bg-black px-4 py-3 text-white">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase">
              <span className="size-2 rounded-full bg-acid shadow-glow" />
              AI Interview OS
            </div>
            <div className="hidden items-center gap-4 text-xs font-semibold text-white/52 sm:flex">
              <span>Resume</span>
              <span>JD</span>
              <span>Adaptive Round</span>
              <span>Report</span>
            </div>
          </div>

          <div className="grid items-center gap-8 py-10 lg:grid-cols-[1fr_0.92fr] lg:py-14">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-3 py-2 text-xs font-black uppercase text-black/58">
                <Sparkles className="size-4 text-acid" aria-hidden="true" />
                Resume matched. Interview adapted. Report delivered.
              </p>
              <h1 className="text-balance text-5xl font-black leading-[0.98] text-black sm:text-6xl lg:text-7xl">
                AI mock interviews that feel like the real technical panel.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-black/58 sm:text-lg">
                CareerIQ analyzes resumes and job descriptions, runs adaptive technical interviews, scores time management, and ships a hiring-readiness report candidates can act on.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/interview"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-black uppercase text-white transition hover:bg-black"
                >
                  <Play className="size-4" aria-hidden="true" />
                  Start mock interview
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-full border border-black/12 px-5 py-3 text-sm font-black uppercase text-ink transition hover:border-black/25 hover:bg-black/[0.04]"
                >
                  View dashboard
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <InterviewVisual />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-5">
        <div className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 sm:grid-cols-2 lg:grid-cols-4">
          {landingStats.map((stat) => (
            <MetricTile key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Interview Logic"
            title="Every answer changes the next question."
            description="The product state tracks resume evidence, JD requirements, answer strength, confidence, difficulty, and remaining time."
          />
          <WorkflowStrip />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          {featureCards.map((feature) => {
            const Icon = feature.icon;

            return (
              <article key={feature.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-black text-white">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/58">{feature.description}</p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-acid text-ink">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16">
        <div className="grid gap-5 rounded-[2rem] bg-fog p-5 text-ink lg:grid-cols-[1fr_0.8fr] lg:p-8">
          <div>
            <p className="text-xs font-black uppercase text-black/45">Final report</p>
            <h2 className="mt-3 max-w-2xl text-balance text-4xl font-black sm:text-5xl">
              Candidate signal without the hiring guesswork.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-black/58">
              Score accuracy, clarity, relevance, depth, and time efficiency in one readiness view with skill-level coaching.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Hiring readiness", "Strengths", "Weaknesses", "Improvement plan"].map((item) => (
              <div key={item} className="rounded-lg border border-black/10 bg-white p-4">
                <CheckCircle2 className="size-5 text-acid" aria-hidden="true" />
                <p className="mt-3 text-sm font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-acid text-ink">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <p className="max-w-xl text-sm leading-6 text-white/58">
              Built for candidates, mentors, bootcamps, and teams that need structured interview practice.
            </p>
          </div>
          <Link
            href="/analytics"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs font-black uppercase text-white transition hover:border-acid hover:text-acid"
          >
            Analytics
            <BarChart3 className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}
