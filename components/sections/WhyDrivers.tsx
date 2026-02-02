"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const features = [
  {
    title: "Competitive Pay",
    description: "Earn what you deserve with industry-leading CPM rates, consistent miles, and performance bonuses.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stats: "$0.55-0.68 CPM",
  },
  {
    title: "Home Time",
    description: "We respect your time at home. Choose from dedicated routes with weekly home time or regional runs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    stats: "Weekly Options",
  },
  {
    title: "Newer Equipment",
    description: "Drive late-model trucks with the latest safety features, APUs, and technology to keep you comfortable.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    stats: "< 2yr Avg Age",
  },
];

const testimonial = {
  quote: "Quickstar treats their drivers like family. The pay is consistent, the equipment is top-notch, and I actually get to see my family every week. Best decision I ever made.",
  author: "Michael T.",
  role: "Regional Driver, 3 Years",
};

export default function WhyDrivers() {
  return (
    <Section background="light" padding="xl" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--navy)]/5 to-transparent pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-[var(--navy)]/10 text-[var(--navy)] text-sm font-semibold rounded-full mb-4">
              Driver Careers
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-6">
              Built for Drivers, By People Who Get It
            </h2>
            <p className="text-[var(--gray)] text-lg mb-8">
              We know what it takes to succeed on the road. That's why we've built a company that puts drivers first—because when you succeed, we all succeed.
            </p>
          </motion.div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-lg bg-[var(--orange)]/10 flex items-center justify-center text-[var(--orange)] flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-[var(--navy)]">{feature.title}</h3>
                    <span className="text-sm font-semibold text-[var(--orange)]">
                      {feature.stats}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--gray)]">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Button variant="primary" size="lg" href="/drivers">
              Explore Driver Opportunities
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </motion.div>
        </div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--orange)]/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--navy)]/10 rounded-full blur-2xl" />

          <div className="relative bg-[var(--navy)] rounded-3xl p-8 md:p-10 text-white">
            {/* Quote mark */}
            <svg
              className="w-16 h-16 text-white/10 absolute top-6 left-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <div className="relative z-10">
              <p className="text-xl md:text-2xl leading-relaxed mb-8 font-medium">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--orange)] flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>

            {/* Star rating */}
            <div className="absolute bottom-8 right-8 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[var(--orange)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
