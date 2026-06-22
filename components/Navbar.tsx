"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const closeMenu = () => setMenuOpen(false);

  const LangToggle = ({ className = "" }: { className?: string }) => (
    <div
      className={`flex rounded-lg border border-gray-200 overflow-hidden shadow-sm ${className}`}
      role="group"
      aria-label={t("nav.langGroup")}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        title={t("nav.langTitleEn")}
        aria-pressed={locale === "en"}
        className={`flex-1 md:flex-initial px-2.5 py-2 min-w-[2.5rem] text-sm font-semibold transition ${
          locale === "en"
            ? "bg-violet-600 text-white"
            : "bg-white text-gray-700 hover:bg-gray-50"
        }`}
      >
        {t("nav.langEnglish")}
      </button>
      <button
        type="button"
        onClick={() => setLocale("de")}
        title={t("nav.langTitleDe")}
        aria-pressed={locale === "de"}
        className={`flex-1 md:flex-initial px-2.5 py-2 min-w-[2.5rem] text-sm font-semibold transition border-l border-gray-200 ${
          locale === "de"
            ? "bg-violet-600 text-white"
            : "bg-white text-gray-700 hover:bg-gray-50"
        }`}
      >
        {t("nav.langGerman")}
      </button>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-black"
            onClick={closeMenu}
          >
            Remy<span className="text-violet-600">Dev</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-violet-600 font-medium transition">
              {t("nav.landing")}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-violet-600 font-medium transition">
              {t("nav.about")}
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-violet-600 font-medium transition">
              {t("nav.projects")}
            </Link>
            <Link href="/resume" className="text-gray-700 hover:text-violet-600 font-medium transition">
              {t("nav.resume")}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-violet-600 font-medium transition">
              {t("nav.contact")}
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-lg font-semibold transition"
              >
                {t("nav.hireMe")}
              </Link>
              <LangToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={t("nav.toggleMenu")}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 rounded-lg border border-gray-300 bg-white shadow-sm"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-800 my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-3 bg-white rounded-xl border border-gray-200 shadow-md p-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-gray-700 hover:text-violet-600 font-medium transition"
              >
                {t("nav.landing")}
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="text-gray-700 hover:text-violet-600 font-medium transition"
              >
                {t("nav.about")}
              </Link>

              <Link
                href="/projects"
                onClick={closeMenu}
                className="text-gray-700 hover:text-violet-600 font-medium transition"
              >
                {t("nav.projects")}
              </Link>

              <Link
                href="/resume"
                onClick={closeMenu}
                className="text-gray-700 hover:text-violet-600 font-medium transition"
              >
                {t("nav.resume")}
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-gray-700 hover:text-violet-600 font-medium transition"
              >
                {t("nav.contact")}
              </Link>

              <div className="mt-2 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition"
                >
                  {t("nav.hireMe")}
                </Link>
                <LangToggle className="w-full" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
