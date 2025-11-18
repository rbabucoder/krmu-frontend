import Image from "next/image";
import Link from "next/link";
import { ElevateCampusContent } from "@/lib/types/home";
import { StrapiMedia } from "@/lib/types/common";
import { STRAPI_URL } from "../constant";

interface ElevateCampusProp {
  elevateCampus: ElevateCampusContent;
  elevateCampus2: ElevateCampusContent;
  elevateCampus3: ElevateCampusContent;
  elevateImage1: StrapiMedia;
  elevateImage2: StrapiMedia;
  elevateImage3: StrapiMedia;
}

const ElevateCampus = ({
  elevateCampus,
  elevateImage1,
  elevateCampus2,
  elevateImage2,
  elevateCampus3,
  elevateImage3,
}: ElevateCampusProp) => {
  return (
    <>
      <section className="xl:-mt-[70px]">
        <div className="flex flex-col xl:flex-row">
          <div className="xl:mt-[120px] xl:mb-5 w-full xl:w-1/2 ">
            <div className="p-5 2xl:mb-5 xl:py-[30px] xl:pr-20 xl:pl-[200px] bg-[#e5e6f3] xl:min-h-[503px] h-full">
              <h4 className="text-lg font-semibold mb-3">
                {elevateCampus?.subtitle}
              </h4>
              <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold leading-[1.5] mb-8">
                {elevateCampus?.beforehighlighttext}{" "}
                <span className="text-[#000e8b]">
                  {elevateCampus?.highlighttext}
                </span>{" "}
                <br />
                {elevateCampus?.afterhighlighttext}
              </h3>
              <p className="mb-5">{elevateCampus?.content}</p>
              {(elevateCampus.link || elevateCampus.linkclass) && (
                <Link href={elevateCampus.link} className="text-[#000e8b] pb-2 underline underline-offset-8">
                  {elevateCampus?.linktext}
                </Link>
              )}
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Image
              src={`${STRAPI_URL}${elevateImage1.url}`}
              alt="Elevate"
              width={994}
              height={607}
              className={`h-full w-full object-cover ${elevateCampus?.linkclass}`}
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row">
          <div className="xl:mt-8 xl:mb-5 w-full xl:w-1/2">
            <div className="2xl:mb-8 p-5 xl:py-[30px] xl:pr-20 lg:pl-[200px] bg-[#fce8e9] xl:min-h-[503px] h-full">
              <h4 className="text-lg font-semibold mb-3">
                {elevateCampus2?.subtitle}
              </h4> 
              <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold leading-[1.5] mb-8">
                {elevateCampus2?.beforehighlighttext} {" "}<br className="hidden lg:block" />
                <span className="text-[#e31e24]">
                  {elevateCampus2?.highlighttext}
                </span>{" "}
                {elevateCampus2?.afterhighlighttext}
              </h3>
              <p className="mb-5">{elevateCampus2?.content}</p>
              {(elevateCampus2?.link || elevateCampus2?.linkclass) && (
                <Link
                  href={elevateCampus2?.link}
                  className={`text-[#e31e24] pb-2 ${elevateCampus2?.linkclass} underline underline-offset-8`}
                >
                  {elevateCampus2?.linktext}
                </Link>
              )}
            </div>
          </div>
          <div className="w-full xl:w-1/2 xl:min-h-[575px]">
            <Image
              src={`${STRAPI_URL}${elevateImage2?.url}`}
              alt="Elevate"
              width={993}
              height={575}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row">
          <div className="2xl:mt-8 w-full xl:w-1/2">
            <div className="p-5 xl:mb-5  xl:py-[30px] xl:pr-20 xl:pl-[200px] bg-[#e5eff6] xl:min-h-[503px] h-full">
              <h4 className="text-lg font-semibold mb-3">
                {elevateCampus3?.subtitle}
              </h4>
              <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold leading-[1.5] mb-8">
                {elevateCampus3?.beforehighlighttext}
                <span className="text-[#0060aa]">
                  <br /> {elevateCampus3?.highlighttext}
                </span>
                {elevateCampus3?.afterhighlighttext}
              </h3>
              <p className="mb-5">{elevateCampus3?.content}</p>
              {(elevateCampus3?.link || elevateCampus3?.linkclass) && (
                <Link
                  href={elevateCampus3?.link}
                  className={`text-[#0060aa] pb-2 ${elevateCampus3?.linkclass} underline underline-offset-8`}
                >
                  {elevateCampus3?.linktext}
                </Link>
              )}
            </div>
          </div>
          <div className="w-full xl:w-1/2 2xl:min-h-[575px] h-full">
            <Image
              src={`${STRAPI_URL}${elevateImage3.url}`}
              alt="Elevate"
              width={993}
              height={596}
              className="h-[600px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ElevateCampus;
