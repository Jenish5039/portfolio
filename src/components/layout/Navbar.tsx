"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks, caseStudies } from "@/data/portfolio";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Magnetic from "@/components/ui/Magnetic";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const rafIdRef = useRef<number | null>(null);
  const lastScrollYRef = useRef<number>(0);
  const { scrollTo } = useSmoothScroll();
  const pathname = usePathname();

  const isCaseStudy = pathname.startsWith("/case-study");
  const slug = pathname.split("/")[2] ?? "";
  const currentCaseStudy = caseStudies.find((cs) => cs.slug === slug);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      if (rafIdRef.current !== null) return;

      rafIdRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const lastScrollY = lastScrollYRef.current;

        setIsScrolled(currentScrollY > 16);

        if (isMobileMenuOpen) {
          setIsVisible(true);
        } else if (currentScrollY <= 40) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 8) {
          setIsVisible(true);
        }

        lastScrollYRef.current = currentScrollY;
        rafIdRef.current = null;
      });
    };

    const sections = ["hero", "projects", "about", "contact"];
    const sectionElements = sections.map((id) => document.getElementById(id)).filter(Boolean);

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
        rootMargin: "-25% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sectionElements.forEach((el) => el && observer.observe(el));

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "");
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setTimeout(() => scrollTo(targetId), 300);
    } else {
      scrollTo(targetId);
    }
  };

  return (
    <header
      role="banner"
      className={`fixed top-4 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-transform duration-300 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
      }`}
    >
      {/* Floating Dynamic Island Capsule matching reference image */}
      <nav
        className={`pointer-events-auto relative flex items-center justify-between gap-6 sm:gap-8 px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
          isScrolled
            ? "border border-white/10 bg-[#161514]/90 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
            : "border border-white/10 bg-[#161514]/75 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
        }`}
        aria-label="Main navigation"
      >
        {/* Left: Brand Wordmark with White Glowing Dot */}
        <div className="flex items-center gap-2">
          {isCaseStudy ? (
            <Link
              href="/"
              className="group flex items-center gap-2 text-xs text-parchment hover:text-white transition-colors font-saans font-light py-0.5"
              aria-label="Go to home page"
            >
              <span className="tracking-tight font-medium text-[13.5px]">Jeme</span>
              <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
              <span className="text-[11px] text-limestone font-grotesk">
                {currentCaseStudy?.title || "Case Study"}
              </span>
            </Link>
          ) : (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 text-left tracking-tight text-parchment cursor-pointer py-0.5"
              aria-label="Scroll to top"
            >
              <span className="text-parchment font-medium text-[13.5px] tracking-[-0.01em]">
                Jeme
              </span>
              <span className="relative flex h-2 w-2 items-center justify-center" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
              </span>
            </button>
          )}
        </div>

        {/* Middle Navigation Links (Works, About, Resume ↗) */}
        <div className="hidden items-center gap-5 sm:gap-6 md:flex">
          {!isCaseStudy && (
            <ul className="flex items-center gap-5 sm:gap-6" role="list">
              {navLinks.map((link) => {
                const targetId = link.href.replace("#", "");
                const isActive = activeSection === targetId;
                return (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`text-[12px] font-grotesk tracking-wide transition-colors cursor-pointer ${
                        isActive
                          ? "text-white font-medium"
                          : "text-[#999990] hover:text-white"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {isCaseStudy && (
            <Link
              href="/#projects"
              className="text-[12px] font-grotesk text-[#999990] hover:text-white"
            >
              &larr; All Works
            </Link>
          )}

          <a
            href="/Resume/jenish-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-grotesk text-[#999990] hover:text-white inline-flex items-center gap-1"
            aria-label="View Resume (opens PDF in a new tab)"
          >
            <span>Resume</span>
            <span aria-hidden="true" className="text-[10.5px] opacity-80">↗</span>
          </a>
        </div>

        {/* Right Action: Solid White Contact Pill Button */}
        <div className="flex items-center gap-2">
          <Magnetic strength={0.2}>
            <button
              onClick={() => handleNavClick("#contact")}
              className="group bg-white hover:bg-[#f0eee6] text-[#121212] !py-1.5 !px-4 text-[12px] font-medium rounded-full inline-flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            >
              <span>Contact</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
            </button>
          </Magnetic>

          {/* Mobile Menu Toggle Button */}
          <button
            className="relative z-50 flex h-6 w-6 flex-col items-center justify-center gap-1 md:hidden text-parchment cursor-pointer ml-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              className="block h-[1.5px] w-3.5 bg-parchment"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 5 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[1.5px] w-3.5 bg-parchment"
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[1.5px] w-3.5 bg-parchment"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -5 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Dynamic Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-x-4 top-18 z-30 flex flex-col gap-4 rounded-2xl bg-[#161514]/95 p-6 md:hidden border border-white/10 backdrop-blur-2xl shadow-2xl pointer-events-auto"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex flex-col gap-3">
              <span className="eyebrow-label text-limestone font-grotesk text-[10.5px]">NAVIGATION</span>
              <ul className="flex flex-col gap-2.5" role="list">
                {navLinks.map((link) => {
                  const targetId = link.href.replace("#", "");
                  const isActive = activeSection === targetId;
                  return (
                    <li key={link.label}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className={`text-[15px] font-light text-left w-full px-2.5 py-1.5 rounded-lg transition-colors ${
                          isActive
                            ? "text-white bg-white/10 font-medium"
                            : "text-[#999990] hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex flex-col gap-2.5 pt-3 border-t border-white/10">
              <a
                href="/Resume/jenish-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-ghost w-full text-center justify-center !py-2 inline-flex items-center gap-1.5 text-xs text-[#e8e7e1]"
                aria-label="View Resume (opens PDF in a new tab)"
              >
                <span>View Resume ↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
