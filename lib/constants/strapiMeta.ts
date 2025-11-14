import type { Metadata } from "next";
import { BlogSEO } from "../types/blogs/main-blogs";

export function strapiSeoToMetadata(seo: BlogSEO): Metadata {
  return {
    title: seo.metaTitle ?? "",
    description: seo.metaDescription ?? "",
    keywords: seo.metaKeyword ?? "",

    alternates: {
      canonical: seo.canonical ?? "",
    },

    robots: {
      index: !seo.noIndex,
      follow: true,
    },

    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url: seo.canonical ?? "",
      images: seo.shareImage
        ? [
            {
              url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${seo.shareImage.url}`,
            },
          ]
        : [],
    },
  };
}
