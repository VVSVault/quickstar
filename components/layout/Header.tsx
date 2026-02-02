"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const navLinks = [
  {
    label: "For Drivers",
    href: "/drivers",
    submenu: [
      { label: "View All Jobs", href: "/drivers/jobs" },
      { label: "Benefits & Pay", href: "/drivers/benefits" },
      { label: "Our Equipment", href: "/drivers/equipment" },
      { label: "Apply Now", href: "/drivers/apply" },
    ],
  },
  {
    label: "For Shippers",
    href: "/ship",
    submenu: [
      { label: "Our Services", href: "/ship/services" },
      { label: "Get a Quote", href: "/ship/quote" },
      { label: "Track Shipment", href: "/ship/tracking" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          isMobileMenuOpen ? "z-[60]" : "z-50"
        } ${
          isScrolled
            ? "bg-white shadow-lg h-[70px] md:h-[80px]"
            : "bg-transparent py-1 md:py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className={`flex-shrink-0 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0 lg:opacity-100" : ""}`}>
              <img
                src="/images/logo.png"
                alt="Quickstar Transportation"
                className={`transition-all duration-300 h-[150px] md:h-[180px] ${
                  isScrolled ? "-my-10 md:-my-12" : "-mt-6 md:mt-0"
                } ${!isScrolled ? "brightness-0 invert" : ""}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setActiveSubmenu(link.href)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-2 font-medium rounded-lg transition-colors flex items-center gap-1 ${
                      isScrolled
                        ? "text-[var(--charcoal)] hover:text-[var(--navy)] hover:bg-[var(--gray-light)]"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    {link.submenu && (
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          activeSubmenu === link.href ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Desktop Submenu */}
                  {link.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                          <div className="py-2">
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.href}
                                href={sublink.href}
                                className="block px-4 py-3 text-[var(--charcoal)] hover:bg-[var(--gray-light)] hover:text-[var(--navy)] transition-colors"
                              >
                                {sublink.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+18005551234"
                className={`flex items-center gap-2 font-semibold transition-colors ${
                  isScrolled ? "text-[var(--navy)]" : "text-white"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="hidden xl:inline">(800) 555-1234</span>
              </a>
              <Button variant="orange" size="md" href="/ship/quote">
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-[var(--navy)] hover:bg-[var(--gray-light)]"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[var(--navy-dark)]/95 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
            >
              <div className="p-6 pt-20">
                {/* Mobile Nav Links */}
                <nav className="space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-4 py-3 text-lg font-semibold text-[var(--navy)] hover:bg-[var(--gray-light)] rounded-lg transition-colors"
                      >
                        {link.label}
                        {link.submenu && (
                          <svg
                            className="w-5 h-5 text-[var(--gray)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        )}
                      </Link>
                      {link.submenu && (
                        <div className="ml-4 mt-1 space-y-1">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-2 text-[var(--gray)] hover:text-[var(--navy)] hover:bg-[var(--gray-light)] rounded-lg transition-colors"
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                  <a
                    href="tel:+18005551234"
                    className="flex items-center justify-center gap-3 py-3 text-lg font-semibold text-[var(--navy)]"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    (800) 555-1234
                  </a>
                  <Button variant="orange" fullWidth href="/ship/quote">
                    Get a Quote
                  </Button>
                  <Button variant="secondary" fullWidth href="/drivers/apply">
                    Apply to Drive
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
