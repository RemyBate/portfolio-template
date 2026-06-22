import { useState } from "react";
import { useLocale } from "@/lib/localeStore";

const CONTACT_EMAIL = "remybatem@gmail.com";

export default function Contact() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setSuccessMessage("");
    setErrorMessage("");
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

      setSuccessMessage(t("contact.success"));
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setErrorMessage(t("contact.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">{t("contact.heading")}</h1>
          <div className="w-16 h-1 bg-violet-600 mx-auto mt-4"></div>
          <p className="mt-6 text-gray-700 max-w-3xl mx-auto text-lg">{t("contact.intro")}</p>
        </div>

        <div className="mb-12">
          <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200">
            <iframe
              title={t("contact.mapTitle")}
              src="https://www.google.com/maps?q=M%C3%BClheim%20an%20der%20Ruhr,%20Germany&z=13&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
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
                <p className="text-gray-700 mt-2">+49 1520 8520081</p>
              </div>
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
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

            {successMessage && (
              <p className="text-green-600 font-medium pt-2">{successMessage}</p>
            )}

            {errorMessage && (
              <p className="text-red-600 font-medium pt-2">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
