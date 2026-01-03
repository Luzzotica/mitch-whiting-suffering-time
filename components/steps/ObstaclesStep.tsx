"use client";

import { FORM_CONTENT } from "@/lib/formQuestions";
import { StepWrapper, OptionButton, PrimaryButton } from "./StepWrapper";

interface ObstaclesStepProps {
  selected: string[];
  onToggle: (value: string) => void;
  onNext: () => void;
}

export function ObstaclesStep({ selected, onToggle, onNext }: ObstaclesStepProps) {
  const { obstacles } = FORM_CONTENT;

  return (
    <StepWrapper stepNumber={obstacles.number}>
      <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
        {obstacles.question}<span className="text-brand-blue">*</span>
      </h2>

      <p className="text-text-secondary mb-1">{obstacles.instruction}</p>
      <p className="text-sm text-text-muted mb-4">{obstacles.subInstruction}</p>

      <div className="space-y-3 mb-6">
        {obstacles.options.map((option) => (
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

