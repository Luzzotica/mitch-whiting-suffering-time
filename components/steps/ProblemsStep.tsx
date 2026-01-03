"use client";

import { FORM_CONTENT } from "@/lib/formQuestions";
import { StepWrapper, OptionButton, PrimaryButton } from "./StepWrapper";

interface ProblemsStepProps {
  selected: string[];
  onToggle: (value: string) => void;
  onNext: () => void;
}

export function ProblemsStep({ selected, onToggle, onNext }: ProblemsStepProps) {
  const { problems } = FORM_CONTENT;

  return (
    <StepWrapper stepNumber={problems.number}>
      <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
        {problems.question}<span className="text-brand-blue">*</span>
      </h2>

      <p className="text-text-secondary mb-1">{problems.instruction}</p>
      <p className="text-sm text-text-muted mb-4">{problems.subInstruction}</p>

      <div className="space-y-3 mb-6">
        {problems.options.map((option) => (
          <OptionButton
            key={option.id}
            id={option.id}
            text={option.text}
            selected={selected.includes(option.id)}
            onClick={() => onToggle(option.id)}
            multiSelect
          />
        ))}
      </div>

      <PrimaryButton onClick={onNext} disabled={selected.length === 0}>
        OK
      </PrimaryButton>
    </StepWrapper>
  );
}

