

const OurRecruiterCounter = () => {
  return (
    <>
      <section className="py-8 px-4">
        <div className="max-w-main mx-auto w-full flex flex-col lg:flex-row gap-6 lg:gap-20 items-center justify-between">
          <div className="w-full lg:w-1/3 p-5 text-center bg-krmu-navy flex flex-col justify-center items-center text-white rounded-panel">
            <span className="text-4xl md:text-[65px] font-bold">800+</span>
            <span className="text-xl">Recruiters</span>
          </div>
          <div className="w-full lg:w-1/3 p-5 text-center bg-krmu-navy flex flex-col justify-center items-center text-white rounded-panel">
            <span className="text-4xl md:text-[65px] font-bold">100%</span>
            <span className="text-xl">Placements Assistance</span>
          </div>
          <div className="w-full lg:w-1/3 p-5 text-center bg-krmu-navy flex flex-col justify-center items-center text-white rounded-panel">
            <span className="text-4xl md:text-[65px] font-bold">₹56.6 LPA</span>
            <span className="text-xl">Highest Package</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurRecruiterCounter;
