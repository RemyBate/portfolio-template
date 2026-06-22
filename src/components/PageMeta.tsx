import { useEffect } from "react";
import { useLocale } from "@/lib/localeStore";
import { getPageMetaKey, type PageMetaKey } from "@/lib/pageMeta";

type PageMetaProps = {
  pathname: string;
  page?: PageMetaKey;
};

function updateMeta(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function updateOg(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function PageMeta({ pathname, page }: PageMetaProps) {
  const { t, locale } = useLocale();
  const metaKey = page ?? getPageMetaKey(pathname);

  useEffect(() => {
    if (!metaKey) return;

    const title = t(`meta.${metaKey}.title`);
    const description = t(`meta.${metaKey}.description`);

    document.title = title;
    updateMeta("description", description);
    updateOg("og:title", title);
    updateOg("og:description", description);
    document.documentElement.lang = locale === "de" ? "de" : "en";
  }, [t, locale, metaKey]);

  return null;
}
