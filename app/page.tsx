import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      {/* DESKTOP BACKGROUND IMAGE */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/remy-hero.png"
          alt="Remy Bate Mbu"
          fill
          priority
          className="object-contain object-right"
        />
      </div>

      {/* FULL-WIDTH SECTION */}
      <section className="relative z-10 w-full py-10 md:py-40">
        {/* INNER CONTENT WRAPPER */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-6xl font-bold text-black leading-tight md:whitespace-nowrap">
              Welcome to my Portfolio!
            </h1>

            <div className="mt-6">
              <p className="font-semibold text-xl md:text-2xl text-black">
                Remy Bate Mbu
              </p>

              <p className="mt-3 font-semibold text-lg md:text-xl bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                Web Application Developer
              </p>

              <div className="mt-5 space-y-4 text-black text-lg md:text-xl font-medium leading-relaxed">
                <p>
                  I build modern, responsive and user-friendly web applications
                  for businesses and individuals.
                </p>

                <p>
                  Specialized in Next.js, React, TypeScript, Prisma and Tailwind CSS.
                </p>

                <p>Based in Germany</p>
              </div>
            </div>

            <div className="flex gap-4 pt-8 flex-wrap">
              <Link
                href="/projects"
                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg transition"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* MOBILE IMAGE */}
          <div className="mt-8 flex justify-center md:hidden">
            <Image
              src="/remy-hero.png"
              alt="Remy Bate Mbu"
              width={350}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}