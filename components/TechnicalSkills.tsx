"use client";

import type { IconType } from "react-icons";
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaServer,
  FaWordpress,
} from "react-icons/fa";
import {
  SiGodotengine,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWoocommerce,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useLanguage } from "@/contexts/LanguageContext";

type Skill = {
  name: string;
  Icon: IconType;
  color: string;
};

const skillCategories: Array<{
  id: "frontend" | "backend" | "cms" | "database" | "tools" | "gamedev";
  skills: Skill[];
}> = [
  {
    id: "frontend",
    skills: [
      { name: "Next.js", Icon: SiNextdotjs, color: "#111827" },
      { name: "React", Icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: FaCss3, color: "#1572B6" },
    ],
  },
  {
    id: "backend",
    skills: [
      { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
      { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
      { name: "PHP", Icon: FaPhp, color: "#777BB4" },
      { name: "REST APIs", Icon: FaServer, color: "#2563EB" },
    ],
  },
  {
    id: "cms",
    skills: [
      { name: "WordPress", Icon: FaWordpress, color: "#21759B" },
      { name: "WooCommerce", Icon: SiWoocommerce, color: "#96588A" },
    ],
  },
  {
    id: "database",
    skills: [{ name: "MySQL", Icon: SiMysql, color: "#00758F" }],
  },
  {
    id: "tools",
    skills: [
      { name: "Git", Icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", Icon: FaGithub, color: "#181717" },
      { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
      { name: "Vercel", Icon: SiVercel, color: "#000000" },
    ],
  },
  {
    id: "gamedev",
    skills: [{ name: "Godot Engine", Icon: SiGodotengine, color: "#478CBF" }],
  },
];

export default function TechnicalSkills() {
  const { t } = useLanguage();

  return (
    <div className="mt-16 pt-14 border-t border-gray-300">
      <div className="text-center mb-12 md:mb-14">
        <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-800 tracking-tight">
          {t("about.skillsHeading")}
        </h3>
        <div className="w-16 h-1.5 bg-violet-600 mx-auto mt-5"></div>
      </div>

      <div className="space-y-10 md:space-y-12 w-full">
        {skillCategories.map((category) => (
          <div key={category.id}>
            <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-5 pl-1">
              {t(`about.skillsCategories.${category.id}`)}
            </h4>

            <div className="flex flex-wrap gap-3 md:gap-4">
              {category.skills.map((skill) => {
                const SkillIcon = skill.Icon;
                return (
                  <span
                    key={skill.name}
                    className="group inline-flex items-center gap-3 text-base md:text-lg font-medium
                    bg-white text-gray-800 border border-gray-200 px-4 py-3 md:px-5 md:py-3.5 rounded-lg
                    shadow-sm hover:shadow-md hover:border-violet-200 hover:bg-violet-50/40
                    hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-200 ease-out"
                  >
                    <SkillIcon
                      className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 shrink-0 transition-transform duration-200
                      group-hover:scale-110"
                      style={{ color: skill.color }}
                      aria-hidden
                    />
                    <span className="leading-snug">{skill.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
