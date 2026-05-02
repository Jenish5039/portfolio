"use client";

import { useEffect, useSyncExternalStore, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Subscribe to pointer capability — returns true only for fine-pointer devices.
 * Uses useSyncExternalStore to avoid the "setState in effect body" lint error.
 */
function subscribeToPointer(callback: () => void) {
  const mq = window.matchMedia("(pointer: fine)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getPointerSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine)").matches;
}

function getServerSnapshot() {
  return false;
}

export default function CustomCursor() {
  const hasFinePointer = useSyncExternalStore(
    subscribeToPointer,
    getPointerSnapshot,
    getServerSnapshot,
  );
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!hasFinePointer) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [hasFinePointer, cursorX, cursorY]);

  if (!hasFinePointer) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: isHovering ? 48 : 12,
          height: isHovering ? 48 : 12,
          backgroundColor: isHovering ? "var(--accent-glow)" : "var(--accent)",
          border: isHovering ? "2px solid var(--accent)" : "none",
          translateX: "-50%",
          translateY: "-50%",
          transition: "width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border 0.3s ease",
        }}
        aria-hidden="true"
      />
      {/* Trailing ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99] rounded-full border"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: isHovering ? 64 : 32,
          height: isHovering ? 64 : 32,
          borderColor: "var(--accent)",
          opacity: 0.3,
          translateX: "-50%",
          translateY: "-50%",
          transition: "width 0.4s ease, height 0.4s ease",
        }}
        aria-hidden="true"
      />
    </>
  );
}
