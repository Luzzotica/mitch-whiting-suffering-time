"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FormData, initialFormData, StepId } from "@/lib/types";
import {
  IntroStep,
  NameStep,
  EmailStep,
  PhoneStep,
  WhoHelpStep,
  ChrisReferralStep,
  SufferingHoursStep,
  AcknowledgmentStep,
  ProblemsStep,
  ObstaclesStep,
  TransitionStep,
  AdmittingStep,
  SupportTypeStep,
  CompleteStep,
} from "./steps";

// Main flow steps (branching steps are conditional)
const MAIN_STEPS: StepId[] = [
  "intro",
  "name",
  "email",
  "phone",
  "who-help",
  "suffering-hours",
  "acknowledgment",
  "problems",
  "obstacles",
  "transition",
  "admitting",
  "complete",
];

export function AssessmentForm() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [branchStep, setBranchStep] = useState<StepId | null>(null);

  // Determine current step based on branching
  const getCurrentStep = (): StepId => {
    if (branchStep) {
      return branchStep;
    }
    return MAIN_STEPS[currentStepIndex];
  };

  const currentStep = getCurrentStep();
  
  // Calculate progress (excluding conditional steps)
  const totalSteps = MAIN_STEPS.length - 1; // Exclude complete from progress
  const progress = (currentStepIndex / totalSteps) * 100;

  const restart = useCallback(() => {
    setCurrentStepIndex(0);
    setFormData(initialFormData);
    setBranchStep(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const goToNext = useCallback(() => {
    // Handle branching after "who-help" step - Money problem goes to Chris
    if (currentStep === "who-help" && formData.whoResonates === "C") {
      setBranchStep("chris-referral");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Handle branching after "admitting" step - Happy with where I am goes to support-type
    if (currentStep === "admitting" && formData.admittingMore === "C") {
      setBranchStep("support-type");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // If we're on support-type, go to complete
    if (branchStep === "support-type") {
      setBranchStep(null);
      setCurrentStepIndex(MAIN_STEPS.indexOf("complete"));
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Normal flow
    if (currentStepIndex < MAIN_STEPS.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentStep, currentStepIndex, formData.whoResonates, formData.admittingMore, branchStep]);

  const goToPrev = useCallback(() => {
    // If on a branch step, go back to the step that branched
    if (branchStep === "chris-referral") {
      setBranchStep(null);
      // Stay on who-help step but clear selection
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (branchStep === "support-type") {
      setBranchStep(null);
      // Stay on admitting step but clear selection
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentStepIndex, branchStep]);

  const updateField = useCallback(<K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const toggleArrayField = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => {
      const currentArray = prev[field] as string[];
      if (currentArray.includes(value)) {
        return { ...prev, [field]: currentArray.filter((v) => v !== value) };
      }
      return { ...prev, [field]: [...currentArray, value] };
    });
  }, []);

  const renderStep = () => {
    switch (currentStep) {
      case "intro":
        return <IntroStep onNext={goToNext} />;

      case "name":
        return (
          <NameStep
            firstName={formData.firstName}
            lastName={formData.lastName}
            onChangeFirst={(v) => updateField("firstName", v)}
            onChangeLast={(v) => updateField("lastName", v)}
            onNext={goToNext}
          />
        );

      case "email":
        return (
          <EmailStep
            email={formData.email}
            onChange={(v) => updateField("email", v)}
            onNext={goToNext}
          />
        );

      case "phone":
        return (
          <PhoneStep
            phone={formData.phone}
            onChange={(v) => updateField("phone", v)}
            onNext={goToNext}
          />
        );

      case "who-help":
        return (
          <WhoHelpStep
            selected={formData.whoResonates}
            onSelect={(v) => updateField("whoResonates", v)}
            onNext={goToNext}
          />
        );

      case "chris-referral":
        return <ChrisReferralStep onRestart={restart} />;

      case "suffering-hours":
        return (
          <SufferingHoursStep
            selected={formData.sufferingHoursRange}
            onSelect={(v) => updateField("sufferingHoursRange", v)}
            onNext={goToNext}
          />
        );

      case "acknowledgment":
        return (
          <AcknowledgmentStep
            selected={formData.whatYouWant}
            onToggle={(v) => toggleArrayField("whatYouWant", v)}
            onNext={goToNext}
          />
        );

      case "problems":
        return (
          <ProblemsStep
            selected={formData.problems}
            onToggle={(v) => toggleArrayField("problems", v)}
            onNext={goToNext}
          />
        );

      case "obstacles":
        return (
          <ObstaclesStep
            selected={formData.obstacles}
            onToggle={(v) => toggleArrayField("obstacles", v)}
            onNext={goToNext}
          />
        );

      case "transition":
        return <TransitionStep onNext={goToNext} />;

      case "admitting":
        return (
          <AdmittingStep
            selected={formData.admittingMore}
            onSelect={(v) => updateField("admittingMore", v)}
            onNext={goToNext}
          />
        );

      case "support-type":
        return (
          <SupportTypeStep
            value={formData.supportType}
            onChange={(v) => updateField("supportType", v)}
            onNext={goToNext}
          />
        );

      case "complete":
        return <CompleteStep firstName={formData.firstName} />;

      default:
        return null;
    }
  };

  // Determine if back button should show
  const showBackButton = 
    (currentStepIndex > 0 || branchStep !== null) && 
    currentStep !== "complete" &&
    currentStep !== "chris-referral"; // Chris referral has its own restart button

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Progress Bar */}
      {currentStep !== "intro" && currentStep !== "complete" && currentStep !== "chris-referral" && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
          <motion.div
            className="h-full bg-brand-blue"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      {/* Back Button */}
      {showBackButton && (
        <button
          onClick={goToPrev}
          className="fixed top-4 left-4 z-50 p-2 text-text-muted hover:text-text-primary transition-colors"
          aria-label="Go back"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 md:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-4 px-4 text-center">
        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} Mitch Whiting · Helping family-centered leaders find peace and abundance
        </p>
      </footer>
    </div>
  );
}

export default AssessmentForm;
