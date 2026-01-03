"use client";

import { motion } from "framer-motion";
import { FORM_CONTENT, HOUR_RANGES } from "@/lib/formQuestions";
import { StepWrapper, PrimaryButton } from "./StepWrapper";
import { WeekCalendar } from "@/components/WeekCalendar";

interface SufferingHoursStepProps {
  selected: string | null;
  onSelect: (value: string) => void;
  onNext: () => void;
}

export function SufferingHoursStep({ selected, onSelect, onNext }: SufferingHoursStepProps) {
  const { sufferingHours } = FORM_CONTENT;

  const selectedRangeData = HOUR_RANGES.find((r) => r.id === selected);
  const sufferingHoursValue = selectedRangeData?.midpoint ?? 0;

  return (
    <StepWrapper stepNumber={sufferingHours.number}>
      {/* Intro */}
      <p className="text-text-secondary text-center mb-4 leading-relaxed">
        {sufferingHours.intro}
      </p>

      <p className="text-text-primary text-center text-sm mb-4 font-medium">
        {sufferingHours.instruction}
      </p>

      {/* Two States */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <p className="text-brand-blue font-bold text-center mb-2">
          {sufferingHours.states.title}
        </p>
        <p className="text-center text-text-primary">
          <span className="font-semibold">{sufferingHours.states.primal}</span>{" "}
          {sufferingHours.states.powerful}
        </p>
        <p className="text-center text-text-muted text-sm mt-2 italic">
          {sufferingHours.states.note}
        </p>
      </div>

      {/* Question */}
      <h2 className="text-lg md:text-xl font-bold text-brand-blue mb-1 text-center">
        {sufferingHours.question}
      </h2>
      <p className="text-text-muted text-center text-xs md:text-sm mb-3">
        {sufferingHours.questionSubtext}
      </p>

      {/* Alternate question note */}
      <div className="text-center text-xs text-text-muted mb-3">
        <p className="mb-1">OR: {sufferingHours.alternateQuestion}</p>
        <p className="italic">{sufferingHours.alternateNote}</p>
      </div>

      {/* Helpful tip */}
      <p className="text-center text-xs text-text-muted mb-4">
        {sufferingHours.helpfulTip}
      </p>

      {/* Hour Range Options - 2 columns */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {HOUR_RANGES.map((range) => (
          <motion.button
            key={range.id}
            onClick={() => onSelect(range.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              flex items-center gap-2 p-3 rounded-lg border-2 transition-all duration-200
              ${
                selected === range.id
                  ? "border-brand-blue bg-brand-blue/5"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              }
            `}
          >
            <span
              className={`
                w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0
                ${
                  selected === range.id
                    ? "bg-brand-blue text-white"
                    : "bg-gray-100 text-text-muted"
                }
              `}
            >
              {range.id}
            </span>
            <span
              className={`
                text-xs md:text-sm text-left
                ${
                  selected === range.id
                    ? "text-brand-blue font-semibold"
                    : "text-text-primary"
                }
              `}
            >
              {range.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Show calendar only after selection */}
      {selected && (
        <div className="mb-6 -mx-6 md:-mx-8">
          <WeekCalendar sufferingHours={sufferingHoursValue} />
        </div>
      )}

      <div className="text-center">
        <PrimaryButton onClick={onNext} disabled={!selected}>
          OK
        </PrimaryButton>
      </div>
    </StepWrapper>
  );
}

