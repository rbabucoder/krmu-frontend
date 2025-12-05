import React from 'react';
import { HeaderData } from '../mba-2025/constant/header';

interface HeaderProps extends HeaderData {
  className?: string;
  onApplyClick?: () => void;
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  logo = {
    src: "/assets/white-krm.webp",
    alt: "Logo",
    height: 55
  },
  applyButton = {
    text: "Apply Now",
    show: true
  },
  countdown = {
    show: false,
    text: "",
    targetDate: ""
  },
  className = "",
  onApplyClick,
  onLogoClick
}) => {
  
  const handleLogoClick = (e: React.MouseEvent) => {
    if (onLogoClick) {
      e.preventDefault();
      onLogoClick();
    } else {
      const formSection = document.getElementById('formSection');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
    <header className={`fixed top-0 left-0 w-full z-999999999 ${className}`}>
      {/* Countdown Banner */}
      {countdown.show && (
        <div className="hidden w-full bg-[#0061aa] py-2">
          <div className="container mx-auto px-4">
            <div className="text-center text-white font-medium">
              {countdown.text}
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="w-full mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={handleLogoClick}
                className="focus:outline-none focus:ring-2 focus:ring-red-500 rounded transition-transform hover:scale-105"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-14 lg:h-16"
                  style={{ 
                    height: logo.height ? `${logo.height}px` : '55px',
                    maxHeight: '70px'
                  }}
                />
              </button>
            </div>

            {/* Apply Now Button - Desktop */}
            {applyButton.show && (
              <div className="hidden md:block">
                <button
                  onClick={handleApplyClick}
                  className="bg-[#e31e25] hover:bg-[#c7181f] text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  {applyButton.text}
                </button>
              </div>
            )}

            

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;