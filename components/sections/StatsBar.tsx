"use client";

import StatCard from "@/components/ui/StatCard";

const stats = [
  { value: "500", suffix: "+", label: "Loads Delivered Monthly" },
  { value: "98", suffix: "%", label: "On-Time Delivery Rate" },
  { value: "24/7", label: "Driver Support" },
  { value: "15", suffix: "+", label: "Years in Business" },
];

export default function StatsBar() {
  return (
    <section className="relative bg-[var(--gray-light)] py-8 md:py-12 overflow-hidden stripe-pattern">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--navy)] via-[var(--orange)] to-[var(--navy)]" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
