"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/data/portfolio";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const SECTIONS = [
  {
    id: "hero",
    num: "00",
    label: "Index",
    desc: "Top / Introduction",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "projects",
    num: "01",
    label: "Works",
    desc: "Selected Case Studies",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="7" x="3" y="3" rx="1.5" />
        <rect width="7" height="7" x="14" y="3" rx="1.5" />
        <rect width="7" height="7" x="14" y="14" rx="1.5" />
        <rect width="7" height="7" x="3" y="14" rx="1.5" />
      </svg>
    ),
  },
  {
    id: "about",
    num: "02",
    label: "About",
    desc: "Design Philosophy & Bio",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "contact",
    num: "03",
    label: "Contact",
    desc: "Get in Touch",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();
  const pathname = usePathname();

  const isCaseStudy = pathname.startsWith("/case-study");
  const slug = pathname.split("/")[2] ?? "";
  const currentCaseStudy = caseStudies.find((cs) => cs.slug === slug);

  useEffect(() => {
    const sectionElements = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-15% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sectionElements.forEach((el) => el && observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (targetId: string) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        if (targetId === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          scrollTo(targetId);
        }
      }, 300);
    } else {
      if (targetId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        scrollTo(targetId);
      }
    }
  };

  return (
    <>
      {/* ── 01. DESKTOP TOP HEADER ACCENTS (md+) ── */}
      <header
        role="banner"
        className="fixed top-5 left-4 lg:left-6 right-4 lg:right-6 z-40 hidden md:flex items-center justify-between pointer-events-none select-none"
      >
        {/* Top-Left: Brand & Title */}
        <div className="pointer-events-auto">
          {isCaseStudy ? (
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#120e0d]/85 hover:bg-[#1a1413]/95 border border-white/10 hover:border-white/20 backdrop-blur-2xl shadow-[0_8px_24px_rgba(0,0,0,0.7)] text-xs text-stone-300 hover:text-white transition-all duration-200"
              aria-label="Back to selected works"
            >
              <span className="text-rose-400 group-hover:-translate-x-0.5 transition-transform">&larr;</span>
              <span className="font-semibold text-white">All Works</span>
              <span className="text-white/20">/</span>
              <span className="text-stone-400 font-mono text-[11px] truncate max-w-[140px]">
                {currentCaseStudy?.title}
              </span>
            </Link>
          ) : (
            <button
              onClick={() => handleNavClick("hero")}
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#120e0d]/85 hover:bg-[#1a1413]/95 border border-white/10 hover:border-white/20 backdrop-blur-2xl shadow-[0_8px_24px_rgba(0,0,0,0.7)] transition-all duration-200 cursor-pointer text-left"
              aria-label="Jeme - Product & UI/UX Designer"
            >
              <span className="font-saans font-bold text-sm tracking-tight text-white group-hover:text-stone-200 transition-colors">
                Jeme
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.9)]" />
              <span className="text-[11px] font-mono text-stone-400 font-normal">
                Product &amp; UI/UX Designer
              </span>
            </button>
          )}
        </div>

        {/* Top-Right: Availability & Quick Action */}
        <div className="pointer-events-auto flex items-center gap-3">
          <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#120e0d]/85 border border-white/10 backdrop-blur-2xl text-[11px] font-mono text-stone-300 shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,1)]" />
            </span>
            <span>Available</span>
          </div>

          <button
            onClick={() => handleNavClick("contact")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 backdrop-blur-2xl text-xs font-saans font-semibold text-white transition-all duration-200 shadow-[0_8px_24px_rgba(0,0,0,0.6)] cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
            <span className="text-rose-400">&rarr;</span>
          </button>
        </div>
      </header>

      {/* ── 02. FLOATING VERTICAL DOCK (md+ on the RIGHT) ── */}
      <aside
        role="navigation"
        aria-label="Floating right dock navigation"
        className="fixed right-3 lg:right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center select-none"
      >
        <div className="flex flex-col items-center gap-1.5 p-1.5 rounded-2xl bg-[#120e0d]/90 backdrop-blur-2xl border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_1px_1px_rgba(255,255,255,0.12)_inset]">
          {/* Core Section Navigation Items */}
          {!isCaseStudy ? (
            SECTIONS.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => handleNavClick(sec.id)}
                  className={`group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive ? "text-rose-400" : "text-stone-400 hover:text-white hover:bg-white/[0.08]"
                  }`}
                  aria-label={`Navigate to ${sec.label}`}
                >
                  {/* Active highlight background pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeDockPill"
                      className="absolute inset-0 rounded-xl bg-rose-500/[0.14] border border-rose-400/35 shadow-[0_0_12px_rgba(244,63,94,0.25)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10">{sec.icon}</span>

                  {/* Left Tooltip */}
                  <div className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#181312]/95 border border-white/15 backdrop-blur-xl shadow-2xl opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none flex items-center gap-2 whitespace-nowrap z-50">
                    <span className="font-mono text-[10px] text-rose-400 font-semibold">{sec.num}</span>
                    <span className="text-white/20 text-xs">/</span>
                    <span className="font-saans font-semibold text-xs text-white">{sec.label}</span>
                    <span className="text-[10px] text-stone-400 hidden sm:inline">· {sec.desc}</span>
                  </div>
                </button>
              );
            })
          ) : (
            <Link
              href="/#projects"
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-stone-400 hover:text-white hover:bg-white/[0.08] transition-all"
              aria-label="Back to works"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>

              {/* Left Tooltip */}
              <div className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#181312]/95 border border-white/15 backdrop-blur-xl shadow-2xl opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none flex items-center gap-2 whitespace-nowrap z-50">
                <span className="text-rose-400 text-xs">&larr;</span>
                <span className="font-saans font-semibold text-xs text-white">Back to Works</span>
              </div>
            </Link>
          )}

          {/* Hairline Divider */}
          <div className="w-5 h-px bg-white/10 my-0.5" />

          {/* CV / Resume Action Button */}
          <a
            href="/Resume/jenish-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-stone-400 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            aria-label="View Resume PDF (opens in new tab)"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>

            {/* Left Tooltip */}
            <div className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#181312]/95 border border-white/15 backdrop-blur-xl shadow-2xl opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none flex items-center gap-2 whitespace-nowrap z-50">
              <span className="font-mono text-[10px] text-rose-400">PDF</span>
              <span className="font-saans font-semibold text-xs text-white">Resume / CV</span>
              <span className="text-[10px] text-stone-400">↗</span>
            </div>
          </a>
        </div>
      </aside>

      {/* ── 03. MOBILE FLOATING TOP HEADER (< md) ── */}
      <header
        role="banner"
        className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between md:hidden pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center justify-between w-full px-4 py-2.5 rounded-full border border-white/15 bg-[#120e0d]/90 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold text-sm tracking-tight"
          >
            <span>Jeme</span>
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.9)]" />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col justify-center items-center gap-1 w-7 h-7 text-white cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-[1.5px] w-4 bg-white transition-all duration-200 ${
                isMobileMenuOpen ? "rotate-45 translate-y-[5.5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-white transition-all duration-200 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-white transition-all duration-200 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[5.5px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Overlay Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Tap-outside Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm pointer-events-auto"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden="true"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-x-4 top-18 z-40 flex flex-col gap-4 rounded-2xl bg-[#140f0e]/98 p-6 border border-white/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] pointer-events-auto"
              >
              <nav className="flex flex-col gap-2.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                  NAVIGATION
                </span>
                <ul className="flex flex-col gap-2" role="list">
                  {SECTIONS.map((sec) => (
                    <li key={sec.id}>
                      <button
                        onClick={() => handleNavClick(sec.id)}
                        className="text-[15px] font-medium text-left w-full px-3 py-2 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-rose-400">{sec.icon}</span>
                          <span>{sec.label}</span>
                        </div>
                        <span className="text-xs font-mono text-stone-400">{sec.num}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="/Resume/jenish-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center justify-center py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 inline-flex items-center gap-1.5 text-xs font-saans font-semibold text-white transition-colors"
                >
                  <span>View Resume PDF ↗</span>
                </a>
              </div>
            </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
