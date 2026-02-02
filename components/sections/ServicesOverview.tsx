"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const services = [
  {
    id: "ftl",
    title: "Truckload (FTL)",
    description: "Full trailer capacity for your largest shipments. Direct point-to-point delivery with no stops.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    features: ["Dry Van", "Flatbed", "Refrigerated"],
  },
  {
    id: "ltl",
    title: "Less-Than-Truckload",
    description: "Cost-effective shared trailer space for smaller shipments. Perfect for 150-10,000 lbs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    features: ["Consolidated Shipping", "Flexible Pickup", "Nationwide Network"],
  },
  {
    id: "dedicated",
    title: "Dedicated Services",
    description: "Consistent capacity for your ongoing shipping needs. Your drivers, your trucks, your schedule.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    features: ["Consistent Drivers", "Custom Solutions", "Priority Capacity"],
  },
  {
    id: "expedited",
    title: "Expedited Freight",
    description: "Time-critical freight solutions when every hour counts. Team drivers and guaranteed windows.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ["Hot Shots", "Team Drivers", "Guaranteed Delivery"],
  },
];

export default function ServicesOverview() {
  return (
    <Section background="white" padding="xl">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <span className="inline-block px-4 py-1 bg-[var(--orange)]/10 text-[var(--orange)] text-sm font-semibold rounded-full mb-4">
          Shipping Solutions
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-4">
          Logistics That Move Your Business
        </h2>
        <p className="text-[var(--gray)] text-lg max-w-2xl mx-auto">
          From full truckloads to time-sensitive freight, we have the capacity and expertise to handle it all.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[var(--orange)]/30 hover:shadow-xl transition-all duration-300 card-hover"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-[var(--navy)]/5 flex items-center justify-center mb-5 text-[var(--navy)] group-hover:bg-[var(--orange)] group-hover:text-white transition-all duration-300">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[var(--navy)] mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[var(--gray)] mb-4 text-sm leading-relaxed">
              {service.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 bg-[var(--gray-light)] text-[var(--charcoal)] text-xs font-medium rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
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
  );
}
