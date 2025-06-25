export interface CounterItem{
    id: number;
    countertext: string;
    countercontent: string;
}

export interface ButtonType{
  id: number;
  buttontext: string;
  buttonlink: string;
  buttonclass: string;
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
