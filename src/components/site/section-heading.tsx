"use client";

import { motion } from "framer-motion";
import type { Bi } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: Bi;
  title: Bi;
  subtitle?: Bi;
  align?: "center" | "start";
}) {
  const lang = useLanguage((s) => s.lang);
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start text-start"} max-w-3xl ${isCenter ? "mx-auto" : ""}`}
    >
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-spark-400/40 bg-spark-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-spark-300"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-spark-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.7)]" />
        {eyebrow[lang]}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl"
      >
        {title[lang]}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="text-base leading-relaxed text-slate-300/90 sm:text-lg"
        >
          {subtitle[lang]}
        </motion.p>
      ) : null}
    </div>
  );
}
