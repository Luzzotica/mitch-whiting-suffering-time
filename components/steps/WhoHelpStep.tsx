"use client";

import { FORM_CONTENT } from "@/lib/formQuestions";
import { StepWrapper, OptionButton, PrimaryButton } from "./StepWrapper";

interface WhoHelpStepProps {
  selected: string | null;
  onSelect: (value: string) => void;
  onNext: () => void;
}

export function WhoHelpStep({ selected, onSelect, onNext }: WhoHelpStepProps) {
  const { whoHelp } = FORM_CONTENT;

  return (
    <StepWrapper stepNumber={whoHelp.number}>
      <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">
        {whoHelp.question}
      </h2>

      <p
        className="text-text-secondary mb-4 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: whoHelp.description.replace(
            /\*\*(.*?)\*\*/g,
            '<strong class="text-text-primary">$1</strong>'
          ),
        }}
      />

      <p className="text-text-primary font-medium mb-4">
        {whoHelp.subQuestion}<span className="text-brand-blue">*</span>
      </p>

      <div className="space-y-3 mb-6">
        {whoHelp.options.map((option) => (
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

