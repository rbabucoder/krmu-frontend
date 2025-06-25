import { CounterItem } from "@/lib/types/common";
import { StrapiMedia } from "@/lib/types/home";
import Image from "next/image";

interface OurTopRecruitProps {
  counters: CounterItem[];
  logos: StrapiMedia[];
}

const imageURL = `${
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
}`;

const OurTopRecruiters: React.FC<OurTopRecruitProps> = ({
  counters,
  logos,
}) => {
  return (
    <section className="bg-[#051630] overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 pt-12 lg:py-20 px-5 lg:px-0 lg:mx-8 text-center md:text-left">
          <h4 className="text-4xl md:text-5xl xl:text-[80px] font-medium leading-[1.13] grad-text-color">
            Our Top <br className="hidden lg:block" /> Recruiters are
            <br className="hidden lg:block" /> Waiting for You
          </h4>
          <div className="grid grid-cols-2 text-white mt-10">
            {counters.map((counter) => (
              <div key={counter.id} className="flex flex-col mb-5">
                <span className="text-2xl md:text-5xl xl:text-[55px] font-semibold">
                  {counter.countertext}
                </span>
                <span className="text-sm md:text-xl xl:text-2xl font-semibold">
                  {counter.countercontent}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 pb-12 px-5 w-full lg:w-1/2 lg:px-5 lg:pt-8 lg:pb-2.5 lg:mx-8 bg-[linear-gradient(0deg,_#0060aa_0%,_#051630_100%)]">
          {logos.map((logo, index) => (
            <div
              key={logo.id || index}
              className="p-4 mx-1.5 border border-[#ffffff40] rounded-xl mb-5 flex items-center justify-center"
            >
              {logo.url && (
                <Image
                  src={`${imageURL}${logo.url}`}
                  width={logo.width || 154} // Fallback width
                  height={logo.height || 67} // Fallback height
                  alt={logo.alternativeText || "Company Logo"}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTopRecruiters;
