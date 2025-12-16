import PedaHeroSection from "./comp/PedaHeroSection";
import PedaClassroom from "./comp/PedaClassroom";
import PedaLecture from "./comp/PedaLecture";
import PedaPracticals from "./comp/PedaPracticals";
import PedaInnovativeRelevant from "./comp/PedaInnovativeRelevant";
import PedaWorkshopSeminar from "./comp/PedaWorkshopSeminar";
import PedaTechnology from "./comp/PedaTechnology";
import PedaMockInterview from "./comp/PedaMockInterview";
import PedaIndustryConnect from "./comp/PedaIndustryConnect";
import PedaMentorProgramme from "./comp/PedaMentorProgramme";
import { getPedagogyContent } from "@/lib/api/pedagogy";
import { pedagogySEO } from "@/lib/api/website-seo";
import { Metadata } from "next";
import { STRAPI_URL } from "@/app/constant";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await pedagogySEO();
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
  const pedaData = await getPedagogyContent();

  const pedaHero = pedaData?.pedagogy_hero;
  const pedaClassroom = pedaData?.classroom_teaching;
  const pedaLectureData = pedaData?.lecture;
  const PedaPracticalsData = pedaData?.practicals;
  const pedaInnovData = pedaData?.innovative_work_lab;
  const workshopData = pedaData?.workshop_guest_lecture;
  const PedaTechnologyData = pedaData?.technology_enable_learning;
  const pedaMockData = pedaData?.mock_interview;
  const pedaMentorData = pedaData?.mentor_prog;
  const pedaIndusData = pedaData?.industry_connect;

  return (
    <>
      {pedaHero && (
        <PedaHeroSection
          title={pedaHero?.title}
          title2={pedaHero?.title2}
          desc={pedaHero?.description}
          content={pedaHero?.content}
          bgImg={pedaHero?.hero_bg?.url}
        />
      )}
      {pedaClassroom && (
        <PedaClassroom
          heading={pedaClassroom?.heading}
          desc={pedaClassroom?.desc}
        />
      )}
      {pedaLectureData && (
        <PedaLecture
          title={pedaLectureData?.title}
          content={pedaLectureData?.content}
          imgUrl={pedaLectureData?.peda_img?.url}
        />
      )}
      {PedaPracticalsData && (
        <PedaPracticals
          title={PedaPracticalsData?.title}
          content={PedaPracticalsData?.content}
          imgUrl={PedaPracticalsData?.peda_img?.url}
        />
      )}
      {pedaInnovData && (
        <PedaInnovativeRelevant
          title={pedaInnovData?.title}
          content={pedaInnovData?.content}
          imgUrl={pedaInnovData?.peda_img?.url}
        />
      )}
      {workshopData && (
        <PedaWorkshopSeminar
          title={workshopData?.title}
          content={workshopData?.content}
        />
      )}
      {PedaTechnologyData && (
        <PedaTechnology
          title={PedaTechnologyData?.title}
          content={PedaTechnologyData?.content}
          imgUrl={PedaTechnologyData?.peda_img?.url}
        />
      )}
      {pedaMockData && (
        <PedaMockInterview
          title={pedaMockData?.title}
          content={pedaMockData?.content}
          imgUrl={pedaMockData?.peda_img?.url}
        />
      )}
      {pedaMentorData && (
        <PedaMentorProgramme
          title={pedaMentorData?.title}
          content={pedaMentorData?.content}
          imgUrl={pedaMentorData?.peda_img?.url}
        />
      )}
      {pedaIndusData && (
        <PedaIndustryConnect
          title={pedaIndusData?.title}
          subheading={pedaIndusData?.subheading}
          industry_connect_content={pedaIndusData?.industry_connect_content}
          bgImgUrl={pedaIndusData?.bgimage?.url}
          imgUrl={pedaIndusData?.mob_indus_connect_img?.url}
        />
      )}
    </>
  );
};

export default page;
