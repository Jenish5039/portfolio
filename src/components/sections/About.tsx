"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function About() {
  const pillars = [
    {
      num: "01",
      title: "Product & UX Research",
      desc: "User workflows, problem discovery, wireframing, and usability validation.",
    },
    {
      num: "02",
      title: "Figma Design Systems",
      desc: "Scalable component libraries, design tokens, and modular UI architectures.",
    },
    {
      num: "03",
      title: "AI-Accelerated Frontend",
      desc: "React 19 & Next.js 16 implementation with zero design fidelity loss.",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding py-20 sm:py-28 lg:py-32 bg-obsidian-canvas border-t border-charcoal-rim"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal>
          <SectionHeading number="02" title="About me & Approach" />
        </ScrollReveal>

        {/* Minimal Bento Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Main Statement & Core Pillars (8 cols) */}
          <ScrollReveal delay={0.1} className="lg:col-span-8 flex flex-col">
            <SpotlightCard className="card-raised p-7 sm:p-10 lg:p-12 flex flex-col justify-between h-full">
              <div className="flex flex-col justify-between h-full gap-8">
                <div className="space-y-4">
                  <h3 className="text-[24px] sm:text-[30px] lg:text-[34px] font-light leading-[1.22] tracking-[-0.025em] text-parchment font-saans">
                    Designing thoughtful, user-centered digital products backed by research and engineering fidelity.
                  </h3>
                  <p className="text-[15.5px] sm:text-[16.5px] text-fog-text leading-[1.74] font-saans font-w380 max-w-2xl pt-2 sm:pt-4">
                    I am a Product &amp; UI/UX Designer dedicated to solving complex user problems through user research, intuitive interaction design, and scalable Figma design systems. To bridge the gap between design and production, I leverage AI-accelerated frontend engineering in React and Next.js, ensuring every interaction and design decision translates seamlessly into functional web applications.
                  </p>
                </div>

                {/* 3 Pillars Grid with Micro-hover */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 sm:pt-8 border-t border-charcoal-rim">
                  {pillars.map((pillar) => (
                    <div
                      key={pillar.num}
                      className="group flex flex-col gap-1.5 p-2 -m-2 rounded-[6px] transition-colors duration-200 hover:bg-void-black/40"
                    >
                      <span className="text-xs font-grotesk text-limestone transition-colors group-hover:text-copper-wire">
                        {pillar.num}
                      </span>
                      <span className="text-[15px] font-saans text-parchment font-normal transition-colors group-hover:text-white">
                        {pillar.title}
                      </span>
                      <p className="text-[13px] text-ash-text leading-relaxed font-saans group-hover:text-fog-text transition-colors">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Portrait & Quick Status (4 cols) */}
          <ScrollReveal delay={0.15} className="lg:col-span-4 flex flex-col">
            <SpotlightCard className="card-raised p-5 sm:p-6 lg:p-7 flex flex-col justify-between h-full">
              <div className="flex flex-col justify-between h-full gap-5">
                <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[340px] rounded-[8px] overflow-hidden bg-void-black border border-charcoal-rim group">
                  <Image
                    src="/ME.png"
                    alt="Jeme - Product & UI/UX Designer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    quality={90}
                  />
                </div>

                <div className="flex flex-col gap-2.5 pt-3 border-t border-charcoal-rim text-xs font-grotesk text-ash-text">
                  <div className="flex items-center justify-between">
                    <span className="text-limestone uppercase tracking-wider">LOCATION</span>
                    <span className="text-parchment">Hosur / Remote</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-limestone uppercase tracking-wider">STATUS</span>
                    <span className="text-parchment flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-deep opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-deep" />
                      </span>
                      Available 2026
                    </span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
