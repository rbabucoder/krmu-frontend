import { AdmissionPageResponse } from "../types/admission";



const STRAPI_URL = process.env.STRAPI_API_URL || "http://localhost:1337";

export async function getAdmissionPageData(): Promise<AdmissionPageResponse["data"]["AdmissionPageComponent"]> {
  // const res = await fetch(`https://truthful-cabbage-82fd27e8f6.strapiapp.com/api/home-page?populate[PageContent][populate]=*`, {
  const res = await fetch(`${STRAPI_URL}/api/admission?populate[AdmissionPageComponent][populate]=*`, {
    // Use ISR (revalidates every 60 seconds)
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch home page");

  const json: AdmissionPageResponse = await res.json();
  return json.data.AdmissionPageComponent;
}