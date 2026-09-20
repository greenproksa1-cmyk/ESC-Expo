"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarDays, ChevronDown, Hexagon, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { hero, EVENT_DATE, stats } from "@/lib/content";
import { Countdown } from "./countdown";
import { Button } from "@/components/ui/button";

export function Hero() {
  const lang = useLanguage((s) => s.lang);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt="Energy industrial complex at night"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/70 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-transparent to-navy-950/50" />
      </div>

      {/* Hexagon pattern overlay */}
      <div className="hex-grid absolute inset-0 opacity-40" />

      {/* Decorative glow blobs */}
      <div className="pointer-events-none absolute -top-24 start-1/4 h-72 w-72 rounded-full bg-spark-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 end-10 h-80 w-80 rounded-full bg-navy-500/30 blur-[130px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-spark-400/40 bg-spark-500/10 px-4 py-1.5 backdrop-blur-sm"
            >
              <Hexagon className="h-3.5 w-3.5 text-spark-400" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-spark-300">
                {hero.badge[lang]}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="mt-5 text-4xl font-black leading-[1.15] text-white sm:text-5xl lg:text-6xl"
            >
              {hero.title[lang]}
              <span className="mt-2 block gradient-text text-2xl font-extrabold sm:text-3xl lg:text-4xl">
                ESC Expo 2026
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              {hero.subtitle[lang]}
            </motion.p>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-spark-400" />
                {hero.location[lang]}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-spark-400" />
                {hero.dateLabel[lang]}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                onClick={() => goTo("contact")}
                className="glow-green bg-spark-500 text-navy-950 hover:bg-spark-400"
              >
                <Zap className="h-4 w-4" />
                {hero.ctaPrimary[lang]}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => goTo("contact")}
                className="border-spark-400/30 bg-white/5 text-white backdrop-blur-sm hover:bg-spark-500/15 hover:text-spark-100"
              >
                {hero.ctaSecondary[lang]}
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => goTo("contact")}
                className="text-slate-200 hover:bg-white/5 hover:text-spark-300"
              >
                {hero.ctaTertiary[lang]}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-navy-900/50 px-3 py-3 text-center backdrop-blur-sm"
                >
                  <div className="text-xl font-black text-spark-400 sm:text-2xl">{s.value}</div>
                  <div className="mt-0.5 text-[10px] font-medium text-slate-400 sm:text-xs">
                    {s.label[lang]}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Countdown card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-5"
          >
            <div className="glass relative overflow-hidden rounded-2xl p-6 shadow-2xl sm:p-8">
              <div className="absolute -end-10 -top-10 h-40 w-40 rounded-full bg-spark-500/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spark-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-spark-400" />
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-spark-300">
                    {hero.countdownTitle[lang]}
                  </h3>
                </div>
                <div className="mt-5">
                  <Countdown target={EVENT_DATE} />
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-spark-400/20 bg-spark-500/5 p-3">
                  <MapPin className="h-5 w-5 shrink-0 text-spark-400" />
                  <div>
                    <div className="text-sm font-bold text-white">{hero.location[lang]}</div>
                    <div className="text-xs text-slate-400">{hero.dateLabel[lang]}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => goTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 start-1/2 -translate-x-1/2 text-spark-300/70 hover:text-spark-300"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
