import React from "react";
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

  const currentSingleBlog = singleBlogData.find(
    (blog) => blog.blog_slug === slug
  );

  if (!currentSingleBlog?.title) return notFound();

  return (
    <>
      <SingleBlogHero
        title={currentSingleBlog.title}
        imgUrl={currentSingleBlog.featured_image?.url ?? ""}
      />
      <SingleBlogLayout singleBlogData={currentSingleBlog?.single_blog} />
    </>
  );
};

export default page;
