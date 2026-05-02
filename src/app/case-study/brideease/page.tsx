import type { Metadata } from "next";
import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import type { CaseStudyConfig } from "@/components/case-study/CaseStudyPage";

export const metadata: Metadata = {
  title: "BrideEase — Case Study | JeMe Designs",
  description:
    "A comprehensive wedding planning app designed over 4 weeks in Figma. Explore the full UX process from user personas to high-fidelity UI.",
  openGraph: {
    title: "BrideEase — Case Study | JeMe Designs",
    description:
      "Wedding planning app — UI/UX case study covering user research, wireframes, design system, and prototyping.",
    type: "article",
  },
};

const brideEaseConfig: CaseStudyConfig = {
  slug: "brideease",
  title: "BrideEase",
  subtitle: "Wedding Planning App",
  tags: ["Figma", "UI/UX", "Design System", "Prototyping"],
  meta: "Role: UI/UX Designer · Duration: 4 Weeks · Tool: Figma",
  heroGradient: "linear-gradient(135deg, #7c3aed, #9b5de5)",
  watermark: "01",
  sections: [
    {
      id: "cover",
      label: "COVER",
      image: "/case-studies/brideease/01-cover.jpg",
      alt: "BrideEase project cover",
    },
    {
      id: "problem",
      label: "PROBLEM STATEMENT",
      image: "/case-studies/brideease/02-problem.jpg",
      alt: "Problem statement for BrideEase",
    },
    {
      id: "personas",
      label: "USER PERSONAS",
      image: "/case-studies/brideease/03-personas.jpg",
      alt: "User personas for BrideEase",
    },
    {
      id: "journey",
      label: "USER JOURNEY MAPS",
      image: "/case-studies/brideease/04-journey.jpg",
      alt: "User journey maps for BrideEase",
    },
    {
      id: "ia",
      label: "INFORMATION ARCHITECTURE",
      image: "/case-studies/brideease/05-ia.jpg",
      alt: "Information architecture for BrideEase",
    },
    {
      id: "flows",
      label: "USER FLOWS",
      image: "/case-studies/brideease/06-flows.jpg",
      alt: "User flows for BrideEase",
    },
    {
      id: "wireframes",
      label: "WIREFRAMES",
      image: "/case-studies/brideease/07-wireframes.jpg",
      alt: "Wireframes for BrideEase",
    },
    {
      id: "hifi",
      label: "HIGH-FIDELITY UI",
      image: "/case-studies/brideease/08-hifi.jpg",
      alt: "High-fidelity UI screens for BrideEase",
    },
    {
      id: "design-system",
      label: "DESIGN SYSTEM",
      image: "/case-studies/brideease/09-design-system.jpg",
      alt: "Design system for BrideEase",
    },
    {
      id: "outcome",
      label: "OUTCOME & IMPACT",
      image: "/case-studies/brideease/10-outcome.jpg",
      alt: "Outcome and impact of BrideEase",
    },
    {
      id: "learnings",
      label: "LEARNINGS",
      image: "/case-studies/brideease/11-learnings.jpg",
      alt: "Key learnings from BrideEase project",
    },
    {
      id: "thankyou",
      label: "THANK YOU",
      image: "/case-studies/brideease/12-thankyou.jpg",
      alt: "Thank you slide for BrideEase",
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
      href: "/case-study/local-service",
      primary: true,
    },
  ],
};

export default function BrideEasePage() {
  return <CaseStudyPage config={brideEaseConfig} />;
}
