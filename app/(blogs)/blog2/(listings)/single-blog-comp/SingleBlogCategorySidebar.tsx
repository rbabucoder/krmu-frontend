import { getAllBlogCategories } from "@/lib/api/blogs/single-blog";
import Link from "next/link";

const SingleBlogCategorySidebar = async () => {
  const allCategories = await getAllBlogCategories();

  return (
    <>
      <div className="singlepost_all_cat_container right_sidebar_singlepost_container sticky top-[100px]">
        <h3 className="blogcattitle">Blog Categories</h3>
        <div className="singleblog_divider"></div>
        <div className="all_cat_container">
          <div className="all_cat__inner-container">
            {allCategories &&
              allCategories?.map((cat) => {
                if (!cat?.name || cat.name.toLowerCase() === "uncategorized")
                  return null;
                return (
                  <div key={cat?.id} className="singlepost_right_sidebar_card">
                    <div className="singlepost_right_sidebar_card_left">
                      <div className="singlepost_right_sidebar_dot"></div>
                      <Link
                        href={`/blog2/category/${cat?.slug}`}
                        className="singlepost_right_sidebar_text"
                      >
                        {cat?.name}
                      </Link>
                    </div>
                    <div className="singlepost_right_sidebar_arrow">→</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogCategorySidebar;
