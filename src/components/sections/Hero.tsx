"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Hero() {
  const { scrollTo } = useSmoothScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);

  // Video seeking logic with seek-flooding prevention
  const seekVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration || Number.isNaN(video.duration)) return;
    if (isSeekingRef.current) return;

    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.005) {
      isSeekingRef.current = true;
      video.currentTime = targetTimeRef.current;
    }
  }, []);

  const handleSeeked = () => {
    isSeekingRef.current = false;
    const video = videoRef.current;
    if (!video || !video.duration || Number.isNaN(video.duration)) return;

    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.005) {
      isSeekingRef.current = true;
      video.currentTime = targetTimeRef.current;
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      targetTimeRef.current = 0.05;
      video.currentTime = 0.05;
    }
  };

  // Prime initial frame on load and keep paused
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const primeFrame = () => {
      video.pause();
      if (video.duration && video.currentTime === 0) {
        video.currentTime = 0.05;
      }
    };

    video.addEventListener("loadeddata", primeFrame);
    video.addEventListener("canplay", primeFrame);
    if (video.readyState >= 2) {
      primeFrame();
    }

    return () => {
      video.removeEventListener("loadeddata", primeFrame);
      video.removeEventListener("canplay", primeFrame);
    };
  }, []);

  // Desktop cursor scrub listener (strictly runs on mousemove without touching scroll)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const video = videoRef.current;
      if (!video || !video.duration || Number.isNaN(video.duration)) {
        prevXRef.current = e.clientX;
        return;
      }

      if (prevXRef.current === null) {
        prevXRef.current = e.clientX;
        return;
      }

      const currentX = e.clientX;
      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const SENSITIVITY = 0.8;
      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
      const newTarget = Math.max(0, Math.min(video.duration, targetTimeRef.current + timeOffset));
      targetTimeRef.current = newTarget;

      seekVideo();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [seekVideo]);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-black text-white select-none px-4 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-6 sm:pb-8"
      aria-label="Hero section introducing Jeme"
    >
      {/* ── 01. BACKGROUND VIDEO (LIGHTWEIGHT WEBM FIRST, TOUCH/MOUSE SCRUB) ── */}
      <video
        ref={videoRef}
        poster="/Herosec_poster.webp"
        muted
        playsInline
        preload="metadata"
        onSeeked={handleSeeked}
        onLoadedMetadata={handleLoadedMetadata}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        style={{ objectPosition: "70% center" }}
      >
        <source src="/Herosec.webm" type="video/webm" />
        <source src="/Herosec.mp4" type="video/mp4" />
      </video>

      {/* Atmospheric Contrast Gradient — soft and seamless into warm obsidian */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080707]/90 via-[#080707]/50 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080707] via-[#080707]/60 to-transparent pointer-events-none z-0" />

      {/* ── 02. MINIMAL HERO CONTENT ── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex-1 flex flex-col justify-center my-auto py-6 sm:py-8">
        <div className="max-w-xl flex flex-col items-start text-left">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-stone-400 uppercase mb-3 sm:mb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.9)]" />
            <span>JEME · PRODUCT &amp; UI/UX DESIGNER</span>
          </motion.div>

          {/* Simple, Bold Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[clamp(28px,5vw,56px)] font-saans font-bold tracking-tight text-white leading-[1.1]"
          >
            Designing systems that endure. <br />
            <span className="font-serif italic font-normal text-stone-300">
              Crafting products people feel.
            </span>
          </motion.h1>

          {/* Concise Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 sm:mt-4 text-[clamp(14px,1.1vw,16.5px)] text-stone-300 font-normal leading-relaxed max-w-lg"
          >
            Product &amp; UI/UX Designer translating ambiguous problem spaces into intuitive digital systems, multi-tier Figma architectures, and tactile frontend interfaces.
          </motion.p>

          {/* Minimal, Focused Action Bar */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 sm:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center justify-center gap-2 h-11 px-5 sm:px-6 rounded-full bg-stone-100 hover:bg-white text-stone-950 font-saans font-semibold text-xs sm:text-[13.5px] transition-all shadow-[0_4px_20px_rgba(255,255,255,0.12)] hover:shadow-[0_4px_28px_rgba(255,255,255,0.24)] cursor-pointer"
            >
              <span>Explore Selected Works</span>
              <span
                className="inline-block transition-transform duration-200 group-hover:translate-y-0.5 text-xs font-bold"
                aria-hidden="true"
              >
                &darr;
              </span>
            </button>

            <a
              href="/Resume/jenish-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-11 px-5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-stone-300 hover:text-white border border-white/[0.12] hover:border-white/25 font-saans font-medium text-[13.5px] transition-all backdrop-blur-md cursor-pointer"
              aria-label="View Resume (opens PDF in a new tab)"
            >
              <span>Resume / CV</span>
              <span className="text-xs opacity-70" aria-hidden="true">↗</span>
            </a>
          </motion.div>

        </div>
      </div>

      {/* ── 03. BOTTOM STORYLINE PROMPT ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 w-full max-w-[1200px] mx-auto pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400"
      >
        <div className="flex items-center gap-2">
          <span className="text-slate-200 font-semibold">01</span>
          <span className="text-white/20">/</span>
          <span>SELECTED WORKS</span>
        </div>

        <button
          onClick={() => scrollTo("projects")}
          className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to explore selected work"
        >
          <span className="tracking-[0.14em] uppercase text-[10px]">
            Scroll to explore
          </span>
          <span className="inline-block transition-transform duration-200 group-hover:translate-y-0.5 text-slate-300">
            &darr;
          </span>
        </button>

        <span className="hidden sm:inline text-slate-500">2 CASE STUDIES</span>
      </motion.div>
    </section>
  );
}
