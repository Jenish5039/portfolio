import type { Metadata } from "next";
import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import type { CaseStudyConfig } from "@/components/case-study/CaseStudyPage";

export const metadata: Metadata = {
  title: "Local Services Booking — Case Study | JeMe Designs",
  description:
    "A mobile-first local services booking platform designed in 1 week. Explore user research, wireframes, UI design, and key features.",
  openGraph: {
    title: "Local Services Booking — Case Study | JeMe Designs",
    description:
      "Mobile-first service platform — UI/UX case study covering persona, user flows, wireframes, and UI design.",
    type: "article",
  },
};

const localServiceConfig: CaseStudyConfig = {
  slug: "local-service",
  title: "Local Services Booking",
  subtitle: "Mobile-First Service Platform",
  tags: ["Mobile UI", "User Research", "Prototyping", "Wireframing"],
  meta: "Role: UI/UX Designer · Duration: 1 Week · Tool: Figma",
  heroGradient: "linear-gradient(135deg, #3b82f6, #7c3aed)",
  watermark: "02",
  sections: [
    {
      id: "cover",
      label: "COVER",
      image: "/case-studies/local-service/01-cover.jpg",
      alt: "Local Services Booking project cover",
    },
    {
      id: "problem",
      label: "PROBLEM & GOAL",
      image: "/case-studies/local-service/02-problem.jpg",
      alt: "Problem statement and goals for Local Services",
    },
    {
      id: "persona",
      label: "USER PERSONA",
      image: "/case-studies/local-service/03-persona.jpg",
      alt: "User persona for Local Services",
    },
    {
      id: "userflow",
      label: "USER FLOW",
      image: "/case-studies/local-service/04-userflow.jpg",
      alt: "User flow for Local Services",
    },
    {
      id: "wireframes",
      label: "LOW-FIDELITY WIREFRAMES",
      image: "/case-studies/local-service/05-wireframes.jpg",
      alt: "Low-fidelity wireframes for Local Services",
    },
    {
      id: "ui-design",
      label: "UI DESIGN",
      image: "/case-studies/local-service/06-ui-design.jpg",
      alt: "UI design screens for Local Services",
    },
    {
      id: "features",
      label: "KEY FEATURES",
      image: "/case-studies/local-service/07-features.jpg",
      alt: "Key features of Local Services platform",
    },
    {
      id: "learnings",
      label: "KEY LEARNINGS",
      image: "/case-studies/local-service/08-learnings.jpg",
      alt: "Key learnings from Local Services project",
    },
    {
      id: "thankyou",
      label: "THANK YOU",
      image: "/case-studies/local-service/09-thankyou.jpg",
      alt: "Thank you slide for Local Services",
    },
  ],
  endButtons: [
    {
      label: "← BrideEase Case Study",
      href: "/case-study/brideease",
      primary: false,
    },
    {
      label: "← Back to Works",
      href: "/#projects",
      primary: true,
    },
  ],
};

export default function LocalServicePage() {
  return <CaseStudyPage config={localServiceConfig} />;
}
