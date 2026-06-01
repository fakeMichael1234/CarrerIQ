import { AppNav } from "@/components/app-nav";
import { cn } from "@/lib/utils";

type PageFrameProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageFrame({ children, className }: PageFrameProps) {
  return (
    <main className={cn("relative z-10 min-h-screen pb-16", className)}>
      <AppNav />
      {children}
    </main>
  );
}
