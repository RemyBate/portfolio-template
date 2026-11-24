"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TechnicalSkills from "@/components/TechnicalSkills";
import { useLanguage } from "@/contexts/LanguageContext";
import { ageInYears } from "@/lib/age";

export default function About() {
  const { t } = useLanguage();
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    setAge(ageInYears(new Date()));
  }, []);

  return (
    <section id="about" className="bg-[#f3f3f3] py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">{t("about.heading")}</h1>
          <div className="w-14 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </div>

        <div className="text-center mx-auto mb-10 text-black-700">
          <p className="text-2xl md:text-3xl mb-4">{t("about.introLead")}</p>
          <p className="text-[18px] md:text-[19px] leading-8 md:leading-9">
            {t("about.introBody")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div className="flex justify-center md:justify-start">
            <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-[520px]">
              <Image
                src="/remy.jpg"
                alt={t("about.photoAlt")}
                width={500}
                height={400}
                className="object-contain rounded-lg brightness-120 contrast-120 w-full h-auto"
              />
            </div>
          </div>

          <div className="text-gray-800">
            <h2 className="text-4xl font-semibold mb-8">{t("about.roleTitle")}</h2>

            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-10 text-lg">
              <p>
                <span className="font-bold">{t("about.birthday")}</span> 12 July 1983
              </p>
              <p>
                <span className="font-bold">{t("about.age")}</span> {age}
              </p>
              <p>
                <span className="font-bold">{t("about.website")}</span> https://remydev.de
              </p>
              <p>
                <span className="font-bold">{t("about.degree")}</span>{" "}
                {t("about.degreeValue")}
              </p>
              <p>
                <span className="font-bold">{t("about.phone")}</span>{" "}
                <a href="tel:+4915208520081" className="hover:text-violet-600 transition">
                  +49 15208520081
                </a>
              </p>
              <p>
                <span className="font-bold">{t("about.email")}</span>{" "}
                <a
                  href="mailto:remybatem@gmail.com"
                  className="hover:text-violet-600 transition"
                >
                  remybatem@gmail.com
                </a>
              </p>
              <p className="sm:col-span-2">
                <span className="font-bold">{t("about.address")}</span>{" "}
                {t("about.addressValue")}
              </p>
              <p>
                <span className="font-bold">{t("about.freelance")}</span>{" "}
                {t("about.freelanceValue")}
              </p>
            </div>

            <p className="mt-10 text-xl leading-9 text-gray-700">{t("about.closing")}</p>
          </div>
        </div>

        <TechnicalSkills />
      </div>
    </section>
  );
}
