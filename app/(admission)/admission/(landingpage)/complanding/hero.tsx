import React, { useEffect } from 'react';
import { HeroData } from '../mba-2025/constant/hero';

interface HeroProps extends Partial<HeroData> {
  className?: string;
  onApplyClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  headingLines = [
    "Learn from the Top 1% of",
    "industry experts from",
    "EY, IIDE, and IBM",
    "with our MBA programme"
  ],
  highlightedWords = {
    0: [2, 3, 4],
    3: [3]
  },
  redTextLines = {
    2: [0, 1, 2, 3]
  },
  ctaButton = {
    text: "Apply Now",
    icon: "fa-solid fa-arrow-right"
  },
  formWidgetId = "70d97092be6d93eed32d53d664e6b5b1",
  formHeight = "550px",
  backgroundImage = "/assets/4_MBA.jpg",
  showPill = false,
  pillText = "Empower Your Leadership Journey",
  className = "",
  onApplyClick
}) => {

  useEffect(() => {
    // Load NoPaperForms widget script
    const loadNPFWidget = () => {
      const scriptId = 'npf-widget-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://widgets.nopaperforms.com/emwgts.js';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    loadNPFWidget();

    // Initialize scroll functionality
    const initScrollButtons = () => {
      const scrollButtons = document.querySelectorAll('.scroll-btn');
      scrollButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const target = button.getAttribute('data-target');
          if (target) {
            const element = document.getElementById(target);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
      });
    };

    initScrollButtons();

    // Mobile-specific styles
    const handleResponsiveStyles = () => {
      const styleId = 'hero-responsive-styles';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          @media (max-width: 768px) {
            .hero-heading-mobile br {
              display: none;
            }
            .frms999-mobile {
              text-align: center !important;
            }
          }
          @media (max-width: 640px) {
            .hero-heading-mobile {
              color: #fff;
            }
          }
        `;
        document.head.appendChild(style);
      }
    };

    handleResponsiveStyles();

    return () => {
      // Cleanup
      const styleElement = document.getElementById('hero-responsive-styles');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

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

  // Render heading with exact styling
  const renderHeadingLine = (line: string, lineIndex: number) => {
    const words = line.split(' ');
    
    return (
      <React.Fragment key={lineIndex}>
        {words.map((word, wordIndex) => {
          const style: React.CSSProperties = {};
          
          // Apply red color for specific words
          if (redTextLines[lineIndex]?.includes(wordIndex)) {
            style.color = '#e31e25';
            style.fontWeight = 'bold';
          }
          // Apply bold for highlighted words
          else if (highlightedWords[lineIndex]?.includes(wordIndex)) {
            style.fontWeight = 'bold';
          }
          
          return (
            <span key={wordIndex} style={style}>
              {word}
              {wordIndex < words.length - 1 ? ' ' : ''}
            </span>
          );
        })}
        <br />
      </React.Fragment>
    );
  };

  return (
    <section 
      className={`hero_section relative ${className}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '130px 0px 20px'
      }}
    >
      <div 
        className="container mx-auto px-4 hero_container"
        style={{ maxWidth: '1240px !important', position: 'relative', zIndex: 9999999 }}
      >
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* LEFT CONTENT - 7 columns on desktop */}
          <div 
            className="lg:w-8/12 md:w-full hero_content mb-4 lg:mb-0 md:mb-0"
            style={{ marginTop: '-200px' }}
          >
            
            {/* Optional Pill/Badge */}
            {showPill && (
              <span 
                className="inline-block mb-5 hero_pill"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '100px',
                  fontSize: '16px',
                  color: '#fff',
                  padding: '15px 25px',
                  display: 'inline-block'
                }}
              >
                {pillText}
              </span>
            )}
            
            {/* Heading */}
            <h1 
              className="text-left md:text-left hero-heading-mobile hero_heading md:px-0 px-3"
              style={{
                fontSize: '38px',
                lineHeight: '58px',
                color: '#000'
              }}
            >
              {headingLines.map((line, index) => renderHeadingLine(line, index))}
            </h1>
            
            {/* Apply Button - Desktop Only */}
            <div className="flex items-center justify-start md:justify-start gap-3">
              <button 
                onClick={handleApplyClick}
                className="hidden lg:flex md:flex items-center justify-center gap-2 scroll-btn"
                style={{
                  background: '#e31e24',
                  boxShadow: '0px 10px 48px -12px rgba(227, 30, 36, 0.7)',
                  borderRadius: '100px',
                  padding: '15px 25px',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer'
                }}
                data-target="formSection"
              >
                <span className="mr-2">{ctaButton.text}</span>
                {ctaButton.icon && <i className={ctaButton.icon}></i>}
              </button>
            </div>
          </div>
          
          {/* RIGHT FORM - 5 columns on desktop */}
          <div 
            id="formSection" 
            className="lg:w-4/12 md:w-full frms999-mobile"
          >
            <div 
              className="npf_wgts text-center md:text-left highlight-section"
              data-height={formHeight}
              data-w={formWidgetId}
            >
              {/* Widget will be injected here */}
            </div>
          </div>
          
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .hero_section {
          position: relative;
          width: 100%;
        }
        
        .hero_heading {
          font-size: 38px;
          line-height: 58px;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero_heading {
            font-size: 21px;
            line-height: 1.2;
            padding-top: 200px;
          }
          .hero_heading br {
            display: none;
          }
        }
        
        @media (max-width: 640px) {
          .hero_heading {
            color: #fff !important;
          }
        }
        
        /* Form Widget Styles */
        .highlight-section .npf_wgts {
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          border: 1px solid #e31e25;
          border-radius: 14px;
        }
        
        .npf_wgts iframe {
          border-radius: 14px !important;
          width: 100% !important;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;
        }
        
        @media (min-width: 769px) {
          .npf_wgts iframe {
            width: 80% !important;
            float: right;
          }
        }
        
        @media (max-width: 768px) {
          .npf_wgts iframe {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;