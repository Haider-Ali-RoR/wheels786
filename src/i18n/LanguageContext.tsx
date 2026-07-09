/**
 * Bilingual language layer — context + hooks.
 *
 * The `LanguageProvider` component lives in ./LanguageProvider so that this
 * file exports only the context and hooks (keeping React Fast Refresh happy).
 * French is the default language; visitors can switch to English via the
 * navbar toggle, and the choice is remembered in localStorage.
 */
import { createContext, useContext } from "react";
import { content, type Lang, type ContentBundle } from "../data/content";
import { strings, type UIStrings } from "./strings";

export type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Active language + setter. */
export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}

/** The structured content bundle for the active language. */
export function useContent(): ContentBundle {
  return content[useLang().lang];
}

/** The UI micro-copy strings for the active language. */
export function useT(): UIStrings {
  return strings[useLang().lang];
}
