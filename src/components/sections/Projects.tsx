"use client";

import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding py-grid-12"
      style={{ backgroundColor: "var(--bg-secondary)" }}
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeading number="02" title="Works" />
        </ScrollReveal>

        <div className="grid gap-grid-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 0.2}
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
            >
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
