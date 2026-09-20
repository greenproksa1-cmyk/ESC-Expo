"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

export function LanguageProvider() {
  const lang = useLanguage((s) => s.lang);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return null;
}
