import type { Metadata } from "next";
import DatenschutzPage from "@/components/DatenschutzPage";
import { translate } from "@/lib/translations";

export const metadata: Metadata = {
  title: translate("en", "meta.datenschutz.title"),
  description: translate("en", "meta.datenschutz.description"),
  alternates: {
    canonical: "https://remydev.de/datenschutz",
  },
};

export default function DatenschutzRoute() {
  return <DatenschutzPage />;
}
