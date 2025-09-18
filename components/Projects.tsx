import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Restaurant Website Template",
    description: "Modern landing page with menu, hours, Google Map & contact form.",
    image: "/restaurant.jpg",
    link: "#",
    tags: ["Next.js", "Tailwind"]
  },
  {
    title: "Portfolio Website Template",
    description: "Clean, responsive personal site for freelancers & students.",
    image: "/portfolio.jpg",
    link: "#",
    tags: ["Next.js", "Tailwind"]
  },
  {
    title: "E-Commerce Starter",
    description: "Simple store with products, cart, and mock checkout flow.",
    image: "/ecommerce.jpg",
    link: "#",
    tags: ["Next.js", "TypeScript"]
  },
  {
    title: "Appointment Booking App",
    description: "Service booking UI with calendar integration (Calendly-ready).",
    image: "/booking.jpg",
    link: "#",
    tags: ["Next.js", "Forms"]
  },
  {
    title: "Blog/Docs Starter (MDX)",
    description: "SEO-friendly blog/docs template using MDX content files.",
    image: "/blog.jpg",
    link: "#",
    tags: ["Next.js", "MDX"]
  },
  {
    title: "WhatsApp Order Form",
    description: "One-page order form that sends orders via WhatsApp.",
    image: "/whatsapp.jpg",
    link: "#",
    tags: ["Next.js", "No-backend"]
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-gray-600 mb-8">
          Practical templates & starters you can buy or hire me to customize.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group border rounded-xl bg-white overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform"
                  priority={false}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-gray-100 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
