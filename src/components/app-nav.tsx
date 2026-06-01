import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { navItems } from "@/lib/mock-data";

export function AppNav() {
  return (
    <header className="sticky top-4 z-30 mx-auto w-full max-w-6xl px-4">
      <nav className="flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/10 bg-black/82 px-3 py-2 shadow-soft backdrop-blur-xl">
        <BrandMark />
        <div className="hidden items-center gap-1 rounded-full bg-white/5 px-1 py-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-xs font-semibold text-white/68 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard"
            className="grid size-9 place-items-center rounded-full border border-white/10 text-white/80 transition hover:border-acid/70 hover:text-acid"
            aria-label="Open dashboard"
            title="Open dashboard"
          >
            <LogIn className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/interview"
            className="inline-flex items-center gap-2 rounded-full bg-acid px-4 py-2 text-xs font-black uppercase text-ink transition hover:bg-mint"
          >
            Start
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
