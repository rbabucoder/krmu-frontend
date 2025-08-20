import Image from "next/image";

const CareerProspects = () => {
  return (
    <>
      <section className="prog-global-padding bg-[#f8f9fd]">
        <div className="max-w-[1320px] mx-auto w-full flex">
          <div className="w-1/2">
            <h3 className="text-[40px] font-semibold text-[#0a41a1] mb-6">
              Career <span className="text-[#db2a1a]">Prospects</span>
            </h3>
            <p className="mb-6">
              The B.Tech. in Computer Science and Engineering Programme opens a
              ton of opportunities for our graduates in the field of technology,
              computing, and engineering. Our diverse curriculum ensures that
              our graduates end up well-equipped with all the skills required to
              navigate through the dynamic field of engineering.
            </p>
            <div>
              <div className="pl-10 relative">
                <span className="absolute -left-2 top-0 px-2.5 py-[5px] rounded-[10px] text-white bg-[#db2a1a]">
                  01
                </span>
                <h4 className="font-medium text-2xl">Software Developer</h4>
                <p className="mb-4">
                  A software developer builds software with the use of code and
                  programming languages to bring their innovative ideas into
                  reality. A software developer builds software with the use of
                  code and programming languages to bring their innovative ideas
                  into reality.
                </p>
              </div>
              <div className="pl-10 relative">
                <span className="absolute -left-2 top-0 px-2.5 py-[5px] rounded-[10px] text-white bg-[#db2a1a]">
                  02
                </span>
                <h4 className="font-medium text-2xl">Data Scientist</h4>
                <p className="mb-4">
                  As a data scientist, you will analyse data sets, performance,
                  threads, graphs, and charts to find efficient solutions for
                  your company/business.
                </p>
              </div>
              <div className="pl-10 relative">
                <span className="absolute -left-2 top-0 px-2.5 py-[5px] rounded-[10px] text-white bg-[#db2a1a]">
                  03
                </span>
                <h4 className="font-medium text-2xl mb-2">AI/ML Engineer</h4>
                <p className="mb-2">
                  As an AI/ML Engineer, you will be responsible for developing
                  cutting-edge technologies and enhancing the existing ones by
                  incorporating AI technology with machine learning algorithms
                  and automated codes.
                </p>
              </div>
              <div className="pl-10 relative">
                <span className="absolute -left-2 top-0 px-2.5 py-[5px] rounded-[10px] text-white bg-[#db2a1a]">
                  04
                </span>
                <h4 className="font-medium text-2xl mb-2">IT Consultant</h4>
                <p>
                  These professionals consult IT experts, businesses, and
                  industry tycoons to help their businesses grow more
                  efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/programmes/7.webp"
              width={660}
              height={660}
              className="w-full h-full"
              alt="Career"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerProspects;
