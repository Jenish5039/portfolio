"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.2, 0.8, 0.8, 0.2]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-padding py-24 sm:py-32 lg:py-36 border-t border-white/10 relative overflow-hidden bg-canvas"
      aria-labelledby="projects-heading"
    >
      {/* Dynamic ambient warm glow that breathes with scroll */}
      <motion.div
        style={{ y: glowY, opacity: glowOpacity }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-rose-500/[0.05] via-amber-500/[0.02] to-transparent blur-3xl pointer-events-none will-change-transform"
      />

      <div className="mx-auto max-w-[1240px] relative z-10">

        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-start gap-3 mb-14 sm:mb-18">
            {/* Dynamic Section Reading Lead Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px 0px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-10 h-[1.5px] bg-gradient-to-r from-rose-500 to-amber-500 origin-left mb-0.5"
            />
            <span className="text-[11px] font-mono tracking-[0.18em] text-stone-500 uppercase">
              01 / Selected Work
            </span>
            <h2
              id="projects-heading"
              className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.035em] text-white font-saans"
            >
              Case Studies
            </h2>
            <p className="text-[15px] sm:text-[17px] text-stone-400 font-normal leading-relaxed max-w-xl mt-1 font-saans">
              Two projects. Each one a different problem space, different platform, different design challenge.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects — editorial list layout */}
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
