import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-acid/35 bg-acid/10 px-3 py-1 text-xs font-black uppercase text-acid">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-black text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-pretty text-sm leading-6 text-white/62 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
