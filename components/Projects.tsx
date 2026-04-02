"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

type ProjectId =
  | "restaurant"
  | "portfolio"
  | "ecommerce"
  | "booking"
  | "blog"
  | "whatsapp";

type Project = {
  id: ProjectId;
  image: string;
  link: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: "restaurant",
    image: "/restaurant.jpg",
    link: "#",
    tags: ["Next.js", "Tailwind"],
  },
  {
    id: "portfolio",
    image: "/portfolio.jpg",
    link: "#",
    tags: ["Next.js", "Tailwind"],
  },
  {
    id: "ecommerce",
    image: "/ecommerce.jpg",
    link: "#",
    tags: ["Next.js", "TypeScript"],
  },
  {
    id: "booking",
    image: "/booking.jpg",
    link: "#",
    tags: ["Next.js", "Forms"],
  },
  {
    id: "blog",
    image: "/blog.jpg",
    link: "#",
    tags: ["Next.js", "MDX"],
  },
  {
    id: "whatsapp",
    image: "/whatsapp.jpg",
    link: "#",
    tags: ["Next.js", "No-backend"],
  },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">{t("projectsLanding.heading")}</h2>
        <p className="text-black-600 mb-8">{t("projectsLanding.subtitle")}</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const title = t(`projectsLanding.items.${p.id}.title`);
            const description = t(`projectsLanding.items.${p.id}.description`);
            return (
              <a
                key={p.id}
                href={p.link}
                className="group border rounded-xl bg-white overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={p.image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform"
                    priority={false}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-black-600 text-sm mt-1">{description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs rounded-full bg-gray-100 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
