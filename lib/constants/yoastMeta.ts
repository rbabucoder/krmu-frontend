import type { Metadata } from "next";

/* ================= Types ================= */

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

type FaqItem = {
  question: string;
  answer: string;
};

/* ================= FAQ Schema Builder ================= */

function buildFaqSchema(faqs?: FaqItem[]) {
  if (!faqs || !faqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/\r?\n|\r/g, "").trim(),
      },
    })),
  };
}

/* ================= Yoast → Next Metadata ================= */

export function yoastToMetadata(
  yoast: YoastHeadJson,
  faqs?: FaqItem[],
): Metadata {
  const faqSchema = buildFaqSchema(faqs);

  return {
    title: yoast.title,
    description: yoast.description,

    alternates: {
      canonical: yoast.canonical,
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

    other: faqSchema
      ? {
          "application/ld+json": JSON.stringify(faqSchema),
        }
      : undefined,
  };
}
// import type { Metadata } from "next";

// export type BlogOgImage = {
//   width: number;
//   height: number;
//   url: string;
//   type: string;
// };

// export type BlogRobot = {
//   index: string;
//   follow: string;
// };

// export type YoastHeadJson = {
//   title: string;
//   description: string;
//   robots: BlogRobot;
//   canonical: string;
//   og_image: BlogOgImage[];
// };

// export function yoastToMetadata(yoast: YoastHeadJson): Metadata {
//   return {
//     title: yoast.title,
//     description: yoast.description,

//     alternates: {
//       canonical: yoast.canonical,
//     },

//     robots: {
//       index: yoast.robots.index === "index",
//       follow: yoast.robots.follow === "follow",
//     },

//     openGraph: {
//       title: yoast.title,
//       description: yoast.description,
//       url: yoast.canonical,
//       images: yoast.og_image?.map((img) => ({
//         url: img.url,
//         width: img.width,
//         height: img.height,
//         type: img.type,
//       })),
//     },
//   };
// }
