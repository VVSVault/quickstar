import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quickstar Transportation | Reliable Logistics & Driver Careers",
  description: "Quickstar Transportation LLC - Your trusted partner for freight shipping solutions and rewarding CDL-A driver careers. Nationwide coverage, competitive rates, and exceptional service.",
  keywords: ["trucking", "logistics", "freight shipping", "CDL driver jobs", "transportation", "truckload", "LTL"],
  openGraph: {
    title: "Quickstar Transportation | Moving America Forward",
    description: "Trusted logistics partner for shippers. Career home for drivers.",
    type: "website",
    locale: "en_US",
    siteName: "Quickstar Transportation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
