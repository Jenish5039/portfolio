import Link from "next/link";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const card = (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2"
      style={{
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--bg-tertiary)",
      }}
      id={`project-${project.id}`}
    >
      {/* Hover glow effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: "inset 0 0 0 1px var(--accent), 0 0 30px var(--accent-glow)",
        }}
        aria-hidden="true"
      />

      {/* Gradient color block */}
      <div
        className="relative h-48 sm:h-56 overflow-hidden"
        style={{ background: project.gradient }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-3 opacity-20">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-12 w-12 rounded-lg sm:h-16 sm:w-16"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              />
            ))}
          </div>
        </div>
        {/* Project number overlay */}
        <div className="absolute bottom-4 right-4">
          <span className="font-dmMono text-6xl font-bold opacity-20 sm:text-7xl" style={{ color: "#fff" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-grid-3 sm:p-grid-4">
        {/* Tags */}
        <div className="mb-grid-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 font-dmMono text-xs tracking-wide"
              style={{
                backgroundColor: "var(--bg-tertiary)",
                color: "var(--accent-light)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & subtitle */}
        <h3
          className="font-syne text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>
        <p
          className="mt-1 font-dmMono text-sm"
          style={{ color: "var(--accent)" }}
        >
          {project.subtitle}
        </p>

        {/* Description */}
        <p
          className="mt-grid-2 text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="mt-grid-3 space-y-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
                aria-hidden="true"
              />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Features grid (if any) */}
        {project.features && project.features.length > 0 && (
          <div className="mt-grid-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {project.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl p-3 transition-colors duration-300"
                style={{ backgroundColor: "var(--bg-tertiary)" }}
              >
                <p
                  className="font-syne text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {feature.title}
                </p>
                <p
                  className="mt-0.5 font-dmMono text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );

  /* Wrap in a Link if the project has an href */
  if (project.href) {
    return (
      <Link
        href={project.href}
        className="block h-full no-underline"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {card}
      </Link>
    );
  }

  return card;
}
