import Image from "next/image";
import Link from "next/link";
import { FaReact, FaNodeJs, FaPhp, FaHtml5, FaJs, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPrisma, SiTailwindcss, SiMysql } from "react-icons/si";

export const metadata = {
  title: "About – Remy",
  description: "About Remy Mbu – Full-stack developer (Next.js, Prisma, Tailwind).",
};

export default function AboutPage() {
  const skills = [
    "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "PHP",
    "Prisma", "Tailwind CSS", "React", "Node.js", "MySQL", "REST/JSON",
  ];

  const highlights = [
    { label: "Projects delivered", value: "12+" },
    { label: "Years coding", value: "3+" },
    { label: "Response time", value: "< 24h" },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      {/* Top header */}
      <div className="grid gap-10 sm:grid-cols-[220px,1fr] items-start">
        <div className="justify-self-center sm:justify-self-start">
          <Image
            src="/avatar.jpg"
            alt="Remy"
            width={200}
            height={200}
            className="rounded-2xl object-cover shadow"
            priority
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I’m <strong>Remy Mbu</strong>, a full-stack developer focused on
            building fast, reliable web apps with <strong>Next.js</strong>,
            <strong> Prisma</strong>, and <strong>Tailwind CSS</strong>.
            I love clean UIs, simple deployments, and delivering small business
            features quickly—landing pages, dashboards, and starter apps.
          </p>

          <div className="mt-6 flex gap-3">
            <Link href="#skills" className="rounded-lg border px-4 py-2">Skills</Link>
            <Link href="/#projects" className="rounded-lg bg-indigo-600 text-white px-4 py-2">
              See my projects
            </Link>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        {highlights.map((h) => (
          <div key={h.label} className="border rounded-xl p-5 bg-white">
            <div className="text-2xl font-semibold">{h.value}</div>
            <div className="text-gray-600 text-sm">{h.label}</div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section id="skills" className="mt-16">
        <h2 className="text-2xl font-bold">Skills</h2>
        <p className="text-gray-600 mt-2">Technologies I use frequently.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="text-sm rounded-full border px-3 py-1 bg-gray-50">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Tech Stack (icons) */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <p className="text-gray-600 mt-2">Tools and technologies I work with daily.</p>

        <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-6 text-4xl text-gray-700">
          <div className="flex flex-col items-center gap-2">
            <SiNextdotjs /> <span className="text-sm">Next.js</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiTypescript className="text-blue-600" /> <span className="text-sm">TypeScript</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaJs className="text-yellow-400" /> <span className="text-sm">JavaScript</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaHtml5 className="text-orange-500" /> <span className="text-sm">HTML</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaCss3Alt className="text-blue-500" /> <span className="text-sm">CSS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaPhp className="text-indigo-600" /> <span className="text-sm">PHP</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaReact className="text-cyan-500" /> <span className="text-sm">React</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaNodeJs className="text-green-600" /> <span className="text-sm">Node.js</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiPrisma className="text-gray-600" /> <span className="text-sm">Prisma</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiTailwindcss className="text-sky-400" /> <span className="text-sm">Tailwind</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiMysql className="text-blue-800" /> <span className="text-sm">MySQL</span>
          </div>
        </div>
      </section>

      {/* Experience / Timeline */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-6 space-y-6">
          <div className="border-l-2 pl-4">
            <div className="font-semibold">Freelance Web Developer</div>
            <div className="text-gray-600 text-sm">2023 – present</div>
            <p className="text-gray-700 mt-2">
              Built landing pages and small apps for local businesses. Focus on
              authentication, dashboards, and simple CRUD flows.
            </p>
          </div>
          <div className="border-l-2 pl-4">
            <div className="font-semibold">Personal Projects</div>
            <div className="text-gray-600 text-sm">Ongoing</div>
            <p className="text-gray-700 mt-2">
              Restaurant Website Template, Portfolio Template, and E-Commerce Starter —
              practical templates that help clients and developers launch quickly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 border rounded-2xl p-6 bg-indigo-50">
        <h3 className="text-xl font-semibold">Let’s work together</h3>
        <p className="text-gray-700 mt-2">
          Need a fast landing page, a small app, or fixes on an existing site?
          I deliver in days, not weeks.
        </p>
        <div className="mt-4">
          <Link href="/#contact" className="rounded-lg bg-indigo-600 text-white px-5 py-3">
            Contact me
          </Link>
        </div>
      </section>
    </main>
  );
}
