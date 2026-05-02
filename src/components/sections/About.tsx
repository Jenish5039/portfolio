"use client";

import { personalInfo, skills } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Marquee from "@/components/ui/Marquee";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding py-grid-12"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeading number="01" title="About" />
        </ScrollReveal>

        {/* Intro */}
        <ScrollReveal delay={0.2}>
          <div className="mb-grid-4 max-w-3xl">
            <h2
              className="font-syne text-3xl font-bold sm:text-4xl md:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              {personalInfo.name}
            </h2>
            <p
              className="mt-grid-2 font-dmMono text-lg sm:text-xl"
              style={{ color: "var(--accent)" }}
            >
              {personalInfo.role}
            </p>
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-3xl">
            <p
              className="font-syne text-xl leading-relaxed sm:text-2xl md:text-3xl"
              style={{ color: "var(--text-secondary)" }}
            >
              {personalInfo.bio}
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Marquee */}
        <div className="mt-grid-10">
          <ScrollReveal delay={0.4}>
            <p
              className="mb-grid-3 font-dmMono text-sm tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              Skills & Tools
            </p>
          </ScrollReveal>

          <div className="space-y-grid-2">
            {/* Row 1 — Left to right */}
            <Marquee speed={25}>
              {skills.map((skill) => (
                <span
                  key={`row1-${skill.name}`}
                  className="flex items-center gap-grid-3 px-grid-3"
                >
                  <span
                    className="font-syne text-2xl font-semibold whitespace-nowrap sm:text-3xl"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                    aria-hidden="true"
                  />
                </span>
              ))}
            </Marquee>

            {/* Row 2 — Right to left */}
            <Marquee speed={28} reverse>
              {skills.map((skill) => (
                <span
                  key={`row2-${skill.name}`}
                  className="flex items-center gap-grid-3 px-grid-3"
                >
                  <span
                    className="font-dmMono text-xl whitespace-nowrap sm:text-2xl"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className="h-1.5 w-1.5 shrink-0 rotate-45"
                    style={{ backgroundColor: "var(--accent)" }}
                    aria-hidden="true"
                  />
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
