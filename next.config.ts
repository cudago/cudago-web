import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
