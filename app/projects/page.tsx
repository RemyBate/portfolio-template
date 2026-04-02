"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

type ProjectPageId = "dingado" | "skyrivers" | "portfolio" | "breedbabies";

const projects: Array<{
  id: ProjectPageId;
  image: string;
  link: string;
  tech: string[];
}> = [
  {
    id: "dingado",
    image: "/projects/dingado.png",
    link: "https://dingado.de/en",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: "skyrivers",
    image: "/projects/skyrivers.png",
    link: "https://skyrivers-limited.com",
    tech: ["WordPress", "Elementor"],
  },
  {
    id: "portfolio",
    image: "/projects/portfolio.png",
    link: "#",
    tech: ["Next.js", "Tailwind"],
  },
  {
    id: "breedbabies",
    image: "/projects/breedbabies.png",
    link: "https://breedbabiesdaily.com/index.php",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <main className="pt-20 bg-[#f7f7f7] min-h-screen">
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* TITLE */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900">
              {t("projectsPage.heading")}
            </h1>
            <p className="text-gray-600 mt-2">{t("projectsPage.subtitle")}</p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const title = t(`projectsPage.items.${project.id}.title`);
              const description = t(`projectsPage.items.${project.id}.description`);
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

                    <p className="text-gray-600 text-sm mt-2">{description}</p>

                    {/* TECH TAGS */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* BUTTON */}
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
    </main>
  );
}
