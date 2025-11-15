export async function getFacultyBySlug() {
  const res = await fetch(
    "https://krmangalam.edu.in/wp-json/wp/v2/faculty?slug=dr-gajraj-yadav&_fields=content,slug,title,id,yoast_head_json,featured_media,acf",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch Faculty");

  const json = await res.json();
  return json;
}
