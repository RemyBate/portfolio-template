export default function ResumePage() {
  return (
    <main className="pt-20 min-h-screen bg-[#f7f7f7]">
      <section className="max-w-5xl mx-auto px-6 py-12">
        {/* TITLE */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Resume
          </h1>
          <p className="mt-3 text-gray-600">
            View or download my full resume below.
          </p>
        </div>

        {/* BUTTONS (always visible) */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="/resume/remy-bate-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Open Resume
          </a>

          <a
            href="/resume/remy-bate-cv.pdf"
            download
            className="border border-violet-600 text-violet-600 hover:bg-violet-50 px-6 py-3 rounded-lg font-semibold transition"
          >
            Download PDF
          </a>
        </div>

        {/* DESKTOP PDF VIEW */}
        <div className="hidden md:block bg-white rounded-xl shadow border overflow-hidden">
          <iframe
            src="/resume/remy-bate-cv.pdf"
            className="w-full h-[1200px]"
          />
        </div>

        {/* MOBILE MESSAGE */}
        <div className="md:hidden text-gray-600 text-center mt-6">
          <p>
            For the best experience on mobile, please tap{" "}
            <span className="font-semibold">"Open Resume"</span> to view all pages.
          </p>
        </div>
      </section>
    </main>
  );
}