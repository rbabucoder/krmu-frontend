import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  title: string;
  slug: string;
  firstImage: string | null;
  publishedAt: string;
};

const NewsCard = ({ title, slug, firstImage, publishedAt }: NewsCardProps) => {
  return (
    <div
      className="rounded-3xl"
      style={{
        background: `linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)`,
        backdropFilter: "blur(13.410955429077px)",
      }}
    >
      {firstImage && (
        <Image
          src={`${STRAPI_URL}${firstImage}`}
          alt={title}
          width={370}
          height={246}
          className="w-full rounded-t-3xl"
        />
      )}

      <div className="pt-5 pl-[30px]">
        <span className="text-xs text-[#898989]">
          Published On:{" "}
          {new Date(publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <div className="text-white mt-2.5 mb-[15px] text-xl font-semibold">
          <h2>{title}</h2>
        </div>
        <div>
          <Link
            href={`/events-and-news/${slug || "#"}`}
            className="italic text-white text-xs underline inline-block py-[29px]"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
