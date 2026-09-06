"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { contactChannels, personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Magnetic from "@/components/ui/Magnetic";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftParallax = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const rightParallax = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding py-28 sm:py-36 lg:py-40 border-t border-white/10 relative overflow-hidden bg-canvas"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1240px]">
        <ScrollReveal>
          <SectionHeading
            number="03"
            title="Initiate Contact"
            subtitle="Let's build thoughtful digital products with precision and scale."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Narrative (6 cols) with Dynamic Parallax */}
          <motion.div
            style={{ y: leftParallax }}
            className="lg:col-span-6 flex flex-col gap-6 will-change-transform"
          >
            <ScrollReveal delay={0.1}>
              <h3 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-[-0.03em] text-white font-saans">
                Have a product in mind? <br />
                <span className="text-stone-400 font-light">Let&apos;s build together.</span>
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-[15px] sm:text-[16.5px] leading-[1.75] text-stone-300 font-saans font-normal max-w-lg">
                Available for full-time Product Design &amp; UI/UX roles, multi-brand design systems architecture, and high-fidelity frontend execution engagements.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-3 pt-2">
                <Magnetic strength={0.16} className="self-start">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="group bg-stone-100 hover:bg-white text-stone-950 min-h-[46px] px-7 py-3 text-[13.5px] font-bold rounded-full inline-flex items-center gap-2.5 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_28px_rgba(255,255,255,0.25)] transition-all cursor-pointer"
                    aria-label={`Send an email to ${personalInfo.email}`}
                  >
                    <span>Send an Email</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                  </a>
                </Magnetic>
                <span className="text-xs font-mono text-stone-400 mt-0.5">
                  Average response time: &lt; 24 hours IST
                </span>
              </div>
            </ScrollReveal>
          </motion.div>

          {/* Right Column: Channels Stack (6 cols) with Dynamic Parallax */}
          <motion.div
            style={{ y: rightParallax }}
            className="lg:col-span-6 flex flex-col gap-4 sm:gap-4.5 will-change-transform"
          >
            {contactChannels.map((channel, index) => (
              <ScrollReveal
                key={channel.id}
                delay={0.1 + index * 0.08}
                className="w-full"
              >
                <div className="group card-raised rounded-2xl transition-all duration-300">
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="p-5 sm:p-6 flex items-center justify-between w-full h-full"
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-stone-400 uppercase tracking-[0.16em] font-medium">
                          {channel.action}
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-stone-300 font-bold">
                          DIRECT
                        </span>
                      </div>
                      <span className="text-[16px] sm:text-[17px] font-saans font-bold text-white group-hover:text-stone-100 transition-colors">
                        {channel.value}
                      </span>
                      <span className="text-xs text-stone-400 font-saans font-normal">
                        {channel.description}
                      </span>
                    </div>

                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white text-[13px] font-bold transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-stone-950 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
