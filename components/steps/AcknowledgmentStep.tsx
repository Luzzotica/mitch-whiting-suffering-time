"use client";

import { FORM_CONTENT } from "@/lib/formQuestions";
import { StepWrapper, OptionButton, PrimaryButton } from "./StepWrapper";

interface AcknowledgmentStepProps {
  selected: string[];
  onToggle: (value: string) => void;
  onNext: () => void;
}

export function AcknowledgmentStep({ selected, onToggle, onNext }: AcknowledgmentStepProps) {
  const { acknowledgment } = FORM_CONTENT;

  return (
    <StepWrapper stepNumber={acknowledgment.number}>
      <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">
        {acknowledgment.title}
      </h2>

      <div className="space-y-3 mb-6 text-text-secondary">
        {acknowledgment.body.map((line, i) => (
          <p
            key={i}
            className="leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: line.replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="text-text-primary">$1</strong>'
              ),
            }}
          />
        ))}
      </div>

      <p className="text-lg font-bold text-brand-blue mb-2">
        {acknowledgment.question}<span className="text-brand-blue">*</span>
      </p>

      <p className="text-sm text-text-muted mb-4">
        {acknowledgment.instruction}
      </p>

      <div className="space-y-3 mb-6">
        {acknowledgment.options.map((option) => (
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

