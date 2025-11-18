// /api/schools?fields[0]=schoolname&populate[school_category][fields][0]=name&populate[school_category][fields][1]=slug

import { FETCH_STRAPI_URL } from "@/app/constant";

export async function getAllSchoolsInfo() {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/schools?fields[0]=schoolname&populate[school_category][fields][0]=name&populate[school_category][fields][1]=slug`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch School Info");
  const json: AllSchoolsResponse = await res.json();
  return json.data;
}
export async function getAllDegreeInfo() {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/degrees?sort[0]=name:desc&fields[0]=name&fields[1]=slug`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch Degree Info");
  const json: DegreeResponse = await res.json();
  return json.data;
}

// Root response
export interface AllSchoolsResponse {
  data: SchoolItem[];
  meta: Meta;
}

// Each school item
export interface SchoolItem {
  id: number;
  documentId: string;
  schoolname: string;
  school_category: SchoolCategory;
}

// Nested category
export interface SchoolCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

// Meta & pagination
export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

///////////////////////// Degree Response

export interface DegreeResponse {
  data: ProgrammeLevel[];
  meta: Meta;
}

export interface ProgrammeLevel {
  id: number;
  documentId: string;
  name: string;
  slug: string;
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
