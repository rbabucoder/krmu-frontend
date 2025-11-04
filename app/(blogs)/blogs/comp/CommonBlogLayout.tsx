import Link from "next/link";
import { getAllBlogsByPerPageOrCategorySlug } from "@/lib/api/blogs/main-blog";
import CommonBlogSidebar from "./CommonBlogSidebar";
import { MainBlogs } from "@/lib/types/blogs/main-blogs";
import CommonBlogCard from "./CommonBlogCard";
import CommonBlogRightSidebar from "./CommonBlogRightSidebar";

type Props = {
  searchParams: { page?: string };
  slug?: string;
};

const CommonBlogLayout = async ({ searchParams, slug }: Props) => {
  const resolvedSearchParams = await searchParams; // ✅ Await it
  const currentPage = Number(resolvedSearchParams?.page) || 1;
  const blogsPerPage = 6;

  const { blogs, totalPages } = await getAllBlogsByPerPageOrCategorySlug(
    blogsPerPage,
    currentPage,
    slug
  );

  // Helper to generate page numbers with ellipses
  const getPageNumbers = (
    total: number,
    current: number,
    delta: number = 2
  ) => {
    const range: (number | string)[] = [];
    const rangeWithDots: (number | string)[] = [];
    let l: number | undefined;

    for (let i = 1; i <= total; i++) {
      if (
        i === 1 ||
        i === total ||
        (i >= current - delta && i <= current + delta)
      ) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if (Number(i) - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (Number(i) - l !== 1) {
          rangeWithDots.push("…");
        }
      }
      rangeWithDots.push(i);
      l = Number(i);
    }

    return rangeWithDots;
  };

  const pageNumbers = getPageNumbers(totalPages, currentPage);

  return (
    <section className="py-[60px] px-5">
      <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-5 2xl:gap-10">
        <div className="w-full xl:w-1/5 order-2 xl:order-1">
          <CommonBlogSidebar />
        </div>

        <div className="w-full xl:w-3/5 order-1 xl:order-2">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {blogs?.map((blog: MainBlogs, i: number) => (
              <CommonBlogCard
                key={i}
                title={blog?.title?.rendered}
                excerpt={blog?.excerpt?.rendered}
                slug={blog?.slug}
                imgUrl={
                  blog?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""
                }
              />
            ))}
            <div>
            
            </div>
          </div>
            {/* Pagination */}
              <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
                {/* Previous */}
                {currentPage > 1 && (
                  <Link
                    href={`?page=${currentPage - 1}`}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    &lt; Prev
                  </Link>
                )}

                {/* Page Numbers */}
                {pageNumbers.map((num, idx) =>
                  num === "…" ? (
                    <span key={idx} className="px-3 py-1">
                      …
                    </span>
                  ) : (
                    <Link
                      key={idx}
                      href={`?page=${num}`}
                      className={`px-3 py-1 border ${
                        num === currentPage
                          ? "bg-red-600 text-white border-red-600"
                          : "bg-white text-black hover:bg-gray-100"
                      }`}
                    >
                      {num}
                    </Link>
                  )
                )}

                {/* Next */}
                {currentPage < totalPages && (
                  <Link
                    href={`?page=${currentPage + 1}`}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    Next &gt;
                  </Link>
                )}
              </div>
        </div>

        <div className="w-full xl:w-1/5 order-3 xl:order-3">
          <CommonBlogRightSidebar />
        </div>
      </div>
    </section>
  );
};

export default CommonBlogLayout;
