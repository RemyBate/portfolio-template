import type { MetadataRoute } from "next";

const BASE_URL = "https://remydev.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/projects",
    "/resume",
    "/contact",
    "/impressum",
    "/datenschutz",
    "/games/privacy-policy",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/games/privacy-policy" ? 0.8 : 0.7,
  }));
}
