import React from "react";
import NewsEventsHero from "../comp/NewsEventsHero"; 
import NewsEventsImageContent from "../comp/NewsEventsImageContent";
import { getSingleNewsAndEvents } from "@/lib/api/single-news-events";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params; // ✅ await params

  const singleNewsAndEventsData = await getSingleNewsAndEvents(slug);

  const singleNewsEvents = singleNewsAndEventsData.find(
    (items) => items.slug === slug
  );

  // Return 404 if either is missing
  if (!singleNewsEvents) {
    return notFound();
  }

  return (
    <>
      {singleNewsEvents && (
        <NewsEventsHero
          title={singleNewsEvents?.title}
          bgimage={singleNewsEvents?.bgimg}
        />
      )}
      {singleNewsEvents && (
        <NewsEventsImageContent
          content={singleNewsEvents?.content}
          bgSlide={singleNewsEvents?.newsmedia}
        />
      )}
    </>
  );
};

export default page;
