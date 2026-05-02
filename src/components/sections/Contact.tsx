"use client";

import { personalInfo, socialLinks } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding py-grid-12"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeading number="05" title="Contact" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl">
            <h3
              className="font-syne text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              Let&apos;s build something{" "}
              <span className="text-gradient">amazing</span> together
            </h3>
            <p
              className="mt-grid-3 text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact methods */}
        <div className="mt-grid-8 grid gap-grid-3 sm:grid-cols-3">
          {socialLinks.map((link, index) => (
            <ScrollReveal key={link.label} delay={0.3 + index * 0.1}>
              <a
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="group relative block overflow-hidden rounded-2xl p-grid-4 transition-all duration-500 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--bg-tertiary)",
                }}
                id={`contact-${link.label.toLowerCase()}`}
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px var(--accent), 0 0 20px var(--accent-glow)",
                  }}
                  aria-hidden="true"
                />

                <p
                  className="font-dmMono text-xs tracking-widest uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  {link.label}
                </p>

                <p
                  className="mt-grid-2 font-syne text-lg font-semibold transition-colors duration-300 group-hover:text-gradient"
                  style={{ color: "var(--text-primary)" }}
                >
                  {link.label === "Email"
                    ? personalInfo.email
                    : link.label === "Phone"
                      ? personalInfo.phone
                      : "Connect on LinkedIn"}
                </p>

                {/* Arrow */}
                <div
                  className="mt-grid-3 flex items-center gap-2 font-dmMono text-sm transition-all duration-300 group-hover:translate-x-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span>
                    {link.label === "Email"
                      ? "Send email"
                      : link.label === "Phone"
                        ? "Call now"
                        : "Visit profile"}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
