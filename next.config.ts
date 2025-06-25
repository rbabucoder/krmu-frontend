import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // Use http for localhost
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**", // Match Strapi media URLs
      },
    ],
  },
};

export default nextConfig;