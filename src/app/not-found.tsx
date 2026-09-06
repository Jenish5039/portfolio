import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center bg-canvas text-text-primary">
      <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-stone-400">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.9)]" />
        404 · NOT FOUND
      </span>
      <h1 className="mt-4 font-saans text-4xl font-bold tracking-[-0.025em] text-white sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md font-saans text-[15px] text-stone-400 font-normal leading-relaxed">
        The requested archive coordinate doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="btn-pill-filled mt-8 text-[14px]"
      >
        &larr; Return to Selected Works
      </Link>
    </div>
  );
}