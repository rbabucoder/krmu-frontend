import { ParagraphBlock } from "./about";
import { StrapiMedia } from "./common";
import { Button } from "./home";

export interface SchoolCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface SchoolComps {
  __component: "schoolcomponent.knowledge";
  id: number;
  heading: string;
  subheading: string;
  description: ParagraphBlock[];
}

export interface School {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  schoolname: string;
  subheading: string;
  urlslug: string;
  herobutton: Button[];
  school_category: SchoolCategory;
  videoformat: string;
  iframe: string;
  videolink: string;
  admissionsessiontitle: string;
  admissionbtn: Button;
  schoolcomps: SchoolComps[];
  alumnititle: string;
  alumnilogo: StrapiMedia[];
}

export interface SchoolsResponse {
  data: School[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
