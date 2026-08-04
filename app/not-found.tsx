import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | RemyDev",
  description: "The requested page could not be found on remydev.de.",
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-[#f7f7f7] px-6 py-20">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold text-violet-600 tracking-wide uppercase">
          404
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          Page not found
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="border border-violet-600 text-violet-600 hover:bg-violet-50 px-6 py-3 rounded-lg font-semibold transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
