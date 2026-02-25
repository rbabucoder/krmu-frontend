import { STRAPI_URL } from "@/app/constant";
import { NewsItem } from "@/lib/api/overviewslide";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  data: NewsItem[];
};

const OverviewUpdatedSlide = ({ data }: Props) => {

  return (
    <>
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {data &&
            data.map((item, i) => (
              <CarouselItem key={i} className="md:basis-1/2">
                <div className="pt-2.5 px-2.5 pb-5 bg-[#172a45] rounded-[25px]">
                  <Image
                    src={`${STRAPI_URL}${item?.newsmedia?.[0]?.url}`}
                    width={338}
                    height={263}
                    alt={item?.title || "news image"}
                    className="w-full rounded-[25px]"
                    unoptimized
                  />

                  <div className="text-white mt-5">
                    <h4 className="text-xl font-semibold mb-6">
                      {item?.title}
                    </h4>

                    <span className="line-clamp-2">
                      <BlocksRenderer content={item.content} />
                    </span>

                    {item?.slug && (
                      <Link
                        href={`/events-and-news/${item.slug}`}
                        className="text-white text-xs underline underline-offset-2"
                        target="_blank"
                      >
                        Show More
                      </Link>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>

        <CarouselPrevious className="left-0 rounded-none bg-black text-white opacity-10" />
        <CarouselNext className="right-0 rounded-none bg-black text-white opacity-10" />
      </Carousel>
    </>
  );
};

export default OverviewUpdatedSlide;
