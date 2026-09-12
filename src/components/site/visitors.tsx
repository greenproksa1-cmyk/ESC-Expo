"use client";

import { motion } from "framer-motion";
import { Users, Hexagon } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { visitors } from "@/lib/content";
import { SectionHeading } from "./section-heading";

// Position anchors for 5 nodes around a circle (centered at 50%,50%, radius ~42%)
const positions = [
  { left: "50%", top: "7%" }, // top
  { left: "90%", top: "37%" }, // top-right
  { left: "75%", top: "85%" }, // bottom-right
  { left: "25%", top: "85%" }, // bottom-left
  { left: "10%", top: "37%" }, // top-left
];

// SVG line endpoints (in 0-100 viewBox) from center to each node
const lines = positions.map((p) => ({
  x2: parseFloat(p.left),
  y2: parseFloat(p.top),
}));

export function Visitors() {
  const lang = useLanguage((s) => s.lang);

  return (
    <section id="visitors" className="relative overflow-hidden py-20 sm:py-28">
      <div className="hex-grid absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute start-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-spark-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={visitors.eyebrow}
          title={visitors.title}
          subtitle={visitors.subtitle}
        />

        {/* Desktop circular layout */}
        <div className="relative mx-auto mt-16 hidden aspect-square max-w-3xl lg:block">
          {/* SVG connecting lines */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="vline" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {lines.map((l, i) => (
              <motion.line
                key={i}
                x1="50"
                y1="50"
                x2={l.x2}
                y2={l.y2}
                stroke="url(#vline)"
                strokeWidth="0.4"
                strokeDasharray="1.5 1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              />
            ))}
          </svg>

          {/* Outer rotating ring decoration */}
          <div className="spin-slow absolute inset-[8%] rounded-full border border-dashed border-spark-400/15" />
          <div className="absolute inset-[18%] rounded-full border border-spark-400/10" />

          {/* Center node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-spark-400/50 bg-gradient-to-br from-navy-800 to-navy-950 text-center glow-green">
              <Hexagon className="absolute -inset-2 h-36 w-36 text-spark-400/15" strokeWidth={1} />
              <Users className="h-9 w-9 text-spark-400" />
              <span className="mt-1.5 px-2 text-[11px] font-bold uppercase tracking-wider text-spark-200">
                {visitors.centerLabel[lang]}
              </span>
            </div>
          </motion.div>

          {/* Nodes */}
          {visitors.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
              className="absolute z-20 w-52 -translate-x-1/2 -translate-y-1/2"
              style={{ left: positions[i].left, top: positions[i].top }}
            >
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-navy-900/80 p-4 backdrop-blur-md transition-all duration-300 hover:border-spark-400/60 hover:bg-navy-800/90">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-spark-500/15 font-mono text-sm font-black text-spark-400">
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-bold leading-tight text-white">
                    {item.title[lang]}
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.desc[lang]}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile list layout */}
        <div className="mt-12 grid gap-4 lg:hidden">
          {/* Center node */}
          <div className="flex items-center justify-center">
            <div className="relative flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-spark-400/50 bg-gradient-to-br from-navy-800 to-navy-950">
              <Users className="h-7 w-7 text-spark-400" />
              <span className="mt-1 px-2 text-[10px] font-bold uppercase tracking-wider text-spark-200">
                {visitors.centerLabel[lang]}
              </span>
            </div>
          </div>
          {visitors.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex gap-3 rounded-xl border border-white/10 bg-navy-900/70 p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-spark-500/15 font-mono text-sm font-black text-spark-400">
                {i + 1}
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">{item.title[lang]}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.desc[lang]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
