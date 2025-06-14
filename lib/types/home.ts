// Strapi media type
export interface StrapiMedia {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Hero section type
export interface HeroSectionComponent {
  __component: "homepage-components.hero-section";
  id: number;
  title: string;
  subtitle: string;
  HeroSectionVideo: StrapiMedia | null;
}

// Full page content union
export type PageComponent = HeroSectionComponent; // add other components as unions

// Home page response structure
export interface HomePageResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    PageContent: PageComponent[];
  };
  meta: unknown;
}
