import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <div className="grid gap-10 sm:grid-cols-2 items-center">
        
        {/* Profile Picture on the Left */}
        <div className="justify-self-center">
          <Image
            src="/avatar.jpg"
            alt="Remy"
            width={192}
            height={192}
            className="rounded-2xl object-cover shadow"
          />
        </div>

        {/* Text on the Right */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-indigo-600">Remy</span> — I build fast,
            modern web apps.
          </h1>
          <p className="mt-4 text-gray-600">
            Full-stack developer focused on Next.js, Prisma and Tailwind. Need a clean
            landing page or a starter app? I deliver in days, not weeks.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-indigo-600 text-white px-5 py-3"
            >
              Hire me
            </a>
            <a
              href="#projects"
              className="rounded-lg border px-5 py-3"
            >
              See projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
