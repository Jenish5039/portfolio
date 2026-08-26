/* ========================================
   Portfolio Data — Single source of truth
   ======================================== */

export interface Skill {
  name: string;
  category: "design" | "research" | "development";
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  gradient: string;
  image?: string;
  highlights: string[];
  href?: string;
  prototypeHref?: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface SocialLink {
  label: string;
  href: string;
  isExternal: boolean;
}

/* ---------- Personal Info ---------- */

export const personalInfo = {
  name: "Jeme",
  firstName: "Jeme",
  lastName: "",
  role: "Product & UI/UX Designer · AI-Accelerated Frontend",
  location: "Hosur, Tamil Nadu",
  email: "jenishlogesh@gmail.com",
  phone: "+91 79044 40223",
  bio: "Product & UI/UX Designer dedicated to solving complex user problems through user research, intuitive interaction design, and scalable Figma design systems. I also bridge design and code by building high-performance frontend interfaces using AI-accelerated workflows in React and Next.js.",
} as const;

export const aboutParagraphs = [
  "I specialize in Product Design and UI/UX — translating ambiguous problems into clear, elegant digital experiences through user research, information architecture, wireframing, and comprehensive Figma design systems.",
  "To bring designs to life with speed and precision, I leverage AI-accelerated frontend engineering in React and Next.js, ensuring design decisions translate seamlessly into functional web applications.",
];

/* ---------- Skills ---------- */

export const skills: Skill[] = [
  { name: "Product Design", category: "design" },
  { name: "UI/UX Design", category: "design" },
  { name: "Figma & Design Systems", category: "design" },
  { name: "User Research & Testing", category: "research" },
  { name: "Wireframing & Prototyping", category: "design" },
  { name: "Information Architecture", category: "design" },
  { name: "Interaction Design", category: "design" },
  { name: "AI Coding Workflows", category: "development" },
  { name: "React & Next.js", category: "development" },
];

/* ---------- Projects ---------- */

export const projects: Project[] = [
  {
    id: "georythum",
    title: "GeoRythum",
    subtitle: "Geopolitical Knowledge Platform",
    description:
      "A distraction-free editorial platform for deep geopolitical and climate knowledge, structured around connected series reading.",
    tags: ["UI/UX Design", "Web Platform", "Figma"],
    gradient: "linear-gradient(135deg, #C16B3A 0%, #8B4820 50%, #3D3529 100%)",
    image: "/georythum-preview.webp",
    highlights: [
      "Series-based long-form editorial experience",
      "Distraction-free reading with dark mode support",
    ],
    href: "/case-study/georythum",
  },

  {
    id: "galo",
    title: "GALO",
    subtitle: "Memory Vault & Time Capsule",
    description:
      "A privacy-first mobile application designed to preserve personal moments and memories through secure, time-locked capsules.",
    tags: ["UI/UX Design", "Mobile App", "Design System"],
    gradient: "linear-gradient(135deg, #0d1b2a 0%, #1b3a4b 50%, #065a60 100%)",
    image: "/galo-preview.webp",
    highlights: [
      "Time-locked capsules delivered to future dates",
      "Biometric vault protection with local-first storage",
    ],
    href: "/case-study/galo",
  },
];

/* ---------- Education ---------- */

export const education: Education = {
  degree: "B.Tech",
  field: "Computer Science & Engineering (Artificial Intelligence)",
  institution: "Karunya Institute of Technology and Sciences",
  location: "Coimbatore",
  year: "2025",
};

/* ---------- Certifications ---------- */

export const certifications: Certification[] = [
  {
    name: "Graphic Design Essentials",
    issuer: "Canva Design School",
    year: "2026",
  },
  {
    name: "Enterprise Design Thinking Practitioner",
    issuer: "IBM SkillsBuild",
    year: "April 2026",
  },
  {
    name: "Digital Skills: User Experience",
    issuer: "Accenture & FutureLearn",
    year: "April 2026",
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

/* ---------- Nav Links ---------- */

export const navLinks = [
  { label: "Works", href: "#projects" },
  { label: "About", href: "#about" },
] as const;

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
