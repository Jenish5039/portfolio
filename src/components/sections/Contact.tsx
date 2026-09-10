"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo, contactChannels } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Magnetic from "@/components/ui/Magnetic";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftParallax = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding py-28 sm:py-36 lg:py-40 border-t border-white/10 relative overflow-hidden bg-canvas"
      aria-labelledby="contact-heading"
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
              03 / Contact
            </span>
            <h2
              id="contact-heading"
              className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.035em] text-white font-saans"
            >
              Let&apos;s talk
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left: Narrative */}
          <motion.div
            style={{ y: leftParallax }}
            className="lg:col-span-6 flex flex-col gap-7 will-change-transform"
          >
            <ScrollReveal delay={0.08}>
              <h3 className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold leading-[1.2] tracking-[-0.025em] text-white font-saans">
                Have a messy product problem?
                <br />
                <span className="text-stone-400 font-light">I&apos;d like to help.</span>
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <p className="text-[15px] sm:text-[16px] leading-[1.75] text-stone-300 font-saans font-normal max-w-lg">
                Open to full-time UI/UX &amp; Product Design roles, design system engagements,
                and frontend-aware product work. From India, open to remote.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <Magnetic strength={0.16} className="self-start">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group bg-stone-100 hover:bg-white text-stone-950 min-h-[46px] px-7 py-3 text-[13.5px] font-bold rounded-full inline-flex items-center gap-2.5 shadow-[0_0_20px_rgba(255,255,255,0.12)] hover:shadow-[0_0_28px_rgba(255,255,255,0.22)] transition-all cursor-pointer"
                  aria-label={`Send an email to ${personalInfo.email}`}
                >
                  <span>Send an email</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                </a>
              </Magnetic>
            </ScrollReveal>
          </motion.div>

          {/* Right: Contact channels — simple list */}
          <div className="lg:col-span-6 flex flex-col gap-0">
            {contactChannels.map((channel, index) => (
              <ScrollReveal key={channel.label} delay={0.08 + index * 0.06} className="w-full">
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between py-5 border-b border-white/[0.08] hover:border-white/20 transition-colors duration-200 w-full"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest">
                      {channel.label}
                    </span>
                    <span className="text-[16px] sm:text-[18px] font-saans font-medium text-white group-hover:text-stone-100 transition-colors leading-tight">
                      {channel.value}
                    </span>
                  </div>
                  <span
                    className="text-stone-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 text-lg"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
