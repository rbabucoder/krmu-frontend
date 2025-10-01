import { FETCH_STRAPI_URL } from "@/app/constant";
import { NewsAndEventResponse } from "../types/news-and-events";

export async function getSingleNewsAndEvents(
  newsandeventsslug: string = "international-yoga-day"
): Promise<NewsAndEventResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/news-and-events?filters[slug][$eq]=${newsandeventsslug}&populate[bgimg][populate]=*&populate[newsmedia][populate]=*`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) throw new Error("Do not fetch Single News and Events");
  const json: NewsAndEventResponse = await res.json();
  return json.data;
}



// {
// filters: {
//   slug: {
//     $eq: 'international-yoga-day',
//   },
// },
// populate: {
//   bgimg: { populate: '*' },
//   newsmedia:{
//     populate:'*' 
//   } 
// },

// }