import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono, PT_Serif, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-saans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-pxgrotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jenish.design"),
  title: {
    default: "Jeme — Product & UI/UX Designer | AI-Accelerated Frontend",
    template: "%s | Jeme",
  },
  description:
    "Portfolio of Jeme, a Product & UI/UX Designer crafting user-centered digital experiences, Figma design systems, and AI-accelerated frontend interfaces.",
  keywords: [
    "Product Designer",
    "UI/UX Designer",
    "UX Researcher",
    "Figma Design Systems",
    "AI Frontend Developer",
    "Jeme",
    "UX Portfolio",
    "Design Systems",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Jeme" }],
  creator: "Jeme",
  openGraph: {
    title: "Jeme — Product & UI/UX Designer | AI-Accelerated Frontend",
    description:
      "Crafting intuitive digital products, UX research frameworks, and scalable Figma design systems with AI-driven frontend execution.",
    type: "website",
    locale: "en_US",
    url: "https://jenish.design",
    siteName: "JeMe Designs",
    images: [
      {
        url: "/georythum-preview.webp",
        width: 1200,
        height: 630,
        alt: "Jeme — Product & UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeme — Product & UI/UX Designer | AI-Accelerated Frontend",
    description:
      "Crafting intuitive digital products, UX research frameworks, and scalable Figma design systems with AI-driven frontend execution.",
    creator: "@jenishm",
    images: ["/georythum-preview.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} ${ptSerif.variable} ${cormorant.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="bg-obsidian-canvas text-parchment antialiased font-saans" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `if('scrollRestoration' in history){history.scrollRestoration='manual';}window.scrollTo(0,0);`,
          }}
        />
        <Navbar />
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
