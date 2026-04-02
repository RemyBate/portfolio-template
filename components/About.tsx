"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-[#f3f3f3] py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">{t("about.heading")}</h2>
          <div className="w-14 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </div>

        {/* Top text */}
        <div className="text-center max-w-5xl mx-auto mb-10 text-black-700">
          <p className="text-2xl md:text-3xl mb-4">{t("about.introLead")}</p>

          <p className="text-lg leading-9">{t("about.introBody")}</p>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left image */}
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <Image
                src="/remy.jpg"
                alt="Remy"
                width={500}
                height={400}
                className="object-contain rounded-lg brightness-120 contrast-120"
              />
            </div>
          </div>

          {/* Right details */}
          <div className="text-gray-800">
            <h3 className="text-4xl font-semibold mb-8">{t("about.roleTitle")}</h3>

            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-10 text-lg">
              <p>
                <span className="font-bold">{t("about.birthday")}</span> 12 July 1983
              </p>
              <p>
                <span className="font-bold">{t("about.age")}</span> 42
              </p>

              <p>
                <span className="font-bold">{t("about.website")}</span> www.example.com
              </p>
              <p>
                <span className="font-bold">{t("about.degree")}</span>{" "}
                {t("about.degreeValue")}
              </p>

              <p>
                <span className="font-bold">{t("about.phone")}</span> +49 15208520081
              </p>
              <p>
                <span className="font-bold">{t("about.email")}</span> remybatem@gmail.com
              </p>

              <p>
                <span className="font-bold">{t("about.address")}</span> Eichenber 45, 45473,
                Mülheim an der Ruhr, Deutschland
              </p>
              <p>
                <span className="font-bold">{t("about.freelance")}</span>{" "}
                {t("about.freelanceValue")}
              </p>
            </div>

            <p className="mt-10 text-xl leading-9 text-gray-700">{t("about.closing")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
