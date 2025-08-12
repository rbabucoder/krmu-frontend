import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";

type Props = {
  logoUrl: string;
  altText: string;
};

const AlumniLogoCard = ({ logoUrl, altText }: Props) => {
  return (
    <div className="p-2 md:p-4 flex items-center justify-center rounded-[30px] bg-[url(/bg-1.webp)] bg-cover bg-center">
      <Image
        src={`${STRAPI_URL}${logoUrl}`}
        width={150}
        height={80}
        alt={altText}
      />
    </div>
  );
};

export default AlumniLogoCard;
