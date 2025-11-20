import { getAllBlogCategories } from "@/lib/api/blogs/single-blog";
import { Check } from "lucide-react";
import Link from "next/link";

// ===============================
// 🎯 SHOW OR HIDE CATEGORIES HERE
// ===============================

// ✔ SHOW ONLY these categories (by slug)
const HIDE_CATEGORIES: string[] = [
  "general",
  "medical-and-allied-science",
  "school-of-management-and-commerce",
  "travel-and-tourism",
  // Add more slugs you want to show...
];

// ❌ OR HIDE these categories instead (uncomment to use)
// const HIDE_CATEGORIES: string[] = ["uncategorized", "events"];

// ===============================

const CommonBlogSidebar = async () => {
  const allCategories = await getAllBlogCategories();

  // Filter logic
  const filteredCategories = allCategories?.filter((cat) => {
    if (!cat?.name || !cat?.slug) return false;

    // Skip "Uncategorized"
    if (cat.name.toLowerCase() === "uncategorized") return false;

    // ✔ If using SHOW_CATEGORIES → only show listed ones
    if (HIDE_CATEGORIES.length > 0) {
      return !HIDE_CATEGORIES.includes(cat.slug.toLowerCase());
      //   return SHOW_CATEGORIES.includes(cat.slug.toLowerCase());
    }

    // ❌ If using HIDE_CATEGORIES → hide listed ones
    // return !HIDE_CATEGORIES.includes(cat.slug.toLowerCase());

    return true;
  });

  return (
    <aside className="bg-[url(/blogs/sidebarBanner.webp)] bg-cover bg-center bg-no-repeat p-5 overflow-hidden rounded-xl">
      <h4 className="mb-5 text-white text-[32px]">Blog Categories</h4>

      <ul>
        {filteredCategories?.map((cat, i) => (
          <li key={i} className="flex items-center gap-3 py-1.5">
            <div>
              <span className="bg-black w-[27px] h-[27px] flex items-center justify-center rounded-full">
                <Check className="text-white" strokeWidth={4} size={16} />
              </span>
            </div>

            <Link
              href={`/blog2/all-categories/${cat.slug}`}
              className="text-white text-base"
              dangerouslySetInnerHTML={{ __html: cat.name }}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CommonBlogSidebar;
