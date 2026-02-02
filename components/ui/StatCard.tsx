"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

export default function StatCard({
  value,
  label,
  prefix = "",
  suffix = "",
  delay = 0,
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseInt(value.replace(/\D/g, ""));
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;
    const increment = numericValue / steps;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(interval);
        } else {
          setDisplayValue(Math.floor(current).toString());
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      className="text-center px-6 py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="flex items-baseline justify-center gap-1">
        {prefix && (
          <span className="text-2xl md:text-3xl font-bold text-[var(--orange)]">
            {prefix}
          </span>
        )}
        <span className="text-4xl md:text-5xl font-bold text-[var(--navy)] stat-number">
          {displayValue}
        </span>
        {suffix && (
          <span className="text-2xl md:text-3xl font-bold text-[var(--orange)]">
            {suffix}
          </span>
        )}
      </div>
      <p className="text-[var(--gray)] mt-2 font-medium">{label}</p>
    </motion.div>
  );
}
