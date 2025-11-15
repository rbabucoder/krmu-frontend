import { getBlogPageInfo } from "@/lib/api/blogs/main-blog";
// import CommonBlogHeroSection from "./comp/CommonBlogHeroSection";
import CommonBlogLayout from "./comp/CommonBlogLayout";
import { strapiSeoToMetadata } from "@/lib/constants/strapiMeta";

type Props = {
  searchParams: Promise<{ page?: string }>;
};
// ---------------------------
// ✅ Metadata
// ---------------------------
export async function generateMetadata() {
  const pageInfo = await getBlogPageInfo();
  const seo = pageInfo.blog_seo;

  if (!seo) return {};

  return strapiSeoToMetadata(seo);
}

const Page = async ({ searchParams }: Props) => {
  return (
    <>
      {/* <CommonBlogHeroSection /> */}
      <CommonBlogLayout searchParams={searchParams} />
    </>
  );
};

export default Page;
