import Image from "next/image";
import Link from "next/link";

const SchoolCommenceJourney = () => {
  return (
    <div className="py-16">
      <div className="max-w-[1664px] mx-auto w-full">
        <h4 className="text-[#0078bf] text-[64px] leading-[1.2] font-medium">
          Commence Your Journey
        </h4>
        <h4 className="text-[64px] leading-[1.2] font-medium">
          in 6 Simple Steps
        </h4>
      </div>
      <Image
        src="/schools/yourjourney.webp"
        width={1921}
        height={689}
        alt="Your journey"
        className="w-full h-full"
      />
      <div className="flex justify-center">
        <Link
          href="#"
          className="py-3.5 px-8 bg-[#051630] font-bold rounded-sm inline-block text-white"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default SchoolCommenceJourney;
