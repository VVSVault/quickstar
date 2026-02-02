"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { jobs, Job } from "@/data/jobs";

type FilterType = "All" | Job["type"];
type FilterHomeTime = "All" | Job["homeTime"];

export default function JobsPage() {
  const [typeFilter, setTypeFilter] = useState<FilterType>("All");
  const [homeTimeFilter, setHomeTimeFilter] = useState<FilterHomeTime>("All");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (typeFilter !== "All" && job.type !== typeFilter) return false;
      if (homeTimeFilter !== "All" && job.homeTime !== homeTimeFilter) return false;
      return true;
    });
  }, [typeFilter, homeTimeFilter]);

  const jobTypes: FilterType[] = ["All", "Dedicated", "Regional", "OTR", "Owner-Operator"];
  const homeTimes: FilterHomeTime[] = ["All", "Daily", "Weekly", "Bi-Weekly", "2+ Weeks"];

  return (
    <>
      {/* Page Header */}
      <div className="bg-[var(--navy)] pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Open Driver Positions
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Find the route that fits your life. Browse our current openings and start your journey with Quickstar.
            </p>
          </motion.div>
        </div>
      </div>

      <Section background="light" padding="lg">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-sm mb-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Job Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-[var(--charcoal)] mb-3">
                Job Type
              </label>
              <div className="flex flex-wrap gap-2">
                {jobTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setTypeFilter(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      typeFilter === type
                        ? "bg-[var(--navy)] text-white"
                        : "bg-[var(--gray-light)] text-[var(--charcoal)] hover:bg-gray-200"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Home Time Filter */}
            <div>
              <label className="block text-sm font-semibold text-[var(--charcoal)] mb-3">
                Home Time
              </label>
              <div className="flex flex-wrap gap-2">
                {homeTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setHomeTimeFilter(time)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      homeTimeFilter === time
                        ? "bg-[var(--orange)] text-white"
                        : "bg-[var(--gray-light)] text-[var(--charcoal)] hover:bg-gray-200"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-[var(--gray)]">
              Showing <span className="font-semibold text-[var(--navy)]">{filteredJobs.length}</span>{" "}
              {filteredJobs.length === 1 ? "position" : "positions"}
            </p>
          </div>
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/drivers/jobs/${job.slug}`}
                  className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[var(--orange)]/30 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="navy">{job.type}</Badge>
                        <Badge variant="default">{job.region}</Badge>
                        <Badge variant="success">{job.homeTime} Home</Badge>
                      </div>

                      <h2 className="text-xl font-bold text-[var(--navy)] group-hover:text-[var(--orange)] transition-colors mb-2">
                        {job.title} - {job.region}
                      </h2>

                      <div className="flex flex-wrap gap-4 text-sm text-[var(--gray)]">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          {job.payRange}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          {job.avgWeeklyMiles} miles/week
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {job.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-medium rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button variant="primary" size="md" className="whitespace-nowrap">
                        View Details
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gray-light)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--gray)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-2">No positions found</h3>
              <p className="text-[var(--gray)] mb-6">
                Try adjusting your filters or submit a general application.
              </p>
              <Button variant="orange" href="/drivers/apply">
                Submit General Application
              </Button>
            </motion.div>
          )}
        </div>

        {/* General Application CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[var(--navy)] rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Don't see the right fit?
          </h3>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Submit a general application and we'll contact you when positions matching your preferences open up.
          </p>
          <Button variant="orange" size="lg" href="/drivers/apply">
            Submit General Application
          </Button>
        </motion.div>
      </Section>
    </>
  );
}
