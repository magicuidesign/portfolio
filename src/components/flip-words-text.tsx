"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type FlipWordsTextProps = {
  words: readonly string[];
  suffix?: string;
  className?: string;
  wordClassName?: string;
  intervalMs?: number;
};

export default function FlipWordsText({
  words,
  suffix,
  className,
  wordClassName,
  intervalMs = 2600,
}: FlipWordsTextProps) {
  const [index, setIndex] = useState(0);

  const longestWord = useMemo(() => {
    if (words.length === 0) {
      return "";
    }

    return words.reduce((longest, current) =>
      current.length > longest.length ? current : longest,
    );
  }, [words]);

  useEffect(() => {
    if (words.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, intervalMs);

    return () => window.clearInterval(intervalId);
  }, [intervalMs, words.length]);

  if (words.length === 0) {
    return suffix ? <span className={className}>{suffix}</span> : null;
  }

  return (
    <span className={cn("inline-flex flex-wrap items-baseline", className)}>
      <span className="relative mr-2 inline-grid min-h-[1.2em] [perspective:1200px]">
        <span className="invisible col-start-1 row-start-1 whitespace-nowrap">
          {longestWord}
        </span>
        <AnimatePresence initial={false} mode="sync">
          <motion.span
            key={words[index]}
            className={cn(
              "absolute inset-0 col-start-1 row-start-1 whitespace-nowrap font-medium text-foreground will-change-transform",
              wordClassName,
            )}
            initial={{ opacity: 0, rotateX: -55, y: 10, scale: 0.985, filter: "blur(6px)" }}
            animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, rotateX: 55, y: -10, scale: 0.985, filter: "blur(4px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "50% 65%" }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      {suffix ? <span>{suffix}</span> : null}
    </span>
  );
}
