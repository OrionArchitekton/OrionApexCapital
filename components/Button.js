import clsx from "clsx";

export default function Button({
  as: Tag = "a",
  href,
  children,
  variant = "primary",
  className,
  ...props
}) {
  const baseStyles = "btn relative px-6 py-3 text-xs transition-all duration-300 rounded-lg overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy";
  
  const variants = {
    primary: "bg-brand-copper text-text-onCopper shadow-glow hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-brand-gold/60",
    secondary: "border border-white/30 text-text-primary hover:bg-white/10 hover:-translate-y-0.5 focus-visible:ring-white/30",
    outline: "border border-brand-gold/60 text-brand-gold hover:bg-brand-gold/10 hover:-translate-y-0.5 focus-visible:ring-brand-gold/50",
    ghost: "text-text-muted hover:text-text-primary hover:bg-white/5 focus-visible:ring-white/20"
  };

  const variantStyles = variants[variant] || variants.primary;

  return (
    <Tag 
      href={href} 
      className={clsx(baseStyles, variantStyles, className)} 
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
    </Tag>
  );
}

