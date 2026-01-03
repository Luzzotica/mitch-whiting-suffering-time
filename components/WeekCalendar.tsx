"use client";

import { motion } from "framer-motion";
import { useMemo, useRef, useEffect, useState } from "react";
import { DAYS_PER_WEEK, WAKING_HOURS_PER_WEEK } from "@/lib/formQuestions";
import { HourBlock } from "./HourBlock";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const HOURS_PER_BLOCK = 4; // Each block represents 4 hours
const BLOCKS_PER_DAY = 4; // 16 waking hours / 4 = 4 blocks per day
const TOTAL_BLOCKS = DAYS_PER_WEEK * BLOCKS_PER_DAY; // 28 blocks total

interface WeekCalendarProps {
  sufferingHours: number;
}

export function WeekCalendar({ sufferingHours }: WeekCalendarProps) {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [prevSufferingHours, setPrevSufferingHours] = useState(sufferingHours);
  const isFirstUpdate = useRef(true);

  // Convert hours to blocks (each block = 4 hours)
  const sufferingBlocks = Math.round(sufferingHours / HOURS_PER_BLOCK);
  const prevSufferingBlocks = Math.round(prevSufferingHours / HOURS_PER_BLOCK);

  // Track previous value for animation calculations
  useEffect(() => {
    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      return;
    }
    
    // After initial load, disable the scale animation
    setIsInitialLoad(false);
    
    // Update previous value after a short delay to allow animation to use the old value
    const timeout = setTimeout(() => {
      setPrevSufferingHours(sufferingHours);
    }, 50);
    
    return () => clearTimeout(timeout);
  }, [sufferingHours]);

  // Calculate how suffering blocks are distributed across the week
  const blocksGrid = useMemo(() => {
    const grid: boolean[][] = [];
    let remainingSufferingBlocks = sufferingBlocks;

    for (let day = 0; day < DAYS_PER_WEEK; day++) {
      const dayBlocks: boolean[] = [];
      for (let block = 0; block < BLOCKS_PER_DAY; block++) {
        if (remainingSufferingBlocks > 0) {
          dayBlocks.push(true); // primal state
          remainingSufferingBlocks--;
        } else {
          dayBlocks.push(false); // powerful state
        }
      }
      grid.push(dayBlocks);
    }

    return grid;
  }, [sufferingBlocks]);

  // Calculate animation delays for changed blocks
  const getAnimationDelay = (dayIndex: number, blockIndex: number) => {
    const blockPosition = dayIndex * BLOCKS_PER_DAY + blockIndex;
    
    // On initial load, stagger all blocks
    if (isInitialLoad) {
      return blockPosition * 0.03; // 30ms between each block on load
    }
    
    const wasBlockSuffering = blockPosition < prevSufferingBlocks;
    const isBlockSuffering = blockPosition < sufferingBlocks;
    
    // If block didn't change, no delay
    if (isBlockSuffering === wasBlockSuffering) {
      return 0;
    }
    
    // Calculate sequential delay for changed blocks
    const minChanged = Math.min(prevSufferingBlocks, sufferingBlocks);
    const maxChanged = Math.max(prevSufferingBlocks, sufferingBlocks);
    const isIncreasing = sufferingBlocks > prevSufferingBlocks;
    
    const orderIndex = isIncreasing 
      ? blockPosition - minChanged 
      : maxChanged - blockPosition - 1;
    
    return orderIndex * 0.05; // 50ms between each block
  };

  const powerfulHours = WAKING_HOURS_PER_WEEK - sufferingHours;

  return (
    <motion.section
      id="calendar"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="w-full max-w-md md:max-w-2xl mx-auto scroll-mt-4 px-4"
    >
      {/* Legend */}
      <div className="flex justify-center gap-4 mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-[2px] bg-suffering-medium" />
          <span className="text-xs text-text-secondary font-medium">
            Primal ({sufferingHours})
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-[2px] bg-brand-blue" />
          <span className="text-xs text-text-secondary font-medium">
            Powerful ({powerfulHours})
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-center text-xs text-text-muted mb-3">
        Each block represents {HOURS_PER_BLOCK} hours of your waking week
      </p>

      {/* Calendar Grid */}
      <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-200">
        <div className="grid grid-cols-7 gap-3 md:gap-4">
          {/* Day Headers */}
          {DAYS.map((day) => (
            <div
              key={day}
              className="text-center text-xs md:text-sm font-bold text-brand-blue pb-2 border-b border-gray-200"
            >
              {day}
            </div>
          ))}

          {/* Hour Blocks */}
          {blocksGrid.map((dayBlocks, dayIndex) => (
            <div key={dayIndex} className="flex flex-col items-center gap-2 md:gap-3">
              {dayBlocks.map((isSuffering, blockIndex) => (
                <HourBlock
                  key={`${dayIndex}-${blockIndex}`}
                  isSuffering={isSuffering}
                  animationDelay={getAnimationDelay(dayIndex, blockIndex)}
                  isInitialLoad={isInitialLoad}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default WeekCalendar;
