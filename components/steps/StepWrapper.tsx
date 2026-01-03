"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StepWrapperProps {
  children: ReactNode;
  stepNumber?: number;
}

export function StepWrapper({ children, stepNumber }: StepWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
        {stepNumber && (
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-bold mb-4">
            {stepNumber}
          </div>
        )}
        {children}
      </div>
    </motion.div>
  );
}

interface OptionButtonProps {
  id: string;
  text: string;
  selected: boolean;
  onClick: () => void;
  multiSelect?: boolean;
}

export function OptionButton({ id, text, selected, onClick, multiSelect }: OptionButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`
        w-full flex items-start gap-3 p-4 rounded-lg border-2 transition-all duration-200 text-left
        ${
          selected
            ? "border-brand-blue bg-brand-blue/5"
            : "border-gray-200 hover:border-gray-300 bg-white"
        }
      `}
    >
      <span
        className={`
          w-7 h-7 rounded-md flex items-center justify-center text-sm font-bold shrink-0
          ${
            selected
              ? "bg-brand-blue text-white"
              : "bg-gray-100 text-text-muted"
          }
        `}
      >
        {multiSelect && selected ? "✓" : id}
      </span>
      <span
        className={`
          text-sm md:text-base leading-relaxed
          ${selected ? "text-brand-blue font-medium" : "text-text-primary"}
        `}
      >
        {text}
      </span>
    </motion.button>
  );
}

interface PrimaryButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}

export function PrimaryButton({ onClick, disabled, children }: PrimaryButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={`
        px-8 py-3 rounded-lg font-bold text-white transition-all duration-200
        ${
          disabled
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-brand-blue hover:bg-brand-blue-light shadow-md hover:shadow-lg"
        }
      `}
    >
      {children}
    </motion.button>
  );
}

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export function TextInput({ label, value, onChange, type = "text", placeholder, required }: TextInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-text-primary mb-2">
        {label}{required && <span className="text-brand-blue">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-brand-blue outline-none transition-colors text-brand-blue text-lg"
      />
    </div>
  );
}

