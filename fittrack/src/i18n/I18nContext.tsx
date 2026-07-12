import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { en, type Dict } from "./en";
import { sk } from "./sk";

export type Lang = "sk" | "en";

const DICTS: Record<Lang, Dict> = { sk, en };
const STORAGE_KEY = "mpm-lang";

type I18n = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
};

const I18nContext = createContext<I18n | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "sk" ? stored : "sk";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: DICTS[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18n {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
