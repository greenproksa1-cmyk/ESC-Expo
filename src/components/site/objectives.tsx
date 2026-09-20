"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { objectives } from "@/lib/content";
import { Icon } from "./icon";
import { SectionHeading } from "./section-heading";

export function Objectives() {
  const lang = useLanguage((s) => s.lang);

  return (
    <section id="objectives" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/60 to-navy-950" />
      <div className="tech-grid absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={objectives.eyebrow}
          title={objectives.title}
          subtitle={objectives.subtitle}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-navy-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-spark-400/50"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-spark-400/70 to-transparent" />

              {/* Circular icon badge */}
              <div className="relative mb-5">
                <div className="absolute inset-0 rounded-full bg-spark-500/20 blur-md transition-all duration-300 group-hover:bg-spark-500/40" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-spark-400/40 bg-navy-950">
                  <Icon name={item.icon} className="h-9 w-9 text-spark-400" />
                  <span className="absolute -top-1 -end-1 flex h-6 w-6 items-center justify-center rounded-full bg-spark-500 font-mono text-xs font-black text-navy-950">
                    {i + 1}
                  </span>
                </div>
              </div>

              <h3 className="text-base font-bold leading-snug text-white">{item.title[lang]}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.desc[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
