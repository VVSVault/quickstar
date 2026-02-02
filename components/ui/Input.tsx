"use client";

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const inputClasses = `
  w-full px-4 py-3 rounded-lg
  border-2 border-gray-200
  bg-white text-[var(--charcoal)]
  placeholder:text-gray-400
  transition-all duration-200
  focus:border-[var(--orange)] focus:ring-0 focus:outline-none
  disabled:bg-gray-100 disabled:cursor-not-allowed
`;

const labelClasses = "block text-sm font-semibold text-[var(--charcoal)] mb-2";
const errorClasses = "text-sm text-red-500 mt-1";
const helperClasses = "text-sm text-[var(--gray)] mt-1";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, icon, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className={labelClasses}>{label}</label>}
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`${inputClasses} ${icon ? "pl-12" : ""} ${
              error ? "border-red-500 focus:border-red-500" : ""
            } ${className}`}
            {...props}
          />
        </div>
        {error && <p className={errorClasses}>{error}</p>}
        {helperText && !error && <p className={helperClasses}>{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className={labelClasses}>{label}</label>}
        <textarea
          ref={ref}
          className={`${inputClasses} min-h-[120px] resize-y ${
            error ? "border-red-500 focus:border-red-500" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className={errorClasses}>{error}</p>}
        {helperText && !error && <p className={helperClasses}>{helperText}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className={labelClasses}>{label}</label>}
        <select
          ref={ref}
          className={`${inputClasses} cursor-pointer ${
            error ? "border-red-500 focus:border-red-500" : ""
          } ${className}`}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className={errorClasses}>{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            ref={ref}
            type="checkbox"
            className={`
              w-5 h-5 mt-0.5
              rounded border-2 border-gray-300
              text-[var(--orange)]
              focus:ring-[var(--orange)] focus:ring-offset-0
              cursor-pointer
              ${className}
            `}
            {...props}
          />
          <span className="text-[var(--charcoal)] group-hover:text-[var(--navy)] transition-colors">
            {label}
          </span>
        </label>
        {error && <p className={`${errorClasses} ml-8`}>{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
