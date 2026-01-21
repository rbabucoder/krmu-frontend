import type { Metadata } from "next";

export type BlogOgImage = {
  width: number;
  height: number;
  url: string;
  type: string;
};

export type BlogRobot = {
  index: string;
  follow: string;
};

export type YoastHeadJson = {
  title: string;
  description: string;
  robots: BlogRobot;
  canonical: string;
  og_image: BlogOgImage[];
};

const removeTrailingSlash = (url: string) =>
  url.endsWith("/") ? url.slice(0, -1) : url;
export function yoastToMetadata(yoast: YoastHeadJson): Metadata {
  const canonical = removeTrailingSlash(yoast.canonical);
  return {
    title: yoast.title,
    description: yoast.description,

    alternates: {
      canonical: canonical,
    },

    robots: {
      index: yoast.robots.index === "index",
      follow: yoast.robots.follow === "follow",
    },

    openGraph: {
      title: yoast.title,
      description: yoast.description,
      url: yoast.canonical,
      images: yoast.og_image?.map((img) => ({
        url: img.url,
        width: img.width,
        height: img.height,
        type: img.type,
      })),
    },
  };
}
