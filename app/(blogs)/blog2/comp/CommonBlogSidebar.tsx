import { getAllBlogCategories } from "@/lib/api/blogs/single-blog";
import { Check } from "lucide-react";
import Link from "next/link";

const CommonBlogSidebar = async () => {
  const allCategories = await getAllBlogCategories();

  return (
    <aside className="bg-[url(/blogs/sidebarBanner.webp)] bg-cover bg-center bg-no-repeat p-5 overflow-hidden rounded-xl">
      <h4 className="mb-5 text-white text-[32px]">Blog Categories</h4>
      <ul>
        {allCategories?.map((cat, i) => {
          if (!cat?.name || cat.name.toLowerCase() === "uncategorized") return null;

          return (
            <li key={i} className="flex items-center gap-3 py-1.5">
              <div>
                <span className="bg-black w-[27px] h-[27px] flex items-center justify-center rounded-full">
                  <Check className="text-white" strokeWidth={4} size={16} />
                </span>
              </div>

              <Link
                href={`/blog2/category/${cat.slug}`}
                className="text-white text-base"
                dangerouslySetInnerHTML={{ __html: cat.name }}
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default CommonBlogSidebar;
