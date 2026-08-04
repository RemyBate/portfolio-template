import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { translate } from "@/lib/translations";

export const metadata: Metadata = {
  title: translate("en", "meta.home.title"),
  description: translate("en", "meta.home.description"),
  alternates: {
    canonical: "https://remydev.de",
  },
};

export default function HomeRoute() {
  return <HomePage />;
}
