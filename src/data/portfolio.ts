/* ========================================
   Portfolio Data — Single source of truth
   ======================================== */

export interface ProjectVideo {
  webm?: string;
  mp4: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "web" | "mobile";
  role: string;
  duration: string;
  accent: string;
  accentGlow: string;
  description: string;
  tags: string[];
  image?: string;
  video?: ProjectVideo;
  href?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  isExternal: boolean;
}

/* ---------- Personal Info ---------- */

export const personalInfo = {
  name: "Jeme",
  fullName: "JENISH M",
  role: "UI/UX & Product Designer",
  location: "From India",
  email: "jenishlogesh@gmail.com",
  phone: "+91 79044 40223",
} as const;

/* ---------- Projects ---------- */

export const projects: Project[] = [
  {
    id: "galo",
    title: "GALO",
    subtitle: "Privacy-First Memory Vault & Time Capsule",
    category: "mobile",
    role: "UI/UX Designer",
    duration: "4 Weeks Sprint",
    accent: "#e4715a",
    accentGlow: "rgba(228, 113, 90, 0.28)",
    description:
      "A mobile application designed to preserve personal moments through secure, time-locked capsules — replacing algorithmic social feeds with intentional future reflection.",
    tags: ["Product Design", "Mobile iOS/Android", "Design System", "Privacy UX"],
    image: "/galo-showcase.webp",
    video: {
      webm: "/galo-preview.webm",
      mp4: "/galo-preview.mp4",
    },
    href: "/case-study/galo",
  },
  {
    id: "georythum",
    title: "GeoRythum",
    subtitle: "Geopolitical & Climate Knowledge Platform",
    category: "web",
    role: "UI/UX Designer",
    duration: "2 Weeks Sprint",
    accent: "#c16b3a",
    accentGlow: "rgba(193, 107, 58, 0.28)",
    description:
      "An editorial platform for geopolitical and climate analysis, structured around connected series reading, modular typography, and distraction-free ergonomics.",
    tags: ["Product Strategy", "Editorial UX", "Figma Design System", "APCA Contrast"],
    image: "/georythum-showcase.webp",
    video: {
      webm: "/georythum-preview.webm",
      mp4: "/georythum-preview.mp4",
    },
    href: "/case-study/georythum",
  },
];

/* ---------- Social & Contact Links ---------- */

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    external: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/jenish-m",
    href: "https://linkedin.com/in/jenish-m-b225171a9",
    external: true,
  },
  {
    id: "phone",
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
    external: false,
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jenish-m-b225171a9",
    isExternal: true,
  },
  {
    label: "Email",
    href: "mailto:jenishlogesh@gmail.com",
    isExternal: false,
  },
  {
    label: "Phone",
    href: "tel:+917904440223",
    isExternal: false,
  },
];


/* ---------- Case Studies ---------- */

export interface CaseStudyMetaItem {
  label: string;
  value: string;
}

export interface CaseStudyTheme {
  accent: string;
  accentDark: string;
  bg: string;
  border: string;
}

export interface CaseStudyConfig {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  meta: CaseStudyMetaItem[];
  image: string;
  alt: string;
  imageWidth: number;
  imageHeight: number;
  nextLabel: string;
  nextHref: string;
  footerQuote: string;
  theme: CaseStudyTheme;
}

export const caseStudies: CaseStudyConfig[] = [
  {
    slug: "georythum",
    title: "GeoRythum",
    tagline: "Geopolitical & Climate Knowledge Platform",
    description:
      "A clean, distraction-free platform for deep geopolitical and climate knowledge. Designed to simplify complex global topics through series-based long-form content, zero-ad reading, and a trustworthy editorial voice.",
    meta: [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Duration", value: "2 Weeks" },
      { label: "Tools", value: "Figma, Editorial Design" },
      { label: "Platform", value: "Web Platform" },
    ],
    image: "/case-studies/georythum/georythum-case-study.webp",
    alt: "GeoRythum — Geopolitical & Climate Knowledge Platform UX Case Study",
    imageWidth: 1368,
    imageHeight: 10382,
    nextLabel: "GALO Case Study",
    nextHref: "/case-study/galo",
    footerQuote:
      "Simplifying complex global narratives into intuitive digital experiences.",
    theme: {
      accent: "#c16b3a",
      accentDark: "#a85427",
      bg: "#faf7f2",
      border: "#eae3d9",
    },
  },
  {
    slug: "galo",
    title: "GALO",
    tagline: "Where Memories Wait for the Right Time.",
    description:
      "GALO is a privacy-first memory vault that helps people preserve meaningful moments through secure, time-locked capsules. Designed to encourage reflection instead of endless scrolling, it transforms everyday memories into experiences worth revisiting.",
    meta: [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Duration", value: "4 Weeks" },
      { label: "Tools", value: "Figma, Photoshop" },
      { label: "Platform", value: "Mobile (iOS / Android)" },
    ],
    image: "/case-studies/galo/galo-case-study.webp",
    alt: "GALO — Privacy-First Memory Vault & Time Capsule App UX Case Study",
    imageWidth: 1506,
    imageHeight: 14766,
    nextLabel: "GeoRythum Case Study",
    nextHref: "/case-study/georythum",
    footerQuote: "Good design solves problems before users notice them.",
    theme: {
      accent: "#e4715a",
      accentDark: "#d45f47",
      bg: "#faf6f0",
      border: "#eae2d7",
    },
  },
];
