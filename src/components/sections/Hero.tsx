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
      {/* Background Video */}
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

      {/* Gradient overlays — layered for text legibility */}
      {/* Primary: wide left cover, solid through 50% then fading */}
      <div className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to right, #080707 0%, #080707 38%, rgba(8,7,7,0.82) 52%, rgba(8,7,7,0.45) 68%, transparent 100%)"
        }}
      />
      {/* Secondary scrim: overall dark veil to drop contrast of video */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-[1]" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080707] via-[#080707]/70 to-transparent pointer-events-none z-[1]" />

      {/* Hero Content */}
      <div className="relative z-[2] w-full max-w-[1200px] mx-auto flex-1 flex flex-col justify-center my-auto py-6 sm:py-8">
        <div className="max-w-[540px] flex flex-col items-start text-left">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-mono tracking-[0.18em] text-stone-400 uppercase mb-5 sm:mb-6"
          >
            UI/UX &amp; PRODUCT DESIGNER
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-[clamp(30px,5.2vw,58px)] font-saans font-bold tracking-[-0.03em] text-white leading-[1.08]"
          >
            I design products
            <br />
            <span className="font-serif italic font-normal text-stone-300">
              people actually use.
            </span>
          </motion.h1>

          {/* Supporting description */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 sm:mt-6 text-[clamp(14px,1.1vw,16px)] text-stone-300 font-normal leading-[1.7] max-w-[480px]"
          >
            I turn complex ideas into clear digital experiences through research, structured UX, strong visual systems, and rapid prototyping.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-stone-100 hover:bg-white text-stone-950 font-saans font-semibold text-[13.5px] transition-all shadow-[0_4px_20px_rgba(255,255,255,0.12)] hover:shadow-[0_4px_28px_rgba(255,255,255,0.22)] cursor-pointer"
            >
              <span>View my work</span>
              <span
                className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 text-xs"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </button>

            <a
              href="/Resume/jenish-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-11 px-5 rounded-full bg-white/[0.06] hover:bg-white/[0.11] text-stone-300 hover:text-white border border-white/[0.12] hover:border-white/20 font-saans font-medium text-[13.5px] transition-all backdrop-blur-md cursor-pointer"
              aria-label="View Resume (opens PDF in a new tab)"
            >
              <span>Resume</span>
              <span className="text-xs opacity-60" aria-hidden="true">↗</span>
            </a>
          </motion.div>

        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="relative z-[2] w-full max-w-[1200px] mx-auto pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400"
      >
        <span className="text-slate-500">2 Case Studies</span>

        <button
          onClick={() => scrollTo("projects")}
          className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to explore selected work"
        >
          <span className="tracking-[0.14em] uppercase text-[10px]">
            Scroll
          </span>
          <span className="inline-block transition-transform duration-200 group-hover:translate-y-0.5 text-slate-300">
            ↓
          </span>
        </button>

        <span className="hidden sm:inline text-slate-500">From India</span>
      </motion.div>
    </section>
  );
}
