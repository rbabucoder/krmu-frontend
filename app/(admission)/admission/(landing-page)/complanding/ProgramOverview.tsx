'use client';

import React from 'react';
import Image from 'next/image';
import { ProgramOverviewData } from '../mba-2025/constant/program-overview';

interface ProgramOverviewProps extends ProgramOverviewData {
  className?: string;
}

const ProgramOverview: React.FC<ProgramOverviewProps> = ({
  badgeText = "Programme Overview",
  heading = {
    normal: "Why Choose An MBA",
    highlighted: "at KRMU?"
  },
  description = "K.R. Mangalam University offers transformative MBA programmes designed to meet global business standards. With a curriculum crafted by industry experts and academia, our programmes ensure that students gain a bunch of valuable skills including strategic thinking, leadership skills, and hands-on industry exposure, making them future-ready in today's dynamic corporate landscape.",
  points = [],
  image = {
    src: "/assets/wc.webp",
    alt: "Programme Overview",
    className: "why_choose_img"
  },
  className = ""
}) => {
  return (
    <section className={`md:py-16 ${className}`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="text-center lg:text-left">

              {/* Mobile Image */}
              <div className="lg:w-1/2 w-full lg:mt-0 lg:hidden">
                <div className="relative mb-8">
                  <Image 
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full max-w-lg mx-auto lg:max-w-none"
                    priority={false}
                  />
                </div>
              </div>
              
              {/* Badge */}
              <span className="inline-block bg-white font-light text-black rounded-[50px] px-4 py-2 mb-8 border border-gray-100 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] text-sm md:text-base">
                {badgeText}
              </span>
              
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-8 leading-tight">
                {heading.normal}{' '}
                <span className="text-[#e31e25]">{heading.highlighted}</span>
              </h2>
              
              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg mb-8 lg:pr-4">
                {description}
              </p>
            </div>
            
            {/* Points List */}
            <ul className="space-y-5">
              {points.map((point) => (
                <li key={point.id} className="flex items-start gap-4 md:gap-5 group hover:translate-x-1 transition-transform duration-300">
                  {/* Tick icon container with animation */}
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 md:w-7 md:h-7 bg-[#e31e25] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg 
                        className="w-3 h-3 md:w-4 md:h-4 text-white" 
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
                  </div>
                  <span className="text-gray-700 text-sm md:text-base font-semibold flex-1">
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Desktop Image */}
          <div className="lg:w-1/2 w-full lg:mt-0 hidden lg:block">
            <div className="relative">
              <Image 
                src={image.src}
                alt={image.alt}
                width={600}
                height={500}
                className="w-full max-w-lg mx-auto lg:max-w-none"
                priority={false}
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;