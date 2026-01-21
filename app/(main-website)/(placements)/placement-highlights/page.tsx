import { STRAPI_URL } from "@/app/constant";
import { getPlacementHighlightData } from "@/lib/api/placement-highlight";

import Image from "next/image";





import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";




export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("placementhighlights");
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
  const placementHighlightData = await getPlacementHighlightData();
  const heading = placementHighlightData?.heading;
  const placementImgs = placementHighlightData?.placement_highlight_img;

  return (
    <>
      <section className="pt-20 md:pt-[15%] pb-[10%] bg-[url(/placements/placement_banner.webp)] common-overlay">
        <div className="max-w-[1664px] mx-auto w-full">
          <h1 className="text-3xl md:text-5xl text-white text-center font-bold z-10 relative">
            {heading}
          </h1>
        </div>
      </section>
      <section className="py-[50px] px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-8">
            {placementImgs.map((img, i) => {
              return (
                <div
                  key={i}
                  className="w-full flex items-center justify-center"
                >
                  <Image
                    src={`${STRAPI_URL}${img?.url}`}
                    width={377}
                    height={377}
                    alt={img?.alternativeText || ""}
                    className="border border-black"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
