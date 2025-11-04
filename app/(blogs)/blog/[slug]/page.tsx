import SingleBlogHero from "../single-blog-comp/SingleBlogHero";
import SingleBlogLayout from "../single-blog-comp/SingleBlogLayout";
import { getSingleBlogDataBySlug } from "@/lib/api/blogs/single-blog";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;

  const singleBlogData = await getSingleBlogDataBySlug(slug);

  if (!singleBlogData) return notFound();

  const currentSingleBlog = singleBlogData.find((blog) => blog?.slug === slug);

  if (!currentSingleBlog?.title) return notFound();

  const featuredImageUrl =
    currentSingleBlog?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const authorName =
    currentSingleBlog?._embedded?.author?.[0]?.acf?.profile_name;
  const authorDesignation =
    currentSingleBlog?._embedded?.author?.[0]?.acf?.profile_position;
  const publishedDate = currentSingleBlog?.date;
  return (
    <>
      <SingleBlogHero
        title={currentSingleBlog?.title?.rendered}
        imgUrl={featuredImageUrl ?? ""}
        authorName={authorName}
        date={publishedDate}
        authorDesignation={authorDesignation}
      />
      <SingleBlogLayout content={currentSingleBlog?.content?.rendered} />
    </>
  );
};

export default page;
