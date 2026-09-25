"use client";

import { type ReactNode } from "react";
import { motion, MotionConfig } from "motion/react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const easeVortex = [0.22, 1, 0.36, 1] as const;

export function SectionReveal({
  children,
  className,
  delay = 0,
}: SectionRevealProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, delay, ease: easeVortex }}
        className={className}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
