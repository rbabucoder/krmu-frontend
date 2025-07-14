import { FETCH_STRAPI_URL } from "@/app/constant";
import { HomePageResponse } from "../types/home";



export async function getHomePageData(): Promise<HomePageResponse["data"]["PageContent"]> {
  // const res = await fetch(`https://truthful-cabbage-82fd27e8f6.strapiapp.com/api/home-page?populate[PageContent][populate]=*`, {
  const res = await fetch(`${FETCH_STRAPI_URL}/api/home-page?populate[PageContent][populate]=*`, {
    // Use ISR (revalidates every 60 seconds)
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch home page");

  const json: HomePageResponse = await res.json();
  return json.data.PageContent;
}

// export async function getHomePageData(): Promise<HomePageResponse["data"]["PageContent"]> {
//   const res = await fetch(`${FETCH_STRAPI_URL}/api/home-page?populate[PageContent][populate]=*`, {
//     cache: "no-store",
//   });

//   if (!res.ok) throw new Error("Failed to fetch home page");

//   const json: HomePageResponse = await res.json();
//   return json.data.PageContent;
// }
