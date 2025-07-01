export interface AchievementsData {
  id: number;
  value: string;
  content: string;
}

export interface WhyChoose {
  __component: "aboutwhychooseus-component.why-choose-us";
  id: string;
  badgeheading: string;
  titlebluetext: string;
  titlehighlighttext: string;
  beforehighlighttitletext: string;
  maindescription: string;
  beforetitlebluetext: string;
  achievementstitle: string;
  achievementsdescriptions: string;
  ourachievements: AchievementsData[];
  awardstitle: string;
}

export interface readybtn {
  id: number;
  buttontext: string;
  buttonlink: string;
  buttonclass: string;
}

// Individual component interfaces
export interface AdmissionProcess {
  __component: "admissionpage-components.admissionprocesscomponent";
  id: number;
  highlighttext: string;
  beforehighlight: string;
  badgetext: string;
  description: string;
  title2: string;
  descriptions2: string;
  needhelptext: string;
  needhelplink: string;
  needhelplinktext: string;
  readytobeginsbtns: readybtn[];
}

// Union type for components in the AdmissionPageComponent array
export type AdmissionPageComponent = AdmissionProcess | WhyChoose;

// Root response structure
export interface AdmissionPageResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    AdmissionPageComponent: AdmissionPageComponent[];
  };
  meta: unknown;
}
