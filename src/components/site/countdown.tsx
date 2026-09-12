"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

function getRemaining(target: number) {
  const now = Date.now();
  let diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  diff -= days * 86400000;
  const hours = Math.floor(diff / 3600000);
  diff -= hours * 3600000;
  const minutes = Math.floor(diff / 60000);
  diff -= minutes * 60000;
  const seconds = Math.floor(diff / 1000);
  return { days, hours, minutes, seconds };
}

export function Countdown({ target }: { target: string }) {
  const lang = useLanguage((s) => s.lang);
  const targetMs = new Date(target).getTime();
  const [time, setTime] = useState(() => getRemaining(targetMs));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Synchronizing with a time-based external system (the clock).
    // Initial render shows zeros (mounted=false) to avoid SSR hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const id = setInterval(() => setTime(getRemaining(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const labels = {
    ar: { days: "يوم", hours: "ساعة", minutes: "دقيقة", seconds: "ثانية" },
    en: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
  }[lang];

  const units = [
    { value: mounted ? time.days : 0, label: labels.days },
    { value: mounted ? time.hours : 0, label: labels.hours },
    { value: mounted ? time.minutes : 0, label: labels.minutes },
    { value: mounted ? time.seconds : 0, label: labels.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {units.map((u, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
          className="relative flex flex-col items-center justify-center rounded-xl border border-spark-400/25 bg-navy-900/70 px-1 py-3 backdrop-blur-sm sm:py-4"
        >
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-spark-400/60 to-transparent" />
          <span className="font-mono text-2xl font-black tabular-nums text-white sm:text-4xl">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-spark-300/90 sm:text-xs">
            {u.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
