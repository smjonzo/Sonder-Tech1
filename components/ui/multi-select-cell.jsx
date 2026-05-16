import React from "react";

export function MultiSelectCell({
  id,
  options,
  value = [],
  onChange,
  className = "",
}) {
  const selectedValues = Array.isArray(value) ? value : [];

  const toggleValue = (optionValue) => {
    if (selectedValues.includes(optionValue)) {
      onChange(selectedValues.filter((item) => item !== optionValue));
      return;
    }

    onChange([...selectedValues, optionValue]);
  };

  return (
    <div
      id={id}
      role="group"
      aria-label="Multi-select"
      className={`mt-2 grid grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm ${className}`}
    >
      {options.map((option) => {
        const isSelected = selectedValues.includes(option.value);

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => toggleValue(option.value)}
            aria-pressed={isSelected}
            className={`rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
              isSelected
                ? "border-[var(--sonder-teal)] bg-teal-50 text-[var(--sonder-dark-text)]"
                : "border-slate-200 bg-white text-slate-600 hover:border-[var(--sonder-teal)]"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
