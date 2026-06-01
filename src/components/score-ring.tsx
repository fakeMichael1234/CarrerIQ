import { scoreTone } from "@/lib/utils";

type ScoreRingProps = {
  score: number;
  label?: string;
};

export function ScoreRing({ score, label = "Readiness" }: ScoreRingProps) {
  const tone = scoreTone(score);

  return (
    <div className="relative grid aspect-square min-h-44 place-items-center rounded-full border border-white/10 bg-black shadow-glow">
      <div
        className="absolute inset-3 rounded-full"
        style={{
          background: `conic-gradient(#92f23b ${score * 3.6}deg, rgba(255,255,255,0.1) 0deg)`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-8 rounded-full bg-ink" aria-hidden="true" />
      <div className="relative text-center">
        <p className="text-5xl font-black text-white">{score}</p>
        <p className="mt-1 text-xs font-black uppercase text-acid">{tone}</p>
        <p className="mt-2 text-xs text-white/48">{label}</p>
      </div>
    </div>
  );
}
