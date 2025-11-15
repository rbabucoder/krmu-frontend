import * as cheerio from "cheerio";
import { getFacultyBySlug } from "@/lib/api/faculty";
import FacultyTabsScript from "./FacultyTabsScript";
import { getImageById } from "@/lib/api/blogs/single-blog";
import Image from "next/image";

const page = async () => {
  const facultyResData = await getFacultyBySlug();

  const facultyContent = facultyResData[0]?.content.rendered || "";
  const facultyImgId = facultyResData[0]?.featured_media;

  const facultyName = facultyResData[0]?.title?.rendered || "";
  // const facultyDesignation = facultyResData[0]

  const $ = cheerio.load(facultyContent);

  // Select all fusion-fullwidth blocks
  const blocks = $(".fusion-fullwidth");

  // Extract the `.interest-lists` HTML before removing anything
  const interestHTML = $(".interest-lists").prop("outerHTML") || "";

  // Remove all blocks except the third block (index 2)
  blocks.not(blocks.eq(2)).remove();

  // Cleaned main HTML
  const cleanedHTML = $.html();

  const facImgUrl = await getImageById(facultyImgId);

  console.log(facImgUrl);

  return (
    <section
      className="faculty_container h-full w-full"
      style={{
        background: `linear-gradient(168deg,#051630 6.9%,#004e8a 162.66%)`,
      }}
    >
      <div className="fac_info_container">
        <div className="fac_img_container">
          {facImgUrl && (
            <Image
              src={facImgUrl}
              width={272}
              height={292}
              className="h-[292px] rounded-[20px] inline-block"
              alt={""}
            />
          )}
        </div>
        <div className="fac_name_desg_int text-white">
          <h1 className="text-2xl lg:text-[35px] font-semibold">
            {facultyName}
          </h1>
          {/* Render extracted Interest Area(s) */}
          <div
            dangerouslySetInnerHTML={{ __html: interestHTML }}
            className="faculty_interest_wrapper"
          />
        </div>
        <div className="fac_social_links"></div>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: cleanedHTML }}
        className="faculty_main_content_container"
      />

      <FacultyTabsScript />
    </section>
  );
};

export default page;
