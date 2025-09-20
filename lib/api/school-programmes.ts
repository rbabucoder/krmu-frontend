import { FETCH_STRAPI_URL } from "@/app/constant";
import { SchoolProgrammeResponse } from "../types/school-programme";

export async function getSchoolProgrammeData(
  slug?: string
): Promise<SchoolProgrammeResponse["data"]> {
  let urlcode = "";
  if (slug) {
    urlcode = `filters[programmeslug][$eq]=${slug}&`;
  }
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/school-programmes?${urlcode}&populate[herosection][populate][herobtn][populate]=*&populate[herosection][populate][heroimg][populate]=*&populate[programmeeligibility][populate]=*&populate[programmescope][populate]=*&populate[programmehighlight][populate][programmehighlightcards][populate]=*&populate[specialisation][populate][specialisationcards][populate]=*&populate[admissionprocess][populate][admissionbtn][populate]=*&populate[admissionprocess][populate][admissionprocesscard][populate]=*&populate[admissionprocess][populate][desktopadmissionprocessimg][populate]=*&populate[curriculum][populate][currbtn][populate]=*&populate[curriculum][populate][years][populate][semester][populate][subjects][populate]=*&populate[curriculum][populate][years][populate][semester][populate][pdfbtns][populate]=*&populate[labsfacilities][populate]=*&populate[beyondclassroom][populate]=*&populate[career][populate]=*&populate[dreamcareer][populate]=*&populate[financialassistance][populate]=*&populate[toc][populate][tocfaq][populate]=*&populate[toc][populate][tocimg][populate]=*&populate[toc][populate][tocbtn][populate]=*&populate[ourlocation][populate]=*`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch School Programme Data");
  const json: SchoolProgrammeResponse = await res.json();
  return json.data;
}

// {
//   filters: {
//     programmeslug: {
//       $eq: 'b-a-hons-psychology',   // 👈 use your slug variable here
//     },
//   },
//   populate: {
//     herosection: {
//       populate: {
//         herobtn: { populate: '*' },
//         heroimg: { populate: '*' }
//       }
//     },
//     programmeeligibility: { populate: '*' },
//     programmescope: { populate: '*' },
//     programmehighlight: {
//       populate: {
//         programmehighlightcards: { populate: '*' }
//       }
//     },
//     specialisation: {
//       populate: {
//         specialisationcards: { populate: '*' }
//       }
//     },
//     admissionprocess: {
//       populate: {
//         admissionbtn: { populate: '*'},
//         admissionprocesscard: { populate: '*' },
//         desktopadmissionprocessimg: { populate: '*' }
//       }
//     },
//     curriculum: {
//       populate: {
//       currbtn: { populate: '*' },
//         years: {
//           populate: {
//             semester: {
//               populate: {
//                 subjects: { populate: '*' },
//                 pdfbtns: { populate: '*' }
//               }
//             },
//           }
//         }
//       }
//     },  // <-- This is the closing bracket for curriculum
//     labsfacilities: {
//       populate: '*'
//     },
//     beyondclassroom:{
//       populate: '*'
//     },
//     career: {
//       populate: '*'
//      },
//      dreamcareer: {
//        populate: '*'
//      },
//      financialassistance:{
//        populate: '*'
//      },
//      toc: {
//      populate: {
//        tocfaq: {
//          populate: '*'
//        },
//        tocimg: { populate:'*' },
//        tocbtn: {populate: '*'}

//      }
//      },
//      ourlocation:{
//        populate: '*'
//      }
//   }  // <-- This closes the main populate object
// }
