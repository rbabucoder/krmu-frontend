'use client';

import React from 'react';
import { FooterLinksData } from '../mba-2025/constant/footer-links';

interface FooterLinksProps extends FooterLinksData {
  className?: string;
  onContactClick?: () => void;
}

const FooterLinks: React.FC<FooterLinksProps> = ({
  specializations = {
    leftColumn: [],
    rightColumn: []
  },
  contactInfo = [],
  backgroundImage = "/assets/images/footer-bg.svg",
  className = "",
  onContactClick
}) => {
  
  const handleContactClick = (e: React.MouseEvent) => {
    if (onContactClick) {
      e.preventDefault();
      onContactClick();
    } else {
      const formSection = document.getElementById('formSection');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      className={`py-10 md:py-12 bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          
          {/* Left Column - Specializations */}
          <div className="lg:w-1/2">
            <h3 className="text-white text-2xl md:text-3xl lg:text-[32px] font-bold mb-4 md:mb-6">
              Specialisations
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Left Column */}
              <div>
                <ul className="space-y-3 md:space-y-4">
                  {specializations.leftColumn.map((item) => (
                    <li key={item.id} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 bg-[#e31e25] rounded flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white text-sm md:text-base">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Right Column */}
              <div>
                <ul className="space-y-3 md:space-y-4">
                  {specializations.rightColumn.map((item) => (
                    <li key={item.id} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 bg-[#e31e25] rounded flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white text-sm md:text-base">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Info */}
          <div className="lg:w-1/2">
            <div>
              <h3 className="text-white text-2xl md:text-3xl lg:text-[32px] font-bold mb-4 md:mb-6">
                Connect With Us
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <div key={contact.id} className="group">
                    <button
                      onClick={handleContactClick}
                      className="w-full text-left flex items-start md:items-center p-3 rounded-[30px] transition-all duration-300 hover:bg-white/10 hover:shadow-lg backdrop-blur-sm bg-white/5 border border-white/25 group-hover:border-white/40"
                    >
                     
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="text-white">
                          <div className="font-bold text-sm md:text-base mb-1">
                            {contact.label}  {contact.value}
                          </div>
                          
                        </div>
                      </div>
                      
                      
                    </button>
                  </div>
                ))}
              </div>
              
             
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FooterLinks;