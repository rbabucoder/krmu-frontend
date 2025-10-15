import { FETCH_STRAPI_URL } from "@/app/constant";
import {
  FacultyResponse,
  SCHOOLEVENTSANDEXPRESPONSE,
  SchoolsResponse,
} from "../types/schools";

export async function getSchoolPage(): Promise<SchoolsResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/schools?populate[school_category][populate]=*&populate[schoolcomps][populate]=*&populate[schoolherobanner]=true&populate[degree]=true&populate[admissionbtn]=true&populate[herobutton]=true&populate[excitedbtns]=true&populate[newsletterbtns]=true&populate[advantagimg]=true&populate[alumnilogo]=true&populate[advantageCards][populate][fields][0]=title&populate[advantageCards][populate][fields][1]=cardcontent&populate[advantageCards][populate][fields][2]=cardclass&populate[advantageCards][populate][cardimg]=true&populate[collabcards][populate]=*&populate[listitem1][populate][listsitems]=true&populate[listitem2][populate][listsitems]=true&populate[listitem3][populate][listsitems]=true&populate[coebtn1]=true&populate[coebtn2]=true&populate[knowledgepartenerlogos]=true&populate[studentachievementsbtn]=true&populate[testimonials][populate]=*&populate[eventsbtn][populate]=*`,
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
//   school_category: {
//   populate: "*"
//   },
//     schoolcomps: {
//       populate: "*"
//     },
//     schoolherobanner: true,
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

export async function getEventsAndExperiencesBySchoolCat(cat: string = "SOET") {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/news-and-events?sort[0]=title:desc&filters[school_categories][name][$eq]=${cat}&fields[0]=slug&fields[1]=title&fields[2]=content&populate[newsmedia]=true&pagination[pageSize]=40&pagination[page]=1`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch industry connect page data");
  const json: SCHOOLEVENTSANDEXPRESPONSE = await res.json();
  return json.data;
}

// {
//   sort: ['publishedAt:asc'],
//   filters: {
//     school_categories: {
//       name: {
//         $eq: 'SOET'
//       }
//     }

//   },
//    fields: ['slug', 'title', 'content'],
//    populate: {
//     newsmedia: true
//    },
// pagination: {
//   pageSize: 40,
//   page: 1,
// },
// }

export async function getFacultyByCat(
  cat: string = "SOET"
): Promise<FacultyResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/faculties?sort[0]=order_num:asc&filters[school_categories][name][$eq]=${cat}&populate[faculty_img]=true&fields[0]=faculty_name&fields[1]=facultyslug&fields[2]=faculty_card_desg&fields[3]=faculty_qualification&fields[4]=faculty_type&pagination[pageSize]=60&pagination[page]=1`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch industry connect page data");
  const json: FacultyResponse = await res.json();
  return json.data;
}

// {
// sort: ['publishedAt:asc'],
// filters: {
//   school_categories: {
//     name: {
//      $eq: 'SOET'
//     }
//   },
// },

// fields: ['faculty_name', 'facultyslug', 'faculty_designation', 'faculty_qualification'],
// populate: {
//   faculty_img: true
// }
// }

// {
// sort: ['publishedAt:asc'],
// filters: {
//  school_categories: {
//     name: {
//      $eq: 'SOET'
//     }
//   },
// },
// populate: {
//   faculty_img: true
// },
// fields: ['faculty_name', 'facultyslug', 'faculty_designation', 'faculty_qualification'],
// pagination: {
//   pageSize: 40,
//   page: 1,
// },
// }

// fix the query
