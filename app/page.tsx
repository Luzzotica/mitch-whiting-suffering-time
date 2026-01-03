"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { WeekCalendar } from "@/components/WeekCalendar";
import { HOUR_RANGES, WAKING_HOURS_PER_WEEK } from "@/lib/formQuestions";

const TYPEFORM_URL = "https://eru7suztsng.typeform.com/to/SHKfQVZX?typeform-source=bit.ly";

export default function Home() {
  const [selectedRange, setSelectedRange] = useState<string | null>(null);

  const selectedRangeData = HOUR_RANGES.find((r) => r.id === selectedRange);
  const sufferingHours = selectedRangeData?.midpoint ?? 0;

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 px-4 py-8 md:px-6 md:py-12 space-y-6 md:space-y-8">
        {/* Two States Context - At the top */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-gray-100">
            <p className="text-brand-blue font-bold text-center mb-2">
              There are only 2 states of being:
            </p>
            <p className="text-center text-text-primary">
              <span className="font-semibold">A primal state</span>{" "}
              and a powerful state.
            </p>
            <p className="text-center text-text-muted text-sm mt-2 italic">
              You can only be in one of these states at a time; never both simultaneously.
            </p>
          </div>
        </motion.section>

        {/* Main Card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-xl p-5 md:p-8 shadow-md border border-gray-100">
            {/* Intro */}
            <p className="text-text-secondary text-center text-sm md:text-base mb-4 leading-relaxed">
              Admitting you want and need more from life is the first step to living your full potential.
            </p>

            <p className="text-text-primary text-center text-sm mb-5 font-medium">
              Take the time right now to calculate and admit the answer to the following question:
            </p>

            {/* Question */}
            <h1 className="text-lg md:text-xl font-bold text-brand-blue mb-1 text-center">
              How many hours per week are you spending in a primal state?
            </h1>
            <p className="text-text-muted text-center text-xs md:text-sm mb-3">
              (stress, anxiety, overwhelm, self-doubt, hesitation, procrastination, judgment, shame, comparison)
            </p>

            {/* Alternate question note */}
            <div className="text-center text-xs text-text-muted mb-3">
              <p className="mb-1">OR: How many hours per week are you spending NOT in a powerful state?</p>
              <p className="italic">(The answer to both of these questions will be the same)</p>
            </div>

            {/* Helpful tip */}
            <p className="text-center text-xs text-text-muted mb-5">
              Helpful tip: There are {WAKING_HOURS_PER_WEEK} waking hours each week.*
            </p>

            {/* Hour Range Options - 2 columns */}
            <div className="grid grid-cols-2 gap-2">
              {HOUR_RANGES.map((range) => (
                <motion.button
                  key={range.id}
                  onClick={() => setSelectedRange(range.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    flex items-center gap-2 p-3 rounded-lg border-2 transition-all duration-200
                    ${
                      selectedRange === range.id
                        ? "border-brand-blue bg-brand-blue/5"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }
                  `}
                >
                  <span
                    className={`
                      w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0
                      ${
                        selectedRange === range.id
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
                        selectedRange === range.id
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
          </div>
        </motion.section>

        {/* Calendar Visualization - Only show after selection */}
        {selectedRange && (
          <WeekCalendar sufferingHours={sufferingHours} />
        )}

        {/* CTA Section */}
        {selectedRange && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full max-w-2xl mx-auto"
          >
            <div className="bg-brand-blue rounded-xl p-6 md:p-8 text-center shadow-lg">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                Ready to reclaim your time?
              </h2>
              <p className="text-blue-100 mb-6 text-sm md:text-base">
                Take the free assessment to find clarity on where you are and where you want to be.
              </p>
              <motion.a
                href={TYPEFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-white text-brand-blue font-bold text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                Take Free Assessment →
              </motion.a>
            </div>
          </motion.section>
        )}
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-gray-200 bg-white mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-muted text-xs">
            *Based on {WAKING_HOURS_PER_WEEK} waking hours per week (assuming 8 hours of sleep per night)
          </p>
          <p className="text-text-muted text-xs mt-1">
            Created for{" "}
            <a
              href="https://www.mitchwhiting.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:underline font-medium"
            >
              Mitch Whiting
            </a>{" "}
            · Helping family-centered leaders find peace and abundance
          </p>
        </div>
      </footer>
    </main>
  );
}
