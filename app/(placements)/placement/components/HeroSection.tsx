const HeroSection = () => {
  return (
    <>
      <section className="bg-[url(/programmes/placementprocessbannerbg.webp)] bg-no-repeat bg-center bg-cover pt-[25%] md:pt-[15%] pb-[12%] px-4">
        <div className="max-w-[1664px] mx-auto w-full lg:flex items-center">
          <div className="lg:w-1/2 text-white">
            <h3 className="text-2xl md:text-4xl font-light lg:text-4xl my-2.5">
              Embark on Your Professional Journey with
            </h3>
            <h1 className="text-2xl md:text-[44px] lg:text-5xl font-semibold my-2.5">
              K.R. Mangalam University Placements
            </h1>
          </div>
          <div className="lg:w-1/2">
            <iframe
              width="100%"
              height="420"
              src="https://www.youtube.com/embed/NhArKFwk75U?si=J-ZAW-CIcQEI76jv"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <div className="max-w-[1664px] mx-auto w-full md:-mt-[5%] p-5 md:px-0">
        <div className="md:flex w-full">
          <div className=" md:w-1/3 bg-[#0060aa] p-10">
            <span className="flex flex-col justify-center items-center text-white">
              <h3 className="leading-[2] text-4xl font-semibold">700+</h3>
              <p className="text-base">Campus Recruiters</p>
            </span>
          </div>
          <div className=" md:w-1/3 bg-[#e31e24] p-10">
            <span className="flex flex-col justify-center items-center text-white">
              <h3 className="leading-[2] text-4xl font-semibold">700+</h3>
              <p className="text-base">Campus Recruiters</p>
            </span>
          </div>
          <div className=" md:w-1/3 bg-[#000e8b] p-10">
            <span className="flex flex-col justify-center items-center text-white">
              <h3 className="leading-[2] text-4xl font-semibold">700+</h3>
              <p className="text-base">Campus Recruiters</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
