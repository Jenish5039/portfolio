import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jenish M — UI/UX Designer & Frontend Developer",
  description:
    "Portfolio of Jenish M, a UI/UX Designer & Frontend Developer based in Hosur, Tamil Nadu. Crafting intuitive digital experiences through design thinking and modern frontend development.",
  keywords: [
    "UI/UX Designer",
    "Frontend Developer",
    "Jenish M",
    "Portfolio",
    "Figma",
    "Design Systems",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Jenish M" }],
  openGraph: {
    title: "Jenish M — UI/UX Designer & Frontend Developer",
    description:
      "Crafting intuitive digital experiences through design thinking and modern frontend development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenish M — UI/UX Designer & Frontend Developer",
    description:
      "Crafting intuitive digital experiences through design thinking and modern frontend development.",
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
    <html lang="en" className={`${syne.variable} ${dmMono.variable}`}>
      <body>
        <CustomCursor />
        <Navbar />
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
