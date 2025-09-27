import Link from "next/link";

const FeeStructureHero = () => {
  return (
    <section className="pt-[10%] pb-[10%] bg-[url(/85.webp)] bg-cover bg-no-repeat">
      <div className="text-center max-w-[1600px] mx-auto w-full">
        <h1 className="text-white text-[64px] font-semibold leading-[1] mb-10">
          Fee Structure for <br /> Academic Year 2025-2026
        </h1>
        <Link
          href="#"
          className="bg-[#e31e24] text-white text-[13px] rounded-[5px] py-[11px] px-[23px] hover:bg-[#034272] cursor-pointer"
        >
          Explore Programmes
        </Link>
      </div>
    </section>
  );
};

export default FeeStructureHero;
