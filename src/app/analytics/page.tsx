import Link from "next/link";
import { ArrowRight, BarChart3, Clock3, Gauge, TrendingUp } from "lucide-react";
import { MetricTile } from "@/components/metric-tile";
import { PageFrame } from "@/components/page-frame";
import { ProgressBar } from "@/components/progress-bar";
import { SectionHeading } from "@/components/section-heading";
import { analyticsTimeline, skillBreakdown } from "@/lib/mock-data";

const pacing = [
  { label: "Technical", value: 88 },
  { label: "Behavioral", value: 94 },
  { label: "Scenario", value: 81 },
  { label: "Follow-up", value: 72 },
];

export default function AnalyticsPage() {
  return (
    <PageFrame>
      <section className="mx-auto w-full max-w-6xl px-4 pt-10">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <SectionHeading
            eyebrow="Analytics"
            title="Performance patterns across the interview funnel."
            description="Track readiness, pacing, skill consistency, and where adaptive difficulty changes candidate outcomes."
          />
          <Link
            href="/report"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-acid px-5 py-3 text-xs font-black uppercase text-ink transition hover:bg-mint"
          >
            Final report
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-5 px-4 py-6 lg:grid-cols-[1fr_0.78fr]">
        <div className="rounded-[2rem] bg-fog p-5 text-ink shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase text-black/45">Readiness Trend</p>
              <h1 className="mt-2 text-4xl font-black">Candidate trajectory</h1>
            </div>
            <span className="grid size-12 place-items-center rounded-full bg-ink text-acid">
              <TrendingUp className="size-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8 flex h-72 items-end gap-3 rounded-lg bg-black p-5">
            {[58, 64, 68, 73, 78, 84, 88].map((value, index) => (
              <div key={value} className="flex h-full flex-1 flex-col justify-end gap-2">
                <div
                  className="rounded-t-lg bg-acid shadow-glow"
                  style={{ height: `${value}%`, opacity: 0.45 + index * 0.08 }}
                />
                <span className="text-center font-mono text-[0.65rem] text-white/42">R{index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="grid grid-cols-2 gap-3">
            <MetricTile label="Avg score" value="84" unit="/100" />
            <MetricTile label="Best round" value="88" unit="/100" tone="signal" />
            <MetricTile label="Late penalty" value="6" unit="pts" tone="ember" />
            <MetricTile label="Follow-ups" value="11" tone="rose" />
          </div>
          <div className="rounded-lg border border-white/10 bg-black p-5">
            <p className="text-xs font-black uppercase text-white/42">Time Efficiency</p>
            <div className="mt-5 grid gap-4">
              {pacing.map((item) => (
                <ProgressBar key={item.label} label={item.label} value={item.value} compact />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-5 px-4 pb-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase text-white/42">Pipeline</p>
              <h2 className="mt-2 text-2xl font-black text-white">Readiness stages</h2>
            </div>
            <Gauge className="size-6 text-acid" aria-hidden="true" />
          </div>
          <div className="mt-5 grid gap-3">
            {analyticsTimeline.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.label} className="flex items-center gap-4 rounded-lg border border-white/10 bg-black/42 p-4">
                  <span className="grid size-10 place-items-center rounded-full bg-acid text-ink">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-black text-white">{step.label}</p>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-acid" style={{ width: `${step.value}%` }} />
                    </div>
                  </div>
                  <span className="font-mono text-sm font-black text-white/58">{step.value}%</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-black p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase text-white/42">Skill Breakdown</p>
              <h2 className="mt-2 text-2xl font-black text-white">Interview signal map</h2>
            </div>
            <BarChart3 className="size-6 text-acid" aria-hidden="true" />
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {skillBreakdown.map((skill, index) => (
              <ProgressBar
                key={skill.skill}
                label={skill.skill}
                value={skill.score}
                color={index % 4 === 0 ? "bg-acid" : index % 4 === 1 ? "bg-signal" : index % 4 === 2 ? "bg-ember" : "bg-rose"}
                compact
              />
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center gap-2 text-acid">
              <Clock3 className="size-5" aria-hidden="true" />
              <p className="text-sm font-black">Adaptive observation</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-white/58">
              Candidate improves when prompts include constraints, but depth drops when the interviewer asks open-ended architecture follow-ups.
            </p>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
