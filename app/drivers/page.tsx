"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTABanner from "@/components/sections/CTABanner";

const jobTypes = [
  {
    title: "Dedicated Routes",
    description: "Consistent routes with the same customers. Know your schedule, plan your life.",
    badge: "Home Weekly",
    highlights: ["Predictable schedule", "Same customers", "Weekly home time"],
    href: "/drivers/jobs?type=Dedicated",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
  },
  {
    title: "Regional",
    description: "Multi-state runs that keep you closer to home. The perfect balance.",
    badge: "Home 1-2 Weeks",
    highlights: ["Regional coverage", "Good miles", "Regular home time"],
    href: "/drivers/jobs?type=Regional",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
  {
    title: "Over-the-Road",
    description: "See the country and maximize your earnings with our highest-paying positions.",
    badge: "Top Earners",
    highlights: ["Maximum miles", "Best equipment", "Highest pay"],
    href: "/drivers/jobs?type=OTR",
    image: "https://images.unsplash.com/photo-1545608444-f045a6db6133?w=600&h=400&fit=crop",
  },
  {
    title: "Owner-Operators",
    description: "Partner with us and run your business your way. Competitive rates, your rules.",
    badge: "Be Your Own Boss",
    highlights: ["80-85% linehaul", "Fuel discounts", "No forced dispatch"],
    href: "/drivers/jobs?type=Owner-Operator",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop",
  },
];

const benefits = [
  { icon: "💊", title: "Medical, Dental, Vision", description: "Full coverage for you and your family" },
  { icon: "💰", title: "401(k) Match", description: "Company matches up to 4%" },
  { icon: "🏖️", title: "Paid Vacation", description: "Earn paid time off from day one" },
  { icon: "🎁", title: "Sign-On Bonus", description: "Up to $7,500 for qualified drivers" },
  { icon: "👥", title: "Referral Bonus", description: "Earn $2,500 for each referral" },
  { icon: "🐕", title: "Rider & Pet Policy", description: "Bring your co-pilot along" },
  { icon: "📅", title: "Weekly Pay", description: "Direct deposit every week" },
  { icon: "📞", title: "24/7 Support", description: "Help whenever you need it" },
];

const requirements = [
  "Valid CDL-A license",
  "Minimum 3-12 months experience (varies by position)",
  "Clean MVR with no major violations",
  "Pass DOT physical and drug screen",
  "21+ years of age",
  "No DUI/DWI in past 5 years",
];

export default function DriversPage() {
  return (
    <>
      <Hero
        headline="Your Next Mile Starts Here"
        subheadline="Quickstar is hiring experienced CDL-A drivers for dedicated, regional, and OTR routes. Competitive pay, consistent home time, and the respect you deserve."
        primaryCta={{ label: "View Open Positions", href: "/drivers/jobs" }}
        secondaryCta={{ label: "Apply Now", href: "/drivers/apply" }}
        imageSrc="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&h=1080&fit=crop"
        overlay="gradient"
        height="large"
      />

      {/* Job Types Section */}
      <Section background="white" padding="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[var(--orange)]/10 text-[var(--orange)] text-sm font-semibold rounded-full mb-4">
            Find Your Fit
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-4">
            Choose Your Journey
          </h2>
          <p className="text-[var(--gray)] text-lg max-w-2xl mx-auto">
            From dedicated routes with daily home time to cross-country OTR runs, we have opportunities to match your lifestyle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {jobTypes.map((job, index) => (
            <motion.a
              key={job.title}
              href={job.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[var(--orange)]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={job.image}
                  alt={job.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge variant="orange" className="absolute top-4 left-4">
                  {job.badge}
                </Badge>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--navy)] mb-2 group-hover:text-[var(--orange)] transition-colors">
                  {job.title}
                </h3>
                <p className="text-[var(--gray)] mb-4">{job.description}</p>
                <ul className="space-y-2">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-[var(--charcoal)]">
                      <svg className="w-4 h-4 text-[var(--success)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center text-[var(--orange)] font-semibold">
                  View Positions
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="light" padding="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[var(--navy)]/10 text-[var(--navy)] text-sm font-semibold rounded-full mb-4">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-4">
            More Than a Paycheck
          </h2>
          <p className="text-[var(--gray)] text-lg max-w-2xl mx-auto">
            We take care of our drivers with a comprehensive benefits package that supports you and your family.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow"
            >
              <span className="text-3xl mb-3 block">{benefit.icon}</span>
              <h3 className="font-bold text-[var(--navy)] mb-1">{benefit.title}</h3>
              <p className="text-sm text-[var(--gray)]">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button variant="primary" size="lg" href="/drivers/benefits">
            See Full Benefits Details
          </Button>
        </motion.div>
      </Section>

      {/* Equipment Section */}
      <Section background="white" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-[var(--orange)]/10 text-[var(--orange)] text-sm font-semibold rounded-full mb-4">
              Equipment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
              The Best Trucks on the Road
            </h2>
            <p className="text-[var(--gray)] text-lg mb-8">
              We invest in top-quality equipment because we know your truck is your office. All our tractors are late-model, well-maintained, and equipped with the features you need to be comfortable and productive.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Average Truck Age", value: "< 2 Years" },
                { label: "Brands", value: "Freightliner, Kenworth, Peterbilt" },
                { label: "APU Equipped", value: "100%" },
                { label: "ELD Compliant", value: "All Trucks" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[var(--gray-light)] rounded-lg p-4">
                  <p className="text-sm text-[var(--gray)]">{stat.label}</p>
                  <p className="font-bold text-[var(--navy)]">{stat.value}</p>
                </div>
              ))}
            </div>

            <Button variant="primary" size="lg" href="/drivers/equipment">
              See Our Fleet
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop"
                alt="Quickstar Fleet"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[var(--orange)] text-white rounded-xl p-6 shadow-xl">
              <p className="text-4xl font-bold">2024</p>
              <p className="text-sm opacity-90">Latest Model Year</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Requirements Section */}
      <Section background="navy" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What You Need to Apply
            </h2>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <motion.li
                  key={req}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-white/90"
                >
                  <div className="w-6 h-6 rounded-full bg-[var(--orange)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {req}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-[var(--navy)] mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-[var(--gray)] mb-6">
              Our application takes less than 10 minutes. A recruiter will contact you within 24-48 hours.
            </p>
            <Button variant="orange" size="lg" fullWidth href="/drivers/apply">
              Start Your Application
            </Button>
            <p className="mt-4 text-sm text-[var(--gray)]">
              Questions? Call us at{" "}
              <a href="tel:+18005551234" className="text-[var(--orange)] font-semibold">
                (800) 555-1234
              </a>
            </p>
          </motion.div>
        </div>
      </Section>

      <CTABanner
        headline="Join the Quickstar Team Today"
        description="Take the first step toward a rewarding career with competitive pay, great benefits, and the respect you deserve."
        primaryCta={{ label: "Apply Now", href: "/drivers/apply" }}
        secondaryCta={{ label: "View All Jobs", href: "/drivers/jobs" }}
        variant="orange"
      />
    </>
  );
}
