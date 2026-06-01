import Link from "next/link";
import { ArrowRight, CalendarClock, CircleAlert, FileText, Gauge, Play, UploadCloud } from "lucide-react";
import { MetricTile } from "@/components/metric-tile";
import { PageFrame } from "@/components/page-frame";
import { ProgressBar } from "@/components/progress-bar";
import { ScoreRing } from "@/components/score-ring";
import { analyticsTimeline, dashboardMetrics, recentSessions, resumeSignals } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <PageFrame>
      <section className="mx-auto grid w-full max-w-6xl gap-5 px-4 pt-10 lg:grid-cols-[0.7fr_1.3fr]">
        <aside className="rounded-[2rem] bg-fog p-5 text-ink shadow-soft">
          <p className="text-xs font-black uppercase text-black/45">Candidate Dashboard</p>
          <h1 className="mt-3 text-4xl font-black leading-tight">Interview command center</h1>
          <p className="mt-4 text-sm leading-6 text-black/58">
            Track readiness, resume evidence, JD match, adaptive session quality, and final coaching tasks.
          </p>
          <div className="mt-6">
            <ScoreRing score={84} />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/resume" className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-black uppercase text-white">
              <UploadCloud className="size-4" aria-hidden="true" />
              Upload
            </Link>
            <Link href="/interview" className="inline-flex items-center gap-2 rounded-full border border-black/12 px-4 py-2 text-xs font-black uppercase text-ink">
              <Play className="size-4" aria-hidden="true" />
              Interview
            </Link>
          </div>
        </aside>

        <div className="grid content-start gap-5">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {dashboardMetrics.map((metric) => (
              <MetricTile
                key={metric.label}
                label={metric.label}
                value={metric.value}
                unit={metric.unit}
                tone={metric.tone as "acid" | "signal" | "ember" | "rose"}
              />
            ))}
          </div>

          <section className="rounded-lg border border-white/10 bg-black p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase text-white/42">Next Best Action</p>
                <h2 className="mt-2 text-2xl font-black text-white">Run one medium system design round</h2>
              </div>
              <Link href="/interview" className="inline-flex items-center gap-2 rounded-full bg-acid px-4 py-2 text-xs font-black uppercase text-ink">
                Start
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <Gauge className="size-5 text-acid" aria-hidden="true" />
                <p className="mt-3 text-sm font-bold text-white">Raise depth score from 74 to 82.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <CalendarClock className="size-5 text-signal" aria-hidden="true" />
                <p className="mt-3 text-sm font-bold text-white">Keep technical answers under 90 seconds.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <CircleAlert className="size-5 text-ember" aria-hidden="true" />
                <p className="mt-3 text-sm font-bold text-white">Prepare database tradeoff examples.</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-5 px-4 py-5 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase text-white/42">Recent Sessions</p>
              <h2 className="mt-2 text-2xl font-black text-white">Adaptive rounds</h2>
            </div>
            <FileText className="size-6 text-acid" aria-hidden="true" />
          </div>
          <div className="mt-5 grid gap-3">
            {recentSessions.map((session) => (
              <div key={`${session.role}-${session.company}`} className="grid gap-3 rounded-lg border border-white/10 bg-black/42 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="font-black text-white">{session.role}</p>
                  <p className="mt-1 text-xs text-white/42">{session.company} · {session.difficulty}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-black text-acid">{session.score}</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-white/58">{session.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-black p-5">
          <p className="text-xs font-black uppercase text-white/42">Skill Readout</p>
          <h2 className="mt-2 text-2xl font-black text-white">Resume evidence</h2>
          <div className="mt-5 grid gap-4">
            {resumeSignals.map((signal) => (
              <ProgressBar key={signal.label} label={signal.label} value={signal.score} compact />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {analyticsTimeline.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <Icon className="size-5 text-acid" aria-hidden="true" />
                  <p className="mt-3 text-sm font-black text-white">{step.label}</p>
                  <p className="mt-1 font-mono text-xs text-white/42">{step.value}% complete</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
