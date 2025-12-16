import { getIndustryConnectPage } from "@/lib/api/industry-connect";
import IndustryHero from "./comp/IndustryHero";
import IndustryPartenerships from "./comp/IndustryPartenerships";
import JapeneseCuisines from "./comp/JapeneseCuisines";
import ArtMuralEvent from "./comp/ArtMuralEvent";
import NetworkingOpportunities from "./comp/NetworkingOpportunities";
import ShapingCareer from "./comp/ShapingCareer";
import Seminar from "./comp/Seminar";
import IdeaForge from "./comp/IdeaForge";
import ExpertTalk from "./comp/ExpertTalk";
import DeputyCommissioner from "./comp/DeputyCommissioner";
import { industryConnectSEO } from "@/lib/api/website-seo";
import { Metadata } from "next";
import { STRAPI_URL } from "@/app/constant";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await industryConnectSEO();
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

const page = async () => {
  const getIndustryConnectPageData = await getIndustryConnectPage();

  return (
    <>
      {getIndustryConnectPageData && (
        <IndustryHero
          title={getIndustryConnectPageData?.title}
          desc={getIndustryConnectPageData?.description}
          bgImgURL={getIndustryConnectPageData?.bgimage?.url}
        />
      )}
      <IndustryPartenerships
        title={getIndustryConnectPageData?.partnerships_title}
        logos={getIndustryConnectPageData?.partnership_logos}
      />
      <JapeneseCuisines cuisine={getIndustryConnectPageData?.cuisines} />
      <ArtMuralEvent mural={getIndustryConnectPageData?.mural_event} />
      <NetworkingOpportunities
        netopp={getIndustryConnectPageData?.networking_opportunities}
      />
      <ShapingCareer shapcareer={getIndustryConnectPageData?.shaping_career} />
      <Seminar seminar={getIndustryConnectPageData?.seminar} />
      <IdeaForge forgeData={getIndustryConnectPageData?.idea_forge} />
      <ExpertTalk expertTalk={getIndustryConnectPageData?.expert_talk_role} />
      <DeputyCommissioner
        deput={getIndustryConnectPageData?.deputy_commissioner}
      />
    </>
  );
};

export default page;
