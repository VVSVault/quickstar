"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

const sections = [
  {
    title: "Agreement to Terms",
    content: `By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.`,
  },
  {
    title: "Services Description",
    content: `Quickstar Transportation LLC provides freight transportation services, including but not limited to full truckload (FTL), less-than-truckload (LTL), dedicated fleet services, and expedited shipping. Our services are subject to availability and may be modified at our discretion.`,
  },
  {
    title: "User Responsibilities",
    content: `When using our services, you agree to:

• Provide accurate and complete information when requesting quotes or services
• Ensure all cargo complies with applicable laws and regulations
• Properly package and label all freight
• Not ship prohibited, hazardous, or illegal materials without proper authorization
• Pay all charges in accordance with agreed-upon terms
• Notify us promptly of any claims or issues`,
  },
  {
    title: "Quotes and Pricing",
    content: `All quotes provided are estimates based on the information you provide. Final charges may vary based on actual weight, dimensions, accessorial services, and other factors. Quotes are valid for the time period specified and are subject to change without notice.`,
  },
  {
    title: "Shipping Terms",
    content: `All shipments are subject to our Bill of Lading terms and conditions, which govern the specific terms of each shipment. In case of conflict between these Terms of Service and the Bill of Lading, the Bill of Lading shall prevail for that specific shipment.`,
  },
  {
    title: "Liability Limitations",
    content: `Our liability for loss or damage to cargo is limited as set forth in the applicable Bill of Lading and in accordance with federal transportation law. We are not liable for:

• Delays caused by weather, traffic, or other circumstances beyond our control
• Damage resulting from improper packaging by the shipper
• Acts of God, war, terrorism, or civil unrest
• Consequential, special, or indirect damages`,
  },
  {
    title: "Claims",
    content: `Claims for loss or damage must be filed in writing within 9 months of the delivery date (or expected delivery date for lost shipments). Claims must include supporting documentation including the Bill of Lading, proof of value, and photographs of damage where applicable.`,
  },
  {
    title: "Payment Terms",
    content: `Payment terms vary by customer and are established in your credit agreement or at the time of service. Late payments may be subject to interest charges and collection costs. We reserve the right to hold cargo until payment is received for customers without established credit.`,
  },
  {
    title: "Intellectual Property",
    content: `The Quickstar name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Quickstar Transportation LLC. You may not use these marks without our prior written permission.`,
  },
  {
    title: "Website Use",
    content: `You may use our website for lawful purposes only. You agree not to:

• Use the site in any way that violates applicable laws
• Attempt to gain unauthorized access to our systems
• Interfere with the proper working of the website
• Use automated systems to access the site without permission
• Transmit any viruses or malicious code`,
  },
  {
    title: "Privacy",
    content: `Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms of Service by reference. Please review our Privacy Policy to understand how we collect, use, and protect your information.`,
  },
  {
    title: "Indemnification",
    content: `You agree to indemnify and hold harmless Quickstar Transportation LLC, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of our services or violation of these terms.`,
  },
  {
    title: "Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions. Any disputes shall be resolved in the state or federal courts located in Fulton County, Georgia.`,
  },
  {
    title: "Changes to Terms",
    content: `We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new terms.`,
  },
  {
    title: "Contact Information",
    content: `For questions about these Terms of Service, please contact us at:

Quickstar Transportation LLC
123 Logistics Way
Atlanta, GA 30301
Email: legal@quickstartransportation.com
Phone: (800) 555-1234`,
  },
];

export default function TermsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
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
              Please read these Terms of Service carefully before using the Quickstar Transportation LLC website or services. These terms constitute a legally binding agreement between you and Quickstar Transportation LLC.
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
