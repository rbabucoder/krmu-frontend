'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { SpecializationsData } from '../mba-2025/constant/specializations';

// Define proper TypeScript interfaces
interface CareerRole {
  id: string | number;
  name: string;
}

interface IndustryPartner {
  id: string | number;
  logo: string;
  alt: string;
}

interface Specialization {
  id: string | number;
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  careerRoles: CareerRole[];
  industryPartners: IndustryPartner[];
}

interface SpecializationsProps extends SpecializationsData {
  className?: string;
}

// Card Component with proper typing
const SpecializationCard: React.FC<{ specialization: Specialization; className?: string }> = ({ 
  specialization, 
  className = "" 
}) => (
  <div className={`group relative overflow-hidden rounded-[30px] p-6 md:p-8 shadow-[0px_10px_48px_-12px_rgba(16,24,40,0.05)] hover:shadow-[0px_20px_48px_-12px_rgba(16,24,40,0.15)] transition-all duration-500 h-full ${className}`}>
    {/* Background Gradient Layer */}
    <div className="absolute inset-0 bg-linear-to-br from-[#FFE6E6]/30 via-white/70 to-[#F0F7FF]/40 z-0" />
    
    {/* Decorative Gradient Elements */}
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-linear-to-br from-[#e31e25]/10 to-transparent rounded-full blur-xl z-0" />
    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-linear-to-tr from-blue-50/30 to-transparent rounded-full blur-xl z-0" />
    
    {/* Card Content */}
    <div className="relative z-10 flex flex-col h-full">
      {/* Icon & Title Row */}
      <div className="flex items-start gap-4 md:gap-6 mb-4 md:mb-6">
        <div className="shrink-0">
          <div className="relative w-12 h-12 md:w-14 md:h-14 bg-linear-to-br from-[#e31e25] to-[#ff6b6b] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="absolute inset-0 bg-linear-to-br from-[#e31e25]/20 to-transparent rounded-full blur-md" />
            {/* Using Image component instead of img tag */}
            <div className="relative z-10 w-6 h-6 md:w-7 md:h-7 flex items-center justify-center">
              <Image
                src={specialization.icon}
                alt={specialization.iconAlt}
                width={28}
                height={28}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 bg-linear-to-r from-gray-800 to-gray-900 bg-clip-text">
            {specialization.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            {specialization.description}
          </p>
        </div>
      </div>
      
      <div className="mt-auto">
        {/* Career Roles */}
        <h4 className="text-base md:text-lg font-semibold text-gray-700 mb-3 mt-6">
          Career Roles
        </h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {specialization.careerRoles.map((role) => (
            <span 
              key={role.id}
              className="inline-block bg-linear-to-r from-white to-gray-50 font-light text-black rounded-[50px] px-3 py-1.5 text-xs md:text-sm border border-gray-100 shadow-sm hover:shadow-md hover:bg-linear-to-r hover:from-gray-50 hover:to-white transition-all duration-300"
            >
              {role.name}
            </span>
          ))}
        </div>
        
        {/* Industry Partner */}
        <div className="pt-4 mt-4">
          <h4 className="text-base md:text-lg font-semibold text-gray-700 mb-4">
            Industry Partner
          </h4>
          <div className="flex flex-wrap gap-4">
            {specialization.industryPartners.map((partner) => (
              <div 
                key={partner.id}
                className="relative overflow-hidden bg-linear-to-br from-white/50 via-white/70 to-white/90 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[140px] group/partner"
              >
                {/* Partner Card Gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-[#e31e25]/5 via-transparent to-blue-50/30 opacity-0 group-hover/partner:opacity-100 transition-opacity duration-500" />
                {/* Using Image component instead of img tag */}
                <div className="relative z-10 h-10 md:h-12 w-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={140}
                    height={48}
                    className="h-10 md:h-12 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Specializations: React.FC<SpecializationsProps> = ({
  badgeText = "Discover Your Path",
  heading = {
    highlighted: "Specialisations",
    normal: "That Define Future Business Leaders"
  },
  specializations = [],
  className = ""
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Auto-slide for mobile
  useEffect(() => {
    if (!isMobile || isPaused || specializations.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % specializations.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isMobile, isPaused, specializations.length]);
  
  // Update scroll position when slide changes
  useEffect(() => {
    if (sliderRef.current && isMobile) {
      const container = sliderRef.current;
      const cardElement = container.querySelector('.snap-center') as HTMLElement;
      
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = 24; // 24px gap
        container.scrollTo({
          left: currentSlide * (cardWidth + gap),
          behavior: 'smooth'
        });
      }
    }
  }, [currentSlide, isMobile]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % specializations.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + specializations.length) % specializations.length);
  };

  return (
    <section className={`md:py-10 bg-linear-to-b from-[#f8fafc] via-white to-[#f0f7ff] ${className}`}>
      <div className="container mx-auto max-w-7xl px-4 pt-4">
        {/* Header Section with Gradient */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-linear-to-r from-white to-gray-50 font-light text-black rounded-[50px] px-4 py-2 mb-4 border border-gray-100 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] text-sm md:text-base">
            {badgeText}
          </span>
          
          <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6">
            <span className="bg-linear-to-r from-[#e31e25] to-[#ff6b6b] bg-clip-text text-transparent">
              {heading.highlighted}
            </span>{" "}
            <span className="bg-linear-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
              {heading.normal}
            </span>
          </h3>
        </div>

        {/* Mobile Slider */}
        {isMobile ? (
          <div className="relative">
            <div 
              ref={sliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              {specializations.map((specialization) => (
                <div 
                  key={specialization.id}
                  className="shrink-0 w-[85vw] snap-center"
                >
                  <SpecializationCard specialization={specialization} />
                </div>
              ))}
            </div>
            
            {/* Gradient Navigation Buttons Below */}
            {specializations.length > 1 && (
              <div className="flex justify-center items-center gap-8 pb-10">
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className="group relative flex items-center gap-3 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  aria-label="Previous specialization"
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-linear-to-r from-gray-100 via-white to-gray-100 z-0" />
                  <div className="absolute inset-0 bg-linear-to-r from-[#e31e25]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  
                  {/* Border Gradient */}
                  <div className="absolute inset-0 rounded-full p-0.5 bg-linear-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <svg className="w-5 h-5 text-[#e31e25] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="group relative flex items-center gap-3 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  aria-label="Next specialization"
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-linear-to-l from-gray-100 via-white to-gray-100 z-0" />
                  <div className="absolute inset-0 bg-linear-to-l from-[#e31e25]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  
                  {/* Content */}
                  <svg className="w-5 h-5 text-[#e31e25] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ) : (
          // Desktop Grid Layout with Gradient Cards
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {specializations.map((specialization) => (
              <SpecializationCard key={specialization.id} specialization={specialization} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Specializations;