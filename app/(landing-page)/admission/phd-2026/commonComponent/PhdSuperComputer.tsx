import Image from "next/image";

const PhdSuperComputer = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1300px] mx-auto w-full flex gap-10">
        <div className="w-1/3">
          <h3 className="text-5xl font-bold">
            SUPER COMPUTER <br /> FOR NEW <br /> RESEARCH
          </h3>
        </div>
        <div className="w-1/3">
          <div className="bg-[#FBBF24] py-10 px-2.5 rounded-[5px]">
            <div className="border-b border-white flex gap-2.5 items-start pb-2.5 px-2.5">
              <span className="mt-1 block">
                <Image
                  src="/landingpage/phd/why-phd/item-5.svg"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt=""
                />
              </span>
              <span className="text-sm inline-block">
                <strong>Future focus</strong> on Semiconductor Research &
                Development aligning with India's tech advancements.
              </span>
            </div>
            <div className="border-b border-white flex gap-2.5 items-start pt-5 pb-2.5 px-2.5">
              <span className="mt-1 block">
                <Image
                  src="/landingpage/phd/why-phd/item-5.svg"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt=""
                />
              </span>
              <span className="text-sm inline-block">
                Support for <strong>AI-based startups</strong> through K.R.
                Mangalam Launchpad, the on-campus innovation incubator.
              </span>
            </div>
            <div className="border-b border-white flex gap-2.5 items-start pt-5 pb-2.5 px-2.5">
              <span className="mt-1 block">
                <Image
                  src="/landingpage/phd/why-phd/item-5.svg"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt=""
                />
              </span>
              <span className="text-sm inline-block">
                <strong>Industry tie-up</strong> with 'Ultipa' to explore the
                opportunities for <strong>internship & placement</strong>.
              </span>
            </div>
            <div className="border-b border-white flex gap-2.5 items-start pt-5 pb-2.5 px-2.5">
              <span className="mt-1 block">
                <Image
                  src="/landingpage/phd/why-phd/item-5.svg"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt=""
                />
              </span>
              <span className="text-sm inline-block">
                <strong>AI for all programmes:</strong> Technical and
                Non-Technical & Cutting-edge research centres in AI, Robotics, &
                Healthcare.
              </span>
            </div>
            <div className="border-b border-white flex gap-2.5 items-start pt-5 pb-2.5 px-2.5">
              <span className="mt-1 block">
                <Image
                  src="/landingpage/phd/why-phd/item-5.svg"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt=""
                />
              </span>
              <span className="text-sm inline-block">
                <strong>Global tie-ups</strong> with the University of Maryland,
                USA, & UniversidadAutonoma de Tamaulipas, Mexico to train
                students in new & emerging areas of AI.
              </span>
            </div>
            <div className="flex gap-2.5 items-start pt-5 pb-2.5 px-2.5">
              <span className="mt-1 block">
                <Image
                  src="/landingpage/phd/why-phd/item-5.svg"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt=""
                />
              </span>
              <span className="text-sm inline-block">
                <strong>Graduates placed</strong> in leading companies like Citi
                Banl, Barclays, FedEx, Ernst & Young, Tech Mahindra and more.
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <Image
            src="/landingpage/phd/new-research.webp"
            width={400}
            height={580}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default PhdSuperComputer;
