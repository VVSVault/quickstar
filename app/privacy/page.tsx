"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you request a quote, apply for a driving position, contact us, or otherwise communicate with us. This information may include:

• Name, email address, phone number, and mailing address
• Company name and job title
• CDL information and driving history (for driver applicants)
• Shipping and freight details
• Payment and billing information
• Any other information you choose to provide`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process quotes, shipments, and applications
• Send you technical notices, updates, and support messages
• Respond to your comments, questions, and requests
• Communicate with you about services, offers, and events
• Monitor and analyze trends, usage, and activities
• Detect, investigate, and prevent fraudulent transactions and other illegal activities
• Comply with legal obligations`,
  },
  {
    title: "Information Sharing",
    content: `We may share information about you as follows:

• With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf
• In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process
• If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of us or others
• In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company
• With your consent or at your direction`,
  },
  {
    title: "Data Security",
    content: `We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no internet or electronic storage system is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "Cookies and Tracking",
    content: `We use cookies and similar tracking technologies to collect information about your browsing activities. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.`,
  },
  {
    title: "Your Rights",
    content: `Depending on your location, you may have certain rights regarding your personal information, including:

• The right to access your personal information
• The right to correct inaccurate information
• The right to request deletion of your information
• The right to opt-out of certain data sharing
• The right to withdraw consent

To exercise these rights, please contact us using the information provided below.`,
  },
  {
    title: "Children's Privacy",
    content: `Our services are not directed to individuals under 18 years of age, and we do not knowingly collect personal information from children under 18.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this privacy policy or our privacy practices, please contact us at:

Quickstar Transportation LLC
123 Logistics Way
Atlanta, GA 30301
Email: privacy@quickstartransportation.com
Phone: (800) 555-1234`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[var(--navy)] pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-white/70">
              Last updated: January 1, 2024
            </p>
          </motion.div>
        </div>
      </div>

      <Section background="white" padding="xl">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-[var(--gray)] text-lg leading-relaxed mb-8">
              Quickstar Transportation LLC ("Quickstar," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <h2 className="text-xl font-bold text-[var(--navy)] mb-4">{section.title}</h2>
                  <div className="text-[var(--gray)] whitespace-pre-line leading-relaxed">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
