import React from "react";

const mergeClasses = (...classes) => classes.filter(Boolean).join(" ");

export function Card({ className = "", ...props }) {
  return (
    <div
      className={mergeClasses(
        "rounded-3xl border border-slate-200/40 bg-white text-[var(--sonder-dark-text)] shadow-sm",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className = "", ...props }) {
  return (
    <div
      className={mergeClasses("p-6 border-b border-slate-200/40", className)}
      {...props}
    />
  );
}

export function CardTitle({ className = "", ...props }) {
  return (
    <h3
      className={mergeClasses("text-lg font-semibold leading-tight", className)}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }) {
  return (
    <div
      className={mergeClasses("p-6", className)}
      {...props}
    />
  );
}

export default Card;
