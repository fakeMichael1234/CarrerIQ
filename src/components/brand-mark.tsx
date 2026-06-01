import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="CareerIQ home">
      <span className="grid size-8 place-items-center rounded-full bg-acid text-ink shadow-glow">
        <BrainCircuit className="size-4" aria-hidden="true" />
      </span>
      <span className="text-sm font-black uppercase text-white">CareerIQ</span>
    </Link>
  );
}
