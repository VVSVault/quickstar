"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Input, Select, Textarea, Checkbox } from "@/components/ui/Input";

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
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
                Request a Quote
              </h1>
            </motion.div>
          </div>
        </div>

        <Section background="white" padding="xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full bg-[var(--success)] flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">
              Quote Request Received!
            </h2>
            <p className="text-[var(--gray)] text-lg mb-8">
              Thank you for your interest in Quickstar Transportation. Our team will review your shipment details and respond with a competitive quote within 2-4 business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="/">
                Return Home
              </Button>
              <Button variant="ghost" href="tel:+18005551234">
                Call Us: (800) 555-1234
              </Button>
            </div>
          </motion.div>
        </Section>
      </>
    );
  }

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
              Request a Quote
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Tell us about your shipment and we'll provide a competitive quote within 2-4 business hours.
            </p>
          </motion.div>
        </div>
      </div>

      <Section background="light" padding="lg">
        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[var(--navy)] mb-4">
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Company Name" name="company" required />
                <Input label="Contact Name" name="contact" required />
                <Input label="Email" name="email" type="email" required />
                <Input label="Phone" name="phone" type="tel" required />
              </div>
            </div>

            {/* Shipment Details */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[var(--navy)] mb-4">
                Shipment Details
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Origin (City, State or ZIP)" name="origin" placeholder="e.g., Atlanta, GA" required />
                <Input label="Destination (City, State or ZIP)" name="destination" placeholder="e.g., Dallas, TX" required />
                <Input label="Approximate Weight (lbs)" name="weight" type="number" required />
                <Input label="Dimensions (L x W x H)" name="dimensions" placeholder="Optional" />
                <Select
                  label="Commodity Type"
                  name="commodity"
                  options={[
                    { value: "general", label: "General Freight" },
                    { value: "food", label: "Food & Beverage" },
                    { value: "manufacturing", label: "Manufacturing" },
                    { value: "retail", label: "Retail" },
                    { value: "other", label: "Other" },
                  ]}
                  required
                />
                <Select
                  label="Service Type"
                  name="service"
                  options={[
                    { value: "ftl", label: "Full Truckload (FTL)" },
                    { value: "ltl", label: "Less-Than-Truckload (LTL)" },
                    { value: "dedicated", label: "Dedicated" },
                    { value: "expedited", label: "Expedited" },
                  ]}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Checkbox label="Hazmat shipment" name="hazmat" />
                <Checkbox label="Temperature controlled required" name="tempControlled" />
              </div>
            </div>

            {/* Timing */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[var(--navy)] mb-4">
                Timing
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Desired Pickup Date" name="pickupDate" type="date" required />
                <Input label="Delivery Deadline (if time-sensitive)" name="deliveryDate" type="date" />
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mb-8">
              <Textarea
                label="Additional Notes"
                name="notes"
                placeholder="Any special requirements, handling instructions, or additional information..."
              />
            </div>

            <Button
              variant="orange"
              size="lg"
              fullWidth
              type="submit"
              loading={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Quote Request"}
            </Button>

            <p className="text-center text-sm text-[var(--gray)] mt-4">
              Need immediate assistance? Call us at{" "}
              <a href="tel:+18005551234" className="text-[var(--orange)] font-semibold">
                (800) 555-1234
              </a>
            </p>
          </motion.form>
        </div>
      </Section>
    </>
  );
}
