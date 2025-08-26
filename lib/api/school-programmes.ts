import { FETCH_STRAPI_URL } from "@/app/constant";
import { SchoolProgrammeResponse } from "../types/school-programme";

export async function getSchoolProgrammeData(): Promise<
  SchoolProgrammeResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/school-programmes?populate[herosection][populate][herobtn][populate]=*&populate[herosection][populate][heroimg][populate]=*&populate[programmeeligibility][populate]=*&populate[programmescope][populate]=*&populate[programmehighlight][populate][programmehighlightcards][populate]=*&populate[specialisation][populate][specialisationcards][populate]=*&populate[admissionprocess][populate][admissionprocesscard][populate]=*&populate[admissionprocess][populate][desktopadmissionprocessimg][populate]=*&populate[curriculum][populate][years][populate][semester][populate][subjects][populate]=*&populate[curriculum][populate][years][populate][semester][populate][pdfbtns][populate]=*&populate[labsfacilities][populate]=*&populate[beyondclassroom][populate]=*&populate[career][populate]=*&populate[financialassistance][populate]=*&populate[toc][populate][tocfaq][populate]=*&populate[ourlocation][populate]=*`,
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
//         admissionprocesscard: { populate: '*' },
//         desktopadmissionprocessimg: { populate: '*' }
//       }
//     },
//     curriculum: {
//       populate: {
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
//      financialassistance:{
//        populate: '*' 
//      },
//      toc: {
//      populate: {
//        tocfaq: {
//          populate: '*' 
//        }
//      }
//      },
//      ourlocation:{
//        populate: '*'
//      } 
//   }  // <-- This closes the main populate object
// }
