"use client";

import { useCallback } from "react";

export function useSmoothScroll() {
  const scrollTo = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return { scrollTo };
}
