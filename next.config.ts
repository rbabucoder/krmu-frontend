import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; img-src 'self' https: data: blob:; media-src 'self' https: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; frame-src https://www.youtube.com https://player.vimeo.com;",
  },
];

const nextConfig: NextConfig = {
  // output: "export",
  // assetPrefix: "/blog",
  // basePath: "/blog",
  // assetPrefix: "https://krmangalam.netlify.app",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "truthful-cabbage-82fd27e8f6.media.strapiapp.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "techapi.krmangalam.edu.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.krmangalam.edu.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wp.krmangalam.edu.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "krmangalam.edu.in",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    if (!isProd) return []; // ✅ disable in local
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  //  async rewrites() {
  //   return [
  //     {
  //       source: "/KRMU_QS/:path*",
  //       destination: "/api/r2/:path*",
  //     },
  //   ];
  // },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   basePath: '/krm-2-test',
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;
