"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { hero } from "@/lib/content";

export function StickyCta() {
  const lang = useLanguage((s) => s.lang);
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {show && !dismissed ? (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 end-4 z-40 sm:end-6"
        >
          <div className="relative flex items-center gap-2 overflow-hidden rounded-full bg-spark-500 px-5 py-3 text-navy-950 shadow-xl glow-green">
            <button
              onClick={() => goTo("contact")}
              className="flex items-center gap-2 text-sm font-extrabold"
            >
              <Zap className="h-4 w-4" fill="currentColor" />
              {hero.ctaPrimary[lang]}
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="absolute -top-1 -end-1 flex h-5 w-5 items-center justify-center rounded-full bg-navy-950 text-spark-400 hover:bg-navy-900"
              aria-label="Close"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
