"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./case-study-layout.module.css";
import type { CaseStudyConfig } from "@/data/portfolio";

interface CaseStudyLayoutProps {
  config: CaseStudyConfig;
}

export default function CaseStudyLayout({
  config,
}: CaseStudyLayoutProps) {
  const {
    title,
    tagline,
    description,
    meta,
    image,
    alt,
    imageWidth,
    imageHeight,
    nextLabel,
    nextHref,
    footerQuote,
    theme,
  } = config;

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const themeStyle = {
    "--cs-accent": theme.accent,
    "--cs-accent-dark": theme.accentDark,
    "--cs-bg": theme.bg,
    "--cs-border": theme.border,
  } as CSSProperties;

  return (
    <div className={styles.page} style={themeStyle}>
      {/* Top Header Section */}
      <header className={styles.headerContainer}>
        <div className={styles.topBreadcrumb}>
          <Link href="/#projects" className={styles.backBtn}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Works
          </Link>

          <span className={styles.badge}>UX Case Study</span>
        </div>

        <div className={styles.titleBlock}>
          <h1 className={styles.mainTitle}>{title}</h1>
          <p className={styles.tagline}>{tagline}</p>

          <p className={styles.description}>{description}</p>

          <div className={styles.metaGrid}>
            {meta.map((item) => (
              <div key={item.label} className={styles.metaItem}>
                <span className={styles.metaLabel}>{item.label}</span>
                <span className={styles.metaValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Single Image Behance Showcase */}
      <main className={styles.showcaseWrapper}>
        <div className={styles.imageFrame}>
          <Image
            src={image}
            alt={alt}
            width={imageWidth}
            height={imageHeight}
            priority
            quality={75}
            className={styles.caseStudyImg}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </main>

      {/* Floating Action Controls */}
      <div
        className={styles.floatingControl}
        role="navigation"
        aria-label="Quick Navigation"
      >
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className={styles.floatingBtn}
            aria-label="Scroll to top"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            Top
          </button>
        )}

        {showTopBtn && <div className={styles.controlDivider} />}

        <Link href="/#projects" className={styles.floatingBtn}>
          All Works
        </Link>

        <div className={styles.controlDivider} />

        <Link
          href={nextHref}
          className={`${styles.floatingBtn} ${styles.floatingBtnPrimary}`}
        >
          {nextLabel} →
        </Link>
      </div>

      {/* Footer Navigation Section */}
      <footer className={styles.footerSection}>
        <div className={styles.footerCard}>
          <span className={styles.footerBadge}>UX Case Study</span>
          <h2 className={styles.footerTitle}>
            Thank You
          </h2>
          <p className={styles.footerSubtitle}>“{footerQuote}”</p>

          <div className={styles.footerButtons}>
            <Link href="/#projects" className={styles.btnSecondary}>
              ← Back to All Works
            </Link>
            <Link href={nextHref} className={styles.btnPrimary}>
              {nextLabel} →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
