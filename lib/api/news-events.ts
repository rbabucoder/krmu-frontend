import { FETCH_STRAPI_URL } from "@/app/constant";
import { NewsEventsPageResponse } from "../types/news-events";

export async function getNewsEvents(): Promise<NewsEventsPageResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/news-event?fields[0]=main_heading&fields[1]=main_desc&status=published&locale[0]=en`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to News and Events Page Data");
  const json: NewsEventsPageResponse = await res.json();
  return json.data;
}

// {

// fields: ['main_heading', 'main_desc'],
// status: 'published',
// locale: ['en'],
// }

// export async function getAllNewsAndEvents(
//   page: number = 1,
//   pageSize: number = 10
// ): Promise<NewsEventsListResponse["data"]> {
//   const res = await fetch(
//     `${FETCH_STRAPI_URL}/api/news-and-events?sort[0]=title:asc&fields[0]=title&fields[1]=slug&populate[featured_img]=true&pagination[pageSize]=${pageSize}&pagination[page]=${page}&status=published&locale[0]=en`,
//     {
//       next: {
//         revalidate: 60,
//       },
//     }
//   );

//   if (!res.ok) throw new Error("Failed to fetch All news and events");
//   const json: NewsEventsListResponse = await res.json();
//   return json.data;
// }

export async function getAllNewsAndEventsWithMeta(
  page: number = 1,
  pageSize: number = 10
) {
  const res = await fetch(
    // `${FETCH_STRAPI_URL}/api/news-and-events?sort[0]=title:desc&fields[0]=title&fields[1]=slug&fields[2]=publishedAt&populate[featured_img]=true&pagination[pageSize]=${pageSize}&pagination[page]=${page}&status=published&locale[0]=en`,
    // `${FETCH_STRAPI_URL}/api/news-and-events?sort[0]=title:asc&fields[0]=title&fields[1]=slug&populate[newsmedia]=true&pagination[pageSize]=${pageSize}&pagination[page]=${page}&status=published&locale[0]=en`,
    `${FETCH_STRAPI_URL}/api/news-and-events?sort[0]=publishedAt:asc&fields[0]=title&fields[1]=slug&fields[2]=publishedAt&populate[newsmedia]=true&pagination[pageSize]=${pageSize}&pagination[page]=${page}&status=published&locale[0]=en`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch All news and events");
  return res.json(); // returns { data, meta }
}

// {
// sort: ['title:asc'],
// fields: ['title', 'slug'],
// populate: {
//   newsmedia: true
//    },

// pagination: {
//   pageSize: 2,
//   page: 1,
// },
// status: 'published',
// locale: ['en'],
// }
