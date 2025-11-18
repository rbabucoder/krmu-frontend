

const OurRecruiterCounter = () => {
  return (
    <>
      <section className="py-8 px-4">
        <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-6 lg:gap-20 items-center justify-between">
          <div className="w-full lg:w-1/3 p-5 text-center bg-[#051630] flex flex-col justify-center items-center text-white rounded-[20px]">
            <span className="text-4xl md:text-[65px] font-bold">700+</span>
            <span className="text-xl">Recruiters</span>
          </div>
          <div className="w-full lg:w-1/3 p-5 text-center bg-[#051630] flex flex-col justify-center items-center text-white rounded-[20px]">
            <span className="text-4xl md:text-[65px] font-bold">100%</span>
            <span className="text-xl">Placements Assistance</span>
          </div>
          <div className="w-full lg:w-1/3 p-5 text-center bg-[#051630] flex flex-col justify-center items-center text-white rounded-[20px]">
            <span className="text-4xl md:text-[65px] font-bold">₹56 LPA</span>
            <span className="text-xl">Highest Package</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurRecruiterCounter;
