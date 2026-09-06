/* ========================================
   Portfolio Data — Single source of truth
   ======================================== */

export interface ProjectStat {
  label: string;
  value: string;
  desc: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "all" | "web" | "mobile";
  role: string;
  duration: string;
  accent: string;
  accentGlow: string;
  description: string;
  tags: string[];
  image?: string;
  stats: ProjectStat[];
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
  role: "Product & UI/UX Designer",
  location: "Hosur, Tamil Nadu · Remote",
  email: "jenishlogesh@gmail.com",
  phone: "+91 79044 40223",
} as const;

/* ---------- Projects ---------- */

export const projects: Project[] = [
  {
    id: "georythum",
    title: "GeoRythum",
    subtitle: "Geopolitical & Climate Knowledge Platform",
    category: "web",
    role: "Lead UI/UX & System Designer",
    duration: "2 Weeks Sprint",
    accent: "#c16b3a",
    accentGlow: "rgba(193, 107, 58, 0.28)",
    description:
      "An editorial platform for geopolitical and climate analysis, structured around connected series reading, modular typography, and distraction-free ergonomics.",
    tags: ["Product Strategy", "Editorial UX", "Figma Design System", "APCA Contrast"],
    image: "/georythum-showcase.jpeg",
    stats: [
      { label: "INFORMATION ARCHITECTURE", value: "Series IA", desc: "Multi-chapter connected reading paths" },
      { label: "DESIGN TOKENS", value: "32+ Tokens", desc: "Documented typography & color primitives" },
      { label: "READING ERGONOMICS", value: "Editorial Scale", desc: "Contrast-tuned serif & mono hierarchy" },
    ],
    href: "/case-study/georythum",
  },

  {
    id: "galo",
    title: "GALO",
    subtitle: "Privacy-First Memory Vault & Time Capsule",
    category: "mobile",
    role: "Mobile UI/UX Designer",
    duration: "4 Weeks Sprint",
    accent: "#e4715a",
    accentGlow: "rgba(228, 113, 90, 0.28)",
    description:
      "A mobile application designed to preserve personal moments through secure, time-locked capsules — replacing algorithmic social feeds with intentional future reflection.",
    tags: ["Product Design", "Mobile iOS/Android", "Design System", "Privacy UX"],
    image: "/galo-showcase.jpeg",
    stats: [
      { label: "INTERACTION MODEL", value: "Time-Locked", desc: "Scheduled future capsule delivery engine" },
      { label: "SECURITY MODEL", value: "Local-First", desc: "Biometric authentication concept" },
      { label: "COMPONENT LIBRARY", value: "24+ Components", desc: "Modular Figma mobile UI system" },
    ],
    href: "/case-study/galo",
  },
];

/* ---------- Social & Contact Links ---------- */

export interface ContactChannel {
  id: string;
  action: string;
  value: string;
  description: string;
  href: string;
}

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    action: "EMAIL DISPATCH",
    value: "jenishlogesh@gmail.com",
    description: "Primary inbox for project inquiries and recruitment",
    href: "mailto:jenishlogesh@gmail.com",
  },
  {
    id: "phone",
    action: "DIRECT VOICE",
    value: "+91 79044 40223",
    description: "Available during business hours IST",
    href: "tel:+917904440223",
  },
  {
    id: "linkedin",
    action: "PROFESSIONAL NETWORK",
    value: "linkedin.com/in/jenish-m-b225171a9",
    description: "Connect on LinkedIn for professional updates",
    href: "https://linkedin.com/in/jenish-m-b225171a9",
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
