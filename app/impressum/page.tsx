import type { Metadata } from "next";
import ImpressumPage from "@/components/ImpressumPage";
import { translate } from "@/lib/translations";

export const metadata: Metadata = {
  title: translate("en", "meta.impressum.title"),
  description: translate("en", "meta.impressum.description"),
  alternates: {
    canonical: "https://remydev.de/impressum",
  },
};

export default function ImpressumRoute() {
  return <ImpressumPage />;
}
