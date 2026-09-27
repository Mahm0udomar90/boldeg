import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";
export type L = { en: string; ar: string };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (v: L) => string;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "bold-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    root.classList.toggle("lang-ar", lang === "ar");
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const t = useCallback((v: L) => v[lang], [lang]);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t, dir: lang === "ar" ? "rtl" : "ltr" }),
    [lang, setLang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
