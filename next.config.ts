import type { NextConfig } from "next";
import { RETIRED_PROJECT_SLUGS } from "./data/projects";

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
      // Placeholder case studies replaced by real jobs.
      {
        source: `/proyectos/:slug(${RETIRED_PROJECT_SLUGS.join('|')})`,
        destination: '/proyectos',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
