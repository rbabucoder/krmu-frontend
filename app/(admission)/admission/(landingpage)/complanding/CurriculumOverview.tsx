import React from 'react';
import { CurriculumData } from '../mba-2025/constant/curriculum';

interface CurriculumOverviewProps extends CurriculumData {
  className?: string;
}

const CurriculumOverview: React.FC<CurriculumOverviewProps> = ({
  badgeText = "Curriculum Overview",
  heading = {
    highlighted: "Comprehensive Curriculum",
    normal: "Tailored for Future Business Leaders"
  },
  description = "Our curriculum is structured to provide a balanced mix of theoretical knowledge and practical skills, ensuring students are well-prepared for real-world business challenges.",
  years = [],
  className = ""
}) => {
  return (
    <section className={className}>
      <div className="container mx-auto max-w-7xl px-4 pt-4">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          {/* Badge */}
          <span className="inline-block bg-white font-light text-black rounded-[50px] px-4 py-2 mb-4 border border-gray-100 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] text-sm md:text-base">
            {badgeText}
          </span>
          
          {/* Heading */}
          <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-4 leading-tight">
            <span className="text-[#e31e25]">{heading.highlighted}</span> {heading.normal}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg px-4">
            {description}
          </p>
        </div>
        
        {/* Curriculum Years Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 mt-20">
          {years.map((year) => (
            <div key={year.id} className="flex">
              <div className="curr-container relative border-2 border-[#e31e25] rounded-[20px] pt-14 pb-8 px-6 md:px-8 w-full flex flex-col group hover:shadow-xl hover:border-[#c7181f] transition-all duration-300">
                {/* Year Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#e31e24] text-white font-bold px-6 py-3 rounded-full shadow-[0px_10px_48px_-12px_rgba(227,30,36,0.7)] group-hover:bg-[#c7181f] transition-colors duration-300 text-sm md:text-base">
                    {year.year}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex flex-col h-full">
                  {/* Year Title */}
                  {year.title && (
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                      {year.title}
                    </h3>
                  )}
                  
                  {/* Year Items */}
                  <ul className="space-y-4 mb-6 grow">
                    {year.items.map((item) => (
                      <li key={item.id} className="flex items-start gap-3 md:gap-4 group/item hover:translate-x-1 transition-transform duration-200">
                        {/* Custom tick icon using SVG */}
                        <div className="shrink-0 mt-1">
                          <svg 
                            className="w-5 h-5 md:w-6 md:h-6 text-[#e31e25]" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="3" 
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm md:text-base">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Highlight */}
                  <div className="mt-auto pt-4">
                    <h4 className="text-base md:text-lg font-semibold text-gray-800 leading-relaxed">
                      {year.highlight}
                    </h4>
                  </div>
                  
                  {/* Footer Text */}
                  {year.footerText && (
                    <p className="text-gray-600 text-sm md:text-base mt-4 italic">
                      {year.footerText}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumOverview;