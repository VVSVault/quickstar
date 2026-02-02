"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSearching(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSearching(false);
    setHasSearched(true);
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
              Track Your Shipment
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Enter your PRO number, BOL, or reference number to check the status of your shipment.
            </p>
          </motion.div>
        </div>
      </div>

      <Section background="light" padding="lg">
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Enter PRO #, BOL #, or Reference #"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  required
                />
              </div>
              <Button
                variant="orange"
                size="lg"
                type="submit"
                loading={isSearching}
                className="whitespace-nowrap"
              >
                {isSearching ? "Searching..." : "Track Shipment"}
              </Button>
            </div>
          </motion.form>

          {hasSearched && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--navy)]/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[var(--navy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">
                  Self-Service Tracking Coming Soon
                </h2>
                <p className="text-[var(--gray)] mb-6 max-w-md mx-auto">
                  We're working on a self-service tracking portal. For now, please contact us directly for real-time shipment updates.
                </p>

                <div className="bg-[var(--gray-light)] rounded-xl p-6 max-w-sm mx-auto">
                  <h3 className="font-bold text-[var(--navy)] mb-4">Contact Us for Tracking</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+18005551234"
                      className="flex items-center justify-center gap-2 text-[var(--orange)] font-semibold"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      (800) 555-1234
                    </a>
                    <a
                      href="mailto:tracking@quickstartransportation.com"
                      className="flex items-center justify-center gap-2 text-[var(--navy)] hover:text-[var(--orange)] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      tracking@quickstartransportation.com
                    </a>
                  </div>
                  <p className="text-xs text-[var(--gray)] mt-4">
                    Please have your reference number ready when you call.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 grid md:grid-cols-2 gap-4"
          >
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-[var(--navy)] mb-2">What is a PRO Number?</h3>
              <p className="text-sm text-[var(--gray)]">
                The PRO (Progressive Rotating Order) number is a unique tracking number assigned to your shipment. You'll find it on your bill of lading or in your confirmation email.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-[var(--navy)] mb-2">Need Help?</h3>
              <p className="text-sm text-[var(--gray)]">
                If you can't find your tracking number or have questions about your shipment, our customer service team is available Monday-Friday, 7am-7pm EST.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
