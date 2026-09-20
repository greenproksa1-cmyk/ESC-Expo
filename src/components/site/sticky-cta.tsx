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
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 600);
      // Hide when the contact section is in view (user is already there)
      const contact = document.getElementById("contact");
      if (contact) {
        const rect = contact.getBoundingClientRect();
        setAtContact(rect.top < window.innerHeight * 0.6);
      }
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

  const visible = show && !dismissed && !atContact;

  return (
    <AnimatePresence>
      {visible ? (
        <>
          {/* Mobile: full-width bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 bottom-0 z-40 md:hidden"
          >
            <div className="relative flex items-center gap-2 border-t border-spark-400/30 bg-navy-950/95 px-4 py-3 backdrop-blur-xl">
              <button
                onClick={() => goTo("contact")}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-spark-500 py-2.5 text-sm font-extrabold text-navy-950"
              >
                <Zap className="h-4 w-4" fill="currentColor" />
                {hero.ctaPrimary[lang]}
              </button>
              <button
                onClick={() => setDismissed(true)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-300"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Desktop: floating pill */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 end-6 z-40 hidden md:block"
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
        </>
      ) : null}
    </AnimatePresence>
  );
}
