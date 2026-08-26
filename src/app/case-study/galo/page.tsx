import type { Metadata } from "next";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import { caseStudies } from "@/data/portfolio";

const config = caseStudies.find((cs) => cs.slug === "galo")!;

export const metadata: Metadata = {
  title: "GALO — Memory Vault & Time Capsule | UX Case Study",
  description:
    "A privacy-first journaling and memory preservation mobile app. View the complete Behance-style UX case study showcasing user personas, wireframes, UI design, and design system.",
  openGraph: {
    title: "GALO — Memory Vault & Time Capsule | UX Case Study",
    description:
      "Privacy-first journaling app UX case study — covering user research, dark UI design, biometric vault locking, and time capsule features.",
    type: "article",
    images: ["/case-studies/galo/galo-case-study.webp"],
  },
};

export default function GaloPage() {
  return <CaseStudyLayout config={config} />;
}
