import { MainBlogResponse } from "@/lib/types/blogs/main-blogs";

export async function getAllBlogsByPerPageOrCategorySlug(
  num_of_blogs: number = 6,
  page: number = 1,
  categorySlug?: string // optional category filter
) {
  // Base URL
  // let url = `https://www.krmangalam.edu.in/blog/wp-json/wp/v2/posts?per_page=${num_of_blogs}&page=${page}&_embed`;
  let url = `https://www.krmangalam.edu.in/blog/wp-json/wp/v2/posts?per_page=${num_of_blogs}&page=${page}&_fields=id,slug,title,featured_media,content,excerpt`;

  // If a category slug is provided, fetch its category ID first
  if (categorySlug) {
    const categoryRes = await fetch(
      `https://www.krmangalam.edu.in/blog/wp-json/wp/v2/categories?slug=${categorySlug}`,
      { next: { revalidate: 3600 } } // revalidate every hour
    );

    if (categoryRes.ok) {
      const categories = await categoryRes.json();
      if (categories.length > 0) {
        const categoryId = categories[0].id;
        url += `&categories=${categoryId}`;
      }
    }
  }

  // Fetch posts with optional category
  const res = await fetch(url, { next: { revalidate: 60 } });

  if (!res.ok) throw new Error("Failed to fetch blogs");

  // Extract pagination info
  const totalPages = Number(res.headers.get("X-WP-TotalPages")) || 1;
  const json = await res.json();

  return { blogs: json, totalPages };
}

export async function getRecentPosts() {
  const res = await fetch(
    `https://www.krmangalam.edu.in/blog/wp-json/wp/v2/posts?per_page=3`,
    { next: { revalidate: 60 } } // ISR caching (Next.js)
  );
  if (!res.ok) throw new Error("Failed to fetch recent posts");
  const json: MainBlogResponse = await res.json();
  return json;
}

// export async function getAllBlogsByPerPage(
//   num_of_blogs: number = 6,
//   page: number = 1
// ) {
//   const res = await fetch(
//     `https://www.krmangalam.edu.in/blog/wp-json/wp/v2/posts?per_page=${num_of_blogs}&page=${page}&_embed`,
//     {
//       next: { revalidate: 60 },
//     }
//   );

//   if (!res.ok) throw new Error("Failed to fetch blogs");

//   const totalPages = Number(res.headers.get("X-WP-TotalPages")) || 1;
//   const json = await res.json();

//   return { blogs: json, totalPages };
// }

// export async function getAllBlogsByPerPage(
//   num_of_blogs: number = 6,
//   page: number = 1
// ): Promise<MainBlogResponse> {
//   const res = await fetch(
//     // `https://www.krmangalam.edu.in/blog/wp-json/wp/v2/posts?per_page=${num_of_blogs}&_embed`,
//     `https://www.krmangalam.edu.in/blog/wp-json/wp/v2/posts?per_page=${num_of_blogs}&page=${page}&_embed`,
//     {
//       next: {
//         revalidate: 60,
//       },
//     }
//   );
//   if (!res.ok) throw new Error("Failed to fetch Single Blog");
//   const json: MainBlogResponse = await res.json();
//   return json;
// }
