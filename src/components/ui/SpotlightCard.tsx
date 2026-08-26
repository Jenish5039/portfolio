"use client";

import React, { useRef, useState, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(233, 235, 223, 0.07)",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, [shouldReduceMotion]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      {!shouldReduceMotion && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
