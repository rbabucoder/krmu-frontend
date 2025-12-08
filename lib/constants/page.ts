import { FETCH_STRAPI_URL } from "@/app/constant";

export async function getCustomPageData(
  slug: string = ""
): Promise<CustomPageResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/pages?filters[slug][$eq]=${slug}&populate[fields][0]=title&populate[fields][1]=maincontent&populate[fields][2]=custom_page_css&populate[fields][3]=custom_page_js&populate[seo][populate]=*`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Custom page data");
  const json = await res.json();
  return json.data;
}

export interface CustomPageResponse {
  data: PageData[];
  meta: Meta;
}

export interface PageData {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  maincontent: string | null;
  custom_page_css: string | null;
  custom_page_js: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seo: Seo;
}

export interface Seo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  canonical: string | null;
  metaKeyword: string | null;
  noIndex: boolean;
  tags: string | null;
  shareImage: string | null;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// {

// filters: {
//   slug: {
//     $eq: 'my-slug',
//   },
// },
//  populate: {
//     fields: ['title', 'maincontent', 'custom_page_css', 'custom_page_js'],
//     seo: {
//       populate: '*'
//     }
//  }
// }
