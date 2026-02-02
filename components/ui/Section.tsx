interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "navy" | "gradient";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  container?: boolean;
}

const backgrounds = {
  white: "bg-white",
  light: "bg-[var(--gray-light)]",
  navy: "bg-[var(--navy)] text-white",
  gradient: "gradient-navy text-white",
};

const paddings = {
  none: "",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-20 md:py-32",
};

export default function Section({
  children,
  className = "",
  id,
  background = "white",
  padding = "lg",
  container = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        relative
        ${backgrounds[background]}
        ${paddings[padding]}
        ${className}
      `}
    >
      {container ? (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
