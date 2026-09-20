"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { nav, hero } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const lang = useLanguage((s) => s.lang);
  const toggle = useLanguage((s) => s.toggle);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 shadow-md backdrop-blur-xl"
          : "border-b border-slate-200/90 bg-white/95 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => goTo("hero")}
          className="group flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
          aria-label="ESC Expo 2026"
        >
          <img
            src="/images/esc-expo-logo.png"
            alt="ESC Expo 2026 Logo"
            className="h-11 sm:h-12 w-auto object-contain"
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => goTo(n.id)}
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-emerald-700"
            >
              {n.label[lang]}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggle}
            className="border-slate-300 bg-slate-50 text-slate-800 hover:bg-slate-100 hover:text-slate-950 font-bold"
          >
            <Languages className="h-4 w-4" />
            <span>{lang === "ar" ? "EN" : "ع"}</span>
          </Button>
          <Button
            size="sm"
            onClick={() => goTo("contact")}
            className="hidden bg-emerald-600 text-white font-bold hover:bg-emerald-700 shadow-sm sm:inline-flex"
          >
            {hero.ctaPrimary[lang]}
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 text-slate-800 hover:bg-slate-100 lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-200 bg-white/98 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {nav.map((n) => (
                <button
                  key={n.id}
                  onClick={() => goTo(n.id)}
                  className="rounded-lg px-4 py-3 text-start text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 hover:text-emerald-700"
                >
                  {n.label[lang]}
                </button>
              ))}
              <Button
                onClick={() => goTo("contact")}
                className="mt-2 bg-emerald-600 text-white font-bold hover:bg-emerald-700 shadow-sm"
              >
                {hero.ctaPrimary[lang]}
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
