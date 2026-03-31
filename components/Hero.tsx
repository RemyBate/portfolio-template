import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="landing"
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* RIGHT IMAGE (NO OVERLAY = FULL BRIGHTNESS) */}
      <div className="absolute top-0 right-0 h-full w-full md:w-[60%]">
        <Image
          src="/remy-hero.jpg"
          alt="Remy"
          fill
          priority
          className="object-cover object-center brightness-105 contrast-105"
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 md:px-2 flex items-center">
        <div className="w-full md:w-[55%] lg:w-[50%]">
          
          <h1 className="text-4xl md:text-4xl font-bold leading-tight text-black-900 mb-8">
            Welcome to my Portfolio!
          </h1>

          <div className="space-y-4 text-black-700 text-lg md:text-xl">
            <p className="font-medium">Remy Bate Mbu</p>

            <p className="font-semibold text-black-900">
              Web Application Developer
            </p>

            <p>
              I build modern, responsive and user-friendly web 
            </p>

             <p>
              applications for businesses and individuals.
            </p>

            <p>
              Specialized in Next.js, React, TypeScript, Prisma and Tailwind CSS.
            </p>

            <p>Based in Germany</p>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Contact Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
