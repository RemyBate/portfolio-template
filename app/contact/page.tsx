import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { translate } from "@/lib/translations";

export const metadata: Metadata = {
  title: translate("en", "meta.contact.title"),
  description: translate("en", "meta.contact.description"),
  alternates: {
    canonical: "https://remydev.de/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
