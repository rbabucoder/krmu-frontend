import type { NextConfig } from "next";

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
    ],
  },

  async redirects() {
    return [
      {
        source: "/valuable-industry-interface-at-krmu/",
        destination: "/blog/valuable-industry-interface-at-krmu/",
        permanent: true, // 301
      },
    ];
  },
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