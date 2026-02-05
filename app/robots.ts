import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/wp-admin", "/api", "/feed", "/tag"],
      },
    ],
    sitemap: "https://www.krmangalam.edu.in/sitemap.xml",
  };
}
