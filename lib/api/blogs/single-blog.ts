// import { FETCH_STRAPI_URL } from "@/app/constant";
import {
  AllBlogCategoriesResponse,
  SingleBlogResponse,
} from "@/lib/types/blogs/single-blog";

export async function getSingleBlogDataBySlug(
  slug: string = "is-cat-exam-tough"
): Promise<SingleBlogResponse> {
  const res = await fetch(
    // `${FETCH_STRAPI_URL}/api/single-blogs?filters[blog_slug][$eq]=${slug}&fields[0]=title&fields[1]=blog_slug&populate[featured_image][populate]=*&populate[single_blog][on][blog.single-blog-component][populate][fields][0]=single_blog_content&populate[single_blog][on][blog.single-blog-component][populate][faqs][populate]=*`,
    `https://www.krmangalam.edu.in/blog/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Single Blog");
  const json: SingleBlogResponse = await res.json();
  return json;
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

export async function getAllBlogCategories(): Promise<AllBlogCategoriesResponse> {
  const res = await fetch(
    `https://www.krmangalam.edu.in/blog/wp-json/wp/v2/categories?per_page=100`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Single Blog");
  const json: AllBlogCategoriesResponse = await res.json();
  return json;
}
