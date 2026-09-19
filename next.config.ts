import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Image Optimisation ──────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"], // Serve AVIF first, WebP as fallback
    minimumCacheTTL: 31536000,             // 1 year cache for optimised images
    deviceSizes: [390, 640, 900, 1280, 1920],
    imageSizes: [64, 128, 256, 380, 512],
  },

  // ── Compression ─────────────────────────────────────────────────────────
  compress: true,

  // ── Powered-by header ───────────────────────────────────────────────────
  poweredByHeader: false,

  // ── Custom cache-control headers ────────────────────────────────────────
  async headers() {
    return [
      {
        // Static assets — cache 1 year
        source: "/:path*(jpg|jpeg|png|webp|avif|ico|svg|woff2|woff|ttf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // HTML / API — no store, always revalidate
        source: "/((?!_next/static|_next/image|favicon.ico).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
          // Security headers
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
