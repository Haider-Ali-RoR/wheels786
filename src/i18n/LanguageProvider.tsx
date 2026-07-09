/**
 * Provides the active language to the app.
 *
 * French is the default (and the language used for the server-side prerender,
 * where `window` is undefined). On the client the choice is read from and
 * persisted to localStorage. Because the client boots with
 * `createRoot(...).render()` (not `hydrateRoot`) in main.tsx, the app fully
 * re-renders on the client, so a returning English visitor's client overriding
 * the French-prerendered HTML — or a live language switch — never causes a
 * hydration mismatch.
 */
import { useEffect, useState, type ReactNode } from "react";
import type { Lang } from "../data/content";
import { LanguageContext } from "./LanguageContext";

const STORAGE_KEY = "lang";
const DEFAULT_LANG: Lang = "fr";

/** Document `<title>` per language (kept in sync with index.html). */
const TITLES: Record<Lang, string> = {
  fr: "786 Transport — Chauffeur privé haut de gamme & VTC à Paris",
  en: "786 Transport — Premium Private Chauffeur & VTC in Paris",
};

/** Read the persisted language, defaulting to French (and on the server). */
function getInitialLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "fr" ? stored : DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable (private mode) — non-fatal */
    }
    document.documentElement.lang = lang;
    document.title = TITLES[lang];
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
