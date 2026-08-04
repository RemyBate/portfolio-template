import type { Metadata } from "next";
import ProjectsPage from "@/components/ProjectsPage";
import { translate } from "@/lib/translations";

export const metadata: Metadata = {
  title: translate("en", "meta.projects.title"),
  description: translate("en", "meta.projects.description"),
  alternates: {
    canonical: "https://remydev.de/projects",
  },
};

export default function ProjectsRoute() {
  return <ProjectsPage />;
}
