import { LiveInterview } from "@/components/live-interview";
import { PageFrame } from "@/components/page-frame";

export default function InterviewPage() {
  return (
    <PageFrame>
      <section className="mx-auto w-full max-w-6xl px-4 pt-10">
        <LiveInterview />
      </section>
    </PageFrame>
  );
}
