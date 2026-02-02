"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";

const contactInfo = [
  {
    title: "Phone",
    value: "(800) 555-1234",
    href: "tel:+18005551234",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    description: "Mon-Fri, 7am-7pm EST",
  },
  {
    title: "Email",
    value: "info@quickstartransportation.com",
    href: "mailto:info@quickstartransportation.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: "We respond within 24 hours",
  },
  {
    title: "Headquarters",
    value: "Atlanta, GA",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: "123 Logistics Way, Atlanta, GA 30301",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="bg-[var(--navy)] pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Have a question or need assistance? We're here to help. Reach out and our team will get back to you promptly.
            </p>
          </motion.div>
        </div>
      </div>

      <Section background="light" padding="lg">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--orange)]/10 flex items-center justify-center text-[var(--orange)] flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)] mb-1">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-[var(--orange)] font-semibold hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-[var(--charcoal)]">{info.value}</p>
                    )}
                    <p className="text-sm text-[var(--gray)] mt-1">{info.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[var(--navy)] rounded-xl p-6 text-white"
            >
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/ship/quote" className="block hover:text-[var(--orange)] transition-colors">
                  → Request a Shipping Quote
                </a>
                <a href="/drivers/apply" className="block hover:text-[var(--orange)] transition-colors">
                  → Apply to Drive
                </a>
                <a href="/ship/tracking" className="block hover:text-[var(--orange)] transition-colors">
                  → Track a Shipment
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            {isSubmitted ? (
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--success)] flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-3">
                  Message Sent!
                </h2>
                <p className="text-[var(--gray)] mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button variant="primary" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                  Send Us a Message
                </h2>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input label="Name" name="name" required />
                    <Input label="Email" name="email" type="email" required />
                  </div>
                  <Input label="Phone" name="phone" type="tel" />
                  <Select
                    label="I am a..."
                    name="type"
                    options={[
                      { value: "shipper", label: "Shipper (need to ship freight)" },
                      { value: "driver", label: "Driver (interested in jobs)" },
                      { value: "partner", label: "Business Partner" },
                      { value: "other", label: "Other" },
                    ]}
                    required
                  />
                  <Textarea
                    label="Message"
                    name="message"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div className="mt-6">
                  <Button
                    variant="orange"
                    size="lg"
                    fullWidth
                    type="submit"
                    loading={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="white" padding="lg">
        <div className="relative h-[400px] rounded-2xl overflow-hidden bg-[var(--gray-light)]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--orange)] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-2">
                Quickstar Transportation
              </h3>
              <p className="text-[var(--gray)]">
                123 Logistics Way<br />
                Atlanta, GA 30301
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
