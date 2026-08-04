"use client";

import { LegalSection } from "@/components/legal/LegalSection";
import { useLanguage } from "@/contexts/LanguageContext";

const CONTACT_EMAIL = "remybatem@gmail.com";
const CONTACT_PHONE = "+49 152 08520081";
const CONTACT_PHONE_HREF = "+4915208520081";

export default function ImpressumPage() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 py-12 sm:py-16 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <article className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {t("impressum.heading")}
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">{t("impressum.intro")}</p>

          <LegalSection title={t("impressum.tmgHeading")}>
            <p>
              <strong>{t("impressum.nameLabel")}</strong>
              <br />
              {t("impressum.nameValue")}
            </p>
            <p>
              <strong>{t("impressum.addressLabel")}</strong>
              <br />
              {t("impressum.addressValue")}
            </p>
            <p>{t("impressum.tmgBody")}</p>
          </LegalSection>

          <LegalSection title={t("impressum.contactHeading")}>
            <p>
              <strong>{t("impressum.emailLabel")}</strong>
              <br />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-violet-600 hover:text-violet-700 underline underline-offset-2"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>
              <strong>{t("impressum.phoneLabel")}</strong>
              <br />
              <a
                href={`tel:${CONTACT_PHONE_HREF}`}
                className="text-violet-600 hover:text-violet-700 underline underline-offset-2"
              >
                {CONTACT_PHONE}
              </a>
            </p>
          </LegalSection>

          <LegalSection title={t("impressum.responsibleHeading")}>
            <p>{t("impressum.responsibleBody")}</p>
            <p>
              {t("impressum.nameValue")}
              <br />
              {t("impressum.addressValue")}
            </p>
          </LegalSection>

          <LegalSection title={t("impressum.liabilityContentHeading")}>
            <p>{t("impressum.liabilityContentBody")}</p>
          </LegalSection>

          <LegalSection title={t("impressum.externalLinksHeading")}>
            <p>{t("impressum.externalLinksBody")}</p>
          </LegalSection>

          <LegalSection title={t("impressum.copyrightHeading")}>
            <p>{t("impressum.copyrightBody")}</p>
          </LegalSection>

          <p className="mt-10 text-sm text-gray-500">{t("impressum.lastUpdated")}</p>
        </article>
      </div>
    </section>
  );
}
