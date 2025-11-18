import { STRAPI_URL } from "@/app/constant";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  info: string;
  achievementsImages: StrapiMedia[];
};

const StudentAchievementCard = ({ info, achievementsImages }: Props) => {
  return (
    <div className="border border-[#e2e2e2] p-5 rounded-[5px]">
      <div className="mb-5 space-y-4">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {achievementsImages &&
              achievementsImages?.map((image, i) => {
                return (
                  <CarouselItem key={i}>
                    {image?.url ? (
                      <Image
                        src={`${STRAPI_URL}${image?.url}`}
                        width={443}
                        height={476}
                        alt=""
                        className="h-80 w-full object-contain"
                      />
                    ) : (
                      <Skeleton className="w-full h-80" />
                    )}
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          {achievementsImages && achievementsImages.length > 1 && (
            <>
              <CarouselPrevious className="left-0 rounded-none text-white bg-black cursor-pointer" />
              <CarouselNext className="right-0 rounded-none text-white bg-black cursor-pointer" />
            </>
          )}
        </Carousel>
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: info,
          }}
          className="student_achiev_content"
        />
      </div>
    </div>
  );
};

export default StudentAchievementCard;
