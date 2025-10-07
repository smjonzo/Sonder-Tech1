import React from "react";

const mergeClasses = (...classes) => classes.filter(Boolean).join(" ");

export function Alert({ className = "", variant = "default", ...props }) {
  const baseVariant =
    variant === "destructive"
      ? "border-red-200 bg-red-50 text-red-700"
      : "border-[var(--sonder-teal)]/40 bg-[var(--sonder-teal)]/10 text-[var(--sonder-dark-text)]";

  return (
    <div
      role="alert"
      className={mergeClasses(
        "w-full rounded-2xl border px-4 py-3 text-sm",
        baseVariant,
        className
      )}
      {...props}
    />
  );
}

export function AlertDescription({ className = "", ...props }) {
  return (
    <div className={mergeClasses("text-sm leading-relaxed", className)} {...props} />
  );
}

export default Alert;
