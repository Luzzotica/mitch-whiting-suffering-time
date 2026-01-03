"use client";

import { FORM_CONTENT } from "@/lib/formQuestions";
import { StepWrapper, TextInput, PrimaryButton } from "./StepWrapper";

interface NameStepProps {
  firstName: string;
  lastName: string;
  onChangeFirst: (value: string) => void;
  onChangeLast: (value: string) => void;
  onNext: () => void;
}

export function NameStep({ firstName, lastName, onChangeFirst, onChangeLast, onNext }: NameStepProps) {
  const { name } = FORM_CONTENT;
  const isValid = firstName.trim() !== "" && lastName.trim() !== "";

  return (
    <StepWrapper stepNumber={name.number}>
      <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-6">
        {name.question}<span className="text-brand-blue">*</span>
      </h2>

      <TextInput
        label={name.fields.firstName}
        value={firstName}
        onChange={onChangeFirst}
        required
      />

      <TextInput
        label={name.fields.lastName}
        value={lastName}
        onChange={onChangeLast}
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

