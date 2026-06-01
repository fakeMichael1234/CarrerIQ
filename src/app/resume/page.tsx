import { PageFrame } from "@/components/page-frame";
import { ResumeUploadExperience } from "@/components/resume-upload-experience";

export default function ResumePage() {
  return (
    <PageFrame>
      <section className="mx-auto w-full max-w-6xl px-4 pt-10">
        <ResumeUploadExperience />
      </section>
    </PageFrame>
  );
}
