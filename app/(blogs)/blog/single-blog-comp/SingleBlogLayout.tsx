import React from "react";
import { Raleway } from "next/font/google";
import { SingleBlogComponent } from "@/lib/types/blogs/single-blog";
import SingleBlogContent from "./SingleBlogContent";

// Configure font with fallbacks
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

type Props = {
  singleBlogData: SingleBlogComponent[];
};

const SingleBlogLayout = ({ singleBlogData }: Props) => {
  
  return (
    <main className={`p-7 ${raleway.className}`}>
      <div className="max-w-[1664px] mx-auto w-full px-5 sm:px-10 flex">
        <div className="w-1/5">
          
        </div>
        <div className="w-3/5">
          {singleBlogData &&
            singleBlogData?.map((data) => (
              <SingleBlogContent
                key={data?.id}
                content={data?.single_blog_content}
                faqsData={data?.faqs}
              />
            ))}
        </div>
        <div className="w-1/5"></div>
      </div>
    </main>
  );
};

export default SingleBlogLayout;
