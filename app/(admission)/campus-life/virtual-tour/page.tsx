import VirtualSchedule from "./comp/VirtualSchedule";
import VirtualTour from "./comp/VirtualTour";
import VirtualTourHero from "./comp/VirtualTourHero";

const page = () => {
  return (
    <>
      <section className="pt-[140px] pb-10 lg:pt-[187px] lg:pb-[374px] bg-[url(/virtual-tour/virtualtour-bg.webp)] bg-cover bg-no-repeat px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <VirtualTourHero />
          <VirtualTour />
        </div>
      </section>
      <VirtualSchedule />
    </>
  );
};

export default page;
