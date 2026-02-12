"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollReveal = ({ children, className }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={cn("reveal", isVisible && "visible", className)}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
