'use client';

import React from 'react';
import Image from 'next/image';
import { IndustryCollaborationsData } from '../mba-2025/constant/industry-collaborations';

interface IndustryCollaborationsProps extends IndustryCollaborationsData {
  className?: string;
}

const IndustryCollaborations: React.FC<IndustryCollaborationsProps> = ({
  badgeText = "Industry Collaborations",
  heading = {
    highlighted: "Learn From",
    normal: "Industry Experts"
  },
  description = "K.R. Mangalam University has collaborated with leading organisations to offer hands-on training, expert-led guest lectures, and placement opportunities, ensuring our students graduate industry-ready.",
  collaborations = [],
  className = ""
}) => {
  return (
    <section className={className}>
      <div className="container mx-auto max-w-7xl px-4 pt-4">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
          
          {/* Badge - Exact same styling */}
          <span 
            className="inline-block bg-white font-light text-black rounded-[50px] px-4 py-2 mb-4 border border-gray-100 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] text-sm md:text-base"
          >
            {badgeText}
          </span>
          
          {/* Heading */}
          <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-4">
            <span className="text-[#e31e25]">{heading.highlighted}</span> {heading.normal}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg px-4">
            {description}
          </p>
        </div>
        
        {/* Industry Logos - Responsive Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-5 px-4">
          {collaborations.map((collaboration) => (
            <div 
              key={collaboration.id} 
              className="w-[calc(50%-8px)] sm:w-[calc(33.333%-12px)] md:w-[calc(25%-16px)] lg:w-[calc(20%-20px)] px-1"
            >
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all duration-300 h-full min-h-[120px] flex items-center justify-center group hover:scale-[1.02]">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Using Next.js Image component instead of img tag */}
                  <div className="h-12 md:h-16 flex items-center justify-center">
                    <Image 
                      src={collaboration.logo}
                      alt={collaboration.alt}
                      width={120} // Default width, adjust as needed
                      height={80} // Default height, adjust as needed
                      className="w-auto h-full object-contain mx-auto opacity-90 group-hover:opacity-100 transition-opacity"
                      style={collaboration.width ? { maxWidth: collaboration.width } : {}}
                      priority={false}
                    />
                  </div>
                  {/* Optional tooltip on hover */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {collaboration.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCollaborations;