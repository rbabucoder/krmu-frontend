// STRAPI_URL is intentionally empty — Strapi Cloud returns absolute media URLs,
// so no base URL prefix is needed. Override via NEXT_PUBLIC_STRAPI_URL if self-hosting.
export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "";
export const FETCH_STRAPI_URL = "https://truthful-cabbage-82fd27e8f6.strapiapp.com";
// export const STRAPI_URL = "http://localhost:1337";
// export const FETCH_STRAPI_URL = "http://localhost:1337";
// export const FETCH_STRAPI_URL = "http://techapi.krmangalam.edu.in";

export const KRMUWordUrl = "https://wp.krmangalam.edu.in";
export const origUrl = "https://www.krmangalam.edu.in";

// export const krmBlogURL = `${KRMUWordUrl}/blog2/blog-backend`; 
export const krmBlogURL = `${KRMUWordUrl}/blog`;
// export const isLocal = STRAPI_URL.includes("localhost");