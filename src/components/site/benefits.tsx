"use client";

import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useLanguage } from "@/lib/i18n";
import { benefits } from "@/lib/content";
import { Icon } from "./icon";
import { SectionHeading } from "./section-heading";

export function Benefits() {
  const lang = useLanguage((s) => s.lang);

  const chartData =
    lang === "ar"
      ? [
          { stage: "التعرض", value: 25 },
          { stage: "التواصل", value: 45 },
          { stage: "اجتماعات", value: 65 },
          { stage: "شراكات", value: 85 },
          { stage: "عقود موقعة", value: 100 },
        ]
      : [
          { stage: "Exposure", value: 25 },
          { stage: "Networking", value: 45 },
          { stage: "Meetings", value: 65 },
          { stage: "Partnerships", value: 85 },
          { stage: "Signed Deals", value: 100 },
        ];

  return (
    <section id="benefits" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -end-20 top-1/4 h-72 w-72 rounded-full bg-spark-500/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={benefits.eyebrow}
          title={benefits.title}
          subtitle={benefits.subtitle}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {benefits.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-900/80 to-navy-950/60 p-7 backdrop-blur-sm transition-all duration-300 hover:border-spark-400/50"
            >
              <div className="pointer-events-none absolute -end-10 -top-10 h-32 w-32 rounded-full bg-spark-500/10 blur-2xl transition-all duration-300 group-hover:bg-spark-500/25" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-spark-400/30 bg-spark-500/10 text-spark-400 transition-transform duration-300 group-hover:scale-110 glow-green-sm">
                  <Icon name={item.icon} className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{item.title[lang]}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.desc[lang]}</p>
              </div>

              <span className="absolute bottom-4 end-6 font-mono text-6xl font-black text-white/5">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Growth chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 overflow-hidden rounded-2xl border border-spark-400/20 bg-navy-900/50 p-6 backdrop-blur-sm sm:p-8"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">{benefits.chartTitle[lang]}</h3>
              <p className="mt-1 text-sm text-slate-400">{benefits.chartLabel[lang]}</p>
            </div>
            <div className="flex items-center gap-2 text-spark-400">
              <span className="text-3xl font-black">100%</span>
            </div>
          </div>

          <div className="mt-6 h-56 w-full" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 8, left: 8, bottom: 0 }}>
                <defs>
                  <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34d399" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#34d399" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis
                  dataKey="stage"
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  tickLine={false}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    background: "rgba(7,14,34,0.95)",
                    border: "1px solid rgba(52,211,153,0.4)",
                    borderRadius: "10px",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                  labelStyle={{ color: "#34d399", fontWeight: 700 }}
                  formatter={(v: number) => [`${v}%`, lang === "ar" ? "النمو" : "Growth"]}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#34d399"
                  strokeWidth={3}
                  fill="url(#growthFill)"
                  dot={{ fill: "#34d399", r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: "#6ee7b7", stroke: "#070e22", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <p className="mt-4 text-center text-xs text-slate-500">{benefits.chartCaption[lang]}</p>
        </motion.div>
      </div>
    </section>
  );
}
