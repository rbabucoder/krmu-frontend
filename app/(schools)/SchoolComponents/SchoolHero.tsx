import Link from "next/link";

const SchoolHero = () => {
  return (
    <section className="py-[10%] bg-[url(/schools/soet-bg.webp)] bg-cover bg-center">
      <div className="max-w-[1850px] mx-auto w-full flex items-center justify-between">
        <div className="text-center text-white w-full md:w-1/2 pr-52">
          <h2 className="text-[28px] mb-5 font-medium">
            Empowering Minds, Engineering Dreams
          </h2>
          <h1 className="text-5xl font-semibold">
            School of Engineering & Technology
          </h1>
          <div className="flex items-center justify-center gap-5 my-4">
            <Link
              href="#"
              className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm"
            >
              Explore Programmes
            </Link>
            <Link
              href="#"
              className="py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm"
            >
              School Handbook
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 ml-20 flex justify-end">
          <iframe
            width="800"
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
