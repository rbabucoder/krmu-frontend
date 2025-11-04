import { getCategoryBySlug } from "@/lib/api/blogs/cat-blog";
import CommonBlogLayout from "../../comp/CommonBlogLayout";
import CommonBlogHeroSection from "../../comp/CommonBlogHeroSection";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

const Page = async ({ params, searchParams }: Props) => {
  const resolvedParams = await params;
  const resolvedSearchParams =  searchParams;

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
