import { FETCH_STRAPI_URL } from "@/app/constant";
import { AlumniApiResponse, FacilityAPIResponse } from "../types/common";
import { TestimonialItem, TestimonialResponse } from "../constants/testimonial";
import { NEWSANDEVENTSResponse } from "../types/news-and-events";
import { TOPBARResponse } from "../types/HeaderType";
import { GlobalResponse } from "../types/global";
import { AdvisoryBoardResponse } from "../types/advisory-type";

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

export async function getNewsAndEventsData(): Promise<
  NEWSANDEVENTSResponse["data"]
> {
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

// http://localhost:1337/api/topbar-menu?populate[TopbarMenuItems]=true&populate[topbarsociallinks][populate][socialicon]=true&populate[topbarsociallinks][fields][0]=url

export async function getTopbarData(): Promise<TOPBARResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/topbar-menu?populate[TopbarMenuItems]=true&populate[topbarsociallinks][populate][socialicon]=true&populate[topbarsociallinks][fields][0]=url`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Topbar Data");

  const json: TOPBARResponse = await res.json();
  return json.data;
}

export async function getMetaInfo(): Promise<GlobalResponse["data"]> {
  const res = await fetch(`${FETCH_STRAPI_URL}/api/global?populate=*`, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch Meta info Data");

  const json: GlobalResponse = await res.json();
  return json.data;
}

export async function getAdvisoryBoard(): Promise<
  AdvisoryBoardResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/advisory-board?populate[advisoryboard][fields][0]=title&populate[advisoryboard][fields][1]=advisoryboardinfo&populate[advisoryboard][populate][advisoryimage]=true`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Meta info Data");

  const json: AdvisoryBoardResponse = await res.json();
  return json.data;
}
