import { getExaminationPageData } from "@/lib/api/examination";
import ExaminationABCDigilocker from "./comp/ExaminationABCDigilocker";
import ExaminationDownload from "./comp/ExaminationDownload";
import ExaminationFAQ from "./comp/ExaminationFAQ";
import ExaminationHero from "./comp/ExaminationHero";
import ExaminationApplyOnline from "./comp/ExaminationApplyOnline";
import { examinationSEO } from "@/lib/api/website-seo";
import { Metadata } from "next";
import { STRAPI_URL } from "@/app/constant";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await examinationSEO();
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
  const examinationData = await getExaminationPageData();

  return (
    <>
      {examinationData?.examination_hero && (
        <ExaminationHero
          title={examinationData?.examination_hero?.title}
          bgImgUrl={examinationData?.examination_hero?.bgimg?.url}
        />
      )}
      {examinationData?.imp_download && (
        <ExaminationDownload
          heading={examinationData?.imp_download?.heading}
          downloadCards={examinationData?.imp_download?.imp_download_card}
        />
      )}
      {examinationData?.abc_nad_digilocker && (
        <ExaminationABCDigilocker
          heading={examinationData?.abc_nad_digilocker?.heading}
          url={examinationData?.abc_nad_digilocker?.url}
          btns={examinationData?.abc_nad_digilocker?.abc_nad_btns}
        />
      )}
      {examinationData?.apply_online && (
        <ExaminationApplyOnline
          applyContent={examinationData?.apply_online?.apply_online_content}
        />
      )}
      {examinationData?.examination_faq && (
        <ExaminationFAQ
          heading={examinationData?.examination_faq?.heading}
          faqs={examinationData?.examination_faq?.faq_accordion}
        />
      )}
    </>
  );
};

export default page;
