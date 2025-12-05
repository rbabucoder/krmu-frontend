

import React from 'react';
import { FooterData } from '../mba-2025/constant/footer';

interface FooterProps extends FooterData {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  logo = {
    src: "/assets/images/logo.webp",
    alt: "Footer Logo",
    maxWidth: 250
  },
  copyrightText = "© Copyright K.R. Mangalam University. All Rights Reserved.",
  menuItems = [],
  className = ""
}) => {
  return (
    <footer className={`bg-white ${className}`}>
      <div className="container mx-auto max-w-7xl px-4">
        {/* Logo and Menu Row */}
        <div className="py-6 md:py-8 border-b border-gray-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
            {/* Logo */}
            <div className="md:w-1/2 flex justify-center md:justify-start">
              <img 
                src={logo.src}
                alt={logo.alt}
                className="w-full max-w-[250px] h-auto"
              />
            </div>
            
            {/* Menu - Optional */}
            {menuItems.length > 0 && (
              <div className="md:w-1/2">
                <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <a 
                        href={item.href}
                        className="text-gray-700 hover:text-[#e31e25] transition-colors duration-300 text-sm md:text-base"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Copyright Row */}
        <div className="py-4 md:py-5">
          <div className="text-left">
            <p className="text-gray-800 text-sm md:text-base">
              {copyrightText}
            </p>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;