"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Job } from "@/data/jobs";

interface Props {
  job: Job;
}

export default function JobDetailContent({ job }: Props) {
  return (
    <>
      {/* Header */}
      <div className="bg-[var(--navy)] pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/drivers" className="hover:text-white transition-colors">
                  Drivers
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/drivers/jobs" className="hover:text-white transition-colors">
                  Jobs
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">{job.title}</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="orange">{job.type}</Badge>
              <Badge variant="default" className="bg-white/10 text-white border-white/20">
                {job.region}
              </Badge>
              <Badge variant="success">{job.homeTime} Home</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {job.title} - {job.region}
            </h1>

            <div className="flex flex-wrap gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                {job.payRange}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {job.avgWeeklyMiles} miles/week avg
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sticky Apply Bar (Mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
        <Button variant="orange" fullWidth href={`/drivers/apply?job=${job.slug}`}>
          Apply for This Position
        </Button>
      </div>

      <Section background="white" padding="lg" className="pb-24 lg:pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-3"
            >
              {job.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-4 py-2 bg-[var(--orange)]/10 text-[var(--orange)] font-semibold rounded-lg"
                >
                  {highlight}
                </span>
              ))}
            </motion.div>

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">Overview</h2>
              <p className="text-[var(--gray)] leading-relaxed">{job.description}</p>
            </motion.div>

            {/* Compensation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[var(--gray-light)] rounded-xl p-6"
            >
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">Compensation</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-[var(--gray)]">Pay Rate</p>
                  <p className="text-xl font-bold text-[var(--navy)]">{job.payRange}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-[var(--gray)]">Avg Weekly Miles</p>
                  <p className="text-xl font-bold text-[var(--navy)]">{job.avgWeeklyMiles}</p>
                </div>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">Benefits</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {job.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[var(--success)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[var(--charcoal)]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--orange)] mt-2 flex-shrink-0" />
                    <span className="text-[var(--charcoal)]">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Equipment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">Equipment</h2>
              <div className="bg-[var(--navy)]/5 rounded-xl p-6">
                <ul className="space-y-3">
                  {job.equipment.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[var(--navy)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-[var(--charcoal)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-24"
            >
              {/* Apply Card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-[var(--navy)] mb-4">
                  Apply for This Position
                </h3>
                <p className="text-[var(--gray)] text-sm mb-6">
                  Ready to join the Quickstar team? Submit your application and a recruiter will contact you within 24-48 hours.
                </p>
                <Button
                  variant="orange"
                  fullWidth
                  size="lg"
                  href={`/drivers/apply?job=${job.slug}`}
                >
                  Apply Now
                </Button>
                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <p className="text-sm text-[var(--gray)]">
                    Questions? Call us at
                  </p>
                  <a
                    href="tel:+18005551234"
                    className="text-lg font-bold text-[var(--navy)] hover:text-[var(--orange)] transition-colors"
                  >
                    (800) 555-1234
                  </a>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-[var(--gray-light)] rounded-2xl p-6">
                <h3 className="font-bold text-[var(--navy)] mb-4">Quick Facts</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-[var(--gray)]">Job Type</dt>
                    <dd className="font-semibold text-[var(--charcoal)]">{job.type}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-[var(--gray)]">Region</dt>
                    <dd className="font-semibold text-[var(--charcoal)]">{job.region}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-[var(--gray)]">Home Time</dt>
                    <dd className="font-semibold text-[var(--charcoal)]">{job.homeTime}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-[var(--gray)]">Pay Range</dt>
                    <dd className="font-semibold text-[var(--charcoal)]">{job.payRange}</dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
