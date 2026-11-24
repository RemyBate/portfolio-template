import type { Metadata } from "next";
import { Suspense } from "react";
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
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f7f7f7]" />}>
      <Contact />
    </Suspense>
  );
}
