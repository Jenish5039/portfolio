"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const statementParallax = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const portraitParallax = useTransform(scrollYProgress, [0, 1], [8, -8]);
  const portraitZoom = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1.0, 1.02]);

  const pillars = [
    {
      num: "01",
      title: "User Research & Discovery",
      desc: "Understanding user needs and problem context before designing. Usability testing, user flows, and structured problem framing first.",
    },
    {
      num: "02",
      title: "Design Systems",
      desc: "Figma variables, documented tokens, and modular component libraries built to WCAG 2.2 AA. Scalable from day one.",
    },
    {
      num: "03",
      title: "Frontend-Aware Design",
      desc: "Understanding component architecture and responsive code constraints so design intent translates cleanly into production.",
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
              02 / About
            </span>
            <h2
              id="about-heading"
              className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.035em] text-white font-saans"
            >
              About &amp; Approach
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left: Statement & Pillars */}
          <motion.div
            style={{ y: statementParallax }}
            className="lg:col-span-8 flex flex-col gap-8 will-change-transform"
          >
            {/* Main statement */}
            <ScrollReveal>
              <div className="space-y-5">
                <h3 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold leading-[1.3] tracking-[-0.025em] text-white font-saans">
                  I&apos;m Jenish — I turn complex product problems into clear, usable experiences.
                </h3>
                <p className="text-[15.5px] sm:text-[16.5px] text-stone-300 leading-[1.78] font-saans font-normal max-w-2xl">
                  My work combines UX thinking, visual systems, interaction design, and rapid prototyping. With a background in computer science, I enjoy working closely with technology to take ideas from early flows to polished interfaces.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillars */}
            <ScrollReveal delay={0.08}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 pt-8 border-t border-white/[0.08]">
                {pillars.map((pillar, idx) => (
                  <motion.div
                    key={pillar.num}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.07 * idx, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex flex-col gap-3 py-6 ${
                      idx < pillars.length - 1 ? "sm:border-r border-white/[0.07] sm:pr-7" : ""
                    } ${idx > 0 ? "sm:pl-7" : ""} ${
                      idx > 0 ? "border-t sm:border-t-0 border-white/[0.07]" : ""
                    }`}
                  >
                    <span className="text-[11px] font-mono font-medium text-stone-500">
                      {pillar.num}
                    </span>
                    <span className="text-[14px] font-saans text-white font-semibold tracking-tight leading-snug">
                      {pillar.title}
                    </span>
                    <p className="text-[13px] text-stone-400 leading-relaxed font-saans font-normal">
                      {pillar.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Credentials */}
            <ScrollReveal delay={0.14}>
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-x-10 gap-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10.5px] font-mono uppercase tracking-widest text-stone-500">
                    Certifications
                  </span>
                  <span className="text-[13.5px] text-stone-200 font-saans font-medium">
                    IBM Enterprise Design Thinking
                  </span>
                  <span className="text-[12.5px] text-stone-400 font-saans">
                    Accenture UX Practitioner
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10.5px] font-mono uppercase tracking-widest text-stone-500">
                    Toolkit
                  </span>
                  <span className="text-[13.5px] text-stone-200 font-saans font-medium">
                    Figma, Variables, Design Tokens
                  </span>
                  <span className="text-[12.5px] text-stone-400 font-saans">
                    React, Next.js, Framer Motion, Tailwind
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            style={{ y: portraitParallax }}
            className="lg:col-span-4 flex flex-col will-change-transform"
          >
            <div className="flex flex-col gap-5">
              {/* Portrait image */}
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-stone-950 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  style={{ scale: portraitZoom }}
                >
                  <Image
                    src="/ME.webp"
                    alt="Jenish M (Jeme) — UI/UX & Product Designer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    quality={85}
                  />
                </motion.div>
              </div>

              {/* Status & info */}
              <div className="flex flex-col gap-2.5 text-[13px] font-saans text-stone-300">
                <div className="flex items-center justify-between py-2 border-b border-white/[0.07]">
                  <span className="text-stone-500 font-medium">Location</span>
                  <span className="text-stone-200">From India</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/[0.07]">
                  <span className="text-stone-500 font-medium">Focus</span>
                  <span className="text-stone-200">Product &amp; Systems</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-stone-500 font-medium">Status</span>
                  <span className="text-stone-200 flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500" />
                    </span>
                    Available
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
