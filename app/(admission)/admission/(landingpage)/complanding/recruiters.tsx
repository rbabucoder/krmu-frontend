import React from 'react';
import Image from 'next/image';
import { 
  recruiterLogos, 
  studentTestimonials, 
  highlightPoints,
  StudentTestimonial,
  HighlightPoint 
} from '../mba-2025/constant/recruiters';

interface RecruitersTestimonialsProps {
  className?: string;
  title?: string;
  subtitle?: string;
  testimonials?: StudentTestimonial[];
  highlights?: HighlightPoint[];
  logos?: Array<{ src: string; alt: string; company: string }>;
}

const Recruiters: React.FC<RecruitersTestimonialsProps> = ({
  className = "",
  subtitle = "",
  testimonials = studentTestimonials,
  highlights = highlightPoints,
  logos = recruiterLogos
}) => {
  
  return (
    <section 
      className={`global-padding career_prospects student_testimonials_section ${className}`}
      style={{ paddingBottom: '15px !important' }}
    >
      {/* Recruiters Section */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="row">
          <div className="col-12">
            <div className="common-content-container text-center mb-10">
              <h3 className="common-heading text-4xl md:text-4xl font-bold mb-4">
                <span className="text-[#e31e25]">Our Prominent</span> Recruiters
              </h3>
              {subtitle && (
                <p className="text-gray-600 text-lg">{subtitle}</p>
              )}
            </div>
          </div>
        </div>

        {/* Recruiters Logos Auto-Slider - CSS Animation */}
        <div className="relative overflow-hidden">
          <style jsx>{`
            @keyframes slideLogos {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-200px * ${logos.length} / 2)); }
            }
            
            .logos-track {
              display: flex;
              animation: slideLogos 25s linear infinite;
              width: calc(200px * ${logos.length} * 2);
            }
            
            @media (max-width: 768px) {
              .logos-track {
                width: calc(180px * ${logos.length} * 2);
                animation: slideLogos 25s linear infinite;
              }
            }
          `}</style>
          
          <div className="logos-track">
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={`logo-${index}`} 
                className="shrink-0 w-[180px] md:w-[200px] px-3"
              >
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full flex items-center justify-center">
                  <Image 
                    src={logo.src} 
                    alt={logo.alt}
                    width={120}
                    height={80}
                    className="h-12 md:h-16 w-auto object-contain"
                    priority={false}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Highlights & Testimonials Section */}
      <div className="container mx-auto max-w-7xl px-4 mt-12 md:mt-16">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left Column - Highlights */}
          <div className="lg:w-1/4 md:w-full our_prominent">
            <div className="highlights_content hidden lg:block md:block bg-white rounded-[30px] p-6 md:p-8 h-full shadow-lg">
              <h3 className="text-2xl md:text-2xl font-bold mb-2">
                <span className="text-[#e31e25]">KRMU Highlights</span>
              </h3>
              
              <ul className="common-pointers space-y-3 mt-6">
                {highlights.map((point) => (
                  <li 
                    key={point.id} 
                    className="flex items-start gap-3"
                  >
                    <i className={`${point.icon} text-[#e31e25] text-lg mt-1`}></i>
                    <span className="pointer-text text-gray-700">{point.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right Column - Testimonials */}
          <div className="lg:w-3/4 md:w-full">
            <div className="row">
              <div className="col-12">
                {/* Testimonials Auto-Slider - CSS Animation */}
                <div className="relative overflow-hidden">
                  <style jsx>{`
                    @keyframes slideTestimonials {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(calc(-300px * ${testimonials.length} / 2)); }
                    }
                    
                    .testimonials-track {
                      display: flex;
                      animation: slideTestimonials 25s linear infinite;
                      width: calc(300px * ${testimonials.length} * 2);
                    }
                    
                    @media (max-width: 768px) {
                      .testimonials-track {
                        width: calc(280px * ${testimonials.length} * 2);
                        animation: slideTestimonials 25s linear infinite;
                      }
                    }
                  `}</style>
                  
                  <div className="testimonials-track">
                    {[...testimonials, ...testimonials].map((student, index) => (
                      <div 
                        key={`testimonial-${index}`} 
                        className="shrink-0 w-[280px] md:w-[300px] px-2"
                      >
                        <div className="student_testimonial_slide bg-white rounded-[20px] border border-gray-300 p-4 text-center h-[272px] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                          <div className="student_img_container mb-4">
                            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-100 relative">
                              <Image 
                                src={student.image} 
                                alt={student.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 80px, 96px"
                                priority={false}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="heading text-lg md:text-xl font-bold text-gray-800 mb-2">
                              {student.name}
                            </h4>
                            <p className="desc text-gray-600 text-sm md:text-base mb-1">
                              {student.company}
                            </p>
                            <p className="text-[#e31e25] font-bold text-base md:text-lg">
                              {student.package}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Gradient overlays */}
                  <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-white to-transparent pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-white to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruiters;