"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile">("all");
  const [viewMode, setViewMode] = useState<"grid" | "editorial">("grid");

  const filterOptions = [
    {
      id: "all",
      label: "All Works",
      count: projects.length,
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      id: "web",
      label: "Editorial Platform",
      count: projects.filter((p) => p.category === "web").length,
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      id: "mobile",
      label: "Mobile & Systems",
      count: projects.filter((p) => p.category === "mobile").length,
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
  ] as const;

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="section-padding py-24 sm:py-32 lg:py-36 border-t border-white/10 relative overflow-hidden bg-canvas"
      aria-labelledby="projects-heading"
    >
      {/* Ambient Warm Obsidian & Ember Illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-rose-500/[0.05] via-amber-500/[0.02] to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1240px] relative z-10">
        {/* ── 01. SECTION HEADER & REDESIGNED SELECTOR SYSTEM ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <ScrollReveal>
            <SectionHeading
              number="01"
              title="Selected Works"
              subtitle="Architected for clarity · Designed to solve real human problems."
              className="!mb-0"
            />
          </ScrollReveal>

          {/* Selector Deck: Category Tabs + View Density Toggle */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-auto">
              {/* Category Segmented Selector */}
              <div className="flex items-center gap-1 p-1 rounded-full bg-[#161211]/90 border border-white/10 backdrop-blur-2xl shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
                {filterOptions.map((tab) => {
                  const isActive = activeFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveFilter(tab.id)}
                      className={`relative px-3.5 py-1.5 rounded-full text-xs font-grotesk tracking-wide font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                        isActive
                          ? "text-stone-950 font-semibold"
                          : "text-stone-400 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeFilterPill"
                          className="absolute inset-0 rounded-full bg-stone-100 shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
                          transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        <span className={isActive ? "text-stone-900" : "text-stone-400"}>
                          {tab.icon}
                        </span>
                        <span>{tab.label}</span>
                        <span
                          className={`text-[10px] font-mono font-bold ${
                            isActive ? "text-stone-900 opacity-80" : "text-stone-500"
                          }`}
                        >
                          ({tab.count})
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* View Layout Switcher (Grid vs Editorial Split) */}
              <div className="hidden sm:flex items-center gap-1 p-1 rounded-full bg-[#161211]/90 border border-white/10 backdrop-blur-2xl shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
                <button
                  onClick={() => setViewMode("grid")}
                  title="Compact 2-Column Grid"
                  className={`relative p-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    viewMode === "grid"
                      ? "text-stone-950 bg-stone-100 shadow-sm"
                      : "text-stone-400 hover:text-white"
                  }`}
                  aria-label="Switch to 2-column grid view"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </button>

                <button
                  onClick={() => setViewMode("editorial")}
                  title="Editorial Split View"
                  className={`relative p-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    viewMode === "editorial"
                      ? "text-stone-950 bg-stone-100 shadow-sm"
                      : "text-stone-400 hover:text-white"
                  }`}
                  aria-label="Switch to editorial split view"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                  </svg>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── 02. STATUS SUB-BAR (Understated Monospace Precision) ── */}
        <div className="flex items-center justify-between pb-5 mb-8 border-b border-white/[0.08] text-[11px] font-mono text-stone-400">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="tracking-wider uppercase text-stone-300 font-semibold">
              {filteredProjects.length} {filteredProjects.length === 1 ? "CASE STUDY" : "CASE STUDIES"}
            </span>
            <span className="text-stone-600">·</span>
            <span className="hidden sm:inline text-stone-500">
              FIGMA TOKENS &amp; PRODUCTION NEXT.JS
            </span>
          </div>

          <span className="uppercase tracking-widest text-[10px] text-stone-500 font-medium">
            LAYOUT: {viewMode.toUpperCase()}
          </span>
        </div>

        {/* ── 03. REDESIGNED WORKS SHOWCASE CONTAINER ── */}
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid-layout"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={
                filteredProjects.length === 1
                  ? "max-w-[620px] mx-auto w-full"
                  : "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full items-stretch"
              }
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="w-full flex"
                >
                  <ProjectCard project={project} index={index} viewMode="grid" />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="editorial-layout"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-10 sm:gap-14 lg:gap-16 w-full"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="w-full"
                >
                  <ProjectCard project={project} index={index} viewMode="editorial" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
