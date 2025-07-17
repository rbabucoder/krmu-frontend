"use client";

import { useState, useEffect } from "react";
import AboutTabs from "../Tabs/AboutTabs";
import AboutAccordion from "../Accordion/AboutAccordion";

const AboutTabsOrAccordion = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {

  //     const getAccTabData = async () => {
  //         try {
  //             const res = await fetch(`${BASE_API_URL}/wp-json/wp/v2/accordion`);

  //             const data = await res.json();

  //             setAccTab(data);

  //         } catch (error) {
  //             console.error(error);
  //         }

  //     }
  //     getAccTabData();

  // }, [])

  return <>{isMobile ? <AboutAccordion /> : <AboutTabs />}</>;
};

export default AboutTabsOrAccordion;
