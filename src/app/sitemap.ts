import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/portfolio";

const BASE_URL = "https://jenish.design";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyUrls: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${BASE_URL}/case-study/${cs.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudyUrls,
  ];
}