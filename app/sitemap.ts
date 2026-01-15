import {
  getAllBlogs,
  getAllSchoolProgrammes,
  getAllSchools,
} from "@/lib/api/siteseo";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.krmangalam.edu.in";

  const blogs = await getAllBlogs();
  const schools = await getAllSchools();
  const programmes = await getAllSchoolProgrammes();

  const blogUrls: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.modified),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const schoolUrls: MetadataRoute.Sitemap = schools.map((school) => ({
    url: `${baseUrl}/schools/${school.urlslug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const programmeUrls: MetadataRoute.Sitemap = programmes.map((p) => ({
    url: `${baseUrl}/programmes/${p.programmeslug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/programmes`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/schools`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...blogUrls,
    ...schoolUrls,
    ...programmeUrls,
  ];
}
