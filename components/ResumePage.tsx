"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const LINKEDIN_URL = "https://www.linkedin.com/in/mbu-remy-bate-38642b75";
const CV_REQUEST_HREF = "/contact?request=cv#contact-form";
const CONTACT_EMAIL = "remybatem@gmail.com";
const CONTACT_PHONE = "+49 152 08520081";
const CONTACT_PHONE_HREF = "+4915208520081";

const SKILL_GROUPS = ["languages", "web", "data", "commerce", "games", "tools"] as const;

const buttonClass =
  "inline-flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition text-center";

const outlineButtonClass =
  "inline-flex items-center justify-center border border-violet-600 text-violet-700 hover:bg-violet-50 px-6 py-3 rounded-lg font-semibold transition text-center";

export default function ResumePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {t("resumePage.heading")}
        </h1>

        <article className="mt-8 bg-white rounded-xl shadow border border-gray-200 p-6 sm:p-8">
          <p className="text-2xl md:text-3xl font-semibold text-gray-900">Remy Bate Mbu</p>
          <h2 className="mt-2 text-xl md:text-2xl font-medium text-violet-700">
            {t("resumePage.title")}
          </h2>
          <p className="mt-4 text-gray-800">{t("resumePage.location")}</p>
          <p className="mt-3 text-gray-800 leading-7">
            <span className="font-bold">{t("footer.phoneLabel")}</span>{" "}
            <a
              href={`tel:${CONTACT_PHONE_HREF}`}
              className="text-violet-700 hover:text-violet-800 underline underline-offset-2"
            >
              {CONTACT_PHONE}
            </a>
          </p>
          <p className="mt-1 text-gray-800 leading-7">
            <span className="font-bold">{t("footer.emailLabel")}</span>{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-violet-700 hover:text-violet-800 underline underline-offset-2 break-all"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <Link href={CV_REQUEST_HREF} className={`${buttonClass} mt-6`}>
            {t("resumePage.requestCv")}
          </Link>

          <h2 className="mt-10 text-2xl font-semibold text-gray-900">
            {t("resumePage.profileHeading")}
          </h2>
          <div className="mt-4 max-w-[54ch] space-y-4 text-left text-gray-700 leading-8">
            <p>{t("resumePage.profileLead")}</p>
            <p>{t("resumePage.profileProjects")}</p>
            <p>{t("resumePage.profileApproach")}</p>
          </div>

          <h2 className="mt-10 text-2xl font-semibold text-gray-900">
            {t("resumePage.skillsHeading")}
          </h2>
          <dl className="mt-4 grid gap-5 sm:grid-cols-2">
            {SKILL_GROUPS.map((group) => (
              <div key={group}>
                <dt className="font-semibold text-gray-900">
                  {t(`resumePage.skills.${group}.label`)}
                </dt>
                <dd className="mt-1 text-gray-700 leading-7">
                  {t(`resumePage.skills.${group}.value`)}
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-10 text-2xl font-semibold text-gray-900">
            {t("resumePage.togetherHeading")}
          </h2>
          <p className="mt-4 text-gray-700 leading-8">{t("resumePage.togetherBody")}</p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/projects" className={buttonClass}>
              {t("resumePage.viewProjects")}
            </Link>
            <Link href={CV_REQUEST_HREF} className={buttonClass}>
              {t("resumePage.requestCv")}
            </Link>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={outlineButtonClass}
            >
              {t("resumePage.linkedin")}
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
