"use client";
import { timelineData } from "@/lib/constants/timelinedata";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TimelineCarousel = () => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);
  // Timeline Nav Settings
  const navSettings: Settings = {
    asNavFor: nav2 || undefined,
    slidesToShow: timelineData.length >= 5 ? 5 : timelineData.length,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1100, // Mobile
        settings: {
          slidesToShow: 4,
          centerMode: true,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  // Timeline Slide Settings
  const slideSettings: Settings = {
    asNavFor: nav1 || undefined,
    slidesToShow: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: true,
    infinite: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" pb-32 -mt-10 overflow-x-auto overflow-y-hidden no-scrollbar relative">
      {/* Timeline Nav */}
      <div className="timeline  xl:pb-[50px] xl:pl-[180px]">
        <Slider {...navSettings} ref={sliderRef1}>
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-nav__item ln${
                index + 1
              } timelinenav_slide relative text-white text-center cursor-pointer ${
                index === 0 ? "current-item" : ""
              }`}
            >
              {item.year}
            </div>
          ))}
        </Slider>
      </div>

      {/* Timeline Slides */}
      <Slider
        {...slideSettings}
        ref={sliderRef2}
        className="timeline-slider flex"
      >
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-slide">
            <div className="flex justify-center items-center relative p-5 timeline-content-container">
              <div className="rounded-t-xl sm:rounded-xl w-full sm:w-3/5 timeline-image">
                <Image
                  src={item.image}
                  alt={`timeline image ${item.year}`}
                  width={551}
                  height={355}
                  className="sm:rounded-t-xl sm:rounded-xl"
                />
              </div>
              <div className="sm:-ml-10 -z-10 py-5 lg:ml-0 pl-5 sm:pl-10 lg:pr-20 text-white timelinetext-bg timeline-content w-full w- sm:w-2/5">
                <h4 className="md:text-8xl text-xs font-normal mb-2.5 sm:mb-5">
                  {item.year}
                </h4>
                <p className="text-xs md:text-[26px] mb-2.5 sm:mb-5">{item.title}</p>
                <p className="mb-2.5 text-xs sm:mb-2.5 md:text-lg">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TimelineCarousel;
