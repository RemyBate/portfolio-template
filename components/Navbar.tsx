"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
              Landing Page
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-violet-600 font-medium transition">
              About Me
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-violet-600 font-medium transition">
              Projects
            </Link>
            <Link href="/resume" className="text-gray-700 hover:text-violet-600 font-medium transition">
              Resume
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-violet-600 font-medium transition">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-lg font-semibold transition"
            >
              Hire Me
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
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
                Landing Page
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="text-gray-700 hover:text-violet-600 font-medium transition"
              >
                About Me
              </Link>

              <Link
                href="/projects"
                onClick={closeMenu}
                className="text-gray-700 hover:text-violet-600 font-medium transition"
              >
                Projects
              </Link>

              <Link
                href="/resume"
                onClick={closeMenu}
                className="text-gray-700 hover:text-violet-600 font-medium transition"
              >
                Resume
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-gray-700 hover:text-violet-600 font-medium transition"
              >
                Contact
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition"
              >
                Hire Me
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
