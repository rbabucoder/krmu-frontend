import { FETCH_STRAPI_URL } from "@/app/constant";
import { PHDProgrammeResponse } from "../types/phd-programmes";

export async function getPHDProgramme(phdslug: string) {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/phd-single-programmes?filters[phdslug][$eq]=${phdslug}&populate[bgimg][populate]=*&populate[duration][fields][0]=countertext&populate[duration][fields][1]=countercontent&populate[fee_per_year][fields][0]=countertext&populate[fee_per_year][fields][1]=countercontent&populate[eligibility_criteria][fields][0]=countertext&populate[eligibility_criteria][fields][1]=countercontent&populate[phdoverview][fields][0]=title&populate[phdoverview][fields][1]=desc&populate[phdoverview][populate][overviewimage][populate]=*&populate[scholarsponsoredparttime][fields][0]=title1&populate[scholarsponsoredparttime][fields][1]=title2&populate[scholarsponsoredparttime][fields][2]=title3&populate[scholarsponsoredparttime][fields][3]=desc1&populate[scholarsponsoredparttime][fields][4]=desc2&populate[scholarsponsoredparttime][fields][5]=desc3&populate[scholarsponsoredparttime][populate][scholarshipimg][populate]=*&populate[connectingtalent][fields][0]=title&populate[connectingtalent][fields][1]=desc&populate[connectingtalent][populate][dreamimg][populate]=*&populate[connectingtalent][populate][dreamcounter][populate]=*&populate[phdlogoslide][populate]=*&populate[careeroptions][fields][0]=title&populate[careeroptions][fields][1]=desc&populate[careeroptions][fields][2]=testimonialheading&populate[careeroptions][populate][careerpointers][populate]=*&populate[careeroptions][populate][testimonials][populate]=*&populate[phdoutcome][populate][fields][0]=title&populate[phdoutcome][populate][phdoutcome][populate]=*&populate[programmehighlight][populate][fields][0]=heading&populate[programmehighlight][populate][fields][1]=phdcontent&populate[programmehighlight][populate][bgimage][populate]=*&populate[phdadmissionselect][populate][fields][0]=title1&populate[pursue][populate][fields][1]=title2&populate[pursue][populate][fields][2]=desc1&populate[pursue][populate][fields][2]=desc2&populate[pursue][populate][bgimage][populate]=*&populate[phdprogrammefaq][populate]=*`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Single Phd programme Data");
  const json: PHDProgrammeResponse = await res.json();
  return json.data;
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
//     }
//   }
// }
