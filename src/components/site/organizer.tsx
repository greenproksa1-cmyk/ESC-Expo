"use client";

import { motion } from "framer-motion";
import { Hexagon, Leaf, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { organizer } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Organizer() {
  const lang = useLanguage((s) => s.lang);

  const highlights =
    lang === "ar"
      ? ["تصميم وتنفيذ الفعاليات الصناعية", "خبرة في قطاع الطاقة", "شراكات استراتيجية"]
      : ["Industrial event design & execution", "Energy sector expertise", "Strategic partnerships"];

  return (
    <section id="organizer" className="relative overflow-hidden py-20 sm:py-28">
      {/* SPARK aerial background */}
      <div className="absolute inset-0">
        <img
          src="/images/spark-aerial.png"
          alt="King Salman Energy Park SPARK aerial view"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/90 to-navy-950" />
      </div>
      <div className="hex-grid-fine absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={organizer.eyebrow} title={organizer.title} align="center" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-spark-400/25 bg-navy-900/70 p-8 backdrop-blur-md sm:p-10">
            <div className="pointer-events-none absolute -start-10 -top-10 h-40 w-40 rounded-full bg-spark-500/15 blur-3xl" />

            <div className="grid items-center gap-8 md:grid-cols-12">
              {/* Logo */}
              <div className="md:col-span-4">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-2xl border-2 border-spark-400/40 bg-gradient-to-br from-navy-800 to-navy-950 glow-green">
                    <Hexagon className="absolute -inset-3 h-36 w-36 text-spark-400/15" strokeWidth={1} />
                    <Leaf className="h-12 w-12 text-spark-400" />
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-black tracking-tight text-white">
                      GREEN <span className="text-spark-400">PROJECTS</span>
                    </div>
                    <div className="mt-1 text-xs font-medium text-slate-400">{organizer.role[lang]}</div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="md:col-span-8">
                <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                  {organizer.body[lang]}
                </p>
                <div className="mt-6 grid gap-2.5 sm:grid-cols-1">
                  {highlights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: lang === "ar" ? 16 : -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-spark-400" />
                      <span className="text-sm font-medium text-slate-200">{h}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
