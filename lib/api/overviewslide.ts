import { FETCH_STRAPI_URL } from "@/app/constant";
import { ListBlock, ParagraphBlock } from "../types/about";

export async function getOverviewEvents(): Promise<NewsListResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/news-and-events?sort[0]=title:asc&populate[newsmedia][fields][0]=url&fields[0]=title&fields[1]=slug&pagination[pageSize]=30&pagination[page]=1`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch events");
  const json = await res.json();
  return json.data;
}

export type NewsMedia = {
  id: number;
  documentId: string;
  url: string;
};

export type NewsItem = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: ParagraphBlock[] | ListBlock[];
  newsmedia: NewsMedia[];
};

export type NewsListResponse = {
  data: NewsItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

// {
// sort: ['title:asc'],

// populate: {
//   newsmedia: {
//     fields: ['url']
//   }
// },
// fields: ['title', 'slug'],
// pagination: {
//   pageSize: 30,
//   page: 1,
// },

// }
