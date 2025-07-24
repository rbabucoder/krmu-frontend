import { StrapiMedia } from "./common";

export type TOPBARITEMS =
  | {
      __component: "menu.menu-button";
      id: number;
      title: string;
      url: string;
      class: string;
      type: string;
    }
  | {
      __component: "menu.menu-link";
      id: number;
      title: string;
      url: string;
    };

export interface TOPBARSOCIALLInks {
  id: string;
  url: string;
  socialicon: StrapiMedia;
}

export interface TOPBARResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    TopbarMenuItems: TOPBARITEMS[];
    topbarsociallinks: TOPBARSOCIALLInks[];
  };
}
