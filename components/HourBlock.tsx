"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

interface HourBlockProps {
  isSuffering: boolean;
  animationDelay: number;
  isInitialLoad: boolean;
}

// Colors
const PRIMAL_COLOR = "#9ca3af"; // gray - suffering-medium
const POWERFUL_COLOR = "#0063e7"; // blue - brand-blue

export function HourBlock({ isSuffering, animationDelay, isInitialLoad }: HourBlockProps) {
  const controls = useAnimationControls();
  const prevSufferingRef = useRef(isSuffering);
  const backgroundColor = isSuffering ? PRIMAL_COLOR : POWERFUL_COLOR;

  // Trigger pop animation when state changes (not on initial load)
  useEffect(() => {
    if (!isInitialLoad && prevSufferingRef.current !== isSuffering) {
      // Pop animation: scale down then up
      controls.start({
        scale: [1, 0.6, 1.1, 1],
        backgroundColor,
        transition: {
          scale: {
            delay: animationDelay,
            duration: 0.4,
            times: [0, 0.3, 0.7, 1],
            ease: "easeOut",
          },
          backgroundColor: {
            delay: animationDelay,
            duration: 0.3,
            ease: "easeInOut",
          },
        },
      });
    }
    prevSufferingRef.current = isSuffering;
  }, [isSuffering, animationDelay, isInitialLoad, controls, backgroundColor]);

  return (
    <motion.div
      initial={isInitialLoad ? { scale: 0.5, opacity: 0, backgroundColor } : { backgroundColor }}
      animate={isInitialLoad ? { 
        scale: 1, 
        opacity: 1,
        backgroundColor,
      } : controls}
      transition={isInitialLoad ? {
        scale: {
          type: "spring",
          stiffness: 500,
          damping: 25,
          delay: animationDelay,
        },
        opacity: {
          delay: animationDelay,
          duration: 0.2,
        },
        backgroundColor: {
          delay: animationDelay,
          duration: 0.3,
        },
      } : undefined}
      className="w-[32px] h-[32px] md:w-[48px] md:h-[48px] rounded-[4px] md:rounded-[6px]"
      style={{ backgroundColor }}
      title={isSuffering ? "Primal state (4 hours)" : "Powerful state (4 hours)"}
    />
  );
}

export default HourBlock;
