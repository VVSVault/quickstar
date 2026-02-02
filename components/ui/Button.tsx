"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "orange";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--navy)] text-white hover:bg-[var(--navy-dark)] border-2 border-transparent",
  secondary:
    "bg-white text-[var(--navy)] hover:bg-[var(--gray-light)] border-2 border-[var(--navy)]",
  outline:
    "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[var(--navy)]",
  ghost:
    "bg-transparent text-[var(--navy)] hover:bg-[var(--gray-light)] border-2 border-transparent",
  orange:
    "bg-[var(--orange)] text-white hover:bg-[var(--orange-hover)] border-2 border-transparent",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-2.5 text-base gap-2",
  lg: "px-8 py-3 text-lg gap-2.5",
  xl: "px-10 py-4 text-xl gap-3",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      icon,
      iconPosition = "left",
      loading = false,
      fullWidth = false,
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      inline-flex items-center justify-center
      font-semibold rounded-lg
      transition-all duration-200
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)] focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      btn-shine
      ${variants[variant]}
      ${sizes[size]}
      ${fullWidth ? "w-full" : ""}
      ${className}
    `;

    const content = (
      <>
        {loading && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && icon && iconPosition === "left" && icon}
        {children}
        {!loading && icon && iconPosition === "right" && icon}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={baseClasses}
        disabled={disabled || loading}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
