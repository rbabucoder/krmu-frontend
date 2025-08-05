import Link from "next/link";

const SchoolHero = () => {
  return (
    <section className="pt-[150px] pb-20 lg:py-[10%] bg-[url(/schools/soet-bg.webp)] bg-cover bg-no-repeat bg-center px-4">
      <div className="max-w-[1850px] mx-auto w-full lg:flex items-center justify-between">
        <div className="text-center text-white w-full lg:w-1/2 xl:pr-52">
          <h2 className="text-sm md:text-[28px] lg:mb-5 font-medium">
            Empowering Minds, Engineering Dreams
          </h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[1.2  ]">
            School of Engineering & Technology
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 my-4">
            <Link
              href="#"
              className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm text-sm md:text-base"
            >
              Explore Programmes
            </Link>
            <Link
              href="#"
              className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm text-sm md:text-base"
            >
              School Handbook
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:ml-20 lg:pl-20 flex justify-center lg:justify-end ">
          <iframe
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/9I6QQ6ZYCi8?si=6qnopf5aMPVeNE7Q"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SchoolHero;
