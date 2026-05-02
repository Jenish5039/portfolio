"use client";

import { ReactNode, useRef, useEffect, useState, useCallback } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Seamless infinite horizontal marquee — "train-like" scroll.
 *
 * Measures one copy's width, then uses that exact pixel value
 * as the CSS animation distance to guarantee a seamless loop.
 */
export default function Marquee({
  children,
  speed = 30,
  reverse = false,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const measureRef = useRef<HTMLDivElement>(null);
  const [copyWidth, setCopyWidth] = useState(0);

  const measure = useCallback(() => {
    if (measureRef.current) {
      setCopyWidth(measureRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    // Measure after fonts have loaded for accurate width
    measure();
    if (document.fonts) {
      document.fonts.ready.then(measure);
    }
    // Also measure on resize
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <div
      className={`marquee-container ${className}`}
      role="region"
      aria-label="Scrolling skills"
    >
      <div
        className={`marquee-track ${pauseOnHover ? "hover-pause" : ""}`}
        style={{
          ["--marquee-width" as string]: `${copyWidth}px`,
          ["--marquee-duration" as string]: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {/* Render 4 copies for a seamless loop */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? measureRef : undefined}
            className="marquee-copy"
            aria-hidden={i > 0}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
