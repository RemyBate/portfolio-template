"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold">
              Remy<span className="text-violet-400">Dev</span>
            </h3>
            <p className="mt-3 text-gray-300 leading-7">{t("footer.tagline")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/" className="hover:text-violet-400 transition">
                  {t("nav.landing")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-violet-400 transition">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-violet-400 transition">
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-violet-400 transition">
                  {t("nav.resume")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-violet-400 transition">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.connect")}</h4>
            <div className="space-y-3 text-gray-300">
              <p>
                {t("footer.emailLabel")}{" "}
                <a
                  href="mailto:remybate@gmail.com"
                  className="hover:text-violet-400 transition"
                >
                  remybate@gmail.com
                </a>
              </p>
              <p>
                {t("footer.phoneLabel")}{" "}
                <a
                  href="tel:+4915208520081"
                  className="hover:text-violet-400 transition"
                >
                  +49 152 08520081
                </a>
              </p>
              <p>
                {t("footer.githubLabel")}{" "}
                <a
                  href="https://github.com/RemyBate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400 transition"
                >
                  github.com/RemyBate
                </a>
              </p>
              <p>
                {t("footer.linkedinLabel")}{" "}
                <a
                  href="https://www.linkedin.com/in/mbu-remy-bate-38642b75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400 transition"
                >
                  linkedin.com/in/mbu-remy-bate-38642b75
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Remy Bate Mbu. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
