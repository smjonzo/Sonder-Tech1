import React from "react";

const mergeClasses = (...classes) => classes.filter(Boolean).join(" ");

export function Badge({ className = "", ...props }) {
  return (
    <span
      className={mergeClasses(
        "inline-flex items-center rounded-full border border-transparent bg-[var(--sonder-teal)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--sonder-teal)]",
        className
      )}
      {...props}
    />
  );
}

export default Badge;
