import { getDeansHonorsData } from "@/lib/api/dean-honors";
import DeanHonorHero from "./comp/DeanHonorHero";
import DeanHonorSemAcc from "./comp/DeanHonorSemAcc";
import { deanHonorsListSEO } from "@/lib/api/website-seo";
import { Metadata } from "next";
import { STRAPI_URL } from "@/app/constant";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await deanHonorsListSEO();
  const seo = seoData?.seo;

  const shareImageUrl = seo?.shareImage?.url
    ? `${STRAPI_URL}${seo?.shareImage?.url}`
    : undefined;

  return {
    title: seo?.metaTitle || "K.R. Mangalam University",
    description: seo?.metaDescription || "",
    keywords: seo?.metaKeyword || "",
    alternates: {
      canonical: seo?.canonical || "",
    },
    robots: {
      index: seo?.noIndex === false,
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
  const deanHonorsData = await getDeansHonorsData();

  return (
    <>
      <DeanHonorHero
        title={deanHonorsData?.title}
        bgImageUrl={deanHonorsData?.herobg?.url}
      />
      <DeanHonorSemAcc deanAccData={deanHonorsData?.dean_honor_acc} />
    </>
  );
};

export default page;
