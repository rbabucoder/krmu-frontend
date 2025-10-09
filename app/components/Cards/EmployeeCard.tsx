import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  imgUrl: string;
  qual: string;
  desg: string;
  slug: string;
};

export const EmployeeCard = ({ name, imgUrl, qual, desg, slug }: Props) => {
  return (
    <>
      <div>
        <div className="mb-4">
          <Image
            src={`${STRAPI_URL}${imgUrl}`}
            width={272}
            height={295}
            alt={name}
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
            className="rounded-[15px]"
          />
        </div>
        <Link
          href={`/faculty/${slug}`}
          className="hover:text-[#0060aa] cursor-pointer flex flex-col gap-1.5 text-base"
          target="_blank"
        >
          <span className=" md:text-2xl font-bold leading-[1]">{name}</span>
          <span className="font-normal md:font-medium break-all">{desg}</span>
          <span className="md:text-xl font-semibold">{qual}</span>
        </Link>
      </div>
    </>
  );
};
