"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

interface CTABannerProps {
  headline: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "navy" | "orange" | "split";
}

export default function CTABanner({
  headline,
  description,
  primaryCta,
  secondaryCta,
  variant = "navy",
}: CTABannerProps) {
  if (variant === "split") {
    return (
      <section className="relative overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Ship Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 lg:p-16 bg-[var(--orange)] text-white group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Need to Ship?</h3>
              <p className="text-white/80 mb-6 max-w-md">
                Get competitive rates and reliable service for your freight needs.
              </p>
              <Button variant="secondary" size="lg" href="/ship/quote">
                Get a Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </motion.div>

          {/* Drive Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 lg:p-16 bg-[var(--navy)] text-white group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Drive?</h3>
              <p className="text-white/80 mb-6 max-w-md">
                Join our team and build a rewarding career with competitive pay and benefits.
              </p>
              <Button variant="outline" size="lg" href="/drivers/apply" className="border-white text-white hover:bg-white hover:text-[var(--navy)]">
                Apply Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative overflow-hidden py-16 md:py-20 ${
        variant === "navy" ? "gradient-navy" : "gradient-orange"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5" />

        {/* Animated elements */}
        <motion.div
          className="absolute top-1/2 left-10 w-2 h-2 rounded-full bg-white/20"
          animate={{ y: [-20, 20], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-3 h-3 rounded-full bg-white/20"
          animate={{ y: [20, -20], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {headline}
          </h2>
          {description && (
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant={variant === "navy" ? "orange" : "secondary"}
              size="lg"
              href={primaryCta.href}
            >
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                variant="outline"
                size="lg"
                href={secondaryCta.href}
                className="border-white text-white hover:bg-white hover:text-[var(--navy)]"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
