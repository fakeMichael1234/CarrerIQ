import { cn } from "@/lib/utils";

type ProgressBarProps = {
  label: string;
  value: number;
  color?: string;
  compact?: boolean;
};

export function ProgressBar({ label, value, color = "bg-acid", compact = false }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="font-bold text-white/78">{label}</span>
        <span className="font-mono text-white/52">{value}%</span>
      </div>
      <div className={cn("overflow-hidden rounded-full bg-white/10", compact ? "h-2" : "h-3")}>
        <div className={cn("h-full rounded-full", color)} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
