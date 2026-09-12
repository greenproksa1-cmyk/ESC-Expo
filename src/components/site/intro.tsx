"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { intro } from "@/lib/content";
import { Icon } from "./icon";
import { SectionHeading } from "./section-heading";

export function Intro() {
  const lang = useLanguage((s) => s.lang);

  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="hex-grid-fine absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute inset-y-0 end-0 w-1/3 bg-gradient-to-l from-spark-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={intro.eyebrow} title={intro.title} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 max-w-4xl text-center"
        >
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            {intro.body[lang]}
          </p>
          <p className="mt-5 text-base font-medium leading-relaxed text-spark-200 sm:text-lg">
            {intro.lead[lang]}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {intro.cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-spark-400/40 bg-navy-900/60 p-7 backdrop-blur-sm transition-all duration-300 hover:border-spark-400/80 hover:bg-navy-900/80"
            >
              {/* Corner accents */}
              <span className="absolute -end-px -top-px h-8 w-8 border-spark-400/70 [border-start-width:2px] [border-inline-end-width:2px] rounded-tr-2xl" />
              <span className="absolute -bottom-px -start-px h-8 w-8 border-spark-400/70 [border-bottom-width:2px] [border-inline-start-width:2px] rounded-bl-2xl" />

              <div className="absolute -end-8 -top-8 h-24 w-24 rounded-full bg-spark-500/10 blur-2xl transition-opacity duration-300 group-hover:bg-spark-500/20" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-spark-400/30 bg-spark-500/10 text-spark-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={c.icon} className="h-7 w-7" />
                </div>
                <span className="absolute end-0 top-0 font-mono text-5xl font-black text-spark-400/10">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold text-white">{c.title[lang]}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{c.desc[lang]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
