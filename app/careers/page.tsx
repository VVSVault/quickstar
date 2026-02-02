"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";

const departments = [
  {
    name: "Driving",
    description: "Hit the road with competitive pay, great benefits, and respect.",
    openings: 25,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    href: "/drivers/jobs",
  },
  {
    name: "Operations",
    description: "Keep our fleet moving with dispatch, planning, and logistics roles.",
    openings: 5,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    href: "/contact",
  },
  {
    name: "Maintenance",
    description: "Keep our equipment in top shape as a diesel mechanic or technician.",
    openings: 3,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: "/contact",
  },
  {
    name: "Corporate",
    description: "Support our growth in accounting, HR, sales, and administration.",
    openings: 2,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    href: "/contact",
  },
];

const values = [
  {
    title: "Safety First",
    description: "Nothing is more important than getting home safe. We invest in training, equipment, and a culture that puts safety above all else.",
  },
  {
    title: "Integrity Always",
    description: "We do what we say we'll do. Honest communication and fair treatment are the foundation of how we work.",
  },
  {
    title: "Team Spirit",
    description: "We succeed together. Whether you're on the road or in the office, you're part of the Quickstar family.",
  },
  {
    title: "Continuous Growth",
    description: "We invest in our people. Training, advancement opportunities, and professional development are available to all.",
  },
];

const perks = [
  "Competitive salaries",
  "Health, dental & vision insurance",
  "401(k) with company match",
  "Paid time off",
  "Professional development",
  "Team events",
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-[var(--navy)] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop"
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
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Build Your Career with Quickstar
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Join a team that values integrity, rewards hard work, and treats every employee like family. We're always looking for talented people to help us grow.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Departments */}
      <Section background="white" padding="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
            Open Opportunities
          </h2>
          <p className="text-[var(--gray)] max-w-2xl mx-auto">
            Whether you're behind the wheel or behind a desk, there's a place for you at Quickstar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {departments.map((dept, index) => (
            <motion.a
              key={dept.name}
              href={dept.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[var(--orange)]/30 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[var(--navy)]/5 flex items-center justify-center text-[var(--navy)] group-hover:bg-[var(--orange)] group-hover:text-white transition-all">
                  {dept.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[var(--navy)] group-hover:text-[var(--orange)] transition-colors">
                      {dept.name}
                    </h3>
                    <span className="px-3 py-1 bg-[var(--orange)]/10 text-[var(--orange)] text-sm font-semibold rounded-full">
                      {dept.openings} open
                    </span>
                  </div>
                  <p className="text-[var(--gray)]">{dept.description}</p>
                  <div className="mt-4 flex items-center text-[var(--orange)] font-semibold">
                    View Positions
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Our Values */}
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
          <p className="text-[var(--gray)] max-w-2xl mx-auto">
            These principles guide everything we do at Quickstar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center"
            >
              <h3 className="text-lg font-bold text-[var(--navy)] mb-2">{value.title}</h3>
              <p className="text-sm text-[var(--gray)]">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Quickstar */}
      <Section background="white" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
              Why Work at Quickstar?
            </h2>
            <p className="text-[var(--gray)] text-lg mb-6">
              We're more than a trucking company—we're a family. When you join Quickstar, you join a team that celebrates wins together, supports each other through challenges, and treats everyone with respect.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {perks.map((perk, index) => (
                <motion.div
                  key={perk}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <svg className="w-5 h-5 text-[var(--success)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[var(--charcoal)]">{perk}</span>
                </motion.div>
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
                src="https://images.unsplash.com/photo-1545608444-f045a6db6133?w=800&h=600&fit=crop"
                alt="Quickstar Team"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      <CTABanner
        headline="Ready to Join Us?"
        description="Check out our open positions and take the first step toward a rewarding career with Quickstar."
        primaryCta={{ label: "View Driver Jobs", href: "/drivers/jobs" }}
        secondaryCta={{ label: "Contact HR", href: "/contact" }}
        variant="orange"
      />
    </>
  );
}
