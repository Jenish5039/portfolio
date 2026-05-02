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
    id: "brideease",
    title: "BrideEase",
    subtitle: "Wedding Planning App",
    description:
      "A comprehensive wedding planning application designed to streamline the entire wedding journey. Built with three distinct user roles — Bride, Family Members, and Vendors — each with their own tailored dashboard and feature set.",
    tags: ["Figma", "UI/UX", "Design System", "Prototyping"],
    gradient: "linear-gradient(135deg, #9b5de5 0%, #5e2ca5 50%, #3a1078 100%)",
    highlights: [
      "3 distinct user roles with role-based dashboards",
      "Complete Figma prototype with interactive flows",
      "Custom design system with reusable components",
      "User research-driven feature prioritization",
    ],
    href: "/case-study/brideease",
  },
  {
    id: "local-services",
    title: "Local Services Booking",
    subtitle: "Mobile-First Service Platform",
    description:
      "A mobile-first platform connecting users with verified local service providers. Designed with a focus on trust, transparency, and seamless booking experience across 5 core screens.",
    tags: ["Mobile UI", "User Research", "Prototyping", "Wireframing"],
    gradient: "linear-gradient(135deg, #9b5de5 0%, #4361ee 50%, #3a0ca3 100%)",
    highlights: [
      "5 core screens designed mobile-first",
      "End-to-end booking flow optimization",
    ],
    features: [
      { title: "Smart Search", description: "AI-powered service discovery" },
      { title: "Verified Providers", description: "Trust badges & reviews" },
      { title: "Transparent Pricing", description: "Upfront cost breakdown" },
      { title: "Easy Scheduling", description: "Calendar integration" },
      { title: "Quick Booking", description: "3-tap booking flow" },
      { title: "Instant Confirmation", description: "Real-time notifications" },
    ],
    href: "/case-study/local-service",
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
