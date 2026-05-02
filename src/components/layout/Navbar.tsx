"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks, personalInfo } from "@/data/portfolio";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollTo } = useSmoothScroll();
  const pathname = usePathname();

  const isCaseStudy = pathname.startsWith("/case-study");

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "");
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      // Delay scroll until the mobile menu overlay unmounts,
      // so getBoundingClientRect returns the correct position
      setTimeout(() => scrollTo(targetId), 400);
    } else {
      scrollTo(targetId);
    }
  };

  return (
    <header role="banner">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-[3px] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, var(--accent), var(--accent-light))",
        }}
        aria-hidden="true"
      />
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.85)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled ? "1px solid var(--bg-tertiary)" : "1px solid transparent",
        }}
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        aria-label="Main navigation"
      >
        <div className="section-padding mx-auto flex h-20 max-w-7xl items-center justify-between">
          {/* Logo & Location / Back link */}
          <div className="flex flex-col items-start">
            {isCaseStudy ? (
              <Link
                href="/"
                className="font-syne text-xl font-bold tracking-tight"
                style={{ color: "var(--text-primary)" }}
                aria-label="Go to home page"
              >
                JeMe Designs
                <span style={{ color: "var(--accent)" }}>.</span>
              </Link>
            ) : (
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-syne text-xl font-bold tracking-tight"
                style={{ color: "var(--text-primary)" }}
                aria-label="Scroll to top"
              >
                JeMe Designs
                <span style={{ color: "var(--accent)" }}>.</span>
              </button>
            )}

            {isCaseStudy ? (
              <Link
                href="/#projects"
                className="font-dmMono text-xs transition-colors duration-300"
                style={{ color: "var(--accent)" }}
              >
                ← Back to Works
              </Link>
            ) : (
              <span
                className="hidden font-dmMono text-xs sm:block"
                style={{ color: "var(--text-secondary)" }}
              >
                Based in {personalInfo.location}
              </span>
            )}
          </div>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-grid-4 md:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                {isCaseStudy ? (
                  <Link
                    href={`/${link.href}`}
                    className="group relative font-dmMono text-sm tracking-wide transition-colors duration-300"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: "var(--accent)" }}
                      aria-hidden="true"
                    />
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="group relative font-dmMono text-sm tracking-wide transition-colors duration-300"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: "var(--accent)" }}
                      aria-hidden="true"
                    />
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              className="block h-0.5 w-6 rounded-full"
              style={{ backgroundColor: "var(--text-primary)" }}
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-6 rounded-full"
              style={{ backgroundColor: "var(--text-primary)" }}
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-6 rounded-full"
              style={{ backgroundColor: "var(--text-primary)" }}
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 flex flex-col items-center justify-center md:hidden"
            style={{ backgroundColor: "var(--bg-primary)" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <nav>
              <ul className="flex flex-col items-center gap-grid-5" role="list">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {isCaseStudy ? (
                      <Link
                        href={`/${link.href}`}
                        className="font-syne text-3xl font-bold tracking-tight transition-colors duration-300"
                        style={{ color: "var(--text-primary)" }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="font-syne text-3xl font-bold tracking-tight transition-colors duration-300"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {link.label}
                      </button>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
