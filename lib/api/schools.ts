import { FETCH_STRAPI_URL } from "@/app/constant";
import { SchoolsResponse } from "../types/schools";

export async function getSchoolPage(): Promise<SchoolsResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/schools?populate[schoolcomps][populate]=*&populate[admissionbtn]=true&populate[herobutton]=true&populate[excitedbtns]=true&populate[newsletterbtns]=true&populate[advantagimg]=true&populate[alumnilogo]=true&populate[advantageCards][populate][fields][0]=title&populate[advantageCards][populate][fields][1]=cardcontent&populate[advantageCards][populate][fields][2]=cardclass&populate[advantageCards][populate][cardimg]=true&populate[collabcards][populate]=*&populate[listitem1][populate][listsitems]=true&populate[listitem2][populate][listsitems]=true&populate[listitem3][populate][listsitems]=true&populate[coebtn1]=true&populate[coebtn2]=true&populate[knowledgepartenerlogos]=true&populate[testimonials][populate]=*&populate[eventsbtn][populate]=*&populate[studentachievementsbtn][populate]=*`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed To Fetch AboutKRMU Data");

  const json: SchoolsResponse = await res.json();
  return json.data;
}

// {
//   populate: {
//     schoolcomps: {
//       populate: "*"
//     },
//     admissionbtn: true,
//     herobutton : true,
//     excitedbtns : true,
//     newsletterbtns : true,
//     advantagimg: true,
//     alumnilogo: true,
//     advantageCards: {
//       populate: {
//         fields: ['title', 'cardcontent', 'cardclass'],
//         cardimg: true
//       }
//     },
//     collabcards: {
//       populate: '*' 
//     },
//     listitem1: {
//       populate: {
//         listsitems : true
//       }
//     },
//      listitem2: {
//       populate: {
//         listsitems : true
//       }
//     },
//      listitem3: {
//       populate: {
//         listsitems : true
//       }
//     },
//     coebtn1: true,
//     coebtn2: true,
//     knowledgepartenerlogos : true,
//     testimonials: {
//      populate: '*'
//     },
//      eventsbtn: {
//      populate: '*'
//     }
    
//   }
// }
