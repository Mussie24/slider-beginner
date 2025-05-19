import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'training.aleksundshantu.de',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
