"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { translate, type Locale } from "@/lib/translations";

const CONTACT_EMAIL = "remybatem@gmail.com";

const CV_LOCALES: Locale[] = ["en", "de"];

function cvTemplates() {
  return {
    subjects: new Set(CV_LOCALES.map((locale) => translate(locale, "contact.cvSubject"))),
    messages: new Set(CV_LOCALES.map((locale) => translate(locale, "contact.cvMessage"))),
  };
}

export default function Contact() {
  const { t, locale } = useLanguage();
  const searchParams = useSearchParams();
  const isCvRequest = searchParams.get("request") === "cv";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [notice, setNotice] = useState<"success" | "cvSuccess" | "error" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const skipTemplateSync = useRef(false);
  const hasScrolledToForm = useRef(false);
  const lastCvRequest = useRef<boolean | null>(null);

  useEffect(() => {
    const requestChanged =
      lastCvRequest.current !== null && lastCvRequest.current !== isCvRequest;
    lastCvRequest.current = isCvRequest;

    if (requestChanged) {
      setNotice(null);
    }

    if (!isCvRequest) {
      hasScrolledToForm.current = false;
    }

    if (skipTemplateSync.current && !requestChanged) {
      skipTemplateSync.current = false;
      return;
    }

    skipTemplateSync.current = false;

    const templates = cvTemplates();

    setFormData((current) => {
      const subjectIsTemplate =
        current.subject === "" || templates.subjects.has(current.subject);
      const messageIsTemplate =
        current.message === "" || templates.messages.has(current.message);

      if (!isCvRequest) {
        if (!subjectIsTemplate && !messageIsTemplate) return current;
        const subject = subjectIsTemplate ? "" : current.subject;
        const message = messageIsTemplate ? "" : current.message;
        if (subject === current.subject && message === current.message) return current;
        return { ...current, subject, message };
      }

      const subject = subjectIsTemplate ? t("contact.cvSubject") : current.subject;
      const message = messageIsTemplate ? t("contact.cvMessage") : current.message;
      if (subject === current.subject && message === current.message) return current;
      return { ...current, subject, message };
    });

    if (!isCvRequest || hasScrolledToForm.current) return;

    hasScrolledToForm.current = true;
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [isCvRequest, locale, t]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotice(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json().catch(() => null)) as
        | { success?: boolean; error?: string }
        | null;

      if (!response.ok || data?.success !== true) {
        throw new Error(data?.error ?? "Failed to send message");
      }

      skipTemplateSync.current = true;
      setNotice(isCvRequest ? "cvSuccess" : "success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setNotice("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">{t("contact.heading")}</h2>
          <div className="w-16 h-1 bg-violet-600 mx-auto mt-4"></div>

          <p className="mt-6 text-gray-700 max-w-3xl mx-auto text-lg">{t("contact.intro")}</p>
        </div>

        {/* MAP */}
        <div className="mb-12">
          <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200">
            <iframe
              title={t("contact.mapTitle")}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                t("contact.locationLines").replace(/\n/g, " ")
              )}&z=13&output=embed`}
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-xl">
                📍
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t("contact.locationHeading")}
                </h3>
                <p className="text-gray-700 mt-2 leading-7">
                  {t("contact.locationLines")
                    .split("\n")
                    .map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 ? <br /> : null}
                      </span>
                    ))}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-xl">
                ✉️
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t("contact.emailHeading")}
                </h3>
                <p className="text-gray-700 mt-2">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="hover:text-violet-600 transition"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-xl">
                📞
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t("contact.callHeading")}
                </h3>
                <p className="text-gray-700 mt-2">
                  <a href="tel:+4915208520081" className="hover:text-violet-600 transition">
                    +49 1520 8520081
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form id="contact-form" className="space-y-5 scroll-mt-28" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.placeholderName")}
                spellCheck={false}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-4
                outline-none bg-white text-gray-900 placeholder-gray-500
                focus:ring-2 focus:ring-violet-600 focus:border-violet-600 transition"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.placeholderEmail")}
                spellCheck={false}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-4
                outline-none bg-white text-gray-900 placeholder-gray-500
                focus:ring-2 focus:ring-violet-600 focus:border-violet-600 transition"
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={t("contact.placeholderSubject")}
              spellCheck={false}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-4
              outline-none bg-white text-gray-900 placeholder-gray-500
              focus:ring-2 focus:ring-violet-600 focus:border-violet-600 transition"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact.placeholderMessage")}
              rows={6}
              spellCheck={false}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-4
              outline-none bg-white text-gray-900 placeholder-gray-500
              focus:ring-2 focus:ring-violet-600 focus:border-violet-600 transition resize-none"
            ></textarea>

            <div className="pt-4 flex justify-center md:justify-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-violet-600 to-purple-600
                hover:from-violet-700 hover:to-purple-700
                text-white font-semibold px-10 py-4 rounded-full transition shadow-md
                disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t("contact.sending") : t("contact.submit")}
              </button>
            </div>

            {notice === "success" || notice === "cvSuccess" ? (
              <p className="text-green-600 font-medium pt-2" role="status">
                {t(`contact.${notice}`)}
              </p>
            ) : null}

            {notice === "error" ? (
              <p className="text-red-600 font-medium pt-2" role="alert">
                {t("contact.error")}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
