interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "orange" | "navy" | "success" | "outline";
  size?: "sm" | "md";
  className?: string;
}

const variants = {
  default: "bg-[var(--gray-light)] text-[var(--charcoal)]",
  orange: "bg-[var(--orange)] text-white",
  navy: "bg-[var(--navy)] text-white",
  success: "bg-[var(--success)] text-white",
  outline: "bg-transparent border-2 border-[var(--navy)] text-[var(--navy)]",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center font-semibold rounded-full
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
