"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  icon?: React.ReactNode;
  href?: string;
  cta?: string;
  badges?: string[];
  highlights?: string[];
  variant?: "default" | "featured" | "horizontal";
  className?: string;
}

export default function Card({
  title,
  description,
  image,
  icon,
  href,
  cta,
  badges,
  highlights,
  variant = "default",
  className = "",
}: CardProps) {
  const baseClasses = `
    bg-white rounded-2xl overflow-hidden
    border border-gray-100
    card-hover
    ${className}
  `;

  const content = (
    <>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {badges && badges.length > 0 && (
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {badges.map((badge, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[var(--orange)] text-white text-xs font-semibold rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        {icon && !image && (
          <div className="w-14 h-14 rounded-xl bg-[var(--gray-light)] flex items-center justify-center mb-4 text-[var(--navy)]">
            {icon}
          </div>
        )}

        <h3 className="text-xl font-bold text-[var(--navy)] mb-2">{title}</h3>

        {description && (
          <p className="text-[var(--gray)] mb-4 leading-relaxed">{description}</p>
        )}

        {highlights && highlights.length > 0 && (
          <ul className="space-y-2 mb-4">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[var(--charcoal)]">
                <svg
                  className="w-5 h-5 text-[var(--success)] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        )}

        {cta && href && (
          <Button variant="ghost" size="sm" href={href} className="mt-2 p-0 text-[var(--orange)] hover:bg-transparent">
            {cta}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        )}
      </div>
    </>
  );

  const cardElement = (
    <motion.div
      className={`${baseClasses} group`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {content}
    </motion.div>
  );

  if (href && !cta) {
    return (
      <Link href={href} className="block">
        {cardElement}
      </Link>
    );
  }

  return cardElement;
}
