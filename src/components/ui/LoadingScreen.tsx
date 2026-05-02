"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.classList.add("loading");

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("loading");
    };
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.classList.remove("loading");
        onComplete();
      }}
    >
      {isVisible && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "var(--bg-primary)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          role="status"
          aria-label="Loading"
        >
          <motion.h1
            className="font-syne text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl"
            style={{ color: "var(--text-primary)" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            JeMe{" "}
            <span className="text-gradient">Designs</span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
