import { StrapiMedia } from "../common";

export interface SingleBlogComponent {
  __component: "blog.single-blog-component";
  id: number;
  single_blog_content: string; // HTML string from Strapi Rich Text
  faqs: FAQS[];
}

export interface FAQS {
  id: number;
  ques: string;
  answer: string;
}

export interface Blog {
  id: number;
  documentId: string;
  title?: string;
  blog_slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featured_image?: StrapiMedia;
  single_blog: SingleBlogComponent[];
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface BlogResponse {
  data: Blog[];
  meta: {
    pagination: Pagination;
  };
}
