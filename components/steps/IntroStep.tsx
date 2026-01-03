"use client";

import { motion } from "framer-motion";
import { FORM_CONTENT } from "@/lib/formQuestions";
import { PrimaryButton } from "./StepWrapper";

interface IntroStepProps {
  onNext: () => void;
}

export function IntroStep({ onNext }: IntroStepProps) {
  const { intro } = FORM_CONTENT;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto text-center"
    >
      <div className="bg-white rounded-xl p-8 md:p-12 shadow-md border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">
          {intro.title}
        </h1>

        <div className="space-y-4 text-text-secondary text-left md:text-center mb-8">
          {intro.body.map((line, i) => (
            <p
              key={i}
              className="leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: line
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary">$1</strong>'),
              }}
            />
          ))}
        </div>

        <p className="text-lg text-text-primary font-medium mb-6">
          {intro.question}
        </p>

        <PrimaryButton onClick={onNext}>
          {intro.buttonText}
        </PrimaryButton>

        <p className="text-sm text-text-muted mt-6">
          ⏱ {intro.timeEstimate}
        </p>
      </div>
    </motion.div>
  );
}

