import { ListBlock, ParagraphBlock } from "./about";
import { common_btn, StrapiMedia } from "./common";

export interface Duration {
  id: number;
  countertext: string;
  countercontent: string;
}

export interface FeePerYear {
  id: number;
  countertext: string;
  countercontent: string;
}

export interface EligibilityCriteria {
  id: number;
  countertext: string;
  countercontent: string;
}

export interface PHDOverview {
  id: number;
  title: string;
  desc: ParagraphBlock[] | ListBlock[];
  overviewimage: StrapiMedia;
}

export interface SchoolSponsoredPartTime {
  id: number;
  title1: string;
  desc1: string;
  title2: string;
  desc2: string;
  title3: string;
  desc3: string;
  scholarshipimg: StrapiMedia;
}

export interface DreamCounter {
  id: number;
  countertext: string;
  countercontent: string;
}

export interface ConnectingTalent {
  id: number;
  title: string;
  desc: ParagraphBlock[];
  dreamimg: StrapiMedia;
  dreamcounter: DreamCounter[];
}

export interface CareerPointer {
  id: number;
  listtext: string;
  listlink: string;
  listicon: StrapiMedia;
}

export interface PHDTestimonial {
  id: number;
  countertext: string;
  countercontent: string;
}

export interface CareerOptions {
  id: number;
  title: string;
  desc: string;
  testimonialheading: string;
  careerpointers: CareerPointer[];
  testimonials: PHDTestimonial[];
}
export interface PHDOutcomeType {
  id: number;
  phdoutcome: ParagraphBlock[];
}

export interface Outcome {
  id: number;
  outcomedesc: ParagraphBlock[];
}

export interface PHDOutcome {
  id: number;
  title: string;
  phdoutcome: Outcome[];
}
export interface ProgrammeHighlight {
  id: number;
  heading: string;
  phdcontent: ParagraphBlock[];
  bgimage: StrapiMedia;
}

export interface AdmissionSelect {
  title1: ParagraphBlock[];
  title2: ParagraphBlock[];
  desc1: ParagraphBlock[];
  desc2: ParagraphBlock[];
}

export interface Pursue {
  id: number;
  title: string;
  pursue: ParagraphBlock[];
  bgimage: StrapiMedia;
}

// export interface Degree {
//   id: number;
//   documentId: string;
//   name: string;
//   slug: string;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
// }

export interface PHDFAQs {
  id: number;
  ques: string;
  ans: string;
}

export interface PHDProgrammeData {
  id: number;
  documentId: string;
  heading: string;
  formfield: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  bgimg: StrapiMedia;
  duration: Duration;
  fee_per_year: FeePerYear;
  eligibility_criteria: EligibilityCriteria;
  phdoverview: PHDOverview;
  scholarsponsoredparttime: SchoolSponsoredPartTime;
  connectingtalent: ConnectingTalent;
  phdlogoslide: StrapiMedia[];
  careeroptions: CareerOptions;
  phdoutcome: PHDOutcome;
  programmehighlight: ProgrammeHighlight;
  phdadmissionselect: AdmissionSelect;
  pursue: Pursue;
  phdslug: string;
  degree: string;
  phdfaqtitle: string;
  phdprogrammefaq: PHDFAQs[];
  commence_journey: CommenceJourney;
}

export interface CommenceJourney {
  id: number;
  heading: string;
  highlight_heading: string;
  bgimg: {
    id: number;
    documentId: string;
    url: string;
  };
  commence_btn: common_btn;
}

export interface PHDProgrammeResponse {
  data: PHDProgrammeData[] | undefined;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
