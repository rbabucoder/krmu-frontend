
import { industryExpertsContent } from "../admission/mca-2026/content";
import IndustryExpertCard from "./IndustryExpertCard";

const IndustryExperts = () => {
  const { title, description, experts } = industryExpertsContent;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#051630] px-4">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <h4 className="text-3xl sm:text-4xl lg:text-5xl mb-5 text-white">
            {title}
          </h4>
          <p className="text-white text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {experts.map((expert, index) => (
            <IndustryExpertCard key={index} data={expert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExperts;
