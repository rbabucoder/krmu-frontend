import Image from "next/image";

const AFS = () => {
  return (
    <>
      <section className="py-8 px-5">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="flex flex-wrap gap-2.5 justify-center sm:grid md:grid-col-2 lg:grid-cols-3">
            <div className="flex items-center gap-2.5">
              <Image src="/adm.svg" width={33} height={33} alt="ADM" />
              <span className="text-lg font-medium">Admission</span>
              <Image
                src="/arrow-1.svg"
                width={17}
                height={32}
                alt="Black Arrow"
              />
            </div>
            <div className="flex items-center gap-2.5">
              <Image src="/fee.svg" width={38} height={38} alt="ADM" />
              <span className="text-lg font-medium">Fee Structure</span>
              <Image
                src="/arrow-1.svg"
                width={17}
                height={32}
                alt="Black Arrow"
              />
            </div>
            <div className="flex items-center gap-2.5">
              <Image src="/scholar.svg" width={54} height={43} alt="ADM" />
              <span className="text-lg font-medium">Scholarships</span>
              <Image
                src="/arrow-1.svg"
                width={17}
                height={32}
                alt="Black Arrow"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AFS;
