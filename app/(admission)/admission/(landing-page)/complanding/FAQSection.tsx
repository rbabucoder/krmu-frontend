'use client';

import React from 'react';
import { FAQData } from '../mba-2025/constant/faq';

interface FAQSectionProps extends FAQData {
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  badgeText = "FAQs",
  heading = {
    highlighted: "Got Questions?",
    normal: "We've Got Answers"
  },
  faqs = [],
  className = ""
}) => {
  return (
    <section className={`py-8 md:py-12 ${className}`}>
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          {/* Badge */}
          <span className="inline-block bg-white font-light text-black rounded-[50px] px-4 py-2 mb-4 border border-gray-100 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] text-sm md:text-base">
            {badgeText}
          </span>
          
          {/* Heading */}
          <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-4">
            <span className="text-[#e31e25]">{heading.highlighted}</span> {heading.normal}
          </h3>
        </div>
        
        {/* FAQ Accordion using CSS details/summary */}
        <div className="mx-auto">
          {faqs.map((faq) => (
            <details 
              key={faq.id} 
              className="group border-b-2 border-gray-200 mb-5"
            >
              {/* FAQ Header */}
              <summary className="list-none cursor-pointer">
                <div className="w-full text-left px-4 py-5 flex items-center justify-between hover:bg-gray-50/50 rounded-lg transition-all duration-200 group-open:bg-gray-50/30">
                  <span className="font-bold text-gray-800 text-base md:text-lg pr-6 flex-1">
                    {faq.question}
                  </span>
                  
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:border-[#e31e25] group-open:bg-[#e31e25] group-open:border-[#e31e25]">
                      <svg 
                        className="w-4 h-4 text-gray-600 group-open:text-white group-open:rotate-90 transition-transform duration-300"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="3" 
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </summary>
              
              {/* FAQ Content */}
              <div className="px-4 pb-6 pt-1">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;