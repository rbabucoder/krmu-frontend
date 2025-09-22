import Image from "next/image";

const PrintCoverageCard = () => {
  return (
    <div className="p-5 bg-[#141444] flex text-white w-1/4 rounded-2xl">
      <div className="w-[70%]">
        <h4 className="text-lg font-semibold mb-2.5">
          Orientation Programme 2025
        </h4>
        <h5>25th August 2025</h5>
      </div>
      <div className="w-[30%] flex justify-center items-start">
        <Image
          src="/life-at-krmu/pdficon.webp"
          width={30}
          height={39}
          alt="pdf icon"
        />
      </div>
    </div>
  );
};

export default PrintCoverageCard;
