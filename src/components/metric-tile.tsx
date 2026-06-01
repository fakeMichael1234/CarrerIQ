import { cn } from "@/lib/utils";

type MetricTileProps = {
  label: string;
  value: string;
  unit?: string;
  tone?: "acid" | "signal" | "ember" | "rose";
  dark?: boolean;
};

const toneClasses = {
  acid: "text-acid",
  signal: "text-signal",
  ember: "text-ember",
  rose: "text-rose",
};

export function MetricTile({ label, value, unit, tone = "acid", dark = true }: MetricTileProps) {
  return (
    <div
      className={cn(
        "rounded-lg border p-4",
        dark ? "border-white/10 bg-white/[0.04]" : "border-black/10 bg-black/[0.04]"
      )}
    >
      <div className={cn("text-3xl font-black", toneClasses[tone])}>
        {value}
        {unit ? <span className="text-base text-current/70">{unit}</span> : null}
      </div>
      <div className={cn("mt-1 text-xs font-semibold uppercase", dark ? "text-white/45" : "text-black/55")}>
        {label}
      </div>
    </div>
  );
}
