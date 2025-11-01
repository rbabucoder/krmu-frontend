import { FETCH_STRAPI_URL } from "@/app/constant";
import { BlogResponse } from "@/lib/types/blogs/single-blog";

export async function getSingleBlogDataBySlug(
  slug: string = "is-cat-exam-tough"
): Promise<BlogResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/single-blogs?filters[blog_slug][$eq]=${slug}&fields[0]=title&fields[1]=blog_slug&populate[featured_image][populate]=*&populate[single_blog][on][blog.single-blog-component][populate][fields][0]=single_blog_content&populate[single_blog][on][blog.single-blog-component][populate][faqs][populate]=*`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Single Blog");
  const json: BlogResponse = await res.json();
  return json.data;
}

// {
//   filters: {
//     blog_slug: {
//       $eq: "is-cat-exam-tough",
//     },
//   },
//   fields: ["title", "blog_slug"],
//   populate: {
//   featured_image: {
//    populate: '*'
//   },
//     single_blog: {
//       on: {
//         "blog.single-blog-component": {
//           populate: {
//             fields:['single_blog_content'],
//             faqs: {
//               populate: '*'
//             }
//           }
//         }
//       }
//     }
//   }
// }
