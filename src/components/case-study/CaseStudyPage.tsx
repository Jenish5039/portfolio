"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./case-study.module.css";

/* ---------- Types ---------- */

export interface CaseStudySection {
  id: string;
  label: string;
  image: string;
  alt: string;
}

export interface EndButton {
  label: string;
  href: string;
  primary?: boolean;
}

export interface CaseStudyConfig {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  meta: string;
  heroGradient: string;
  watermark: string;
  sections: CaseStudySection[];
  endButtons: EndButton[];
}

/* ---------- Reduced-motion hook ---------- */

function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mql.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}

/* ---------- Component ---------- */

export default function CaseStudyPage({ config }: { config: CaseStudyConfig }) {
  const {
    title,
    subtitle,
    tags,
    meta,
    heroGradient,
    watermark,
    sections,
    endButtons,
  } = config;

  const prefersReduced = usePrefersReducedMotion();

  /* ---- Scroll progress ---- */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    { stiffness: 100, damping: 30, restDelta: 0.001 }
  );

  /* ---- Section refs for IntersectionObserver ---- */
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const setSectionRef = useCallback(
    (el: HTMLElement | null, index: number) => {
      sectionRefs.current[index] = el;
    },
    []
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, idx) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(idx);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections.length]);

  /* ---- Smooth scroll to section ---- */
  const scrollToSection = useCallback((index: number) => {
    const el = sectionRefs.current[index];
    if (el) {
      const offset = 100;
      const top =
        el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  /* ---- Animation variants ---- */
  const sectionVariants = prefersReduced
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <div className={styles.page}>
      {/* Progress bar */}
      <motion.div
        className={styles.progressBar}
        style={{ scaleX }}
        aria-hidden="true"
      />

      {/* Hero */}
      <section className={styles.hero} style={{ background: heroGradient }} aria-label={`${title} case study`}>
        <div className={styles.heroTags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.heroTag}>
              {tag}
            </span>
          ))}
        </div>

        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
        <p className={styles.heroMeta}>{meta}</p>

        <span className={styles.heroWatermark} aria-hidden="true">
          {watermark}
        </span>
      </section>

      {/* Floating side nav — desktop only */}
      <nav
        className={styles.floatingNav}
        aria-label="Case study section navigation"
      >
        {sections.map((sec, idx) => (
          <button
            key={sec.id}
            className={`${styles.navDot} ${
              idx === activeIndex ? styles.navDotActive : ""
            }`}
            onClick={() => scrollToSection(idx)}
            aria-label={`Go to ${sec.label}`}
            aria-current={idx === activeIndex ? "true" : undefined}
          >
            <span className={styles.navDotInner} />
            <span className={styles.navDotLabel}>{sec.label}</span>
          </button>
        ))}
      </nav>

      {/* Scroll sections */}
      <div className={styles.sectionsWrapper}>
        {sections.map((sec, idx) => (
          <div key={sec.id}>
            {/* Divider between sections */}
            {idx > 0 && <div className={styles.divider} role="separator" />}

            <motion.section
              ref={(el) => setSectionRef(el, idx)}
              id={`section-${sec.id}`}
              className={styles.section}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px 0px" }}
              variants={sectionVariants}
              transition={
                prefersReduced
                  ? { duration: 0 }
                  : { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
              }
              aria-labelledby={`label-${sec.id}`}
            >
              <p className={styles.sectionLabel} id={`label-${sec.id}`}>
                ── {sec.label}
              </p>

              <div className={styles.sectionImageWrapper}>
                <Image
                  src={sec.image}
                  alt={sec.alt}
                  width={1100}
                  height={700}
                  quality={90}
                  priority={idx === 0}
                  className={styles.sectionImage}
                  sizes="(max-width: 768px) 100vw, 1100px"
                />
              </div>
            </motion.section>
          </div>
        ))}
      </div>

      {/* End section */}
      <div className={styles.endSection}>
        {endButtons.map((btn) =>
          btn.primary ? (
            <Link
              key={btn.label}
              href={btn.href}
              className={styles.btnPrimary}
            >
              {btn.label}
            </Link>
          ) : (
            <Link
              key={btn.label}
              href={btn.href}
              className={styles.btnSecondary}
            >
              {btn.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
