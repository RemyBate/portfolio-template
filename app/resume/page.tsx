export default function ResumePage() {
  return (
    <main className="pt-20 min-h-screen bg-[#f7f7f7]">
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Resume
          </h1>
          <p className="mt-3 text-gray-600 leading-7">
            Here you can view or download my resume. It includes my education,
            technical skills, projects, and professional background.
          </p>
        </div>

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

        <div className="hidden md:block bg-white rounded-xl shadow border overflow-hidden">
          <iframe
            src="/resume/remy-bate-cv.pdf"
            title="Remy Bate Resume"
            className="w-full h-[1200px]"
          ></iframe>
        </div>
      </section>
    </main>
  );
}