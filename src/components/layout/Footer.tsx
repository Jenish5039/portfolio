"use client";

import { personalInfo, socialLinks } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Footer() {
  return (
    <footer
      className="section-padding border-t py-grid-8"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--bg-tertiary)",
      }}
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          {/* CTA */}
          <div className="mb-grid-8">
            <p
              className="font-dmMono text-sm tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              Got a project?
            </p>
            <h2
              className="mt-grid-2 font-syne text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              style={{ color: "var(--text-primary)" }}
            >
              Let&apos;s work{" "}
              <span className="text-gradient">together</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Links & Info */}
        <div className="flex flex-col justify-between gap-grid-4 sm:flex-row sm:items-end">
          <nav aria-label="Social links">
            <ul className="flex gap-grid-3" role="list">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="font-dmMono text-sm transition-colors duration-300"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start gap-1 sm:items-end">
            <p
              className="font-dmMono text-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              © {new Date().getFullYear()} {personalInfo.name}
            </p>
            <p
              className="font-dmMono text-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              Designed & Built with passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
