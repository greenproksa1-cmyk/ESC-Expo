"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages, Hexagon } from "lucide-react";
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
          ? "border-b border-spark-400/15 bg-navy-950/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => goTo("hero")}
          className="group flex items-center gap-2.5"
          aria-label="ESC Expo 2026"
        >
          <span className="relative flex h-10 w-10 items-center justify-center">
            <Hexagon className="absolute h-10 w-10 text-spark-400/30" strokeWidth={1.2} />
            <span className="text-[15px] font-black leading-none text-spark-400">ESC</span>
            <span className="absolute -bottom-0.5 right-1 h-1 w-1 rounded-full bg-spark-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.8)]" />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-sm font-extrabold text-white">ESC Expo 2026</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-spark-300/80">
              {lang === "ar" ? "سلاسل إمداد الطاقة" : "Energy Supply Chains"}
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => goTo(n.id)}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-spark-300"
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
            className="border-spark-400/30 bg-spark-500/5 text-spark-200 hover:bg-spark-500/15 hover:text-spark-100"
          >
            <Languages className="h-4 w-4" />
            <span className="font-bold">{lang === "ar" ? "EN" : "ع"}</span>
          </Button>
          <Button
            size="sm"
            onClick={() => goTo("contact")}
            className="hidden bg-spark-500 text-navy-950 hover:bg-spark-400 sm:inline-flex"
          >
            {hero.ctaPrimary[lang]}
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-200 lg:hidden"
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
            className="overflow-hidden border-t border-white/10 bg-navy-950/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {nav.map((n) => (
                <button
                  key={n.id}
                  onClick={() => goTo(n.id)}
                  className="rounded-lg px-4 py-3 text-start text-sm font-medium text-slate-200 transition-colors hover:bg-spark-500/10 hover:text-spark-300"
                >
                  {n.label[lang]}
                </button>
              ))}
              <Button
                onClick={() => goTo("contact")}
                className="mt-2 bg-spark-500 text-navy-950 hover:bg-spark-400"
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
