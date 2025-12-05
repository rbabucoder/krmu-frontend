import React from 'react';
import Image from 'next/image';
import { AdmissionProcessData } from '../mba-2025/constant/admission-process';

interface AdmissionProcessProps extends AdmissionProcessData {
  className?: string;
  onApplyClick?: () => void;
  onContactClick?: () => void;
}

const AdmissionProcess: React.FC<AdmissionProcessProps> = ({
  badgeText = "Admission Process",
  heading = {
    highlighted: "Take The First Step",
    normal: "Towards Your Future"
  },
  steps = [],
  buttons = {
    apply: { text: "Apply Now", icon: "fa-solid fa-arrow-right" },
    contact: { text: "Contact Admissions", icon: "/assets/images/common/message.svg" }
  },
  image = {
    src: "/assets/steps.webp",
    alt: "Take the First Step"
  },
  className = "",
  onApplyClick,
  onContactClick
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
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          {/* Badge */}
          <span className="inline-block bg-white font-light text-black rounded-[50px] px-4 py-2 mb-4 border border-gray-100 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] text-sm md:text-base">
            {badgeText}
          </span>
          
          {/* Heading */}
          <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-4">
            <span className="text-[#e31e25]">{heading.highlighted}</span> {heading.normal}
          </h3>
        </div>

        {/* Mobile Image */}
        <div className="lg:w-1/2 pb-6 block lg:hidden md:hidden">
          <div className="relative">
            <Image 
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-auto rounded-[40px] shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              priority={false}
            />
          </div>
        </div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Left - Steps */}
          <div className="lg:w-1/2">
            <div className="mb-8 md:mb-12">
              <h4 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
                Steps to Apply
              </h4>
              
              {/* Steps */}
              <div className="space-y-1 md:space-y-1">
                {steps.map((step) => (
                  <div key={step.id} className="flex items-center gap-1 group">
                    {/* Step Number Circle */}
                    <div className="relative">
                      <div className="w-10 h-10 md:w-10 md:h-10 flex items-center">
                        <span className="text-[#e31e25] text-2xl md:text-2xl font-bold">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    
                    {/* Step Text */}
                    <div className="flex-1">
                      <div className="bg-linear-to-r from-white/30 via-white/60 to-white/90 border-2 border-white/25 rounded-[20px] p-4 md:p-5 shadow-[0px_10px_48px_-12px_rgba(16,24,40,0.05)] group-hover:shadow-xl transition-all duration-300">
                        <p className="text-sm md:text-base font-semibold text-gray-800">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-row gap-4">
              <button 
                onClick={handleApplyClick}
                className="bg-[#e31e24] hover:bg-[#c7181f] text-white font-bold px-6 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0px_10px_48px_-12px_rgba(227,30,36,0.7)] hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>{buttons.apply.text}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <button 
                onClick={() => onContactClick && onContactClick()}
                className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 font-bold px-6 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>{buttons.contact.text}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Desktop Image */}
          <div className="lg:w-1/2 hidden lg:block md:block">
            <div className="relative">
              <Image 
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto rounded-[40px] shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;