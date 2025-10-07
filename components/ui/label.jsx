import React from "react";

const mergeClasses = (...classes) => classes.filter(Boolean).join(" ");

export const Label = React.forwardRef(function Label(
  { className = "", ...props },
  ref
) {
  return (
    <label
      ref={ref}
      className={mergeClasses(
        "block text-sm font-medium text-[var(--sonder-dark-text)]",
        className
      )}
      {...props}
    />
  );
});

export default Label;
