"use client";

import { FORM_CONTENT } from "@/lib/formQuestions";
import { StepWrapper, PrimaryButton } from "./StepWrapper";

interface SupportTypeStepProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export function SupportTypeStep({ value, onChange, onNext }: SupportTypeStepProps) {
  const { supportType } = FORM_CONTENT;

  return (
    <StepWrapper stepNumber={supportType.number}>
      <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">
        {supportType.question}
      </h2>

      <p className="text-text-secondary mb-6 leading-relaxed">
        {supportType.description}<span className="text-brand-blue">*</span>
      </p>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your answer here..."
        className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-brand-blue outline-none transition-colors text-text-primary text-lg resize-none min-h-[120px]"
      />

      <p className="text-xs text-text-muted mt-2 mb-6">
        Shift ⇧ + Enter ↵ to make a line break
      </p>

      <PrimaryButton onClick={onNext} disabled={value.trim() === ""}>
        OK
      </PrimaryButton>
    </StepWrapper>
  );
}

