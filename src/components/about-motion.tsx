"use client";

import { type ReactNode } from "react";
import { motion, MotionConfig } from "motion/react";

type AboutRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const easeVortex = [0.22, 1, 0.36, 1] as const;

export function AboutReveal({
  children,
  className,
  delay = 0,
}: AboutRevealProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, delay, ease: easeVortex }}
        className={className}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
