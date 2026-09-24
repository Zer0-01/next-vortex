"use client";

import { useEffect, type ReactNode } from "react";
import {
  motion,
  useAnimationControls,
  useReducedMotion,
} from "motion/react";

type HeroMotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "rise" | "reveal";
};

const easeVortex = [0.22, 1, 0.36, 1] as const;

export function HeroMotion({
  children,
  className,
  delay = 0,
  variant = "rise",
}: HeroMotionProps) {
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      controls.stop();
      controls.set(
        variant === "reveal"
          ? { opacity: 1, clipPath: "inset(0 0 0% 0)" }
          : { opacity: 1, y: 0 },
      );
      return;
    }

    void controls.start(
      variant === "reveal"
        ? {
            opacity: [0, 1],
            clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)"],
          }
        : { opacity: [0, 1], y: [24, 0] },
      { duration: 0.65, delay, ease: easeVortex },
    );

    return () => controls.stop();
  }, [controls, delay, reduceMotion, variant]);

  return (
    <motion.div
      initial={false}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroArc() {
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      controls.stop();
      controls.set({ opacity: 1, pathLength: 1 });
      return;
    }

    void controls.start(
      { opacity: [0, 1], pathLength: [0, 1] },
      { duration: 0.8, delay: 0.2, ease: easeVortex },
    );

    return () => controls.stop();
  }, [controls, reduceMotion]);

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 640 640"
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[130%] -translate-x-1/2 -translate-y-1/2 text-primary/80"
    >
      <motion.path
        d="M 80 390 C 105 165, 330 65, 535 170 C 690 250, 650 485, 455 555"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={false}
        animate={controls}
      />
    </svg>
  );
}
