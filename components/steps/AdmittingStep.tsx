"use client";

import { FORM_CONTENT } from "@/lib/formQuestions";
import { StepWrapper, OptionButton, PrimaryButton } from "./StepWrapper";

interface AdmittingStepProps {
  selected: string | null;
  onSelect: (value: string) => void;
  onNext: () => void;
}

export function AdmittingStep({ selected, onSelect, onNext }: AdmittingStepProps) {
  const { admitting } = FORM_CONTENT;

  return (
    <StepWrapper stepNumber={admitting.number}>
      <p
        className="text-lg md:text-xl text-text-primary mb-6 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: admitting.statement.replace(
            /\*\*(.*?)\*\*/g,
            '<strong>$1</strong>'
          ),
        }}
      />

      <div className="space-y-3 mb-6">
        {admitting.options.map((option) => (
          <OptionButton
            key={option.id}
            id={option.id}
            text={option.text}
            selected={selected === option.id}
            onClick={() => onSelect(option.id)}
          />
        ))}
      </div>

      <PrimaryButton onClick={onNext} disabled={!selected}>
        OK
      </PrimaryButton>
    </StepWrapper>
  );
}

