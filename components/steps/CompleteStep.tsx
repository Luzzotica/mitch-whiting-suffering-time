"use client";

import { motion } from "framer-motion";
import { FORM_CONTENT } from "@/lib/formQuestions";

interface CompleteStepProps {
  firstName: string;
}

export function CompleteStep({ firstName }: CompleteStepProps) {
  const { complete } = FORM_CONTENT;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto text-center"
    >
      <div className="bg-white rounded-xl p-8 md:p-12 shadow-md border border-gray-100">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>

        <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
          {complete.title}{firstName && `, ${firstName}`}!
        </h1>

        <p className="text-lg text-text-secondary leading-relaxed">
          {complete.body}
        </p>
      </div>
    </motion.div>
  );
}

