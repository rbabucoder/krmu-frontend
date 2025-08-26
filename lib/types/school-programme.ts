import { ParagraphBlock } from "./about";
import { ButtonType, StrapiMedia } from "./common";

export interface SchoolProgrammeResponse {
  data: Programme[];
  meta: {
    pagination: Pagination;
  };
}

export interface ProgrammeScopeType {
  id: number;
  scopeheading: string;
  scopecontent: string;
  scopeimg: StrapiMedia;
  scopebtn: ButtonType;
}

export interface HiglightCard {
  id: number;
  title: string;
  subtitle: string;
  highlightimage: StrapiMedia;
}

export interface ProgrammeHighlight {
  id: number;
  heading: string;
  highlightheading: string;
  subheading: string;
  programmehighlightcards: HiglightCard[];
}

export interface SpecialisationCard {
  id: number;
  title: string;
  specialisationimg: StrapiMedia;
  link: string;
}

export interface Specialisation {
  id: number;
  highlightheading: string;
  heading: string;
  specialisationcards: SpecialisationCard[];
}

export interface AdmisionProcessCard {
  id: number;
  title: string;
  description: string;
  mobcounting: string;
}

export interface AdmissionProcess {
  id: number;
  heading: string;
  highlightheading: string;
  description: string;
  admissionprocesscard: AdmisionProcessCard[];
  desktopadmissionprocessimg: StrapiMedia;
}
export interface Subject {
  id: number;
  subjectname: string;
}

export interface Semester {
  id: number;
  semestername: string;
  subjects: Subject[];
  pdfbtns?: ButtonType[];
}

export interface Year {
  id: number;
  year: string;
  semester: Semester[];
}

export interface Curriculum {
  id: number;
  highlightheading: string;
  heading: string;
  description: string;
  years: Year[];
}

export interface LabCard {
  id: number;
  title: string;
  description: string;
}

export interface LabsFacilities {
  id: number;
  heading: string;
  highlightheading: string;
  labscontent: ParagraphBlock[]; // replace 'any' with a proper type if you know the structure
  labsimage: StrapiMedia; // replace 'any' with proper type if available
  labbtn: ButtonType; // replace 'any' with proper type if available
  labcards: LabCard[];
}

export interface BeyondClassroom {
  id: number;
  heading: string;
  highlightheading: string;
  description: string;
  beyondclassroomimages: StrapiMedia[];
}

export interface CareerCard {
  id: number;
  num: string;
  title: string;
  description: string;
}

export interface Career {
  id: number;
  heading: string;
  highlightheading: string;
  description: string;
  careerimg: StrapiMedia;
  careerbtn: ButtonType;
  careercards: CareerCard[];
}

export interface DreamCareer {
  id: number;
  heading: string;
  description: string;
  highestpackagenum: string;
  highestpackagetitle: string;
  campusrecruitersnum: string;
  campusrecruitertitle: string;
  placementassistnum: string;
  placementassisttitle: string;
  careerlogos: StrapiMedia[];
}

export interface FinancialAssistance {
  id: number;
  heading: string;
  highlightheading: string;
  description: string;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
  point5: string;
  point6: string;
  point7: string;
  financelogos: StrapiMedia[];
}

export interface FAQ {
  id: number;
  ques: string;
  ans: string;
}

export interface TOCFAQ {
  id: number;
  tocpoint: string;
  faq: FAQ[];
}

export interface TOC {
  id: number;
  heading: string;
  highlightheading: string;
  description: string;
  tocfaq: TOCFAQ[];
}

export interface OurLocation {
  id: number;
  badgetext: string;
  heading: string;
  img1: StrapiMedia;
  img2: StrapiMedia;
}

export interface Programme {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  programmeslug: string;
  highlightitle: string;
  school_categories?: SchoolCategory[]; // optional if missing sometimes
  herosection?: HeroSection; // optional (your JSON had {})
  programmeeligibility?: ProgrammeEligibility;
  programmescope?: ProgrammeScopeType;
  programmehighlight?: ProgrammeHighlight;
  specialisation?: Specialisation;
  admissionprocess?: AdmissionProcess;
  curriculum?: Curriculum;
  labsfacilities?: LabsFacilities;
  beyondclassroom?: BeyondClassroom;
  career?: Career;
  dreamcareer?: DreamCareer;
  financialassistance: FinancialAssistance;
  toc?: TOC;
  ourlocation: OurLocation;
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

export interface HeroSection {
  id: number;
  subtitle: string;
  description: string;
  herobtn: ButtonType;
  heroimg: StrapiMedia;
}

export interface ProgrammeEligibility {
  id: number;
  elgibility: EligibilityItem[]; // keep typo as per API
  mobherobtn: ButtonType;
}

export interface EligibilityItem {
  id: number;
  title: string;
  subtitle: string;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
