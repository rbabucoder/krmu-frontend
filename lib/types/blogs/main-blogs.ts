// import { BlogFeaturedMedia } from "./single-blog";

export type MainBlogResponse = MainBlogs[];

export interface MainBlogs {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  featured_media: number;
  // _embedded: {
  //   "wp:featuredmedia"?: BlogFeaturedMedia[];
  // };
  excerpt: {
    rendered: string;
  };
}
