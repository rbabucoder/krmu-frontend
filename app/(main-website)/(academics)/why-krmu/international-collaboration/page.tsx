import { getInternationCollabData } from "@/lib/api/international-collab";
import InternationalCollabCards from "./comp/InternationalCollabCards";
import InternationalCollabHero from "./comp/InternationalCollabHero";
import { STRAPI_URL } from "@/app/constant";
import { internationCollaborationSEO } from "@/lib/api/website-seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await internationCollaborationSEO();
  const seo = seoData?.seo;

  const shareImageUrl = seo?.shareImage?.url
    ? `${STRAPI_URL}${seo?.shareImage?.url}`
    : undefined;

  // ✅ Fallback if SEO is missing
  if (!seo) {
    return {
      title: "K.R. Mangalam University",
      description: "",
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  return {
    title: seo?.metaTitle || "K.R. Mangalam University",
    description: seo?.metaDescription || "",
    keywords: seo?.metaKeyword || "",
    alternates: {
      canonical: seo?.canonical || "",
    },
    robots: {
      index: true,
      follow: true,
    },

    // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
      title: seo?.metaTitle || "K.R. Mangalam University",
      description: seo?.metaDescription || "",
      url: seo?.canonical || "",
      siteName: "K.R. Mangalam University",
      images: shareImageUrl
        ? [
            {
              url: shareImageUrl,
              width: 1200,
              height: 630,
              alt: seo?.metaTitle || "K.R. Mangalam University",
            },
          ]
        : [],
      type: "website",
    },

    // ✅ Twitter Card
    twitter: {
      card: "summary_large_image",
      title: seo?.metaTitle || "K.R. Mangalam University",
      description: seo?.metaDescription || "",
      images: shareImageUrl ? [shareImageUrl] : [],
    },
  };
}
const page = async () => {
  const intCollabData = await getInternationCollabData();

  return (
    <>
      <InternationalCollabHero
        title={intCollabData?.title}
        desc={intCollabData?.desc}
        heroBtn={intCollabData?.int_collab_btn}
        heroGrid={intCollabData?.int_collab_hero_grid}
      />
      <InternationalCollabCards
        intCollabCard={intCollabData?.intcollab_card}
        intCollabFullWidthCard={intCollabData?.int_collab_full_width_card}
      />
    </>
  );
};

export default page;
