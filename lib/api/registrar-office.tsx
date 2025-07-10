import { STRAPI_URL } from "@/app/constant";
import { RegistrarOffice } from "../types/registrar-office";

export async function getRegistrarOfficeData(): Promise<
  RegistrarOffice["data"]
> {
  const res = await fetch(
    `${STRAPI_URL}/api/registrar-office?populate[breadcrumb][fields][0]=breadcrumbtext&populate[breadcrumb][fields][1]=breadcrumbbgcolor&populate[breadcrumb][populate][backgroundimage]=true`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Registrar office Data");
  }
  const json: RegistrarOffice = await res.json();
  return json.data;
}
