interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
  id?: string;
}

export default function SectionHeading({
  number,
  title,
  className = "",
  id,
}: SectionHeadingProps) {
  const headingId = id || `${title.toLowerCase().replace(/\s+/g, "-")}-heading`;

  return (
    <div className={`mb-grid-8 flex items-center gap-grid-2 ${className}`}>
      <span
        className="font-dmMono text-sm tracking-widest uppercase"
        style={{ color: "var(--accent)" }}
      >
        {number}
      </span>
      <div
        className="h-px flex-1 max-w-[64px]"
        style={{ backgroundColor: "var(--accent)" }}
        aria-hidden="true"
      />
      <h2
        id={headingId}
        className="font-syne text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
    </div>
  );
}
