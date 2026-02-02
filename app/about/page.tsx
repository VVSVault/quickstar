"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";

const values = [
  {
    title: "Integrity",
    description: "We do what we say, every time. Our word is our bond with drivers, shippers, and partners alike.",
    icon: "🎯",
  },
  {
    title: "Reliability",
    description: "On-time delivery isn't a goal—it's our standard. We build trust through consistent performance.",
    icon: "⏰",
  },
  {
    title: "Respect",
    description: "We treat every driver, shipper, and team member with dignity. People are our greatest asset.",
    icon: "🤝",
  },
  {
    title: "Excellence",
    description: "We continuously improve our operations, equipment, and service to exceed expectations.",
    icon: "⭐",
  },
];

const milestones = [
  { year: "2009", event: "Founded in Atlanta, GA with 5 trucks" },
  { year: "2012", event: "Expanded to 25 trucks, opened second terminal" },
  { year: "2015", event: "Launched dedicated fleet services" },
  { year: "2018", event: "Reached 100+ trucks milestone" },
  { year: "2021", event: "Implemented advanced tracking technology" },
  { year: "2024", event: "Serving all 48 contiguous states" },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Moving America Forward Since 2009
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              From a small fleet in Atlanta to a nationwide operation, Quickstar Transportation has grown by staying true to our values: taking care of our drivers, delivering for our customers, and doing business the right way.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <Section background="white" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-[var(--gray)] leading-relaxed">
              <p>
                Quickstar Transportation was founded in 2009 by industry veterans who saw a need for a different kind of trucking company—one that truly put drivers first while delivering exceptional service to shippers.
              </p>
              <p>
                What started as a five-truck operation in Atlanta, Georgia has grown into a nationwide logistics provider serving all 48 contiguous states. Through economic ups and downs, we've stayed true to our founding principles: fair treatment of drivers, honest dealings with customers, and a commitment to safety above all else.
              </p>
              <p>
                Today, Quickstar moves hundreds of loads monthly, but we've never lost sight of what makes us different. Every driver is a valued team member, not just a number. Every shipment receives our full attention and care. And every relationship—whether with a first-time shipper or a long-haul veteran—is built on trust.
              </p>
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
            <div className="absolute -bottom-6 -right-6 bg-[var(--orange)] text-white rounded-xl p-6 shadow-xl">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm opacity-90">Years of Service</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section background="light" padding="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
            Our Values
          </h2>
          <p className="text-[var(--gray)] text-lg max-w-2xl mx-auto">
            These principles guide every decision we make and every mile we drive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <span className="text-4xl mb-4 block">{value.icon}</span>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-2">{value.title}</h3>
              <p className="text-[var(--gray)] text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section background="white" padding="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
            Our Journey
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[var(--orange)] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {milestone.year.slice(-2)}
                </div>
                {index < milestones.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-200 my-2" />
                )}
              </div>
              <div className="pt-2">
                <p className="font-bold text-[var(--navy)]">{milestone.year}</p>
                <p className="text-[var(--gray)]">{milestone.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Safety & Compliance */}
      <Section background="navy" padding="lg">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Safety First</h3>
            <p className="text-white/70">
              Excellent CSA scores and a commitment to continuous safety training for all drivers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fully Licensed</h3>
            <p className="text-white/70">
              USDOT authorized, MC certified, and fully insured for your peace of mind.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">98% On-Time</h3>
            <p className="text-white/70">
              Our on-time delivery rate speaks to our commitment to reliability.
            </p>
          </motion.div>
        </div>
      </Section>

      <CTABanner
        headline="Join the Quickstar Family"
        description="Whether you're looking to ship freight or build a driving career, we'd love to hear from you."
        primaryCta={{ label: "Get a Quote", href: "/ship/quote" }}
        secondaryCta={{ label: "Apply to Drive", href: "/drivers/apply" }}
        variant="split"
      />
    </>
  );
}
