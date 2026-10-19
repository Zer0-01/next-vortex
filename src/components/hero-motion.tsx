import { type ReactNode } from "react";

type HeroMotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "rise" | "reveal";
};

export function HeroMotion({ children, className }: HeroMotionProps) {
  return <div className={className}>{children}</div>;
}
