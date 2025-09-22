import Image from "next/image";

const ProminentRecruiters = () => {
  return (
    <>
      <section className="py-10 px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-10">
            {/* {Array.from({ length: 5 }).map((_, index) => ( */}
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src="/placements/aditya.webp"
                    width={234}
                    height={134}
                    alt="Aditya birla group"
                    className="w-full h-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProminentRecruiters;
