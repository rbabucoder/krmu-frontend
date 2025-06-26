import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "http", // Use http for localhost
  //       hostname: "localhost",
  //       port: "1337",
  //       pathname: "/uploads/**", // Match Strapi media URLs
  //     },
  //   ],
  // },
  output: "export",
  reactStrictMode: true,
  images: {
    // You don't need to add anything specific for public/ images here.
    // Next.js allows all public/ assets to be used with no domain config.
    unoptimized: false, // Ensures optimization is on
  },
};

export default nextConfig;
