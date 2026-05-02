"use client";

import { education } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding py-grid-12"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeading number="03" title="Education" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <article
            className="relative overflow-hidden rounded-2xl p-grid-4 sm:p-grid-6"
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--bg-tertiary)",
            }}
          >
            {/* Decorative accent */}
            <div
              className="absolute top-0 left-0 h-full w-1"
              style={{
                background: "linear-gradient(180deg, var(--accent), transparent)",
              }}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-grid-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p
                  className="font-dmMono text-sm tracking-widest uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  {education.degree}
                </p>
                <h3
                  className="mt-grid-1 font-syne text-2xl font-bold tracking-tight sm:text-3xl"
                  style={{ color: "var(--text-primary)" }}
                >
                  {education.field}
                </h3>
                <p
                  className="mt-grid-2 text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {education.institution}
                </p>
                <p
                  className="mt-1 font-dmMono text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {education.location}
                </p>
              </div>

              <div className="shrink-0">
                <span
                  className="inline-block rounded-full px-4 py-2 font-dmMono text-sm font-medium"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    color: "var(--accent-light)",
                  }}
                >
                  {education.year}
                </span>
              </div>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
