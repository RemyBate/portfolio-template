"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function ResumePage() {
  const { t } = useLanguage();

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
            href="/resume/remy-bate-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            {t("resumePage.open")}
          </a>

          <a
            href="/resume/remy-bate-cv.pdf"
            download
            className="border border-violet-600 text-violet-600 hover:bg-violet-50 px-6 py-3 rounded-lg font-semibold transition"
          >
            {t("resumePage.download")}
          </a>
        </div>

        <div className="hidden md:block bg-white rounded-xl shadow border overflow-hidden">
          <iframe
            src="/resume/remy-bate-cv.pdf"
            title={t("resumePage.iframeTitle")}
            className="w-full h-[1200px]"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
