"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";

const services = [
  {
    id: "ftl",
    title: "Truckload (FTL)",
    description: "Full trailer capacity for your largest shipments. Direct point-to-point delivery with maximum efficiency.",
    features: ["Dry Van", "Flatbed", "Refrigerated"],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    bestFor: "10,000+ lbs or full trailer",
  },
  {
    id: "ltl",
    title: "Less-Than-Truckload",
    description: "Cost-effective shared trailer space for smaller shipments. Flexible pickup and nationwide coverage.",
    features: ["Consolidated Shipping", "Flexible Pickup", "Nationwide Network"],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    bestFor: "150-10,000 lbs",
  },
  {
    id: "dedicated",
    title: "Dedicated Services",
    description: "Consistent capacity tailored to your business. Your drivers, your trucks, your schedule.",
    features: ["Consistent Drivers", "Custom Solutions", "Priority Capacity"],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    bestFor: "Ongoing shipping needs",
  },
  {
    id: "expedited",
    title: "Expedited Freight",
    description: "Time-critical solutions when every hour counts. Team drivers and guaranteed delivery windows.",
    features: ["Hot Shots", "Team Drivers", "Guaranteed Delivery"],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    bestFor: "Time-sensitive shipments",
  },
];

const valueProps = [
  {
    title: "Reliable Capacity",
    description: "We have the trucks when you need them. Our extensive network ensures you never miss a shipment.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Competitive Pricing",
    description: "Transparent rates with no hidden fees. We work to provide the best value for your shipping needs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Tracking",
    description: "Know where your freight is at all times. GPS tracking and proactive updates keep you informed.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    description: "Your account manager is a phone call away. We're here to solve problems before they become issues.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const testimonial = {
  quote: "Quickstar has been our go-to carrier for three years now. Their rates are fair, their drivers are professional, and their communication is top-notch. We've never had an issue they couldn't solve quickly.",
  author: "Sarah M.",
  role: "Logistics Manager, Regional Manufacturing Co.",
};

export default function ShipPage() {
  return (
    <>
      <Hero
        headline="Freight Solutions You Can Count On"
        subheadline="Reliable capacity, competitive rates, and real-time visibility for your shipments. Let Quickstar handle your logistics while you focus on growing your business."
        primaryCta={{ label: "Get a Quote", href: "/ship/quote" }}
        secondaryCta={{ label: "Track a Shipment", href: "/ship/tracking" }}
        imageSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop"
        overlay="gradient"
        height="large"
      />

      {/* Services Section */}
      <Section background="white" padding="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[var(--orange)]/10 text-[var(--orange)] text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-4">
            Comprehensive Shipping Solutions
          </h2>
          <p className="text-[var(--gray)] text-lg max-w-2xl mx-auto">
            From full truckloads to time-sensitive freight, we have the expertise and equipment to move your goods safely and efficiently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[var(--orange)]/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--navy)]/5 flex items-center justify-center mb-6 text-[var(--navy)] group-hover:bg-[var(--orange)] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-[var(--navy)] mb-3">
                {service.title}
              </h3>

              <p className="text-[var(--gray)] mb-4">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-[var(--gray-light)] text-[var(--charcoal)] text-sm font-medium rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <p className="text-sm text-[var(--orange)] font-semibold">
                Best for: {service.bestFor}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="orange" size="lg" href="/ship/quote">
            Request a Custom Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </motion.div>
      </Section>

      {/* Why Quickstar */}
      <Section background="light" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-[var(--navy)]/10 text-[var(--navy)] text-sm font-semibold rounded-full mb-4">
              Why Quickstar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
              A Partner You Can Trust
            </h2>
            <p className="text-[var(--gray)] text-lg mb-8">
              We understand that your freight is more than cargo—it's your business, your customers, and your reputation. That's why we treat every shipment like it's our own.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--orange)]/10 flex items-center justify-center text-[var(--orange)] flex-shrink-0">
                    {prop.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)] mb-1">{prop.title}</h3>
                    <p className="text-sm text-[var(--gray)]">{prop.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--orange)]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--navy)]/10 rounded-full blur-2xl" />

            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl">
              <svg
                className="w-12 h-12 text-[var(--orange)]/20 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-xl text-[var(--charcoal)] leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--navy)] flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[var(--navy)]">{testimonial.author}</p>
                  <p className="text-sm text-[var(--gray)]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Coverage Map */}
      <Section background="navy" padding="lg">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nationwide Coverage
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              From coast to coast, our network of drivers and partners ensures your freight gets where it needs to go—on time, every time.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="text-center">
                <p className="text-4xl font-bold text-[var(--orange)]">48</p>
                <p className="text-white/70">States Served</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[var(--orange)]">500+</p>
                <p className="text-white/70">Monthly Loads</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[var(--orange)]">98%</p>
                <p className="text-white/70">On-Time Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <CTABanner
        headline="Ready to Ship?"
        description="Get a competitive quote for your freight in minutes. Our team is standing by to help."
        primaryCta={{ label: "Get a Quote", href: "/ship/quote" }}
        secondaryCta={{ label: "Call Us Now", href: "tel:+18005551234" }}
        variant="orange"
      />
    </>
  );
}
