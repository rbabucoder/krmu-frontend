import { STRAPI_URL } from "@/app/constant";
import HelpDesk from "./comp/HelpDesk";
import OnlineFee from "./comp/OnlineFee";
import PaymentProcedureFAQ from "./comp/PaymentProcedureFAQ";
import PaymentProcedureHero from "./comp/PaymentProcedureHero";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { Metadata } from "next";



export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("payment-procedure");
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

const page = () => {
  return (
    <>
      <PaymentProcedureHero />
      <OnlineFee />
      <PaymentProcedureFAQ />
      <HelpDesk />
    </>
  );
};

export default page;
