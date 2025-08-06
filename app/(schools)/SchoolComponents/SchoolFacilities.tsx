import Image from "next/image";

const SchoolFacilities = () => {
  return (
    <div className="py-[30px] bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-center text-white px-4">
          <h5 className="text-3xl md:text-5xl lg:text-6xl xl:text-[80px] font-medium">
            Facilities
          </h5>
          <h6 className="text-xl md:text-2xl mb-5 font-semibold">
            Exceptional Library with a vast collection of influential books
          </h6>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/schools/library.webp"
            width={1140}
            height={607}
            alt="Library"
          />
        </div>
      </div>
    </div>
  );
};

export default SchoolFacilities;
