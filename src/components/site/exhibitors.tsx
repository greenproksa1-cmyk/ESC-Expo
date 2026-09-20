"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { exhibitors } from "@/lib/content";
import { Icon } from "./icon";
import { SectionHeading } from "./section-heading";

export function Exhibitors() {
  const lang = useLanguage((s) => s.lang);

  return (
    <section id="exhibitors" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -start-20 top-1/3 h-72 w-72 rounded-full bg-navy-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={exhibitors.eyebrow}
          title={exhibitors.title}
          subtitle={exhibitors.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {exhibitors.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-spark-400/50 hover:bg-navy-900/70"
            >
              {/* Top gradient line */}
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-spark-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-spark-400/25 bg-gradient-to-br from-spark-500/15 to-transparent text-spark-400 transition-all duration-300 group-hover:border-spark-400/60 group-hover:from-spark-500/30">
                  <Icon name={item.icon} className="h-7 w-7" />
                </div>
                <span className="font-mono text-3xl font-black text-white/5 transition-colors duration-300 group-hover:text-spark-400/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold leading-snug text-white">
                {item.title[lang]}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                {item.desc[lang]}
              </p>

              {/* Hover arrow */}
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-spark-400/0 transition-all duration-300 group-hover:text-spark-400">
                <span>{lang === "ar" ? "عرض المزيد" : "Learn more"}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
