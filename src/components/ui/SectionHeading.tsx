interface SectionHeadingProps {
  number?: string;
  title: string;
  className?: string;
  id?: string;
}

export default function SectionHeading({
  title,
  className = "",
  id,
}: SectionHeadingProps) {
  const headingId = id || `${title.toLowerCase().replace(/\s+/g, "-")}-heading`;

  return (
    <div className={`mb-8 sm:mb-12 flex flex-col items-start ${className}`}>
      {/* Headline: saansFont 300 in Parchment */}
      <h2
        id={headingId}
        className="text-[30px] sm:text-[38px] md:text-[44px] font-light leading-[1.08] tracking-[-0.025em] text-parchment font-saans"
      >
        {title}
      </h2>
    </div>
  );
}
