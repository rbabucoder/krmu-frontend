import { ParagraphBlock } from "./about";
import { StrapiMedia } from "./common";

export interface NewsAndEventItem {
  id: number;
  documentId: string;
  title: string;
  content: ParagraphBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  newsmedia: StrapiMedia[];
}

export interface NEWSANDEVENTSResponse {
  data: NewsAndEventItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
