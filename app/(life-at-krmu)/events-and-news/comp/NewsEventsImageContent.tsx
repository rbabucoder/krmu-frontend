import { STRAPI_URL } from "@/app/constant";
import { ParagraphBlock } from "@/lib/types/about";
import { StrapiMedia } from "@/lib/types/common";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

type Props = {
  bgSlide: StrapiMedia[];
  content: ParagraphBlock[];
};

const NewsEventsImageContent = ({ bgSlide, content }: Props) => {
  return (
    <section className="py-12">
      <div className="max-w-[1664px] mx-auto w-full flex">
        <div className="w-1/2">
          <div className="bg-[#051630] text-white p-5 mx-8 text-sm">
           <BlocksRenderer content={content} />
          </div>
        </div>
        <div className="w-1/2">
          <div className="grid grid-cols-2 gap-1.5">
            {bgSlide &&
              bgSlide.map((slide) => {
                return (
                  <Image
                    key={slide?.id}
                    src={`${STRAPI_URL}${slide?.url}`}
                    width={381}
                    height={305}
                    alt={slide?.alternativeText || ""}
                    className="w-full h-full"
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsImageContent;
