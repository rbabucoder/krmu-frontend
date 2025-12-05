
import React from 'react';
import { ScholarshipsData } from '../mba-2025/constant/scholarships';

interface ScholarshipsProps extends ScholarshipsData {
  className?: string;
  onApplyClick?: () => void;
}

const Scholarships: React.FC<ScholarshipsProps> = ({
  badgeText = "Scholarships",
  heading = {
    highlighted: "Scholarships That",
    normal: "Empower Your Dreams"
  },
  description = "K.R. Mangalam University is committed to making quality education accessible to all. Our robust scholarship programmes reward academic excellence, foster talent, and provide financial support to deserving students.",
  highlightText = "₹21 Crores",
  subheading = "KRMU offers scholarships for:",
  points = [],
  footerDescription = "Experience a seamless and hassle-free process to make quality education easily accessible.",
  button = {
    text: "Apply Now",
    icon: "fa-solid fa-arrow-right"
  },
  backgroundImage = "/assets/scholar.webp",
  className = "",
  onApplyClick
}) => {
  
  const handleApplyClick = (e: React.MouseEvent) => {
    if (onApplyClick) {
      e.preventDefault();
      onApplyClick();
    } else {
      const formSection = document.getElementById('formSection');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="scholar_sec" className={`py-12 md:py-16`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div 
          className="rounded-[30px] p-6 md:p-8 lg:p-10 relative overflow-hidden"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#000'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 rounded-[30px]"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Left Column - Content Card */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-[30px] p-6 md:p-8 lg:p-10 shadow-2xl h-full">
                  {/* Badge */}
                  <div className="text-center lg:text-left">
                    <span className="inline-block bg-white font-light text-black rounded-[50px] px-4 py-2 mb-4 border border-gray-100 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] text-sm md:text-base">
                      {badgeText}
                    </span>
                  </div>
                  
                  {/* Heading */}
                  <h3 className="text-2xl md:text-3xl lg:text-[40px] font-bold mb-6 leading-tight text-center lg:text-left">
                    <span className="text-[#e31e25]">{heading.highlighted}</span> {heading.normal}
                  </h3>
                  
                  {/* Description */}
                  <div className="space-y-2 mb-6 text-gray-600 text-base md:text-lg">
                    <p>{description}</p>
                    <p>
                      Empower your future with scholarships worth up to{' '}
                      <span className="text-[#e31e25] font-bold">{highlightText}</span>.
                    </p>
                    <p className="font-semibold text-gray-800">
                      {subheading}
                    </p>
                  </div>
                  
                  {/* Points List */}
                  <ul className="space-y-3 mb-6 md:mb-8">
                    {points.map((point) => (
                      <li key={point.id} className="flex items-start gap-3 group">
                        {/* Custom checkmark SVG */}
                        <div className="shrink-0 mt-1">
                          <svg 
                            className="w-5 h-5 md:w-6 md:h-6 text-[#e31e25] group-hover:scale-110 transition-transform duration-200" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm md:text-base flex-1">
                          {point.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Footer Description */}
                  <p className="text-gray-600 text-base md:text-lg mb-8">
                    {footerDescription}
                  </p>
                  
                  {/* Button */}
                  <div className="flex justify-center lg:justify-start">
                    <button 
                      onClick={handleApplyClick}
                      className="bg-[#e31e24] hover:bg-[#c7181f] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0px_10px_48px_-12px_rgba(227,30,36,0.7)] hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <span>{button.text}</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Empty for background image visibility */}
              <div className="lg:w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarships;