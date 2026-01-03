"use client";

import { FORM_CONTENT } from "@/lib/formQuestions";
import { StepWrapper, OptionButton, PrimaryButton } from "./StepWrapper";

interface TransitionStepProps {
  onNext: () => void;
}

export function TransitionStep({ onNext }: TransitionStepProps) {
  const { transition } = FORM_CONTENT;

  return (
    <StepWrapper stepNumber={transition.number}>
      <p
        className="text-lg md:text-xl text-text-primary mb-6 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: transition.text.replace(
            /\*\*(.*?)\*\*/g,
            '<strong>$1</strong>'
          ),
        }}
      />

      <div className="mb-6">
        <OptionButton
          id={transition.option.id}
          text={transition.option.text}
          selected={true}
          onClick={onNext}
        />
      </div>

      <PrimaryButton onClick={onNext}>
        OK
      </PrimaryButton>
    </StepWrapper>
  );
}

