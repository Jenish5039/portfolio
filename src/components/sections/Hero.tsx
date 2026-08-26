"use client";

import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Magnetic from "@/components/ui/Magnetic";
import CelestialSphereCanvas from "@/components/ui/CelestialSphereCanvas";

export default function Hero() {
  const { scrollTo } = useSmoothScroll();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0e0e0d] min-h-screen flex items-center justify-center section-padding pt-24 pb-16"
      aria-label="Hero introduction"
    >
      {/* Layer 0: Warm Studio Ambient Spotlight on the Right */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_80%_at_70%_48%,rgba(70,58,45,0.48)_0%,rgba(36,30,24,0.28)_45%,rgba(14,14,13,0.95)_80%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0d] via-transparent to-[#0e0e0d]/50" />
      </div>

      {/* Layer 1: Main 2-Column Composition */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[calc(100vh-140px)]">
        
        {/* Left Column: Editorial Headline, Identity & CTAs (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left justify-center pt-8 lg:pt-0">
          
          {/* Majestic High-Contrast Display Name */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif-display text-[clamp(72px,10.2vw,144px)] font-normal leading-[0.90] tracking-[-0.015em] text-[#f7f6f0] select-none">
              JENISH
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.h2
            className="font-saans text-[clamp(22px,2.6vw,36px)] font-light leading-[1.18] text-[#a4a29a] mt-4 sm:mt-5 tracking-[-0.02em]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            Product &amp; UI/UX Designer
          </motion.h2>

          {/* Narrative Description */}
          <motion.p
            className="font-saans text-[15.5px] sm:text-[16.5px] text-[#8e8c84] font-light leading-[1.78] max-w-lg mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            Crafting intuitive digital products, UX research frameworks, and
            scalable Figma design systems — powered by AI-accelerated frontend
            engineering in React and Next.js.
          </motion.p>

          {/* Action CTAs: Solid White Pill & Ghost Pill */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mt-9 sm:mt-11"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <Magnetic strength={0.15}>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("projects");
                }}
                className="group bg-[#e8e7e0] hover:bg-white text-[#121212] font-medium !py-3 !px-7 text-[13.5px] rounded-full inline-flex items-center gap-2 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.08)] hover:shadow-[0_6px_28px_rgba(255,255,255,0.18)] cursor-pointer"
              >
                <span>View Selected Works</span>
                <span
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </a>
            </Magnetic>

            <Magnetic strength={0.15}>
              <a
                href="/Resume/jenish-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-transparent hover:bg-white/5 text-[#e6e5dd] border border-white/15 hover:border-white/40 !py-3 !px-6 text-[13.5px] font-normal rounded-full inline-flex items-center gap-2 transition-all"
                aria-label="View Resume (opens PDF in a new tab)"
              >
                <span>Resume</span>
                <span
                  className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[11.5px] opacity-80"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </Magnetic>
          </motion.div>

        </div>

        {/* Right Column: 3D Celestial Saturn Sphere & Tilted Ring System (6 cols) */}
        <motion.div
          className="lg:col-span-6 w-full h-[460px] sm:h-[540px] lg:h-[620px] relative flex items-center justify-center overflow-visible"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <CelestialSphereCanvas />
        </motion.div>

      </div>

      {/* Bottom-Left Ambient "SCROLL" Indicator */}
      <motion.div
        className="absolute bottom-8 left-8 sm:left-14 hidden sm:flex flex-col items-center gap-2.5 text-[10.5px] tracking-[0.28em] font-grotesk text-[#76756e] uppercase select-none pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <span>SCROLL</span>
        <div className="flex flex-col items-center gap-1">
          <span className="h-6 w-px bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40 shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
        </div>
      </motion.div>

    </section>
  );
}
