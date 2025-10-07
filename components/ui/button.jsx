import React from "react";

const mergeClasses = (...classes) => classes.filter(Boolean).join(" ");

const variantClasses = {
  default: "bg-[var(--sonder-teal)] text-white hover:bg-[var(--sonder-green)]",
  outline: "border border-current text-[var(--sonder-dark-text)] bg-transparent hover:bg-white/80",
  ghost: "text-[var(--sonder-dark-text)] bg-transparent hover:bg-white/60",
};

const sizeClasses = {
  default: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10",
};

export const Button = React.forwardRef(function Button(
  { className = "", variant = "default", size = "default", type = "button", ...props },
  ref
) {
  const variantClass = variantClasses[variant] ?? variantClasses.default;
  const sizeClass = sizeClasses[size] ?? sizeClasses.default;

  return (
    <button
      ref={ref}
      type={type}
      className={mergeClasses(
        "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--sonder-teal)] disabled:opacity-50 disabled:pointer-events-none",
        variantClass,
        sizeClass,
        className
      )}
      {...props}
    />
  );
});

export default Button;
