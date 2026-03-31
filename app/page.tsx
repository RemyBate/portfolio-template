import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f5f5]">
      {/* Full background image */}
      <div className="absolute inset-0">
        <Image
          src="/remy-hero.png"
          alt="Remy Bate Mbu"
          fill
          priority
          className="object-contain object-right"
        />
      </div>

      {/* Content on top of image */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 min-h-screen flex items-center">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Welcome to my Portfolio!
          </h1>

          <div className="space-y-3 text-gray-900 text-base md:text-lg">
            <p className="font-medium">Remy Bate Mbu</p>
            <p>Web Application Developer</p>
            <p>
              I build modern, responsive and user-friendly web applications
              for businesses and individuals.
            </p>
            <p>
              Specialized in Next.js, React, TypeScript, Prisma and Tailwind
              CSS.
            </p>
            <p>Based in Germany</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/projects"
              className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 py-3 rounded-lg transition"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 py-3 rounded-lg transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}