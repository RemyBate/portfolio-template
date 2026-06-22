"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function ResumePage() {
  const { t, locale } = useLanguage();

  const resumePdf =
    locale === "de"
      ? "/resume/Resume%20(German).pdf"
      : "/resume/Resume%20(English).pdf";

  return (
    <main className="pt-20 min-h-screen bg-[#f7f7f7]">
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("resumePage.heading")}
          </h1>
          <p className="mt-3 text-gray-600 leading-7">{t("resumePage.intro")}</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            {t("resumePage.open")}
          </a>

          <a
            href={resumePdf}
            download
            className="border border-violet-600 text-violet-600 hover:bg-violet-50 px-6 py-3 rounded-lg font-semibold transition"
          >
            {t("resumePage.download")}
          </a>
        </div>

        <div className="hidden md:block bg-white rounded-xl shadow border overflow-hidden">
          <iframe
            key={resumePdf}
            src={resumePdf}
            title={t("resumePage.iframeTitle")}
            className="w-full h-[1200px]"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
