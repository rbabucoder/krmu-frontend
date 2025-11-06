import { FETCH_STRAPI_URL } from "@/app/constant";
import { GlobalDownloadProspectusResponse } from "../types/global-setting";
export async function getDownloadProspectusSetting(): Promise<
  GlobalDownloadProspectusResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/controller-setting?fields[0]=download_prospectus_enable_disable`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Donwload Prospectus");
  const json: GlobalDownloadProspectusResponse = await res.json();
  return json.data;
}
