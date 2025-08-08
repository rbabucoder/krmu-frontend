import { FETCH_STRAPI_URL } from "@/app/constant";
import { SchoolsResponse } from "../types/schools";

export async function getSchoolPage(): Promise<SchoolsResponse["data"]> {
  const res = await fetch(`${FETCH_STRAPI_URL}/api/schools?populate=*`, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) throw new Error("Failed To Fetch AboutKRMU Data");

  const json: SchoolsResponse = await res.json();
  return json.data;
}
