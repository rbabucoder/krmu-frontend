import { BREADCRUMB } from "./common";

export interface RegistrarOffice {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    breadcrumb: BREADCRUMB;
  };
}
