import { STRAPI_URL } from "@/app/constant";
import { AlumniApiResponse, FacilityAPIResponse } from "../types/common";

export async function getAlumniData(): Promise<AlumniApiResponse["data"]> {
  const res = await fetch(`${STRAPI_URL}/api/alumnis?populate=*`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch Alumni Data");

  const json: AlumniApiResponse = await res.json();
  return json.data;
}
export async function getFacilityData(): Promise<FacilityAPIResponse["data"]> {
  const res = await fetch(`${STRAPI_URL}/api/facilities?populate=*`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch Alumni Data");

  const json: FacilityAPIResponse = await res.json();
  return json.data;
}
