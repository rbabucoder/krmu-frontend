import { FETCH_STRAPI_URL } from "@/app/constant";
import { AboutKRMU } from "../types/about";

export async function getAboutKRMU(): Promise<AboutKRMU["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/about-krmu?populate[accrediation][fields][0]=title&populate[accrediation][populate][accrediationlogos]=true&populate[krmugroup][fields][0]=title&populate[krmugroup][fields][1]=subtitle&populate[krmugroup][fields][2]=description&populate[krmugroup][populate][krmbranch]=true&populate[halloffame][fields][0]=title&populate[halloffame][populate][hallfame]=true`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed To Fetch AboutKRMU Data");

  const json: AboutKRMU = await res.json();
  return json.data;
}


// {
//   populate: {
//    accrediation: {
//      fields: ['title'],
//      populate: {
//        accrediationlogos: true
//      }
//    },
//    krmugroup: {
//      fields: ['title', 'subtitle', 'description'],
//      populate: {
//        krmbranch: true
//      }
//    },
//    halloffame:  {
//      fields: ['title'],
//      populate: {
//        hallfame : true
//      }
//    }
//   }
// }