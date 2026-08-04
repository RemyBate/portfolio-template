"use client";

import { LegalSection } from "@/components/legal/LegalSection";
import { useLanguage } from "@/contexts/LanguageContext";

const CONTACT_EMAIL = "remybatem@gmail.com";

export default function DatenschutzPage() {
  const { t } = useLanguage();

  const rights = [
    t("datenschutz.rights.items.access"),
    t("datenschutz.rights.items.rectification"),
    t("datenschutz.rights.items.erasure"),
    t("datenschutz.rights.items.restriction"),
    t("datenschutz.rights.items.portability"),
    t("datenschutz.rights.items.objection"),
    t("datenschutz.rights.items.complaint"),
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <article className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-10">
          <h1 className="mt-0 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {t("datenschutz.heading")}
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">{t("datenschutz.intro")}</p>

          <LegalSection title={t("datenschutz.controllerHeading")}>
            <p>{t("datenschutz.controllerBody")}</p>
            <p>
              <strong>{t("datenschutz.nameLabel")}</strong>
              <br />
              {t("datenschutz.nameValue")}
              <br />
              {t("datenschutz.addressValue")}
              <br />
              {t("datenschutz.emailLabel")}{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-violet-600 hover:text-violet-700 underline underline-offset-2"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </LegalSection>

          <LegalSection title={t("datenschutz.hostingHeading")}>
            <p>{t("datenschutz.hostingBody")}</p>
          </LegalSection>

          <LegalSection title={t("datenschutz.serverLogsHeading")}>
            <p>{t("datenschutz.serverLogsBody")}</p>
          </LegalSection>

          <LegalSection title={t("datenschutz.localStorageHeading")}>
            <p>{t("datenschutz.localStorageBody")}</p>
          </LegalSection>

          <LegalSection title={t("datenschutz.contactFormHeading")}>
            <p>{t("datenschutz.contactFormBody")}</p>
          </LegalSection>

          <LegalSection title={t("datenschutz.emailContactHeading")}>
            <p>{t("datenschutz.emailContactBody")}</p>
          </LegalSection>

          <LegalSection title={t("datenschutz.externalLinksHeading")}>
            <p>{t("datenschutz.externalLinksBody")}</p>
          </LegalSection>

          <LegalSection title={t("datenschutz.googleMapsHeading")}>
            <p>{t("datenschutz.googleMapsBody")}</p>
          </LegalSection>

          <LegalSection title={t("datenschutz.rights.heading")}>
            <p>{t("datenschutz.rights.intro")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {rights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3">{t("datenschutz.rights.outro")}</p>
          </LegalSection>

          <LegalSection title={t("datenschutz.retentionHeading")}>
            <p>{t("datenschutz.retentionBody")}</p>
          </LegalSection>

          <LegalSection title={t("datenschutz.updatesHeading")}>
            <p>{t("datenschutz.updatesBody")}</p>
          </LegalSection>

          <p className="mt-10 text-sm text-gray-500">{t("datenschutz.lastUpdated")}</p>
        </article>
      </div>
    </section>
  );
}
