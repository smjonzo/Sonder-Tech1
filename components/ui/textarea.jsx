import React from "react";

const mergeClasses = (...classes) => classes.filter(Boolean).join(" ");

export const Textarea = React.forwardRef(function Textarea(
  { className = "", ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={mergeClasses(
        "w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-[var(--sonder-dark-text)] shadow-sm transition focus:border-[var(--sonder-teal)] focus:outline-none focus:ring-2 focus:ring-[var(--sonder-teal)]/40",
        className
      )}
      {...props}
    />
  );
});

export default Textarea;
