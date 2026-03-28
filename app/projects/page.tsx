import Image from "next/image";

const projects = [
  {
    title: "Dingado",
    description:
      "Modern web application built with Next.js featuring responsive design and clean UI.",
    image: "/projects/dingado.png", 
    link: "https://dingado.de/en",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    title: "SkyRivers Limited (E-Commerce Shop)",
    description:
      "Custom WordPress business website with a responsive layout and fully functional e-commerce system.",
    image: "/projects/skyrivers.png",
    link: "https://skyrivers-limited.com",
    tech: ["WordPress", "Elementor"],
  },
  
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website to showcase projects and skills.",
    image: "/projects/portfolio.png",
    link: "#",
    tech: ["Next.js", "Tailwind"],
  },

  {
    title: "Business Website (Bootstrap)",
    description:
      "Responsive business website built using a Bootstrap template with custom styling and interactive UI components.",
    image: "/projects/breedbabies.png",
    link: "https://breedbabiesdaily.com/index.php",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  
];

export default function ProjectsPage() {
  return (
    <section className="bg-[#f7f7f7] min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-2">
            Practical templates & projects I have built.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
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
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}