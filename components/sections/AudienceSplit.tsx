"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const audiences = [
  {
    id: "shippers",
    title: "Ship With Quickstar",
    description: "Reliable freight solutions for businesses of all sizes",
    highlights: [
      "Nationwide capacity when you need it",
      "Competitive, transparent rates",
      "Real-time shipment tracking",
      "Dedicated account support",
    ],
    cta: { label: "Get a Quote", href: "/ship/quote" },
    secondaryCta: { label: "Learn More", href: "/ship" },
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color: "orange",
  },
  {
    id: "drivers",
    title: "Drive With Quickstar",
    description: "Build your career with a company that values you",
    highlights: [
      "Competitive pay & weekly settlements",
      "Consistent home time options",
      "Late-model equipment",
      "Full benefits package",
    ],
    cta: { label: "View Opportunities", href: "/drivers/jobs" },
    secondaryCta: { label: "Apply Now", href: "/drivers/apply" },
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    color: "navy",
  },
];

export default function AudienceSplit() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-4">
            How Can We Help You?
          </h2>
          <p className="text-[var(--gray)] text-lg max-w-2xl mx-auto">
            Whether you're looking to ship freight or start a rewarding driving career, Quickstar has you covered.
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`
                relative p-8 lg:p-10 rounded-3xl overflow-hidden group
                ${audience.color === "orange"
                  ? "bg-gradient-to-br from-[var(--orange)] to-[#D35400]"
                  : "bg-gradient-to-br from-[var(--navy)] to-[var(--navy-dark)]"
                }
              `}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id={`grid-${audience.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="1" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#grid-${audience.id})`} />
                </svg>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white">
                  {audience.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 mb-6">
                  {audience.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3 mb-8">
                  {audience.highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/90">
                      <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant={audience.color === "orange" ? "secondary" : "outline"}
                    size="lg"
                    href={audience.cta.href}
                    className={audience.color === "navy" ? "border-white text-white hover:bg-white hover:text-[var(--navy)]" : ""}
                  >
                    {audience.cta.label}
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    href={audience.secondaryCta.href}
                    className="text-white hover:bg-white/10"
                  >
                    {audience.secondaryCta.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
