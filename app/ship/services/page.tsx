"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";

const services = [
  {
    id: "ftl",
    title: "Full Truckload (FTL)",
    description:
      "When you need the entire trailer for your shipment, our FTL service delivers. Direct point-to-point delivery with maximum efficiency and security for your freight.",
    features: [
      "Direct delivery - no handling between pickup and delivery",
      "Flexible scheduling to meet your timeline",
      "Real-time GPS tracking on every load",
      "Dedicated capacity for high-volume shippers",
    ],
    bestFor: "Shipments over 10,000 lbs or requiring full trailer space",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  },
  {
    id: "ltl",
    title: "Less-Than-Truckload (LTL)",
    description:
      "Share trailer space and share the cost. Our LTL service is perfect for smaller shipments that don't require a full truck, without sacrificing reliability.",
    features: [
      "Cost-effective for smaller shipments",
      "Consolidated freight network",
      "Flexible pickup windows",
      "Nationwide coverage",
    ],
    bestFor: "Shipments between 150-10,000 lbs",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop",
  },
  {
    id: "dedicated",
    title: "Dedicated Fleet Services",
    description:
      "For shippers with consistent transportation needs, our dedicated fleet service provides exclusive capacity, consistent drivers, and customized solutions.",
    features: [
      "Consistent drivers who know your business",
      "Dedicated equipment and capacity",
      "Custom routing and scheduling",
      "Priority service level",
    ],
    bestFor: "Regular, ongoing shipping needs",
    image:
      "https://images.unsplash.com/photo-1545608444-f045a6db6133?w=800&h=600&fit=crop",
  },
  {
    id: "expedited",
    title: "Expedited & Time-Critical",
    description:
      "When every hour counts, our expedited services deliver. Team drivers, guaranteed delivery windows, and 24/7 dispatch ensure your time-sensitive freight arrives on schedule.",
    features: [
      "Team drivers for non-stop delivery",
      "Hot shot services for urgent needs",
      "Guaranteed delivery windows",
      "24/7 dispatch and support",
    ],
    bestFor: "Time-sensitive and emergency shipments",
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop",
  },
];

const equipmentTypes = [
  {
    type: "Dry Van",
    description: "Enclosed trailers for general freight protection from weather and theft.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    type: "Flatbed",
    description: "Open trailers for oversized, heavy, or irregularly shaped cargo.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10" />
      </svg>
    ),
  },
  {
    type: "Refrigerated",
    description: "Temperature-controlled trailers for perishable and sensitive goods.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
  },
  {
    type: "Step Deck",
    description: "Lowered deck height for taller freight that exceeds standard height limits.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive Freight Solutions
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              From single shipments to dedicated fleet partnerships, Quickstar has the expertise, equipment, and network to move your freight safely and efficiently.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Detail */}
      <Section background="white" padding="xl">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
                  {service.title}
                </h2>
                <p className="text-[var(--gray)] text-lg mb-6">{service.description}</p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[var(--charcoal)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-[var(--gray-light)] rounded-lg p-4 mb-6">
                  <p className="text-sm text-[var(--gray)]">Best for:</p>
                  <p className="font-semibold text-[var(--navy)]">{service.bestFor}</p>
                </div>

                <Button variant="orange" href="/ship/quote">
                  Get a Quote
                </Button>
              </div>

              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative h-[350px] rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Equipment Types */}
      <Section background="light" padding="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
            Equipment Types
          </h2>
          <p className="text-[var(--gray)] text-lg max-w-2xl mx-auto">
            We maintain a diverse fleet to handle any type of freight you need to move.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipmentTypes.map((equipment, index) => (
            <motion.div
              key={equipment.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--navy)]/5 flex items-center justify-center mx-auto mb-4 text-[var(--navy)]">
                {equipment.icon}
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-2">{equipment.type}</h3>
              <p className="text-sm text-[var(--gray)]">{equipment.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTABanner
        headline="Ready to Ship?"
        description="Get a competitive quote for your freight in minutes. Our team is standing by to help."
        primaryCta={{ label: "Get a Quote", href: "/ship/quote" }}
        secondaryCta={{ label: "Contact Sales", href: "/contact" }}
        variant="orange"
      />
    </>
  );
}
