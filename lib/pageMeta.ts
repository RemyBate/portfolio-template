export type PageMetaKey =
  | "home"
  | "about"
  | "projects"
  | "resume"
  | "contact"
  | "impressum"
  | "datenschutz";

const pathToMetaKey: Record<string, PageMetaKey> = {
  "/": "home",
  "/about": "about",
  "/projects": "projects",
  "/resume": "resume",
  "/contact": "contact",
  "/impressum": "impressum",
  "/datenschutz": "datenschutz",
};

export function getPageMetaKey(pathname: string): PageMetaKey | null {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  return pathToMetaKey[normalized] ?? null;
}
