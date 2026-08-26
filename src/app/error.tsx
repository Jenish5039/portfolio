"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center bg-obsidian-canvas text-parchment">
      <span className="eyebrow-label text-limestone font-grotesk tracking-widest uppercase text-[12px]">
        ERROR · SOMETHING WENT WRONG
      </span>
      <h1 className="mt-4 font-saans text-4xl font-light tracking-[-0.025em] text-parchment sm:text-5xl">
        An unexpected error occurred
      </h1>
      <p className="mt-4 max-w-md font-saans text-[15px] text-fog-text font-w380 leading-relaxed">
        Something went wrong while rendering this page.
      </p>
      <button
        onClick={reset}
        className="btn-pill-filled mt-8 text-[14px]"
      >
        Try again &rarr;
      </button>
    </div>
  );
}