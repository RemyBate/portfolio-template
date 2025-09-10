import Image from "next/image";

const projects = [
  {
    title: "LendingApp",
    description: "Peer-to-peer lending app built with Prisma.",
    image: "/project1.jpg",
    link: "#"
  },
  {
    title: "SkillSpot",
    description: "Local services finder built with Next.js + Tailwind.",
    image: "/project2.jpg",
    link: "#"
  },
  {
    title: "Portfolio Template",
    description: "This template itself — fast and customizable.",
    image: "/project3.jpg",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="border rounded-xl bg-white overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image
                src={p.image}
                alt={p.title}
                width={600}
                height={400}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
