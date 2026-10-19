import { type ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function SectionReveal({ children, className }: SectionRevealProps) {
  return <div className={className}>{children}</div>;
}
