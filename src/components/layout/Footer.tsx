"use client";

import { personalInfo, socialLinks } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Magnetic from "@/components/ui/Magnetic";

export default function Footer() {
  return (
    <footer
      className="relative text-white section-padding pt-20 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 border-t border-white/10"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1240px]">
        <ScrollReveal>
          {/* Main Footer Banner */}
          <div className="mb-12 sm:mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end pb-10 sm:pb-14 border-b border-white/10">
            <div>
              <span className="text-stone-500 block mb-3 text-[10.5px] font-mono font-medium tracking-[0.18em] uppercase">
                UI/UX &amp; Product Design
              </span>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.12] tracking-[-0.03em] text-white font-saans">
                Got a product in mind?
                <br />
                <span className="text-stone-400 font-light">Let&apos;s build it together.</span>
              </h2>
            </div>

            <Magnetic strength={0.16} className="shrink-0">
              <a
                href="mailto:jenishlogesh@gmail.com"
                className="group bg-stone-100 hover:bg-white text-stone-950 text-[13.5px] font-bold min-h-[46px] px-7 py-3 rounded-full inline-flex items-center gap-2.5 shadow-[0_0_20px_rgba(255,255,255,0.12)] hover:shadow-[0_0_28px_rgba(255,255,255,0.22)] transition-all cursor-pointer"
              >
                <span>Get in touch</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </Magnetic>
          </div>
        </ScrollReveal>

        {/* Bottom row */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-white font-saans">
              {personalInfo.name}
            </span>
            <span className="text-stone-600" aria-hidden="true">·</span>
            <span className="text-xs font-mono text-stone-500 font-normal">
              UI/UX &amp; Product Designer
            </span>
          </div>

          {/* Navigation & Social */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <nav aria-label="Footer navigation">
              <ul className="flex items-center gap-5 sm:gap-6" role="list">
                <li>
                  <a href="#projects" className="text-xs font-grotesk text-stone-400 hover:text-white font-medium transition-colors">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-xs font-grotesk text-stone-400 hover:text-white font-medium transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-xs font-grotesk text-stone-400 hover:text-white font-medium transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <span className="text-stone-700 hidden sm:inline" aria-hidden="true">/</span>

            <nav aria-label="Social links">
              <ul className="flex flex-wrap items-center gap-5 sm:gap-6" role="list">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className="text-xs font-grotesk text-stone-400 transition-colors duration-150 hover:text-white font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Copyright */}
          <p className="text-[11.5px] font-mono text-stone-600 font-normal" suppressHydrationWarning>
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
