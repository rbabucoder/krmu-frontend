export async function getCategoryBySlug(slug: string) {
  const res = await fetch(
    `https://www.krmangalam.edu.in/blog/wp-json/wp/v2/categories?slug=${slug}`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  return data?.[0] || null;
}
