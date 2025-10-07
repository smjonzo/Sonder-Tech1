import React from "react";

const mergeClasses = (...classes) => classes.filter(Boolean).join(" ");

export const Input = React.forwardRef(function Input(
  { className = "", type = "text", ...props },
  ref
) {
  return (
    <input
      ref={ref}
      type={type}
      className={mergeClasses(
        "w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-[var(--sonder-dark-text)] shadow-sm transition focus:border-[var(--sonder-teal)] focus:outline-none focus:ring-2 focus:ring-[var(--sonder-teal)]/40",
        className
      )}
      {...props}
    />
  );
});

export default Input;
