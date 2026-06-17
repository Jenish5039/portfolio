/* ========================================
   Portfolio Data — Single source of truth
   ======================================== */

export interface Skill {
  name: string;
  category: "design" | "research" | "development";
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  gradient: string;
  highlights: string[];
  features?: ProjectFeature[];
  href?: string;
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
  name: "Jenish M",
  firstName: "Jenish",
  lastName: "M",
  role: "UI/UX Designer & Frontend Developer",
  location: "Hosur, Tamil Nadu",
  email: "jenishlogesh@gmail.com",
  phone: "+91 79044 40223",
  bio: "I craft intuitive digital experiences that bridge the gap between design thinking and technical implementation. With a passion for user-centered design and modern frontend development, I transform complex problems into elegant, accessible solutions that delight users and drive results.",
} as const;

/* ---------- Skills ---------- */

export const skills: Skill[] = [
  { name: "Figma", category: "design" },
  { name: "Adobe XD", category: "design" },
  { name: "Canva", category: "design" },
  { name: "FigJam", category: "design" },
  { name: "User Research", category: "research" },
  { name: "Journey Mapping", category: "research" },
  { name: "Wireframing", category: "design" },
  { name: "Prototyping", category: "design" },
  { name: "Design Systems", category: "design" },
  { name: "Typography", category: "design" },
  { name: "Color Theory", category: "design" },
  { name: "Iconography", category: "design" },
];

/* ---------- Projects ---------- */

export const projects: Project[] = [
  {
    id: "georythum",
    title: "GeoRythum",
    subtitle: "Geopolitical Knowledge Platform",
    description:
      "A clean, distraction-free platform for deep geopolitical and climate knowledge. Designed to simplify complex global topics through series-based long-form content, zero-ad reading, and a trustworthy editorial voice.",
    tags: ["Figma", "UI/UX", "Web Platform", "Editorial Design"],
    gradient: "linear-gradient(135deg, #C16B3A 0%, #8B4820 50%, #3D3529 100%)",
    highlights: [
      "Series-based content structure for connected storytelling",
      "Zero-ad, distraction-free reading experience",
      "Category filtering for Geopolitics, Climate & Economics",
      "Dark mode support for comfortable long-form reading",
    ],
    href: "/case-study/georythum",
  },

  {
    id: "nuna",
    title: "NUNA",
    subtitle: "Memory Vault & Time Capsule App",
    description:
      "A privacy-first journaling and memory preservation app. Designed with a dark, immersive UI focused on distraction-free writing, biometric vault locking, and time-locked capsules users can send to their future selves.",
    tags: ["UX Design", "Dark UI", "Privacy", "Journaling", "Mobile App"],
    gradient: "linear-gradient(135deg, #0d1b2a 0%, #1b3a4b 50%, #065a60 100%)",
    highlights: [
      "Distraction-free writing with zero analytics or streaks",
      "Biometric vault lock for emotional privacy",
      "Time-locked capsules sent to your future self",
      "Privacy-first: local-only storage by default",
    ],
    features: [
      { title: "Focus Writing", description: "Distraction-free editor" },
      { title: "Biometric Lock", description: "Vault-level privacy" },
      { title: "Time Capsule", description: "Future-dated reveals" },
      { title: "Local Storage", description: "No cloud by default" },
      { title: "Micro-interactions", description: "Save, lock & reveal" },
      { title: "Mood Tagging", description: "Emotion & media tags" },
    ],
    href: "/case-study/nuna",
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

/* ---------- Social Links ---------- */

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
  { label: "About", href: "#about" },
  { label: "Works", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
