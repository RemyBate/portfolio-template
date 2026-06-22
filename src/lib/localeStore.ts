import { useCallback, useSyncExternalStore } from "react";
import { type Locale, translate } from "./translations";

const STORAGE_KEY = "portfolio-locale";

let locale: Locale = "en";
const listeners = new Set<() => void>();

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "de" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  return "en";
}

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Locale {
  return locale;
}

function getServerSnapshot(): Locale {
  return "en";
}

if (typeof window !== "undefined") {
  locale = readStoredLocale();
  document.documentElement.lang = locale === "de" ? "de" : "en";
}

export function setLocale(next: Locale) {
  locale = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* ignore */
  }
  if (typeof document !== "undefined") {
    document.documentElement.lang = next === "de" ? "de" : "en";
  }
  emitChange();
}

export function useLocale() {
  const currentLocale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const t = useCallback((path: string) => translate(currentLocale, path), [currentLocale]);

  return { locale: currentLocale, setLocale, t };
}
