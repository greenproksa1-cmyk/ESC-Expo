"use client";

import { motion } from "framer-motion";
import { Quote, Hexagon } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { vision } from "@/lib/content";

export function Vision() {
  const lang = useLanguage((s) => s.lang);

  return (
    <section id="vision" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="tech-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? -30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-2xl border border-spark-400/20">
              <img
                src="/images/vision-bg.png"
                alt="Industrial factory at night with green lighting"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              {/* Hexagon decoration */}
              <div className="absolute bottom-4 start-4 flex items-center gap-2">
                <Hexagon className="h-5 w-5 text-spark-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-spark-300">
                  SPARK
                </span>
              </div>
            </div>
            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 end-4 rounded-xl border border-spark-400/30 bg-navy-950/90 px-5 py-3 backdrop-blur-md glow-green-sm"
            >
              <div className="text-2xl font-black text-spark-400">SPARK</div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                {lang === "ar" ? "القاعدة الإستراتيجية" : "Strategic Base"}
              </div>
            </motion.div>
          </motion.div>

          {/* Green card with text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-2xl border border-spark-400/40 bg-gradient-to-br from-spark-600 via-spark-700 to-navy-900 p-8 sm:p-10">
              <div className="hex-grid absolute inset-0 opacity-20" />
              <div className="pointer-events-none absolute -end-10 -top-10 h-40 w-40 rounded-full bg-spark-400/30 blur-3xl" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
                  <Quote className="h-3.5 w-3.5" />
                  {vision.eyebrow[lang]}
                </span>
                <h2 className="mt-5 text-2xl font-extrabold leading-snug text-white sm:text-3xl md:text-4xl">
                  {vision.title[lang]}
                </h2>
                <div className="mt-5 h-px w-full bg-white/20" />
                <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
                  {vision.body[lang]}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
