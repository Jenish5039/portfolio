"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const statementParallax = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const portraitParallax = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const portraitZoom = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1.0, 1.02]);

  const pillars = [
    {
      num: "01",
      title: "Generative UX Research",
      desc: "Uncovering latent human needs, mapping cognitive workflows, and validating usability through rigorous testing before pushing pixels.",
    },
    {
      num: "02",
      title: "Multi-Tier Design Systems",
      desc: "Architecting atomic Figma variables, documented design tokens, and modular UI patterns adhering to strict WCAG 2.2 AAA accessibility.",
    },
    {
      num: "03",
      title: "Tactile Frontend Execution",
      desc: "Bridging the design-to-production divide with high-fidelity React & Next.js implementation, ensuring zero loss of design intent.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding py-28 sm:py-36 lg:py-40 border-t border-white/10 relative overflow-hidden bg-canvas"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1240px]">
        <ScrollReveal>
          <SectionHeading
            number="02"
            title="About & Approach"
            subtitle="Balancing rigorous problem discovery with tactile digital product craft."
          />
        </ScrollReveal>

        {/* Bento Grid System with Dynamic Scroll Parallax */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          
          {/* Main Statement & Core Pillars (8 cols) */}
          <motion.div
            style={{ y: statementParallax }}
            className="lg:col-span-8 flex flex-col will-change-transform"
          >
            <div className="card-raised p-6 sm:p-10 lg:p-12 flex flex-col justify-between h-full">
              <div className="flex flex-col justify-between h-full gap-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-stone-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.9)]" />
                    <span>JENISH M · PRODUCT &amp; UI/UX DESIGNER</span>
                  </div>
                  <h3 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold leading-[1.25] tracking-[-0.03em] text-white font-saans">
                    Designing thoughtful, user-centered digital products backed by research and engineering fidelity.
                  </h3>
                  <p className="text-[15px] sm:text-[16.5px] text-stone-300 leading-[1.75] font-saans font-normal max-w-2xl pt-1">
                    I am Jenish M (known professionally as Jeme) — a Product &amp; UI/UX Designer dedicated to solving complex user problems through user research, intuitive interaction design, and scalable Figma design systems. To bridge the gap between design and production, I maintain deep frontend engineering fluency in React and Next.js, ensuring every design decision and sub-pixel micro-interaction translates seamlessly into functional production applications.
                  </p>
                </div>

                {/* 3 Pillars Grid with Micro-hover */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 sm:pt-8 border-t border-white/[0.08]">
                  {pillars.map((pillar, idx) => (
                    <motion.div
                      key={pillar.num}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.08 * idx, ease: [0.16, 1, 0.3, 1] }}
                      className="group flex flex-col gap-2 p-4 rounded-xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200"
                    >
                      <span className="text-[11px] font-mono font-bold text-rose-400">
                        {pillar.num}
                      </span>
                      <span className="text-[14.5px] font-saans text-white font-bold tracking-tight">
                        {pillar.title}
                      </span>
                      <p className="text-[13px] text-stone-300 leading-relaxed font-saans font-normal">
                        {pillar.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Design Credentials & Toolkit Matrix */}
                <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400">CERTIFICATIONS</span>
                    <span className="text-stone-200 font-semibold">IBM Enterprise Design Thinking</span>
                    <span className="text-stone-400 text-[11px]">Accenture User Experience Practitioner</span>
                  </div>
                  <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400">PRIMARY TOOLKIT</span>
                    <span className="text-stone-200 font-semibold">Figma, Variables, Design Tokens</span>
                    <span className="text-stone-400 text-[11px]">React, Next.js, Framer Motion, Tailwind</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Portrait & Quick Status (4 cols) */}
          <motion.div
            style={{ y: portraitParallax }}
            className="lg:col-span-4 flex flex-col will-change-transform"
          >
            <div className="card-raised p-6 sm:p-8 flex flex-col justify-between h-full">
              <div className="flex flex-col justify-between h-full gap-6">
                <div className="relative w-full flex-1 min-h-[280px] sm:min-h-[320px] rounded-xl overflow-hidden bg-stone-950/60 border border-white/[0.08] shadow-md group">
                  <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{ scale: portraitZoom }}
                  >
                    <Image
                      src="/ME.png"
                      alt="Jenish M (Jeme) - Product & UI/UX Designer"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      quality={85}
                    />
                  </motion.div>
                </div>

                <div className="flex flex-col gap-3 pt-3 border-t border-white/[0.08] text-xs font-mono text-stone-300">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400 font-medium uppercase tracking-wider">NAME</span>
                    <span className="text-white font-semibold">JENISH M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400 font-medium uppercase tracking-wider">LOCATION</span>
                    <span className="text-white font-semibold">Hosur / Remote</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400 font-medium uppercase tracking-wider">STATUS</span>
                    <span className="text-white font-semibold flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,1)]" />
                      </span>
                      Available
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400 font-medium uppercase tracking-wider">FOCUS</span>
                    <span className="text-rose-400 font-semibold">Product &amp; Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
