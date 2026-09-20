import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Language = "ar" | "en";

interface LanguageState {
  lang: Language;
  setLang: (lang: Language) => void;
  toggle: () => void;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set, get) => ({
      lang: "ar",
      setLang: (lang) => set({ lang }),
      toggle: () => set({ lang: get().lang === "ar" ? "en" : "ar" }),
    }),
    {
      name: "esc-expo-lang",
    }
  )
);

export const isRTL = (lang: Language) => lang === "ar";
