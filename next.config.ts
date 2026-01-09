import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        protocol: "https",
        hostname: "www.krmangalam.edu.in",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      // BTECH (ONLY C)
      {
        source: "/admission/btech-2025-c",
        destination: "https://admissionsopen.krmangalam.edu.in/btech-2025-c/",
        permanent: true,
      },
      {
        source: "/admission/btech-2025-c/",
        destination: "https://admissionsopen.krmangalam.edu.in/btech-2025-c/",
        permanent: true,
      },

      // Management & Law
      {
        source: "/admission/mba-2025",
        destination: "https://admissionsopen.krmangalam.edu.in/mba-2025/",
        permanent: true,
      },
      {
        source: "/admission/mba-2025/",
        destination: "https://admissionsopen.krmangalam.edu.in/mba-2025/",
        permanent: true,
      },
      {
        source: "/admission/law-2025",
        destination: "https://admissionsopen.krmangalam.edu.in/law-2025/",
        permanent: true,
      },
      {
        source: "/admission/law-2025/",
        destination: "https://admissionsopen.krmangalam.edu.in/law-2025/",
        permanent: true,
      },
      {
        source: "/admission/llm-2025",
        destination: "https://admissionsopen.krmangalam.edu.in/llm-2025/",
        permanent: true,
      },
      {
        source: "/admission/llm-2025/",
        destination: "https://admissionsopen.krmangalam.edu.in/llm-2025/",
        permanent: true,
      },

      // Science
      {
        source: "/admission/bsc-agriculture-2025",
        destination:
          "https://admissionsopen.krmangalam.edu.in/bsc-agriculture-2025/",
        permanent: true,
      },
      {
        source: "/admission/bsc-agriculture-2025/",
        destination:
          "https://admissionsopen.krmangalam.edu.in/bsc-agriculture-2025/",
        permanent: true,
      },
      {
        source: "/admission/bsc-cse-2025",
        destination: "https://admissionsopen.krmangalam.edu.in/bsc-cse-2025/",
        permanent: true,
      },
      {
        source: "/admission/bsc-cse-2025/",
        destination: "https://admissionsopen.krmangalam.edu.in/bsc-cse-2025/",
        permanent: true,
      },
      {
        source: "/admission/bsc-forensic-science-2025",
        destination:
          "https://admissionsopen.krmangalam.edu.in/bsc-forensic-science-2025/",
        permanent: true,
      },
      {
        source: "/admission/bsc-forensic-science-2025/",
        destination:
          "https://admissionsopen.krmangalam.edu.in/bsc-forensic-science-2025/",
        permanent: true,
      },
      {
        source: "/admission/bsc-2025",
        destination: "https://admissionsopen.krmangalam.edu.in/bsc-2025/",
        permanent: true,
      },
      {
        source: "/admission/bsc-2025/",
        destination: "https://admissionsopen.krmangalam.edu.in/bsc-2025/",
        permanent: true,
      },

      // Architecture & Design
      {
        source: "/admission/barch-2025",
        destination: "https://admissionsopen.krmangalam.edu.in/barch-2025/",
        permanent: true,
      },
      {
        source: "/admission/barch-2025/",
        destination: "https://admissionsopen.krmangalam.edu.in/barch-2025/",
        permanent: true,
      },
      {
        source: "/admission/bdesh-fashion-2025",
        destination:
          "https://admissionsopen.krmangalam.edu.in/bdesh-fashion-2025/",
        permanent: true,
      },
      {
        source: "/admission/bdesh-fashion-2025/",
        destination:
          "https://admissionsopen.krmangalam.edu.in/bdesh-fashion-2025/",
        permanent: true,
      },
      {
        source: "/admission/bdesh-game-2025",
        destination:
          "https://admissionsopen.krmangalam.edu.in/bdesh-game-2025/",
        permanent: true,
      },
      {
        source: "/admission/bdesh-game-2025/",
        destination:
          "https://admissionsopen.krmangalam.edu.in/bdesh-game-2025/",
        permanent: true,
      },
      {
        source: "/admission/bfa-2025",
        destination: "https://admissionsopen.krmangalam.edu.in/bfa-2025/",
        permanent: true,
      },
      {
        source: "/admission/bfa-2025/",
        destination: "https://admissionsopen.krmangalam.edu.in/bfa-2025/",
        permanent: true,
      },

      // Commerce
      {
        source: "/admission/bba-2025",
        destination: "https://admissionsopen.krmangalam.edu.in/bba-2025/",
        permanent: true,
      },
      {
        source: "/admission/bba-2025/",
        destination: "https://admissionsopen.krmangalam.edu.in/bba-2025/",
        permanent: true,
      },
      {
        source: "/admission/bcom-2025",
        destination: "https://admissionsopen.krmangalam.edu.in/bcom-2025/",
        permanent: true,
      },
      {
        source: "/admission/bcom-2025/",
        destination: "https://admissionsopen.krmangalam.edu.in/bcom-2025/",
        permanent: true,
      },

      // Health Sciences
      {
        source: "/admission/allied-health-science-2025",
        destination:
          "https://admissionsopen.krmangalam.edu.in/allied-health-science-2025/",
        permanent: true,
      },
      {
        source: "/admission/allied-health-science-2025/",
        destination:
          "https://admissionsopen.krmangalam.edu.in/allied-health-science-2025/",
        permanent: true,
      },
      {
        source: "/admission/pharmacy-2025",
        destination: "https://admissionsopen.krmangalam.edu.in/pharmacy-2025/",
        permanent: true,
      },
      {
        source: "/admission/pharmacy-2025/",
        destination: "https://admissionsopen.krmangalam.edu.in/pharmacy-2025/",
        permanent: true,
      },
      {
        source: "/admission/bpt-2025",
        destination: "https://admissionsopen.krmangalam.edu.in/bpt-2025/",
        permanent: true,
      },
      {
        source: "/admission/bpt-2025/",
        destination: "https://admissionsopen.krmangalam.edu.in/bpt-2025/",
        permanent: true,
      },

      // Doctoral & MCA
      {
        source: "/admission/phd-2025",
        destination: "https://admissionsopen.krmangalam.edu.in/phd-2025/",
        permanent: true,
      },
      {
        source: "/admission/phd-2025/",
        destination: "https://admissionsopen.krmangalam.edu.in/phd-2025/",
        permanent: true,
      },
      {
        source: "/admission/mca-2025",
        destination: "https://admissionsopen.krmangalam.edu.in/mca-2025/",
        permanent: true,
      },
      {
        source: "/admission/mca-2025/",
        destination: "https://admissionsopen.krmangalam.edu.in/mca-2025/",
        permanent: true,
      },

      // Brand
      {
        source: "/admission/brand",
        destination: "https://admissionsopen.krmangalam.edu.in/brand",
        permanent: true,
      },
      {
        source: "/admission/brand/",
        destination: "https://admissionsopen.krmangalam.edu.in/brand",
        permanent: true,
      },
      {
        source: "/admission/brand-2025",
        destination: "https://admissionsopen.krmangalam.edu.in/brand-2025",
        permanent: true,
      },
      {
        source: "/admission/brand-2025/",
        destination: "https://admissionsopen.krmangalam.edu.in/brand-2025",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // output: "export",
//   // assetPrefix: "/blog",
//   // basePath: "/blog",
//   // assetPrefix: "https://krmangalam.netlify.app",
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "1337",
//         pathname: "/uploads/**",
//       },
//       {
//         protocol: "https",
//         hostname: "truthful-cabbage-82fd27e8f6.media.strapiapp.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "www.krmangalam.edu.in",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   basePath: '/krm-2-test',
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;
