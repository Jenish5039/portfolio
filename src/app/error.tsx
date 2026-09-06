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
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center bg-canvas text-text-primary">
      <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-stone-400">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.9)]" />
        ERROR · SOMETHING WENT WRONG
      </span>
      <h1 className="mt-4 font-saans text-4xl font-bold tracking-[-0.025em] text-white sm:text-5xl">
        An unexpected error occurred
      </h1>
      <p className="mt-4 max-w-md font-saans text-[15px] text-stone-400 font-normal leading-relaxed">
        Something went wrong while rendering this archive view.
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