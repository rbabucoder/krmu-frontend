export interface CounterItem {
  id: number;
  countertext: string;
  countercontent: string;
}

export interface ButtonType {
  id: number;
  buttontext: string;
  buttonlink: string;
  buttonclass: string;
}
export interface BREADCRUMB {
  id: number;
  breadcrumbtext: string;
  backgroundimage: StrapiMedia;
  breadcrumbbgcolor: string;
}

// Strapi media type
export interface StrapiMedia {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: unknown | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}






export interface CardWithoutImage {
  id: number;
  title: string;
  description: string;
}

export interface CardWithImage {
  id: number;
  title: string;
  cardimg: StrapiMedia;
  cardclass: string;
  cardcontent: string;
}

export interface Alumni {
  id: number;
  documentId: string;
  name: string;
  designation: string;
  alumnicontent: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  alumnimedia: StrapiMedia;
}

export interface CommonMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface AlumniApiResponse {
  data: Alumni[];
  meta: CommonMeta;
}

export interface Facility {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  badgetext: string;
  description: string;
  link: string;
  bgimg: StrapiMedia;
}
export interface FacilityAPIResponse {
  data: Facility[];
  meta: CommonMeta;
}

export interface StudentAchievementResponse {
  data: StudentAchievement[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StudentAchievement {
  id: number;
  documentId: string;
  achievementcontent: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  achivementimage: StrapiMedia[];
  school_category: SchoolCategory;
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes?: number;
  url: string;
}

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

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number; // KB
  sizeInBytes?: number; // optional to avoid TS conflicts
  url: string;
}

export interface ImageFormats {
  thumbnail?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
}

export interface SchoolHeroBanner {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  url?: string; // Strapi sometimes includes this at root
}



