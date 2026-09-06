"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const variants: Record<AnimationType, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 24, scale: 0.985 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  "fade-in": {
    hidden: { opacity: 0, scale: 0.985 },
    visible: { opacity: 1, scale: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
};

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.75,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
