"use client";

import { personalInfo, socialLinks } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Magnetic from "@/components/ui/Magnetic";

export default function Footer() {
  return (
    <footer
      className="relative bg-void-black text-parchment section-padding pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 border-t border-charcoal-rim"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal>
          {/* Main Footer Banner */}
          <div className="mb-16 sm:mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end pb-12 sm:pb-16 border-b border-charcoal-rim">
            <div>
              <span className="eyebrow-label text-limestone block mb-3 text-xs font-grotesk tracking-widest uppercase">
                STUDIO DISPATCH · READY FOR ENGAGEMENT
              </span>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-light leading-[1.1] tracking-[-0.025em] text-parchment font-saans">
                Let&apos;s build something <br />
                <span className="text-ash-text">with precision and scale.</span>
              </h2>
            </div>

            <Magnetic strength={0.2} className="shrink-0">
              <a
                href="mailto:jenishlogesh@gmail.com"
                className="group btn-pill-filled text-sm !py-3 !px-7 inline-flex items-center gap-2"
              >
                <span>Start Conversation</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
              </a>
            </Magnetic>
          </div>
        </ScrollReveal>

        {/* Links & Micro-copy Grid */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="text-sm font-light text-parchment font-saans">
              {personalInfo.name}
            </span>
            <span className="text-charcoal-rim" aria-hidden="true">|</span>
            <span className="text-xs font-grotesk text-ash-text">
              {personalInfo.location}
            </span>
          </div>

          {/* Unified Navigation & Social Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <nav aria-label="Footer navigation">
              <ul className="flex items-center gap-5 sm:gap-6" role="list">
                <li>
                  <a href="#projects" className="text-xs font-grotesk text-fog-text hover:text-parchment transition-colors">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-xs font-grotesk text-fog-text hover:text-parchment transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-xs font-grotesk text-fog-text hover:text-parchment transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <span className="text-charcoal-rim hidden sm:inline" aria-hidden="true">/</span>

            {/* Social Links */}
            <nav aria-label="Social links">
              <ul className="flex flex-wrap items-center gap-5 sm:gap-6" role="list">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className="text-xs font-grotesk text-fog-text transition-colors duration-150 hover:text-parchment"
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
            <p className="text-xs font-grotesk text-ash-text" suppressHydrationWarning>
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
