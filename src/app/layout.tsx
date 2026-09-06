import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Geist_Mono, PT_Serif, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-saans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  weight: ["400", "500"],
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
  weight: ["400", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080707",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jenish.design"),
  title: {
    default: "Jeme — Product & UI/UX Designer",
    template: "%s | Jeme",
  },
  description:
    "Portfolio of Jeme, a Product & UI/UX Designer crafting research-driven digital products, scalable Figma design systems, and tactile frontend interfaces.",
  keywords: [
    "Product Designer",
    "UI/UX Designer",
    "UX Researcher",
    "Design Systems Architect",
    "Information Architecture",
    "Interaction Design",
    "Figma Variables",
    "Jeme",
    "Product Design Portfolio",
    "Next.js",
  ],
  authors: [{ name: "Jeme" }],
  creator: "Jeme",
  openGraph: {
    title: "Jeme — Product & UI/UX Designer",
    description:
      "Crafting intuitive digital products, UX research frameworks, and scalable Figma design systems with high-fidelity frontend execution.",
    type: "website",
    locale: "en_US",
    url: "https://jenish.design",
    siteName: "Jeme Design Studio",
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
    title: "Jeme — Product & UI/UX Designer",
    description:
      "Crafting intuitive digital products, UX research frameworks, and scalable Figma design systems with high-fidelity frontend execution.",
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
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} ${geistMono.variable} ${ptSerif.variable} ${cormorant.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="bg-canvas text-text-primary antialiased font-saans selection:bg-rose-500/30 selection:text-white" suppressHydrationWarning>
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
