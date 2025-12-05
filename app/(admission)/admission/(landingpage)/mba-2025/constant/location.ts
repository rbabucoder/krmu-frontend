// Types and constants for Location section
export interface LocationData {
  badgeText?: string;
  heading?: string;
  description?: string;
  leftImage?: {
    src: string;
    alt: string;
  };
  rightImage?: {
    src: string;
    alt: string;
  };
  backgroundColor?: string;
}


// Configuration for MBA 2025
export const mba2025Location: LocationData = {
  badgeText: "STRATEGIC LOCATION",
  heading: "Located in Gurgaon - India's Corporate & Business Capital",
  description: "Study in the heart of India's business district with proximity to Fortune 500 companies and major corporate headquarters.",
  leftImage: {
    src: "/landingpage/mba-2025/cyber-city2.webp",
    alt: "Gurgaon Business Hub"
  },
  rightImage: {
    src: "/landingpage/mba-2025/map.webp",
    alt: "KRMU Campus Location Map"
  },
  backgroundColor: "#1461ac"
};