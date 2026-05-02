"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const quoteLines = [
    { words: [{ text: "Good" }, { text: "design" }], alignClass: "text-left" },
    { words: [{ text: "feels" }, { text: "effortless.", highlight: true }], alignClass: "text-center sm:text-left sm:ml-[15%] md:ml-[20%]" },
    { words: [{ text: "Great" }, { text: "design" }], alignClass: "text-left mt-6 md:mt-10" },
    { words: [{ text: "has" }, { text: "purpose.", highlight: true }], alignClass: "text-right sm:text-left sm:ml-[30%] md:ml-[40%]" },
  ];

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger between lines
        delayChildren: 0.3,
      },
    },
  };

  const lineContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Stagger words within a line
      },
    },
  };

  const wordVariant = {
    hidden: {
      opacity: 0,
      y: 120,
      rotateX: -90,
      scale: 0.8,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="section-padding relative flex min-h-screen flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.4,
          mixBlendMode: "screen",
          filter: "brightness(0.8) saturate(0.7) hue-rotate(240deg)",
        }}
      >
        <source src="/videos/water-bg.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.6) 100%)",
        }}
      />

        {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, var(--accent-glow), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Quote — staircase word-by-word reveal with 3D perspective */}
        <motion.div
          className="flex flex-col"
          style={{ perspective: 1000 }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {quoteLines.map((line, lineIndex) => (
            <motion.h1
              key={lineIndex}
              variants={lineContainer}
              className={`font-syne text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-[6.5rem] ${line.alignClass}`}
            >
              {line.words.map((wordObj, wordIndex) => (
                <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em] pb-2">
                  <motion.span
                    variants={wordVariant}
                    className="inline-block"
                    style={{
                      color: wordObj.highlight ? "var(--accent)" : "var(--text-primary)",
                      transformOrigin: "bottom center",
                    }}
                  >
                    {wordObj.text}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute z-10 bottom-grid-5 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span
            className="font-dmMono text-xs tracking-widest uppercase"
            style={{ color: "var(--text-secondary)" }}
          >
            Scroll
          </span>
          <motion.div
            className="h-8 w-5 rounded-full border"
            style={{ borderColor: "var(--text-secondary)" }}
            aria-hidden="true"
          >
            <motion.div
              className="mx-auto mt-1.5 h-2 w-1 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
