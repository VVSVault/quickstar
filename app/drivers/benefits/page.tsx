"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";

const benefitCategories = [
  {
    title: "Health & Wellness",
    description: "Comprehensive coverage to keep you and your family healthy.",
    benefits: [
      {
        name: "Medical Insurance",
        detail: "Multiple plan options with company contribution toward premiums. Coverage begins after 60 days.",
      },
      {
        name: "Dental Coverage",
        detail: "Preventive care, basic and major services covered. Low copays for routine visits.",
      },
      {
        name: "Vision Insurance",
        detail: "Annual eye exams, frames, lenses, and contact lens allowance included.",
      },
      {
        name: "Life Insurance",
        detail: "Company-paid basic life insurance with optional supplemental coverage available.",
      },
      {
        name: "Disability Insurance",
        detail: "Short-term and long-term disability coverage to protect your income.",
      },
    ],
  },
  {
    title: "Financial Benefits",
    description: "Build your future with our competitive financial benefits.",
    benefits: [
      {
        name: "Competitive Pay",
        detail: "Top-tier CPM rates with regular increases based on experience and performance.",
      },
      {
        name: "401(k) Retirement",
        detail: "Company matches up to 4% of your contributions. Immediate vesting.",
      },
      {
        name: "Weekly Pay",
        detail: "Direct deposit every Friday. No waiting around for your money.",
      },
      {
        name: "Fuel Bonus",
        detail: "Earn extra when you beat fuel efficiency targets.",
      },
      {
        name: "Sign-On Bonus",
        detail: "Up to $7,500 for qualified experienced drivers. Paid out over first year.",
      },
      {
        name: "Referral Bonus",
        detail: "Earn $2,500 for every driver you refer who stays 90 days.",
      },
    ],
  },
  {
    title: "Time Off & Flexibility",
    description: "We understand the importance of work-life balance.",
    benefits: [
      {
        name: "Paid Vacation",
        detail: "Accrue paid time off from day one. Use it for true time away.",
      },
      {
        name: "Paid Holidays",
        detail: "6 paid holidays per year, even when you're on the road.",
      },
      {
        name: "Flexible Home Time",
        detail: "We work with you to get home when you need to be there.",
      },
      {
        name: "Rider Policy",
        detail: "Bring a passenger along for the ride. Free rider program for spouses.",
      },
      {
        name: "Pet Policy",
        detail: "Your furry co-pilot is welcome. Small deposit required.",
      },
    ],
  },
  {
    title: "Driver Support",
    description: "Resources to help you succeed on the road.",
    benefits: [
      {
        name: "24/7 Dispatch",
        detail: "Support whenever you need it. Our team is always available.",
      },
      {
        name: "Breakdown Assistance",
        detail: "24/7 roadside assistance and rapid response for breakdowns.",
      },
      {
        name: "ELD & Technology",
        detail: "Latest ELD technology with driver-friendly apps and support.",
      },
      {
        name: "Training Programs",
        detail: "Ongoing safety training and professional development opportunities.",
      },
      {
        name: "Driver Lounges",
        detail: "Clean, comfortable facilities at our terminals with showers and amenities.",
      },
    ],
  },
];

const payRanges = [
  { type: "Company Drivers", range: "$0.55 - $0.68 CPM", note: "Based on experience" },
  { type: "Owner-Operators", range: "80-85%", note: "Of linehaul revenue" },
  { type: "Team Drivers", range: "$0.70+ CPM", note: "Split between team" },
  { type: "Training Pay", range: "$800/week", note: "During orientation" },
];

export default function BenefitsPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[var(--navy)] pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-[var(--orange)]/20 text-[var(--orange)] text-sm font-semibold rounded-full mb-6">
              Benefits & Pay
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              More Than Just a Paycheck
            </h1>
            <p className="text-white/70 text-lg">
              We invest in our drivers with industry-leading benefits, competitive pay, and the support you need to build a successful career.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pay Overview */}
      <Section background="white" padding="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
            Competitive Pay
          </h2>
          <p className="text-[var(--gray)] max-w-2xl mx-auto">
            Our pay packages are designed to reward experience and performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {payRanges.map((pay, index) => (
            <motion.div
              key={pay.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--gray-light)] rounded-xl p-6 text-center"
            >
              <p className="text-sm text-[var(--gray)] mb-1">{pay.type}</p>
              <p className="text-2xl font-bold text-[var(--navy)] mb-1">{pay.range}</p>
              <p className="text-xs text-[var(--orange)]">{pay.note}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits Categories */}
      {benefitCategories.map((category, categoryIndex) => (
        <Section
          key={category.title}
          background={categoryIndex % 2 === 0 ? "light" : "white"}
          padding="lg"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)] mb-2">
              {category.title}
            </h2>
            <p className="text-[var(--gray)]">{category.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-[var(--orange)]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--success)]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-[var(--success)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)] mb-1">{benefit.name}</h3>
                    <p className="text-sm text-[var(--gray)]">{benefit.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section background="navy" padding="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the Team?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            See why thousands of drivers have chosen Quickstar for their career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="orange" size="lg" href="/drivers/apply">
              Apply Now
            </Button>
            <Button variant="secondary" size="lg" href="/drivers/jobs">
              View Open Positions
            </Button>
          </div>
        </motion.div>
      </Section>

      <CTABanner
        headline="Questions About Benefits?"
        description="Our recruiting team is here to answer any questions about pay, benefits, or what it's like to drive for Quickstar."
        primaryCta={{ label: "Call a Recruiter", href: "tel:+18005551234" }}
        secondaryCta={{ label: "Email Us", href: "mailto:recruiting@quickstartransportation.com" }}
        variant="split"
      />
    </>
  );
}
