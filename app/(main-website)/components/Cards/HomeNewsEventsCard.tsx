import Image from "next/image";
import Link from "next/link";
import { StrapiMedia } from "@/lib/types/common";
import { STRAPI_URL } from "@/app/constant";

interface HomeNewsEventsCardProps {
  data: {
    id: number;
    title: string;
    createdAt: string;
    newsmedia: StrapiMedia[];
  };
}

const HomeNewsEventsCard: React.FC<HomeNewsEventsCardProps> = ({ data }) => {
  const image = data.newsmedia?.[0];
  const formattedDate = new Date(data.createdAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div>
      <div>
        <Link href={`/news-events/${data.id}`}>
          <Image
            src={`${STRAPI_URL}${image.url}`}
            alt={image?.alternativeText || data.title}
            width={466}
            height={312}
            className="w-full rounded-t-3xl object-cover"
          />
        </Link>
        <div className="pt-5 pl-0 sm:pl-7 text-white">
          <span className="text-sm text-[#898989]">Published On: {formattedDate}</span>
          <div className="flex flex-col">

          <Link
            href="#"
            className="font-medium text-xl leading-[1] mt-2.5 mb-4 inline-block h-[50px]"
            >
            <h5>{data.title}</h5>
          </Link>
          <Link href="#" className="text-xs underline italic">
            Know More
          </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsEventsCard;
