import { getCategoryBySlug } from "@/lib/api/blogs/cat-blog";
import { ReactNode } from "react";

type Props = {
  params: Promise<{ slug: string }>;
  children: ReactNode;
};

export default async function CategorySlugPage({ params, children }: Props) {
  const { slug } = await params;

  const catData = await getCategoryBySlug(slug);

  const catName = catData?.name;

  return <>
    <h3 className="mb-5 px-2.5 text-4xl font-semibold underline">{catName}</h3>
  {children}</>;
}
