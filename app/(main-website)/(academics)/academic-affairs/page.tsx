import AcademicHero from "./comp/AcademicHero";
import WelcomeDean from "./comp/WelcomeDean";
import TeamBehind from "./comp/TeamBehind";
import NEP from "./comp/NEP";
import InnovativeTeaching from "./comp/InnovativeTeaching";
import AcademicPolicies from "./comp/AcademicPolicies";
import NurturingSuccess from "./comp/NurturingSuccess";
import AcademicSlide from "./comp/AcademicSlide";
import Assist from "./comp/Assist";
import { STRAPI_URL } from "@/app/constant";
import { academicAffairsSEO } from "@/lib/api/website-seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await academicAffairsSEO();
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

const page = () => {
  return (
    <>
      <AcademicHero />
      <WelcomeDean />
      <TeamBehind />
      <NEP />
      <InnovativeTeaching />
      <AcademicPolicies />
      <NurturingSuccess />
      <AcademicSlide />
      <Assist />
    </>
  );
};

export default page;
