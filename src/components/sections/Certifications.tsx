"use client";

import { certifications } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding py-grid-12"
      style={{ backgroundColor: "var(--bg-secondary)" }}
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeading number="04" title="Certifications" />
        </ScrollReveal>

        <div className="grid gap-grid-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <ScrollReveal key={cert.name} delay={0.2}>
              <article
                className="group relative overflow-hidden rounded-2xl p-grid-4 transition-all duration-500 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--bg-tertiary)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    boxShadow: "inset 0 0 0 1px var(--accent), 0 0 20px var(--accent-glow)",
                  }}
                  aria-hidden="true"
                />

                {/* Badge icon */}
                <div
                  className="mb-grid-3 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, var(--accent), var(--accent-light))",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 15l-2 5l9-11h-5l2-4H8l-2 4h5z" />
                  </svg>
                </div>

                <h3
                  className="font-syne text-xl font-bold tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cert.name}
                </h3>

                <p
                  className="mt-grid-1 font-dmMono text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {cert.issuer}
                </p>

                <div className="mt-grid-3">
                  <span
                    className="inline-block rounded-full px-3 py-1 font-dmMono text-xs"
                    style={{
                      backgroundColor: "var(--bg-tertiary)",
                      color: "var(--accent-light)",
                    }}
                  >
                    {cert.year}
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
