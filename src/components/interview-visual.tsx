import { BrainCircuit, Clock3, Gauge, MessageSquareText, Mic, Video } from "lucide-react";

const nodes = [
  { label: "Accuracy", value: "86", icon: Gauge, className: "left-4 top-8" },
  { label: "Timer", value: "01:14", icon: Clock3, className: "right-5 top-14" },
  { label: "Follow-up", value: "Live", icon: MessageSquareText, className: "left-7 bottom-10" },
];

export function InterviewVisual() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-black p-4 shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_22%,rgba(146,242,59,0.24),transparent_25rem),radial-gradient(circle_at_82%_85%,rgba(41,211,196,0.18),transparent_20rem)]" />
      <div className="absolute left-1/2 top-11 h-56 w-56 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.03]" />
      <div className="scanline absolute inset-x-12 top-20 h-72 rounded-[2rem] border border-white/10 bg-white/[0.04]" />
      <div className="relative z-10 mx-auto mt-10 flex h-72 max-w-[22rem] flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-fog text-ink">
        <div className="relative grid size-36 place-items-center rounded-full bg-black/5">
          <div className="absolute inset-4 rounded-full border-2 border-dashed border-acid/80" />
          <div className="grid size-24 place-items-center rounded-full bg-ink text-acid shadow-glow">
            <BrainCircuit className="size-12" aria-hidden="true" />
          </div>
        </div>
        <p className="mt-5 text-xs font-black uppercase text-black/52">Adaptive interviewer</p>
        <h3 className="mt-1 text-center text-2xl font-black leading-tight">System Design Round</h3>
        <div className="mt-5 flex items-center gap-2">
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-acid text-ink">
            <Mic className="size-4" aria-hidden="true" />
          </span>
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-black text-white">
            <Video className="size-4" aria-hidden="true" />
          </span>
        </div>
      </div>
      {nodes.map((node) => {
        const Icon = node.icon;

        return (
          <div
            key={node.label}
            className={`absolute z-20 rounded-2xl border border-white/10 bg-black/75 p-3 text-white backdrop-blur ${node.className}`}
          >
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-full bg-acid text-ink">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-black">{node.value}</p>
                <p className="text-[0.65rem] uppercase text-white/45">{node.label}</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="absolute bottom-5 right-5 z-20 rounded-full border border-white/10 bg-white px-4 py-2 text-xs font-black text-ink">
        difficulty: medium
      </div>
    </div>
  );
}
