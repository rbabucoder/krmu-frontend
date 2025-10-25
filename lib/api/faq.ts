import { FETCH_STRAPI_URL } from "@/app/constant";
import { FAQsResponse } from "../types/faq";

export async function getFaqsData(): Promise<FAQsResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/faq?fields[0]=heading&fields[1]=subheading&populate[btn][fields][0]=btn_text&populate[btn][fields][1]=btn_class&populate[btn][fields][2]=btn_link`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch FAQS Data");
  const json: FAQsResponse = await res.json();
  return json.data;
}
