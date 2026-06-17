import type { Metadata } from "next";
import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import type { CaseStudyConfig } from "@/components/case-study/CaseStudyPage";

export const metadata: Metadata = {
  title: "GeoRythum — Case Study | JeMe Designs",
  description:
    "A clean, distraction-free knowledge platform for geopolitical and climate content. Explore the UX process from user personas to high-fidelity UI.",
  openGraph: {
    title: "GeoRythum — Case Study | JeMe Designs",
    description:
      "Geopolitical knowledge platform — UI/UX case study covering user research, wireframes, UI design, and key features.",
    type: "article",
  },
};

const geoRythumConfig: CaseStudyConfig = {
  slug: "georythum",
  title: "GeoRythum",
  subtitle: "Geopolitical Knowledge Platform",
  tags: ["Figma", "UI/UX", "Web Platform", "Editorial Design"],
  meta: "Role: UI/UX Designer · Duration: 2 Weeks · Tool: Figma",
  heroGradient: "linear-gradient(135deg, #C16B3A, #8B4820)",
  watermark: "01",
  sections: [
    {
      id: "cover",
      label: "COVER",
      image: "/case-studies/georythum/01-cover.jpg",
      alt: "GeoRythum project cover showing the knowledge platform",
    },
    {
      id: "problem",
      label: "PROBLEM & GOAL",
      image: "/case-studies/georythum/02-problem.jpg",
      alt: "Problem statement and goals for GeoRythum",
    },
    {
      id: "persona",
      label: "USER PERSONA",
      image: "/case-studies/georythum/03-persona.jpg",
      alt: "User persona for GeoRythum — Aditya Kumar, Product Manager",
    },
    {
      id: "userflow",
      label: "USER FLOW",
      image: "/case-studies/georythum/04-userflow.jpg",
      alt: "User flow mapping the reader journey from discovery to engagement",
    },
    {
      id: "wireframes",
      label: "LOW-FIDELITY WIREFRAMES",
      image: "/case-studies/georythum/05-wireframes.jpg",
      alt: "Low-fidelity wireframes for GeoRythum core screens",
    },
    {
      id: "ui-design",
      label: "UI DESIGN",
      image: "/case-studies/georythum/06-ui-design.jpg",
      alt: "High-fidelity UI design screens for GeoRythum",
    },
    {
      id: "features",
      label: "KEY FEATURES",
      image: "/case-studies/georythum/07-features.jpg",
      alt: "Key features of GeoRythum platform",
    },
    {
      id: "learnings",
      label: "KEY LEARNINGS",
      image: "/case-studies/georythum/08-learnings.jpg",
      alt: "Key learnings from GeoRythum project",
    },
    {
      id: "thankyou",
      label: "THANK YOU",
      image: "/case-studies/georythum/09-thankyou.jpg",
      alt: "Thank you slide for GeoRythum",
    },
  ],
  endButtons: [
    {
      label: "← Back to Works",
      href: "/#projects",
      primary: false,
    },
    {
      label: "Next Case Study →",
      href: "/case-study/nuna",
      primary: true,
    },
  ],
};

export default function GeoRythumPage() {
  return <CaseStudyPage config={geoRythumConfig} />;
}
