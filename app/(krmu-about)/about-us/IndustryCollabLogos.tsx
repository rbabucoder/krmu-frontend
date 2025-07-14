import Image from "next/image";

const IndustryCollabLogos = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
      <Image src="/pranab.webp" width={201} height={115} alt="pranab" />
      <Image src="/Mugliann.webp" width={201} height={115} alt="Mugliann" />
      <Image src="/rk.webp" width={201} height={115} alt="rk" />
    </div>
  );
};

export default IndustryCollabLogos;
