"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";

const truckBrands = [
  { name: "Freightliner Cascadia", percentage: 50 },
  { name: "Kenworth T680", percentage: 30 },
  { name: "Peterbilt 579", percentage: 20 },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
    title: "APU Equipped",
    description: "Every truck has an Auxiliary Power Unit for climate control without idling. Save fuel and stay comfortable.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "ELD & Technology",
    description: "Modern ELD systems with driver-friendly apps. Easy logging, navigation, and communication in one device.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Fuel Cards",
    description: "Company fuel cards accepted at all major truck stops. Discounted rates save you money on every fill-up.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: "Satellite Radio",
    description: "SiriusXM equipped for entertainment on long hauls. Stay entertained with music, news, and sports.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    title: "WiFi Enabled",
    description: "Stay connected on the road with in-cab WiFi. Video call family, stream content, and stay entertained.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Comfort Features",
    description: "Premium sleeper cabs with refrigerators, microwaves, and comfortable mattresses. Your home away from home.",
  },
];

const safetyFeatures = [
  "Collision mitigation systems",
  "Lane departure warning",
  "Automatic emergency braking",
  "Adaptive cruise control",
  "360° camera systems",
  "Tire pressure monitoring",
  "Roll stability control",
  "LED lighting packages",
];

const stats = [
  { label: "Average Fleet Age", value: "< 2 Years" },
  { label: "APU Equipped", value: "100%" },
  { label: "Automatic Transmission", value: "Available" },
  { label: "Average MPG", value: "7.5+" },
];

export default function EquipmentPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-[var(--navy)] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&h=1080&fit=crop"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 bg-[var(--orange)]/20 text-[var(--orange)] text-sm font-semibold rounded-full mb-6">
              Our Fleet
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Best Equipment on the Road
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              We invest in top-quality, late-model trucks because we know your equipment matters. Comfortable, reliable, and safe—that's the Quickstar standard.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <Section background="white" padding="md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-[var(--orange)]">{stat.value}</p>
              <p className="text-[var(--gray)]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Fleet Composition */}
      <Section background="light" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
              Premium Truck Brands
            </h2>
            <p className="text-[var(--gray)] mb-8">
              Our fleet consists of the most reliable and driver-preferred brands in the industry. All trucks are less than 3 years old and maintained to the highest standards.
            </p>

            <div className="space-y-6">
              {truckBrands.map((brand) => (
                <div key={brand.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[var(--navy)]">{brand.name}</span>
                    <span className="text-[var(--orange)]">{brand.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${brand.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-[var(--orange)] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
                alt="Quickstar Fleet"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[var(--navy)] text-white rounded-xl p-6 shadow-xl">
              <p className="text-4xl font-bold">2024</p>
              <p className="text-sm opacity-70">Latest Model Year</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Features */}
      <Section background="white" padding="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
            Standard Equipment Features
          </h2>
          <p className="text-[var(--gray)] max-w-2xl mx-auto">
            Every Quickstar truck comes equipped with the features you need to be comfortable, productive, and safe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--gray-light)] rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--orange)]/10 flex items-center justify-center text-[var(--orange)] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-2">{feature.title}</h3>
              <p className="text-sm text-[var(--gray)]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Safety */}
      <Section background="navy" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Safety Technology
            </h2>
            <p className="text-white/70 mb-8">
              Your safety is our top priority. All trucks are equipped with the latest safety technology to help prevent accidents and protect you on the road.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {safetyFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 text-white/90"
                >
                  <svg className="w-5 h-5 text-[var(--orange)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-[var(--navy)] mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-[var(--gray)] mb-6">
              Join the Quickstar team and drive some of the best equipment in the industry. We invest in our trucks because we invest in our drivers.
            </p>
            <Button variant="orange" size="lg" fullWidth href="/drivers/apply">
              Apply Now
            </Button>
            <p className="text-center mt-4 text-sm text-[var(--gray)]">
              Questions? Call{" "}
              <a href="tel:+18005551234" className="text-[var(--orange)] font-semibold">
                (800) 555-1234
              </a>
            </p>
          </motion.div>
        </div>
      </Section>

      <CTABanner
        headline="See Our Equipment in Person"
        description="Visit one of our terminals to see our fleet up close and talk to our drivers about what it's like to work for Quickstar."
        primaryCta={{ label: "Find a Location", href: "/contact" }}
        secondaryCta={{ label: "View All Jobs", href: "/drivers/jobs" }}
        variant="split"
      />
    </>
  );
}
