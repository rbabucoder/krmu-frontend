import PHDRegulationCards from "./comp/PHDRegulationCards";
import PHDRegulationHero from "./comp/PHDRegulationHero";

const page = () => {
  return (
    <>
      <section className="pt-[140px] lg:pt-[10%] md:pb-[100px] bg-[#09215b] px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <PHDRegulationHero />
          <PHDRegulationCards />
        </div>
      </section>
    </>
  );
};

export default page;
