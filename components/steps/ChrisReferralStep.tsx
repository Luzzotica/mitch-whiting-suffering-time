"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "./StepWrapper";

interface ChrisReferralStepProps {
  onRestart: () => void;
}

export function ChrisReferralStep({ onRestart }: ChrisReferralStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
        <div className="space-y-4 text-text-secondary leading-relaxed">
          <p>
            I would love to introduce you to the financial coach who transformed my life,{" "}
            <strong className="text-text-primary">Chris Claflin</strong>.
          </p>

          <p>
            A few years ago, my wife and I felt trapped by our debt.
          </p>

          <p>
            We couldn't see a way to pay our monthly payment, let alone pay off the full amount in the 10 years it would be due.
          </p>

          <p>
            We were making $50k base salary at the time and by working with this coach, we miraculously{" "}
            <strong className="text-text-primary">paid off our $37k in 5.5 months</strong>.
          </p>

          <p>
            Within 20 months total, we had a{" "}
            <strong className="text-text-primary">6-figure net worth</strong>.
          </p>

          <p>
            What my wife and I appreciate even more than Chris' insanely deep knowledge of money...
          </p>

          <p>
            ...is his incredible ability to teach in a way that makes building wealth{" "}
            <strong className="text-text-primary">simple, clear, and achievable</strong>{" "}
            (a skill I feel most financial coaches or advisors lack).
          </p>

          <p>
            And above all, his deep focus on helping us create financial{" "}
            <strong className="text-text-primary">PEACE</strong> and{" "}
            <strong className="text-text-primary">UNITY</strong> in our marriage.
          </p>

          <p>
            Besides my wife and parents, Chris has had a greater impact on who I am than anyone else.
          </p>

          <p className="text-text-primary font-medium">
            He is much more than a financial coach.
          </p>

          <p className="text-brand-blue font-medium mt-6">
            Click below to visit Chris' website and receive access to his calendar to book a free consultation.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <motion.a
            href="https://www.chrisclaflin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block text-center px-8 py-3 rounded-lg font-bold text-white bg-brand-blue hover:bg-brand-blue-light shadow-md hover:shadow-lg transition-all duration-200"
          >
            Visit Chris Claflin's Website →
          </motion.a>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            <strong className="text-text-primary">PS.</strong> Many of my clients decide to work with me and Chris at the same time.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            If that is your desire, book a consultation with Chris then restart this application.
          </p>
          
          <button
            onClick={onRestart}
            className="text-brand-blue hover:underline font-medium text-sm"
          >
            ← Restart Assessment
          </button>
        </div>
      </div>
    </motion.div>
  );
}

