import Image from "next/image";
import { IndustryExpertLogo } from "../admission/mca-2026-bk/contentType";

type Props = {
  data: IndustryExpertLogo;
};

const IndustryExpertCard = ({ data }: Props) => {
  return (
    <div className="bg-white hover:bg-[#0060aa] transition-all duration-200 h-[320px] md:h-[350px] flex items-center justify-center relative rounded-[10px] group">
      
      <Image
        src={data.src}
        width={data.width}
        height={data.height}
        alt={data.alt}
        className="object-contain transition-all duration-200"
      />

      {/* Corner decorations */}
      {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map(
        (pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} p-2 text-xl text-black group-hover:text-white transition-all duration-200`}
          >
            +
          </span>
        )
      )}
    </div>
  );
};

export default IndustryExpertCard;
