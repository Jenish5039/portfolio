import type { Metadata } from "next";
import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import type { CaseStudyConfig } from "@/components/case-study/CaseStudyPage";

export const metadata: Metadata = {
  title: "NUNA — Memory Vault & Time Capsule | JeMe Designs",
  description:
    "A privacy-first journaling and memory preservation app. Designed with a dark, immersive UI focused on distraction-free writing, biometric vault locking, and time-locked capsules.",
  openGraph: {
    title: "NUNA — Memory Vault & Time Capsule | JeMe Designs",
    description:
      "Privacy-first journaling app — UX case study covering user personas, dark UI design, biometric vault locking, and time capsule features.",
    type: "article",
  },
};

const nunaConfig: CaseStudyConfig = {
  slug: "nuna",
  title: "NUNA",
  subtitle: "Memory Vault & Time Capsule App",
  tags: ["UX Design", "Dark UI", "Privacy", "Journaling", "Mobile App"],
  meta: "Role: UI/UX Designer · Duration: 2 Weeks · Tool: Figma · Platform: iOS / Android",
  heroGradient: "linear-gradient(135deg, #0d1b2a, #065a60)",
  watermark: "03",
  sections: [
    {
      id: "cover",
      label: "COVER",
      image: "/case-studies/nuna/01-cover.png",
      alt: "NUNA — Memory Vault & Time Capsule App project cover",
    },
    {
      id: "problem",
      label: "PROBLEM & GOAL",
      image: "/case-studies/nuna/02-problem.png",
      alt: "Problem statement: Modern journaling apps are cluttered with streaks and analytics. Goal: Design a calm, minimal, emotionally immersive journaling app.",
    },
    {
      id: "persona",
      label: "USER PERSONA",
      image: "/case-studies/nuna/03-persona.png",
      alt: "User persona — Sara Krishnan, 29, Product Designer, Bengaluru. Needs distraction-free writing, biometric lock, and time capsule writing.",
    },
    {
      id: "userflow",
      label: "USER FLOW",
      image: "/case-studies/nuna/04-userflow.png",
      alt: "User flow: Home → Choose Mode → Write Entry → Add Media → Set Lock → Saved",
    },
    {
      id: "wireframes",
      label: "LOW-FIDELITY WIREFRAMES",
      image: "/case-studies/nuna/05-wireframes.png",
      alt: "Low-fidelity wireframes for 5 screens: Home, Write, Vault, Capsule, Unlock",
    },
    {
      id: "ui-design",
      label: "UI DESIGN",
      image: "/case-studies/nuna/06-ui-design.png",
      alt: "High-fidelity UI design — 4 key screens: Home, Write, Memory Vault, Time Capsule with dark theme and emotional depth",
    },
    {
      id: "features",
      label: "KEY FEATURES",
      image: "/case-studies/nuna/07-features.png",
      alt: "6 key features: Distraction-free writing, Biometric vault lock, Time capsule mode, Privacy-first architecture, Micro-interactions, Mood & media tagging",
    },
    {
      id: "app-pages",
      label: "APP PAGES",
      image: "/case-studies/nuna/08-app-pages.png",
      alt: "4 app pages: Gallery, Timeline, Capsule, Settings",
    },
    {
      id: "learnings",
      label: "KEY LEARNINGS",
      image: "/case-studies/nuna/09-learnings.png",
      alt: "Key learnings: Dark UI creates emotional intimacy, zero friction improved privacy, biometric + local storage removed barriers, less UI creates more feeling, privacy UX must be visible",
    },
    {
      id: "thankyou",
      label: "THANK YOU",
      image: "/case-studies/nuna/10-thankyou.png",
      alt: "Thank you slide for NUNA — A private space to preserve the present and reconnect with the future",
    },
  ],
  endButtons: [
    {
      label: "← GeoRythum Case Study",
      href: "/case-study/georythum",
      primary: false,
    },
    {
      label: "← Back to Works",
      href: "/#projects",
      primary: true,
    },
  ],
};

export default function NunaPage() {
  return <CaseStudyPage config={nunaConfig} />;
}
