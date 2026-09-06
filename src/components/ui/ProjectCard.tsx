"use client";

import { useRef } from "react";
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
  viewMode?: "grid" | "editorial";
}

export default function ProjectCard({
  project,
  index,
  viewMode = "grid",
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isReversed = index % 2 === 1;

  // Direct linear GPU parallax (zero spring physics solver overhead during scroll)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageParallax = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const browserUrl =
    project.id === "georythum"
      ? "georythum.org/editorial"
      : "galo.app/secure-vault";

  /* -------------------------------------------------------------
     01. COMPACT GRID VIEW (Default — Proportional & Balanced)
     ------------------------------------------------------------- */
  if (viewMode === "grid") {
    return (
      <div
        ref={cardRef}
        className="w-full h-full flex"
      >
        <div
          id={`project-grid-${project.id}`}
          className="card-raised p-5 sm:p-6 lg:p-7 transition-all duration-300 relative overflow-hidden flex flex-col justify-between w-full h-full group"
        >
          {/* Subtle Ambient Accent Glow */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none"
            style={{ background: project.accentGlow }}
          />

          <div>
            {/* Header: Project Index, Duration, and Role */}
            <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-3.5 mb-4">
              <div className="flex items-center gap-2">
                <span
                  className="text-[10px] font-mono font-bold tracking-[0.16em] uppercase px-2.5 py-0.5 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-md"
                  style={{ color: project.accent }}
                >
                  {`0${index + 1} · ${project.category === "web" ? "EDITORIAL" : "MOBILE"}`}
                </span>
                <span className="text-[11px] font-mono text-stone-400 hidden sm:inline">
                  {project.duration}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: project.accent,
                    boxShadow: `0 0 8px ${project.accent}`,
                  }}
                />
                <span className="text-[11px] font-grotesk text-stone-300 font-medium">
                  {project.role}
                </span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="mb-3.5">
              <h3 className="text-[20px] sm:text-[23px] font-bold text-white font-saans tracking-[-0.03em] leading-tight group-hover:text-stone-100 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-stone-400 font-saans mt-1 line-clamp-1">
                {project.subtitle}
              </p>
            </div>

            {/* Visual Hardware / Browser Mockup Display */}
            <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-[#120e0d]/90 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.7)] mb-4">
              {/* Hardware Top Chrome Bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] px-3.5 py-2 bg-[#161211]/95 select-none relative z-10">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f56]/80" />
                  <span className="h-2 w-2 rounded-full bg-[#ffbd2e]/80" />
                  <span className="h-2 w-2 rounded-full bg-[#27c93f]/80" />
                </div>

                <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-stone-300 tracking-tight">
                  <span className="text-[8px] opacity-70">🔒</span>
                  <span className="truncate max-w-[150px] sm:max-w-none">{browserUrl}</span>
                </div>

                <span className="text-[9px] font-mono text-stone-400 uppercase tracking-wider font-semibold">
                  {project.tags[0]}
                </span>
              </div>

              {/* Clickable Image Container */}
              <Link
                href={project.href || "#"}
                className="block relative w-full aspect-[16/10] overflow-hidden bg-stone-950 cursor-pointer"
                aria-label={`Explore ${project.title} Case Study`}
              >
                <motion.div
                  style={{ y: shouldReduceMotion ? 0 : imageParallax }}
                  className="absolute inset-0 w-full h-[112%] -top-[6%]"
                >
                  <Image
                    src={project.image || ""}
                    alt={`${project.title} Product Presentation`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    quality={85}
                  />
                </motion.div>

                {/* Glass Specular Overlay */}
                <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-10" />

                {/* Hover Badge */}
                <div className="absolute bottom-3 right-3 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181312]/95 backdrop-blur-xl border border-white/20 text-white font-grotesk text-[11px] font-bold shadow-lg">
                    <span>Inspect</span>
                    <span style={{ color: project.accent }}>&rarr;</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* Narrative Description */}
            <p className="text-[13px] sm:text-[13.5px] font-saans text-stone-300 leading-relaxed line-clamp-2 mb-4">
              {project.description}
            </p>

            {/* Compact System Metrics Micro-Grid */}
            <div className="grid grid-cols-3 gap-2 pt-3.5 border-t border-white/[0.08] mb-4">
              {project.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-2 sm:p-2.5 rounded-lg bg-white/[0.025] border border-white/[0.06] flex flex-col justify-between transition-colors hover:bg-white/[0.05]"
                >
                  <span className="text-xs sm:text-[13px] font-bold text-white font-saans tracking-tight leading-tight truncate">
                    {stat.value}
                  </span>
                  <span
                    className="text-[9px] font-mono uppercase tracking-wider mt-1 truncate font-semibold"
                    style={{ color: project.accent }}
                  >
                    {stat.label.split(" ")[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer: Tags & CTA */}
          <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-grotesk font-medium text-stone-300 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.href && (
              <Magnetic strength={0.14}>
                <Link
                  href={project.href}
                  className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-100 hover:bg-white text-stone-950 text-xs font-bold font-saans shadow-sm hover:shadow-[0_0_16px_rgba(255,255,255,0.22)] transition-all cursor-pointer"
                >
                  <span>Case Study</span>
                  <span
                    className="inline-block transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </Link>
              </Magnetic>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* -------------------------------------------------------------
     02. EDITORIAL VIEW (Horizontal Split — Balanced & Magazine Style)
     ------------------------------------------------------------- */
  return (
    <div
      ref={cardRef}
      className="w-full"
    >
      <div
        id={`project-editorial-${project.id}`}
        className="card-raised p-6 sm:p-8 lg:p-9 transition-all duration-300 relative overflow-hidden group"
      >
        {/* Ambient Color Illumination */}
        <div
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: project.accentGlow }}
        />

        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${
            isReversed ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Narrative & Details Column (5 cols) */}
          <div
            className={`lg:col-span-5 flex flex-col justify-between h-full gap-5 ${
              isReversed ? "lg:col-start-8" : ""
            }`}
          >
            <div>
              {/* Header: Identity & Role */}
              <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-3 mb-4">
                <span
                  className="text-[10.5px] font-mono font-medium tracking-[0.16em] uppercase px-2.5 py-0.5 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-md"
                  style={{ color: project.accent }}
                >
                  {`0${index + 1} / ${project.category === "web" ? "EDITORIAL PLATFORM" : "MOBILE SYSTEMS"}`}
                </span>
                <span className="text-xs font-grotesk text-stone-400 font-medium">
                  {project.duration}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-3">
                <h3 className="text-[24px] sm:text-[28px] font-bold text-white font-saans tracking-[-0.03em] leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-saans text-stone-400 mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Narrative Description */}
              <p className="text-[13.5px] sm:text-[14px] font-saans text-stone-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* System Metrics Strip */}
              <div className="grid grid-cols-3 gap-2.5 pt-3.5 border-t border-white/[0.08] mb-4">
                {project.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-2.5 rounded-lg bg-white/[0.025] border border-white/[0.06] flex flex-col justify-between"
                  >
                    <span className="text-[13.5px] font-bold text-white font-saans tracking-tight truncate">
                      {stat.value}
                    </span>
                    <span
                      className="text-[9.5px] font-mono uppercase tracking-wider mt-1 truncate font-medium"
                      style={{ color: project.accent }}
                    >
                      {stat.label.split(" ")[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10.5px] font-grotesk font-medium text-stone-300 px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.href && (
                <Magnetic strength={0.15}>
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-100 hover:bg-white text-stone-950 text-xs font-bold font-saans shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all cursor-pointer"
                  >
                    <span>Read Deep Dive</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </Magnetic>
              )}
            </div>
          </div>

          {/* Visual Showcase Column (7 cols) */}
          <div className={`lg:col-span-7 ${isReversed ? "lg:col-start-1" : ""}`}>
            <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-[#120e0d]/90 backdrop-blur-md shadow-2xl">
              {/* Chrome bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5 bg-[#161211]/95 select-none relative z-10">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
                  <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10.5px] font-mono text-stone-300">
                  <span className="text-[9px]">🔒</span>
                  <span>{browserUrl}</span>
                </div>
                <span className="text-[10px] font-mono text-stone-400 uppercase font-semibold">
                  {project.tags[0]}
                </span>
              </div>

              <Link
                href={project.href || "#"}
                className="block relative w-full h-[240px] sm:h-[300px] lg:h-[340px] overflow-hidden bg-stone-950 cursor-pointer"
                aria-label={`Explore ${project.title} Case Study`}
              >
                <motion.div
                  style={{ y: shouldReduceMotion ? 0 : imageParallax }}
                  className="absolute inset-0 w-full h-[115%] -top-[7.5%]"
                >
                  <Image
                    src={project.image || ""}
                    alt={`${project.title} Product Presentation`}
                    fill
                    sizes="(max-width: 1240px) 100vw, 700px"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                    quality={85}
                  />
                </motion.div>
                <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-10" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
