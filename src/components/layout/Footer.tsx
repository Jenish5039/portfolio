"use client";

import { personalInfo, socialLinks } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Magnetic from "@/components/ui/Magnetic";

export default function Footer() {
  return (
    <footer
      className="relative text-white section-padding pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 border-t border-white/10"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1240px]">
        <ScrollReveal>
          {/* Main Footer Banner */}
          <div className="mb-14 sm:mb-18 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end pb-12 sm:pb-16 border-b border-white/10">
            <div>
              <span className="text-stone-400 block mb-3 text-[10.5px] font-mono font-medium tracking-[0.18em] uppercase">
                STUDIO ARCHIVE · PRODUCT &amp; UI/UX DESIGN
              </span>
              <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.12] tracking-[-0.03em] text-white font-saans">
                Let&apos;s build something <br />
                <span className="text-stone-400 font-light">enduring, tactile, and scaled.</span>
              </h2>
            </div>

            <Magnetic strength={0.16} className="shrink-0">
              <a
                href="mailto:jenishlogesh@gmail.com"
                className="group bg-stone-100 hover:bg-white text-stone-950 text-[13.5px] font-bold min-h-[46px] px-7 py-3 rounded-full inline-flex items-center gap-2.5 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_28px_rgba(255,255,255,0.25)] transition-all cursor-pointer"
              >
                <span>Initiate Conversation</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
              </a>
            </Magnetic>
          </div>
        </ScrollReveal>

        {/* Links & Micro-copy Grid */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-white font-saans">
              {personalInfo.name}
            </span>
            <span className="text-stone-600" aria-hidden="true">|</span>
            <span className="text-xs font-mono text-stone-400 font-normal">
              Product &amp; UI/UX Designer
            </span>
          </div>

          {/* Unified Navigation & Social Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <nav aria-label="Footer navigation">
              <ul className="flex items-center gap-5 sm:gap-6" role="list">
                <li>
                  <a href="#projects" className="text-xs font-grotesk text-stone-300 hover:text-white font-medium transition-colors">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-xs font-grotesk text-stone-300 hover:text-white font-medium transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-xs font-grotesk text-stone-300 hover:text-white font-medium transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <span className="text-stone-600 hidden sm:inline" aria-hidden="true">/</span>

            {/* Social Links */}
            <nav aria-label="Social links">
              <ul className="flex flex-wrap items-center gap-5 sm:gap-6" role="list">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className="text-xs font-grotesk text-stone-300 transition-colors duration-150 hover:text-white font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Copyright Metadata */}
          <div className="flex flex-col items-start md:items-end gap-1">
            <p className="text-[11.5px] font-mono text-stone-400 font-normal" suppressHydrationWarning>
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
