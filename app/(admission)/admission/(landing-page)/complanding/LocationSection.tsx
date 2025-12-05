'use client';

import React from 'react';
import Image from 'next/image';
import { LocationData } from '../mba-2025/constant/location';

interface LocationSectionProps extends LocationData {
  className?: string;
}

const LocationSection: React.FC<LocationSectionProps> = ({
  badgeText = "OUR LOCATION",
  heading = "Learn at One of India's Biggest Business Hubs, Gurgaon",
  leftImage = {
    src: "/assets/images/cyber-city2.webp",
    alt: "Our Location"
  },
  rightImage = {
    src: "/assets/map.webp",
    alt: "location_map_university"
  },
  backgroundColor = "#1461ac",
  className = ""
}) => {
  return (
    <section className={`md:py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto max-w-7xl px-4">
        {/* Main Container */}
        <div 
          className="rounded-[30px] p-4 md:p-6 lg:p-8 shadow-xl"
          style={{ backgroundColor }}
        >
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
            
            {/* Left Image Column */}
            <div className="lg:w-5/12 relative">
              <div className="h-full">
                <div className="relative h-full min-h-[300px] md:min-h-[400px] rounded-[30px] overflow-hidden border-10 border-white shadow-lg">
                  <Image 
                    src={leftImage.src}
                    alt={leftImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </div>
            
            {/* Right Content Column */}
            <div className="lg:w-7/12 flex flex-col">
              <div className="flex-1 flex flex-col">
                {/* Badge */}
                <div className="mb-4 md:mb-6">
                  <span className="inline-block border border-white text-white px-4 py-2 rounded-[50px] text-xs md:text-xs font-medium">
                    {badgeText}
                  </span>
                </div>
                
                {/* Heading */}
                <h3 className="text-white text-2xl md:text-2xl lg:text-2xl mb-4 md:mb-6 leading-tight">
                  {heading}
                </h3>
                
                {/* Map Container */}
                <div className="mt-auto">
                  <div className="border-10 border-white rounded-[10px] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] overflow-hidden bg-white">
                    <Image 
                      src={rightImage.src}
                      alt={rightImage.alt}
                      width={800}
                      height={400}
                      className="w-full h-auto"
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;