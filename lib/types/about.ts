import { StrapiMedia } from "./common";

export interface Accreditation {
  id: number;
  title: string;
  accrediationlogos: StrapiMedia[];
}

export interface KRMUGroup {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  krmbranch: StrapiMedia[];
}

export interface HALLFAME {
  id: number;
  title: string;
  description: string;
}
export interface HALLOFFAME {
  id: number;
  title: string;
  hallfame: HALLFAME[];
}

export interface AboutKRMU {
  data: {
    id: number;
    documentId: string;
    title: string;
    subtitle: string;
    thenexgentitle: string;
    thenexgendescription: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    accrediation: Accreditation;
    krmugroup: KRMUGroup;
    halloffame: HALLOFFAME;
  };
  meta: unknown;
}
