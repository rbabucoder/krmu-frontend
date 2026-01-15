import { getNSSCommunityConnectData } from "@/lib/api/community-connect";
import CommunityConnectBenefitNss from "./comp/CommunityConnectBenefitNss";
import CommunityConnectHero from "./comp/CommunityConnectHero";
import CommunityConnectMagazine from "./comp/CommunityConnectMagazine";
import CommunityConnectMotto from "./comp/CommunityConnectMotto";
import CommunityConnectNationalService from "./comp/CommunityConnectNationalService";
import CommunityConnectNSSAward from "./comp/CommunityConnectNSSAward";
import CommunityConnectNSSCommittee from "./comp/CommunityConnectNSSCommittee";
import CommunityConnectNSSJoin from "./comp/CommunityConnectNSSJoin";
import CommunityConnectImgGrid from "./comp/CommunityConnectImgGrid";



import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";




export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("community-connect");
  const seo = seoData[0];

  const shareImageUrl = seo?.shareImg?.url
    ? `${STRAPI_URL}${seo?.shareImg?.url}`
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
    title: seo?.title || "K.R. Mangalam University",
    description: seo?.metaDescription || "",
    keywords: seo?.keyword || "",
    alternates: {
      canonical: seo?.canonicalUrl || "",
    },
    robots: {
      index: seo?.index === false,
      follow: true,
    },

    // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
      title: seo?.title || "K.R. Mangalam University",
      description: seo?.metaDescription || "",
      url: seo?.canonicalUrl || "",
      siteName: "K.R. Mangalam University",
      images: shareImageUrl
        ? [
            {
              url: shareImageUrl,
              width: 1200,
              height: 630,
              alt: seo?.title || "K.R. Mangalam University",
            },
          ]
        : [],
      type: "website",
    },

    // ✅ Twitter Card
    twitter: {
      card: "summary_large_image",
      title: seo?.title || "K.R. Mangalam University",
      description: seo?.metaDescription || "",
      images: shareImageUrl ? [shareImageUrl] : [],
    },
  };
}

const page = async () => {
  const NSSCommunityConnectData = await getNSSCommunityConnectData();

  const imgGridData = NSSCommunityConnectData?.nss_connect_connect_img_grid;

  return (
    <>
      <CommunityConnectHero />
      <CommunityConnectMotto />
      <CommunityConnectNationalService />
      <CommunityConnectMagazine />
      <CommunityConnectBenefitNss />
      <CommunityConnectNSSCommittee />
      <CommunityConnectNSSJoin />
      <CommunityConnectImgGrid data={imgGridData} />
      <CommunityConnectNSSAward />
    </>
  );
};

export default page;
