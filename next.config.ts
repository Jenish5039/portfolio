import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    qualities: [60, 75, 80, 85],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|avif|mp4|pdf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
