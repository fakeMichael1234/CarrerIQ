"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, FileText, Sparkles, UploadCloud } from "lucide-react";
import { ProgressBar } from "@/components/progress-bar";
import { extractedResume, resumeSignals } from "@/lib/mock-data";

export function ResumeUploadExperience() {
  const [fileName, setFileName] = useState("michael_resume_fullstack.pdf");
  const [isAnalyzed, setIsAnalyzed] = useState(true);

  const evidenceScore = useMemo(() => {
    const total = resumeSignals.reduce((sum, item) => sum + item.score, 0);
    return Math.round(total / resumeSignals.length);
  }, []);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
      <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase text-acid">Resume Upload</p>
            <h1 className="mt-3 text-3xl font-black text-white">Candidate evidence intake</h1>
            <p className="mt-3 text-sm leading-6 text-white/58">
              Upload a PDF or DOCX resume and convert projects, skills, experience, and proof points into interview signals.
            </p>
          </div>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-acid text-ink">
            <UploadCloud className="size-5" aria-hidden="true" />
          </span>
        </div>

        <label className="mt-6 flex min-h-60 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-acid/45 bg-black/45 p-6 text-center transition hover:border-acid hover:bg-black/65">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="sr-only"
            onChange={(event) => {
              const selected = event.target.files?.[0]?.name;
              if (selected) {
                setFileName(selected);
                setIsAnalyzed(true);
              }
            }}
          />
          <span className="grid size-16 place-items-center rounded-full bg-acid text-ink shadow-glow">
            <FileText className="size-7" aria-hidden="true" />
          </span>
          <span className="mt-5 text-lg font-black text-white">Drop resume or browse</span>
          <span className="mt-2 max-w-xs text-sm leading-6 text-white/50">PDF, DOC, and DOCX files are supported for candidate profile extraction.</span>
        </label>

        <div className="mt-5 rounded-lg border border-white/10 bg-black/40 p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-white">{fileName}</p>
              <p className="mt-1 text-xs text-white/42">Ready for AI analysis</p>
            </div>
            <button
              type="button"
              onClick={() => setIsAnalyzed(true)}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-acid px-4 py-2 text-xs font-black uppercase text-ink transition hover:bg-mint"
            >
              <Sparkles className="size-4" aria-hidden="true" />
              Analyze
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-white/10 bg-black p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase text-white/42">Extracted Profile</p>
            <h2 className="mt-2 text-2xl font-black text-white">Resume intelligence</h2>
          </div>
          <div className="rounded-full border border-acid/35 bg-acid/10 px-4 py-2 text-sm font-black text-acid">
            {evidenceScore}% evidence score
          </div>
        </div>

        {isAnalyzed ? (
          <div className="mt-6 grid gap-5">
            <div className="rounded-lg bg-fog p-5 text-ink">
              <p className="text-xs font-black uppercase text-black/48">Experience</p>
              <p className="mt-2 text-xl font-black">{extractedResume.experience}</p>
            </div>

            <div>
              <p className="mb-3 text-xs font-black uppercase text-white/42">Skills</p>
              <div className="flex flex-wrap gap-2">
                {extractedResume.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-white/78">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {resumeSignals.map((signal) => (
                <ProgressBar key={signal.label} label={signal.label} value={signal.score} compact />
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {extractedResume.highlights.map((highlight) => (
                <div key={highlight} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <CheckCircle2 className="size-5 text-acid" aria-hidden="true" />
                  <p className="mt-3 text-sm leading-6 text-white/60">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
