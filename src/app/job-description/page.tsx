import { JDMatchExperience } from "@/components/jd-match-experience";
import { PageFrame } from "@/components/page-frame";

export default function JobDescriptionPage() {
  return (
    <PageFrame>
      <section className="mx-auto w-full max-w-6xl px-4 pt-10">
        <JDMatchExperience />
      </section>
    </PageFrame>
  );
}
