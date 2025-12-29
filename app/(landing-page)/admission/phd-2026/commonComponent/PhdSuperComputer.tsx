import Image from "next/image";
import Link from "next/link";

const PhdSuperComputer = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1300px] mx-auto w-full flex flex-col xl:flex-row gap-10">
        <div className="w-full text-center md:text-left xl:w-1/3">
          <div className="">
            <h3 className="text-4xl md:text-5xl font-bold mb-5">
              SUPER <br /> COMPUTER <br /> FOR NEW <br /> RESEARCH
            </h3>
            <div className="custom-border"></div>
          </div>
          <p className="mt-10 mb-5">
            K.R. Mangalam University Proudly Owns Super Computer for Research in
            A.I. & Emerging Technologies
          </p>
          <p className="mb-5">
            K.R. Mangalam University has established K.R. Mangalam NextGen Cyber
            & Quantum Systems Facility with an nVIDIA DGX H100 system, fourth
            generation of the most powerful supercomputer for machine learning
            and artificial intelligence.
          </p>
          <Link
            href="#"
            className="py-3 px-6 bg-[#E30016] text-white rounded-[5px]"
          >
            View More
          </Link>
        </div>
        <div className="w-full xl:w-1/3">
          <div className="bg-[#FBBF24] py-10 px-2.5 rounded-[5px] break-all">
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
        <div className="w-full xl:w-1/3">
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
