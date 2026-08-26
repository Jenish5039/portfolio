"use client";

import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding py-20 sm:py-28 lg:py-32 bg-obsidian-canvas border-t border-charcoal-rim"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal>
          <SectionHeading number="01" title="Selected Works" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-[17px] sm:text-[18px] text-fog-text max-w-xl mb-12 sm:mb-16 leading-[1.65] font-saans font-w380">
            Selected product designs, UX architectures, and design systems crafted in Figma and executed with AI-accelerated frontend engineering.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-24 sm:gap-32 lg:gap-40">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 0.1}
              className="w-full"
            >
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
