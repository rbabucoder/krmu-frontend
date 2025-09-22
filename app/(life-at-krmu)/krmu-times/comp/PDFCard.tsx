import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PDFCard = () => {
  return (
    <div
      className="p-5 rounded-[8px]"
      style={{
        boxShadow: "0px 0px 2px 2px #c6dcfd",
      }}
    >
      <Image
        src="/life-at-krmu/magazines.webp"
        width={392}
        height={450}
        alt=""
        className="w-full"
      />
      <div className="mt-[30px] flex justify-center">
        <Link href="#" className="flex items-center gap-3 p-5 sm:x-2.5 border-2 border-black rounded-full w-fit font-semibold hover:bg-[#034272] hover:text-white
         duration-300 ease-in-out"><span>Download PDF</span><Download /></Link>
      </div>
    </div>
  );
};

export default PDFCard;
