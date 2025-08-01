import Image from "next/image";

const SchoolKnowledgePartner = () => {
  return (
    <section className="py-[30px] bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full flex items-center">
        <div className="w-1/4">
          <h4 className="text-white font-medium text-[64px] leading-[1.2]">
            Knowledge Partners
          </h4>
        </div>
        <div className="w-3/4">
          <div className="bg-white flex items-center justify-between px-5 rounded-[20px]">
            <Image src="/schools/networkbulls.webp" width={161} height={115} alt="networkbulls" />
            <Image src="/schools/princeton.webp" width={196} height={115} alt="princeton" />
            <Image src="/schools/qsd.webp" width={162} height={115} alt="QSD" />
            <Image src="/schools/srm.webp" width={200} height={115} alt="SRM" />
            <Image src="/schools/enviro.webp" width={215} height={115} alt="Enviro" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolKnowledgePartner;
