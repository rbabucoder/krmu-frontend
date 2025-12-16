import { getNoticePageData } from "@/lib/api/notice";
import NoticeHero from "./comp/NoticeHero";
import NoticePDF from "./comp/NoticePDF";
import { Metadata } from "next";
import { noticeSEO } from "@/lib/api/website-seo";
import { STRAPI_URL } from "@/app/constant";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await noticeSEO();
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
  const noticePage = await getNoticePageData();

  return (
    <>
      <NoticeHero
        title={noticePage?.title}
        bgimageUrl={noticePage?.bgimage?.url}
      />
      <NoticePDF noticePDFS={noticePage?.noticepdfs} />
    </>
  );
};

export default page;
