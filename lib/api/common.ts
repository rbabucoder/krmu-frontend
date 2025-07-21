import { FETCH_STRAPI_URL } from "@/app/constant";
import { AlumniApiResponse, FacilityAPIResponse } from "../types/common";
import { TestimonialItem, TestimonialResponse } from "../constants/testimonial";
import { NEWSANDEVENTSResponse } from "../types/news-and-events";

export async function getAlumniData(): Promise<AlumniApiResponse["data"]> {
  const res = await fetch(`${FETCH_STRAPI_URL}/api/alumnis?populate=*`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch Alumni Data");

  const json: AlumniApiResponse = await res.json();
  return json.data;
}
export async function getFacilityData(): Promise<FacilityAPIResponse["data"]> {
  const res = await fetch(`${FETCH_STRAPI_URL}/api/facilities?populate=*`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch Alumni Data");

  const json: FacilityAPIResponse = await res.json();
  return json.data;
}

export async function getTestimonialsData(): Promise<TestimonialItem[]> {
  const res = await fetch(`${FETCH_STRAPI_URL}/api/testimonials?populate=*`, {
    next: {
      revalidate: 50,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch Alumni Data");

  const json: TestimonialResponse = await res.json();
  return json.data;
}

export async function getNewsAndEventsData(): Promise<NEWSANDEVENTSResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/news-and-events?populate=*`,
    {
      next: {
        revalidate: 50,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Alumni Data");

  const json: NEWSANDEVENTSResponse = await res.json();
  return json.data;
}
