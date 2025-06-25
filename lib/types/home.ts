import { CounterItem } from "./common";

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

// Hero section type
export interface HeroSectionComponent {
  __component: "homepage-components.hero-section";
  id: number;
  title: string;
  subtitle: string;
  HeroSectionVideo: StrapiMedia | null;
}

// A-decade section subcomponent
export interface ADecadeLeftCol {
  id: number;
  adecadetitle: string;
  adecadesubtitle: string;
  adecadedescription: string;
  button1text: string;
  button1link: string;
  button2text: string;
  button2link: string;
}
export interface ADecadeRightCol {
  id: number;
  counter1text: string;
  counter1content: string;
  counter2text: string;
  counter2content: string;
  counter3text: string;
  counter3content: string;
  counter4text: string;
  counter4content: string;
}
// A-decade section main component
export interface ADecadeSectionComponent {
  __component: "homepage-components.a-decade-section";
  id: number;
  adecadeleftcol: ADecadeLeftCol;
  adecaderightcol: ADecadeRightCol;
}

export interface Button {
  id: number;
  buttontext: string;
  buttonlink: string;
  buttonclass: string;
}

export interface YourJourneyComponent {
  __component: "homepage-components.yourjourney";
  id: number;
  title: string;
  description: string;
  button: Button[];
}

export interface afsMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: unknown; // You can define this further if formats structure is known
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown;
  createdAt: string; // ISO date string
  updatedAt: string;
  publishedAt: string;
}

export interface AFSComponent {
  __component: "homepage-components.afs-section";
  afs1content: string;
  afs2content: string;
  afs3content: string;
  afsimage1: afsMedia;
  afsimage2: afsMedia;
  afsimage3: afsMedia;
}

export interface OurTopRecruitComp {
  __component: "homepage-components.our-top-recruiters";
  id: number;
  counter: CounterItem[];
  logos: StrapiMedia[];
}

// Full page content union
export type PageComponent =
  | HeroSectionComponent
  | ADecadeSectionComponent
  | YourJourneyComponent
  | AFSComponent
  | OurTopRecruitComp;

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
