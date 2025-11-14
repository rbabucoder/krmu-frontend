import { getCategoryBySlug } from "@/lib/api/blogs/cat-blog";
import CommonBlogLayout from "../../comp/CommonBlogLayout";
import CommonBlogHeroSection from "../../comp/CommonBlogHeroSection";
import { strapiSeoToMetadata } from "@/lib/constants/strapiMeta";
import { getBlogCategoryPageInfo } from "@/lib/api/blogs/main-blog";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};
// ---------------------------
// ✅ Metadata
// ---------------------------
export async function generateMetadata() {
  const pageInfo = await getBlogCategoryPageInfo();

  const seo = pageInfo.blog_category_seo;

  if (!seo) return {};

  return strapiSeoToMetadata(seo);
}
const Page = async ({ params, searchParams }: Props) => {
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams;

  const { slug } = resolvedParams;
  const category = await getCategoryBySlug(slug);

  return (
    <>
      <CommonBlogHeroSection catName={category?.name || "Category"} />
      {/* ✅ pass the resolved object (not Promise) */}
      <CommonBlogLayout slug={slug} searchParams={resolvedSearchParams} />
    </>
  );
};

export default Page;
