import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/portfolio";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Magnetic from "@/components/ui/Magnetic";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1;

  const imageContent = project.image ? (
    <div className="relative flex flex-col h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[460px] w-full overflow-hidden rounded-[8px] border border-charcoal-rim bg-void-black transition-all duration-300 group-hover:border-parchment/40">
      {/* Window Top Chrome Bar */}
      <div className="flex items-center justify-between border-b border-charcoal-rim px-4 py-2.5 bg-[#121212] select-none">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-charcoal-rim transition-colors group-hover:bg-copper-wire/60" />
          <span className="h-2 w-2 rounded-full bg-charcoal-rim" />
          <span className="h-2 w-2 rounded-full bg-charcoal-rim" />
        </div>
        <span className="text-xs font-grotesk text-ash-text tracking-wide group-hover:text-fog-text transition-colors">
          {project.id === "georythum" ? "georythum.internal-platform" : "galo.vault-application"}
        </span>
      </div>

      {/* Screen Container with Micro-zoom */}
      <div className="relative flex-1 w-full min-h-[280px] overflow-hidden bg-void-black">
        <Image
          src={project.image}
          alt={`${project.title} Preview`}
          fill
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          quality={80}
        />
      </div>
    </div>
  ) : (
    <div
      className="h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[460px] w-full rounded-[8px] border border-charcoal-rim"
      style={{ background: project.gradient }}
    />
  );

  return (
    <SpotlightCard
      id={`project-${project.id}`}
      className="card-raised p-8 sm:p-12 lg:p-14 transition-all duration-300"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
        isReversed ? "lg:grid-flow-dense" : ""
      }`}>
        
        {/* Editorial Text Content Column (5 cols) */}
        <div className={`lg:col-span-5 flex flex-col justify-between h-full gap-7 ${
          isReversed ? "lg:col-start-8" : ""
        }`}>
          <div>
            {/* Top Metadata Header */}
            <div className="flex items-center justify-between border-b border-charcoal-rim pb-3.5 mb-5">
              <span className="eyebrow-label text-limestone font-grotesk text-xs uppercase tracking-wider">
                {`CASE ${String(index + 1).padStart(2, "0")}`}
              </span>
              <span className="text-xs font-grotesk text-ash-text uppercase tracking-wider">
                PRODUCTION
              </span>
            </div>

            {/* Tags Row with Micro-hover */}
            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-tag border border-charcoal-rim bg-void-black px-2.5 py-1 text-xs font-grotesk text-fog-text tracking-wide transition-all duration-200 hover:border-parchment/30 hover:text-parchment cursor-default select-none"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Display Title & Subtitle */}
            <h3 className="text-[26px] sm:text-[32px] font-light leading-[1.12] tracking-[-0.02em] text-parchment font-saans">
              {project.title}
            </h3>
            <p className="mt-1.5 text-[13px] text-ash-text font-grotesk">
              {project.subtitle}
            </p>

            {/* Narrative Description */}
            <p className="mt-4 text-[15px] leading-[1.65] text-fog-text font-saans font-w380">
              {project.description}
            </p>

            {/* Key Deliverables & Highlights */}
            <div className="mt-6 border-t border-charcoal-rim pt-4">
              <span className="eyebrow-label block mb-3 text-limestone text-xs font-grotesk uppercase tracking-wider">
                KEY DELIVERABLES
              </span>
              <ul className="space-y-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-[13.5px] text-parchment/90 font-saans leading-relaxed"
                  >
                    <span className="text-copper-wire/80 shrink-0 mt-0.5">&bull;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTAs: Binary Button Grammar with Magnetic physics */}
          <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-charcoal-rim">
            {project.href && (
              <Magnetic strength={0.15}>
                <Link
                  href={project.href}
                  className="group btn-pill-filled !py-2 !px-5 text-sm inline-flex items-center gap-2"
                >
                  <span>Read Case Study</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                </Link>
              </Magnetic>
            )}
            {project.prototypeHref && (
              <Magnetic strength={0.15}>
                <a
                  href={project.prototypeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-square-ghost !py-2 !px-4 text-xs font-grotesk inline-flex items-center gap-1.5"
                >
                  <span>Prototype</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
                </a>
              </Magnetic>
            )}
          </div>
        </div>

        {/* Visual Preview Column (7 cols) */}
        <div className={`lg:col-span-7 ${
          isReversed ? "lg:col-start-1" : ""
        }`}>
          {project.href ? (
            <Link
              href={project.href}
              className="group block overflow-hidden rounded-[8px]"
              aria-label={`View ${project.title} Case Study`}
            >
              {imageContent}
            </Link>
          ) : (
            <div className="group block overflow-hidden rounded-[8px]">
              {imageContent}
            </div>
          )}
        </div>

      </div>
    </SpotlightCard>
  );
}
