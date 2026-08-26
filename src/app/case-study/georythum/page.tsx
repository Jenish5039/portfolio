import type { Metadata } from "next";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import { caseStudies } from "@/data/portfolio";

const config = caseStudies.find((cs) => cs.slug === "georythum")!;

export const metadata: Metadata = {
  title: "GeoRythum — Geopolitical Knowledge Platform | UX Case Study",
  description:
    "A clean, distraction-free knowledge platform for geopolitical and climate content. View the complete Behance-style UX case study showcasing user research, wireframes, UI design, and editorial features.",
  openGraph: {
    title: "GeoRythum — Geopolitical Knowledge Platform | UX Case Study",
    description:
      "Geopolitical & climate knowledge platform UX case study — covering user research, editorial design, series-based content structure, and UI design.",
    type: "article",
    images: ["/case-studies/georythum/georythum-case-study.webp"],
  },
};

export default function GeoRythumPage() {
  return <CaseStudyLayout config={config} />;
}
