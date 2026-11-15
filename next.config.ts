import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      // Legacy duplicates of the /avisos landing pages (already canonicalised there).
      {
        source: '/avisos-profesionales/:slug',
        destination: '/avisos/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
