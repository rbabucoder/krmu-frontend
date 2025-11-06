import { FETCH_STRAPI_URL } from "@/app/constant";
import { PHDProgrammeResponse } from "../types/phd-programmes";

export async function getPHDProgramme(phdslug: string) {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/phd-single-programmes?filters[phdslug][$eq]=${phdslug}&populate[bgimg][populate]=*&populate[duration][fields][0]=countertext&populate[duration][fields][1]=countercontent&populate[fee_per_year][fields][0]=countertext&populate[fee_per_year][fields][1]=countercontent&populate[eligibility_criteria][fields][0]=countertext&populate[eligibility_criteria][fields][1]=countercontent&populate[phdoverview][fields][0]=title&populate[phdoverview][fields][1]=desc&populate[phdoverview][populate][overviewimage][populate]=*&populate[scholarsponsoredparttime][fields][0]=title1&populate[scholarsponsoredparttime][fields][1]=title2&populate[scholarsponsoredparttime][fields][2]=title3&populate[scholarsponsoredparttime][fields][3]=desc1&populate[scholarsponsoredparttime][fields][4]=desc2&populate[scholarsponsoredparttime][fields][5]=desc3&populate[scholarsponsoredparttime][populate][scholarshipimg][populate]=*&populate[connectingtalent][fields][0]=title&populate[connectingtalent][fields][1]=desc&populate[connectingtalent][populate][dreamimg][populate]=*&populate[connectingtalent][populate][dreamcounter][populate]=*&populate[commence_journey][populate][bgimg][fields][0]=url&populate[commence_journey][populate][commence_btn]=true`,
      {
        next: {
          revalidate: 60, // ISR (revalidate every 60s)
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Single PhD programme Data");
    }

    const json: PHDProgrammeResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching Single PhD Programme:", error);
    return null;
  }
}

// {
//   filters: {
//     phdslug: {
//       $eq: "ph-d-in-computer-science-and-engineering" // 👈 use your slug variable here
//     }
//   },
//   populate: {
//   bgimg: {populate: '*'},
//   duration: {
//   fields: ['countertext', 'countercontent']
//   },
//   fee_per_year: {
//   fields: ['countertext', 'countercontent']
//   },
//   eligibility_criteria: {
//   fields: ['countertext', 'countercontent']
//   },
//     phdoverview: {
//       fields: ["title", "desc"],
//       populate:{
//        overviewimage: {populate: '*'}
//       }
//     },
//     scholarsponsoredparttime: {
//       fields: ['title1', 'title2', 'title3', 'desc1', 'desc2', 'desc3' ],
//       populate:{
//        scholarshipimg: {populate: '*'}
//       }
//     },
//     connectingtalent: {
//       fields: ['title', 'desc'],
//       populate: {
//         dreamimg:  {populate: '*'},
//         dreamcounter : {populate: '*'}
//       }
//     },
//     commence_journey: {
//      populate: {
//        bgimg: {
//          fields: ['url']
//        },
//        commence_btn: true
//      }
//     }
//   }
// }
