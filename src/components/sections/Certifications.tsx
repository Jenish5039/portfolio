"use client";

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

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {/* ── Card 1 — Canva ── */}
          <ScrollReveal delay={0.1}>
            <article
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl p-grid-4 transition-all duration-500 hover:-translate-y-1"
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
                Graphic Design Essentials
              </h3>

              <p
                className="mt-grid-1 font-dmMono text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Canva Design School
              </p>

              <div className="mt-auto pt-grid-3">
                <span
                  className="inline-block rounded-full px-3 py-1 font-dmMono text-xs"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    color: "var(--accent-light)",
                  }}
                >
                  2026
                </span>
              </div>
            </article>
          </ScrollReveal>

          {/* ── Card 2 — IBM ── */}
          <ScrollReveal delay={0.2}>
            <article
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl p-grid-4 transition-all duration-500 hover:-translate-y-1"
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

              {/* Badge icon — IBM blue */}
              <div
                className="mb-grid-3 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "#0f62fe" }}
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>

              <h3
                className="font-syne text-xl font-bold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Enterprise Design Thinking Practitioner
              </h3>

              <p
                className="mt-grid-1 font-dmMono text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                IBM SkillsBuild
              </p>

              <div className="mt-auto flex items-center gap-3 pt-grid-3">
                <span
                  className="inline-block rounded-full px-3 py-1 font-dmMono text-xs"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    color: "var(--accent-light)",
                  }}
                >
                  April 2026
                </span>
                <a
                  href="https://www.credly.com/go/APnW25Li"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dmMono text-xs font-medium transition-opacity duration-300 hover:opacity-80"
                  style={{ color: "var(--accent)" }}
                >
                  Verify ↗
                </a>
              </div>
            </article>
          </ScrollReveal>

          {/* ── Card 3 — Accenture ── */}
          <ScrollReveal delay={0.3}>
            <article
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl p-grid-4 transition-all duration-500 hover:-translate-y-1"
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

              {/* Badge icon — Accenture gradient */}
              <div
                className="mb-grid-3 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #a100ff, #7b2ff7)" }}
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>

              <h3
                className="font-syne text-xl font-bold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Digital Skills: User Experience
              </h3>

              <p
                className="mt-grid-1 font-dmMono text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Accenture &amp; FutureLearn
              </p>

              <p
                className="mt-grid-1 font-dmMono text-sm"
                style={{ color: "var(--accent)", fontWeight: 600 }}
              >
                97% Overall Score
              </p>

              <div className="mt-auto flex items-center gap-3 pt-grid-3">
                <span
                  className="inline-block rounded-full px-3 py-1 font-dmMono text-xs"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    color: "var(--accent-light)",
                  }}
                >
                  April 2026
                </span>
                <a
                  href="https://futurelearn.com/certificates/7c8mbx3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dmMono text-xs font-medium transition-opacity duration-300 hover:opacity-80"
                  style={{ color: "var(--accent)" }}
                >
                  Verify ↗
                </a>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
