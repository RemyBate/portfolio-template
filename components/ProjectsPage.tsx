"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

type ProjectPageId =
  | "nexorare"
  | "ecoplate"
  | "dingado"
  | "skyrivers"
  | "portfolio"
  | "spendwise";

const projects: Array<{
  id: ProjectPageId;
  image: string;
  link: string;
  tech: string[];
}> = [
  {
    id: "nexorare",
    image: "/projects/nexorare.webp",
    link: "https://nexorare.vercel.app",
    tech: ["Astro", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "ecoplate",
    image: "/projects/ecoplate.webp",
    link: "https://eco-plate-rho.vercel.app",
    tech: ["Astro", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "dingado",
    image: "/projects/dingado.png",
    link: "https://dingado.de/en",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: "skyrivers",
    image: "/projects/skyrivers.png",
    link: "https://skyriverslimited.com/",
    tech: ["WordPress", "Elementor"],
  },
  {
    id: "portfolio",
    image: "/projects/portfolio.png",
    link: "#",
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "spendwise",
    image: "/projects/spendwise.png",
    link: "https://spend-wise-omega-three.vercel.app/",
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
];

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900">
              {t("projectsPage.heading")}
            </h1>
            <p className="text-gray-600 mt-2">{t("projectsPage.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const title = t(`projectsPage.items.${project.id}.title`);
              const description = t(`projectsPage.items.${project.id}.description`);
              const imageAlt = t(`projectsPage.items.${project.id}.imageAlt`);
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                    <p className="text-gray-600 text-sm mt-2">{description}</p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-5 bg-gradient-to-r from-violet-600 to-purple-600 
                      text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition"
                    >
                      {t("projectsPage.viewProject")}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
