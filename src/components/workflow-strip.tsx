import { workflowSteps } from "@/lib/mock-data";

export function WorkflowStrip() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {workflowSteps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div key={step.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-acid text-ink">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="font-mono text-xs text-white/35">0{index + 1}</span>
            </div>
            <h3 className="mt-5 text-lg font-black text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/56">{step.description}</p>
          </div>
        );
      })}
    </div>
  );
}
