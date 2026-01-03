"use client";

import { FORM_CONTENT } from "@/lib/formQuestions";
import { StepWrapper, TextInput, PrimaryButton } from "./StepWrapper";

interface PhoneStepProps {
  phone: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export function PhoneStep({ phone, onChange, onNext }: PhoneStepProps) {
  const { phone: phoneContent } = FORM_CONTENT;
  const isValid = phone.trim().length >= 10;

  return (
    <StepWrapper stepNumber={phoneContent.number}>
      <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-6">
        {phoneContent.question}<span className="text-brand-blue">*</span>
      </h2>

      <TextInput
        label={phoneContent.field}
        value={phone}
        onChange={onChange}
        type="tel"
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

