import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center bg-obsidian-canvas text-parchment">
      <span className="eyebrow-label text-limestone font-grotesk tracking-widest uppercase text-[12px]">
        404 · NOT FOUND
      </span>
      <h1 className="mt-4 font-saans text-4xl font-light tracking-[-0.025em] text-parchment sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md font-saans text-[15px] text-fog-text font-w380 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="btn-pill-filled mt-8 text-[14px]"
      >
        &larr; Back to Works
      </Link>
    </div>
  );
}