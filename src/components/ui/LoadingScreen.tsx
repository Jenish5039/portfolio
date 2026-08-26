"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 350);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        onComplete();
      }}
    >
      {isVisible && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian-canvas select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 0.35, ease: [0.72, 0, 0.12, 1] }}
          role="status"
          aria-label="Loading"
        >
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-2xl font-light tracking-display text-parchment font-saans">
              Jeme<span className="text-copper-wire font-normal">&bull;</span>
            </h1>
          </motion.div>
          <span className="eyebrow-label text-limestone pt-3 text-[12px] font-grotesk tracking-wider uppercase">
            PRODUCT DESIGN · UI/UX · CRAFT ATELIER
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
