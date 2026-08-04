import type { Metadata } from "next";
import About from "@/components/About";
import { translate } from "@/lib/translations";

export const metadata: Metadata = {
  title: translate("en", "meta.about.title"),
  description: translate("en", "meta.about.description"),
  alternates: {
    canonical: "https://remydev.de/about",
  },
};

export default function AboutPage() {
  return <About />;
}
