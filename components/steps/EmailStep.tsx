"use client";

import { FORM_CONTENT } from "@/lib/formQuestions";
import { StepWrapper, TextInput, PrimaryButton } from "./StepWrapper";

interface EmailStepProps {
  email: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export function EmailStep({ email, onChange, onNext }: EmailStepProps) {
  const { email: emailContent } = FORM_CONTENT;
  const isValid = email.trim() !== "" && email.includes("@");

  return (
    <StepWrapper stepNumber={emailContent.number}>
      <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">
        {emailContent.question}
      </h2>

      <p className="text-text-secondary mb-6 leading-relaxed">
        {emailContent.description}<span className="text-brand-blue">*</span>
      </p>

      <TextInput
        label={emailContent.field}
        value={email}
        onChange={onChange}
        type="email"
        required
      />

      <div className="mt-6">
        <PrimaryButton onClick={onNext} disabled={!isValid}>
          OK
        </PrimaryButton>
      </div>
    </StepWrapper>
  );
}

