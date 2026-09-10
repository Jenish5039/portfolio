"use client";

import { useCallback } from "react";

export function useSmoothScroll() {
  const scrollTo = useCallback((targetId: string) => {
    if (typeof window === "undefined") return;

    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number | HTMLElement, opts?: { offset?: number; duration?: number }) => void } }).__lenis;

    if (targetId === "hero") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 64;
      if (lenis) {
        lenis.scrollTo(element, { offset: -navOffset, duration: 1.2 });
      } else {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return { scrollTo };
}
