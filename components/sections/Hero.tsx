"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  videoSrc?: string;
  imageSrc?: string;
  overlay?: "dark" | "gradient" | "navy";
  height?: "full" | "large" | "medium";
  centered?: boolean;
}

const overlays = {
  dark: "bg-black/60",
  gradient: "bg-gradient-to-r from-[var(--navy-dark)]/90 via-[var(--navy-dark)]/70 to-transparent",
  navy: "bg-[var(--navy-dark)]/80",
};

const heights = {
  full: "min-h-screen",
  large: "min-h-[85vh]",
  medium: "min-h-[70vh]",
};

export default function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  videoSrc,
  imageSrc,
  overlay = "gradient",
  height = "full",
  centered = false,
}: HeroProps) {
  return (
    <section className={`relative ${heights[height]} flex items-center overflow-hidden`}>
      {/* Video Background */}
      {videoSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
          poster={imageSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Image Background (fallback) */}
      {!videoSrc && imageSrc && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      )}

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlays[overlay]}`} />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated road lines */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--orange)]/30">
          <motion.div
            className="h-full w-32 bg-[var(--orange)]"
            animate={{ x: ["0%", "100vw"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 border border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 right-40 w-32 h-32 border border-[var(--orange)]/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl ${centered ? "text-center" : ""}`}>
        <div className={`max-w-3xl ${centered ? "mx-auto" : ""}`}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 ${centered ? "mx-auto" : ""}`}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--orange)] animate-pulse" />
            <span className="text-sm font-medium text-white/90">Now Hiring CDL-A Drivers</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {headline.split(" ").map((word, i) => (
              <span key={i}>
                {word === "Quickstar" || word === "Forward" ? (
                  <span className="text-[var(--orange)]">{word}</span>
                ) : (
                  word
                )}{" "}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl"
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`flex flex-col sm:flex-row gap-4 ${centered ? "justify-center" : ""}`}
          >
            {primaryCta && (
              <Button variant="orange" size="lg" href={primaryCta.href}>
                {primaryCta.label}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            )}
            {secondaryCta && (
              <Button variant="outline" size="lg" href={secondaryCta.href}>
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`mt-12 flex flex-wrap items-center gap-6 text-white/60 text-sm ${centered ? "justify-center" : ""}`}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--success)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>USDOT Authorized</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--success)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>MC# Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--success)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fully Insured</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
