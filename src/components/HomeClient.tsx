"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function HomeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      <div>{children}</div>
    </>
  );
}
