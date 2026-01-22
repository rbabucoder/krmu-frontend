import Image from "next/image";
import { ProminentRecruiterPerson } from "../admission/mca-2026-bk/contentType";


type Props = {
  data: ProminentRecruiterPerson;
};

const ProminentRecruiterCard = ({ data }: Props) => {
  return (
    <div className="w-[260px] bg-white border border-gray-200 rounded-sm overflow-hidden text-center">
      
      {/* Profile Image */}
      <div className="pt-6 px-6">
        <Image
          src={data.profileImage.src}
          width={data.profileImage.width}
          height={data.profileImage.height}
          alt={data.profileImage.alt}
          className="object-contain mx-auto"
        />
      </div>

      {/* Content */}
      <div className="py-5 px-4">
        <h4 className="text-2xl font-semibold text-black">
          {data.name}
        </h4>

        <p className="text-gray-500 mt-1 text-xl font-semibold">
          ({data.package})
        </p>

        {/* Company */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <Image
            src={data.companyLogo.src}
            width={data.companyLogo.width}
            height={data.companyLogo.height}
            alt={data.companyLogo.alt}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProminentRecruiterCard;
