import type { Metadata } from "next";
import ResumePage from "@/components/ResumePage";
import { translate } from "@/lib/translations";

export const metadata: Metadata = {
  title: translate("en", "meta.resume.title"),
  description: translate("en", "meta.resume.description"),
  alternates: {
    canonical: "https://remydev.de/resume",
  },
};

export default function ResumeRoute() {
  return <ResumePage />;
}
