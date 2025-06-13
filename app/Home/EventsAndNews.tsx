import HomeNewsEventsCard from "../components/Cards/HomeNewsEventsCard";

const EventsAndNews = () => {
  return (
    <>
      <section className="bg-[#051630] px-5 pb-12 lg:px-8 lg:pb-20">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="lg:mx-8 ">
            <h4 className="text-4xl lg:text-5xl leading-[1.17] font-light text-center text-white lg:pt-2.5 lg:pb-16 lg:text-left">
              Events and News
            </h4>
            <div className="grid gap-5 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-0 mt-5 lg:mt-0">
              <HomeNewsEventsCard />
              <HomeNewsEventsCard />
              <HomeNewsEventsCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsAndNews;
