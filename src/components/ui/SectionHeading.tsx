interface SectionHeadingProps {
  number?: string;
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export default function SectionHeading({
  number,
  title,
  subtitle,
  className = "",
  id,
}: SectionHeadingProps) {
  const headingId = id || `${title.toLowerCase().replace(/\s+/g, "-")}-heading`;

  return (
    <div className={`flex flex-col items-start gap-3 mb-10 sm:mb-14 ${className}`}>
      {number && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.12] text-[10.5px] font-mono font-medium text-stone-300 tracking-[0.18em] uppercase shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.9)]" />
          {number} / {title.toUpperCase()}
        </span>
      )}
      <h2
        id={headingId}
        className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.035em] text-white font-saans"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[16px] sm:text-[18px] text-stone-400 font-normal leading-relaxed max-w-2xl mt-1 font-saans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
