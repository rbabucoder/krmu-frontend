import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="pt-20 md:pt-[15%] pb-[10%] bg-[url(/placements/74-scaled.webp)]">
        <div className="max-w-[1664px] mx-auto w-full">
          <h1 className="text-3xl md:text-5xl text-white text-center font-bold">
            Placement Highlights
          </h1>
        </div>
      </section>
      <section className="py-[50px] px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <div key={i} className="w-full flex items-center justify-center">
                  <Image
                    src="/placements/rishav-bakshi-pr.webp"
                    width={377}
                    height={377}
                    alt="Rishav"
                    className="border border-black"
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

export default page;
