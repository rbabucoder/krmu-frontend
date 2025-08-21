import { ListItemBlock, ParagraphBlock } from "./about";
import {
  ButtonType,
  CardWithImage,
  CounterItem,
  SchoolHeroBanner,
  StrapiMedia,
} from "./common";
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
  counter: CounterItem[];
}

export interface CollabCards {
  id: number;
  cardContent: ParagraphBlock[] | ListItemBlock[];
  cardimg: StrapiMedia;
}

export interface ListItem {
  id: number;
  listtext: string;
  listlink: null | string;
}

export interface SchoolList {
  id: number;
  listheading: string | null;
  listsitems: ListItem[];
}

export interface SchoolTestimonials {
  id: number;
  name: string;
  education: string;
  info: string;
  userimg: StrapiMedia;
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
  excitedtitle: string;
  exciteddescription: string;
  excitedbtns: ButtonType[];
  newslettertitle: string;
  newsletterdesc: string;
  newsletterbtns: ButtonType[];
  advantagetitle: string;
  advantagedesc: string;
  advantagesubtitle: string;
  advantagimg: StrapiMedia;
  advantageCards: CardWithImage[];
  induscollabtitle: ParagraphBlock[];
  collabcards: CollabCards[];
  letsexplorecontent: ParagraphBlock[];
  listitem1: SchoolList;
  listitem2: SchoolList;
  listitem3: SchoolList;
  coetitle1: string;
  coetitle2: string;
  coebtn1: ButtonType;
  coebtn2: ButtonType;
  knowledgetitle: string;
  knowledgepartenerlogos: StrapiMedia[];
  tetimonialtitle: string;
  testimonialdesc: string;
  testimonials: SchoolTestimonials[];
  deanvisionsubtitle: string;
  deanvisiontitle: string;
  deancontent: ParagraphBlock[];
  deansname: string;
  deanemail: string;
  deandesignation: string;
  eventstitle: string;
  eventsdesc: string;
  eventsbtn: ButtonType;
  studentachievementtitle: string;
  studentachievementsbtn: Button;
  schoolherobanner: SchoolHeroBanner;
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
