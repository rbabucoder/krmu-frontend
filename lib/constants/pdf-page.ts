import { FETCH_STRAPI_URL } from "@/app/constant";

export async function getPDFPageData(
  slug: string = "phd-submission-checklist"
): Promise<PDFPageResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/pdfs?filters[slug][$eq]=${slug}&populate[pdf_content_card][fields][0]=content&populate[pdf_content_card][populate][pdf_btn][fields][0]=btn_text&populate[pdf_content_card][populate][pdf_btn][fields][1]=btn_link`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch pdf page data");
  const json = await res.json();
  return json.data;
}

export interface PDFPageResponse {
  data: Item[];
  meta: Meta;
}

export interface Item {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  pdf_content_card: PdfContentCard[];
}

export interface PdfContentCard {
  id: number;
  content: string;
  pdf_btn: PdfButton;
}

export interface PdfButton {
  id: number;
  btn_text: string;
  btn_link: string;
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
//     $eq: 'phd-submission-checklist',
//   },
// },
//  populate: {
//    pdf_content_card : {
//      fields: ['content'],
//      populate: {
//        pdf_btn: {
//          fields: ['btn_text', 'btn_link']
//        }
//      }
//    }
//  }
// }
