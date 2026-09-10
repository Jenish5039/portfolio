"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import type { Project } from "@/data/portfolio";
import Magnetic from "@/components/ui/Magnetic";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isReversed = index % 2 === 1;

  // Video lazy-loading and playback states
  const [shouldLoadVideo, setShouldLoadVideo] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window)
  );
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasLeftViewRef = useRef(false);
  const isCurrentlyInViewRef = useRef(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageParallax = useTransform(scrollYProgress, [0, 1], [8, -8]);

  // Phase 1: Zero-impact lazy loading.
  // Only mount/load video sources when the card approaches the viewport (350px margin).
  // Initial page load remains 100% instant and uncontested.
  useEffect(() => {
    if (!project.video || shouldReduceMotion) return;

    const el = mediaContainerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const loadObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          loadObserver.disconnect();
        }
      },
      { rootMargin: "350px 0px 350px 0px" }
    );

    loadObserver.observe(el);
    return () => loadObserver.disconnect();
  }, [project.video, shouldReduceMotion]);

  // Phase 2: Playback strictly when the user is in this specific project.
  // Plays once (no loop) when the user enters the project view.
  // Pauses when scrolled away, and replays from start if the user scrolls back.
  useEffect(() => {
    if (!project.video || shouldReduceMotion || !shouldLoadVideo) return;

    const el = mediaContainerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const playObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          isCurrentlyInViewRef.current = true;

          // If the user previously scrolled away from this project and returned, replay from beginning
          if (hasLeftViewRef.current) {
            try {
              video.currentTime = 0;
            } catch {
              // Ignore seek if metadata still settling
            }
            hasLeftViewRef.current = false;
          }

          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Autoplay policy or unmuted restriction fallback
            });
          }
        } else {
          isCurrentlyInViewRef.current = false;
          hasLeftViewRef.current = true;
          video.pause();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "-20px 0px -20px 0px",
      }
    );

    playObserver.observe(el);
    return () => playObserver.disconnect();
  }, [project.video, shouldReduceMotion, shouldLoadVideo]);

  const handleCanPlay = useCallback(() => {
    setIsVideoReady(true);
    if (isCurrentlyInViewRef.current && videoRef.current && !videoRef.current.ended) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!videoRef.current || !shouldLoadVideo || shouldReduceMotion) return;
    const video = videoRef.current;
    if (video.ended) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else if (video.paused && isCurrentlyInViewRef.current) {
      video.play().catch(() => {});
    }
  }, [shouldLoadVideo, shouldReduceMotion]);

  return (
    <div ref={cardRef} className="w-full">
      <div
        id={`project-${project.id}`}
        className="group"
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
            isReversed ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Text Column */}
          <div
            className={`lg:col-span-5 flex flex-col justify-between h-full gap-6 ${
              isReversed ? "lg:col-start-8" : ""
            }`}
          >
            {/* Project meta */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] font-mono text-stone-500 tracking-[0.14em] uppercase">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {project.id === "galo" ? (
                    <>
                      <span className="text-rose-400/90 font-medium">Featured</span> · Mobile App
                    </>
                  ) : (
                    project.category === "web" ? "Web Platform" : "Mobile App"
                  )}
                </span>
                <span className="text-stone-700 text-xs">·</span>
                <span className="text-[11px] font-mono text-stone-500">
                  {project.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[28px] sm:text-[34px] font-bold text-white font-saans tracking-[-0.03em] leading-tight mb-2">
                {project.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm font-saans text-stone-400 mb-5 leading-relaxed">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-[15px] font-saans text-stone-300 leading-[1.72] mb-6">
                {project.description}
              </p>

              {/* Role */}
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="w-1 h-1 rounded-full shrink-0"
                  style={{ backgroundColor: project.accent }}
                />
                <span className="text-[13px] font-saans text-stone-300 font-medium">
                  {project.role}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11.5px] font-saans text-stone-400 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.07]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            {project.href && (
              <div className="pt-2">
                <Magnetic strength={0.16}>
                  <Link
                    href={project.href}
                    className="group/cta inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-full bg-stone-100 hover:bg-white text-stone-950 font-saans font-semibold text-[13.5px] transition-all shadow-[0_4px_20px_rgba(255,255,255,0.12)] hover:shadow-[0_4px_28px_rgba(255,255,255,0.22)] cursor-pointer"
                  >
                    <span>Read case study</span>
                    <span
                      className="inline-block transition-transform duration-200 group-hover/cta:translate-x-1 text-sm"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </Magnetic>
              </div>
            )}
          </div>

          {/* Media Column (Image + Video Preview) */}
          <div
            ref={mediaContainerRef}
            className={`lg:col-span-7 ${isReversed ? "lg:col-start-1" : ""}`}
            onMouseEnter={handleMouseEnter}
          >
            <Link
              href={project.href || "#"}
              className="block relative w-full rounded-2xl overflow-hidden bg-stone-950 shadow-[0_24px_64px_rgba(0,0,0,0.7)] transition-transform duration-500 ease-out group-hover:scale-[1.01] cursor-pointer"
              aria-label={`Explore ${project.title} case study`}
            >
              {/* Subtle accent glow behind image */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none z-0"
                style={{
                  background: `radial-gradient(ellipse at 60% 40%, ${project.accentGlow} 0%, transparent 70%)`,
                }}
              />

              {/* Discreet Motion Preview Badge */}
              {project.video && !shouldReduceMotion && (
                <div
                  className={`absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-950/75 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-stone-300 pointer-events-none transition-all duration-500 ${
                    isVideoReady ? "opacity-90 translate-y-0" : "opacity-0 -translate-y-1"
                  }`}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span
                      className={`inline-flex rounded-full h-1.5 w-1.5 ${
                        isPlaying ? "bg-emerald-400" : "bg-stone-400"
                      }`}
                    />
                    {isPlaying && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    )}
                  </span>
                  <span className="uppercase text-[10px] tracking-[0.14em] font-medium text-stone-300">
                    Preview
                  </span>
                </div>
              )}

              <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[360px] overflow-hidden">
                <motion.div
                  style={{ y: shouldReduceMotion ? 0 : imageParallax }}
                  className="absolute inset-0 w-full h-[114%] -top-[7%]"
                >
                  {/* Poster Image — Immediate high-fidelity render without layout shift */}
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.subtitle}`}
                      fill
                      priority={false}
                      sizes="(max-width: 768px) 100vw, (max-width: 1240px) 60vw, 720px"
                      className="object-cover object-center"
                      quality={88}
                    />
                  )}

                  {/* High-Performance Video Preview (Plays strictly when user enters project, no loop) */}
                  {project.video && shouldLoadVideo && !shouldReduceMotion && (
                    <video
                      ref={videoRef}
                      muted
                      playsInline
                      preload="auto"
                      disablePictureInPicture
                      disableRemotePlayback
                      onCanPlay={handleCanPlay}
                      onPlaying={() => {
                        setIsVideoReady(true);
                        setIsPlaying(true);
                      }}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                      className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 pointer-events-none ${
                        isVideoReady ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {project.video.webm && (
                        <source src={project.video.webm} type="video/webm" />
                      )}
                      <source src={project.video.mp4} type="video/mp4" />
                    </video>
                  )}
                </motion.div>

                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-stone-950/60 to-transparent pointer-events-none z-10" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
