import * as cheerio from "cheerio";
import { getFacultyBySlug } from "@/lib/api/faculty";
import FacultyTabsScript from "./FacultyTabsScript";

const page = async () => {
  const facultyResData = await getFacultyBySlug();
  const facultyContent = facultyResData[0]?.content.rendered || "";

  const $ = cheerio.load(facultyContent);

  // Select all fusion-fullwidth blocks
  const blocks = $(".fusion-fullwidth");

  // Keep only the third → remove all except index 2
  blocks.not(blocks.eq(2)).remove();

  // Final cleaned HTML
  const cleanedHTML = $.html();

  return (
    <section
      className="faculty_container"
      style={{
        background: `linear-gradient(168deg,#051630 6.9%,#004e8a 162.66%)`,
      }}
    >
      <div
        dangerouslySetInnerHTML={{ __html: cleanedHTML }}
        className="faculty_main_content_container"
      />
        <FacultyTabsScript />
    </section>
  );
};

export default page;
