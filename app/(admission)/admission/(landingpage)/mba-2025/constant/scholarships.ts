// Types and constants for Scholarships section
export interface ScholarshipPoint {
  id: number;
  text: string;
  icon: string;
}

export interface ScholarshipsData {
  badgeText?: string;
  heading?: {
    highlighted: string;
    normal: string;
  };
  description?: string;
  highlightText?: string;
  subheading?: string;
  points?: ScholarshipPoint[];
  footerDescription?: string;
  button?: {
    text: string;
    icon: string;
  };
  backgroundImage?: string;
}



// Configuration for MBA 2025
export const mba2025Scholarships: ScholarshipsData = {
  badgeText: "MBA 2025 Scholarships",
  heading: {
    highlighted: "Exclusive Scholarships",
    normal: "For Future Business Leaders"
  },
  description: "K.R. Mangalam University offers comprehensive scholarship programs specifically designed for MBA aspirants to ensure financial barriers don't hinder your path to success.",
  highlightText: "₹21 Crores",
  subheading: "MBA 2025 Scholarship Categories:",
  points: [
    {
      id: 1,
      text: "Merit-based Scholarships (Based on Academic Performance)",
      icon: "fa-regular fa-square-check"
    },
    {
      id: 2,
      text: "Women in Business Leadership Scholarship",
      icon: "fa-regular fa-square-check"
    },
    {
      id: 3,
      text: "CAT/MAT/XAT/CMAT High Scorers Scholarship",
      icon: "fa-regular fa-square-check"
    },
    {
      id: 4,
      text: "Defence & Armed Forces Dependents Scholarship",
      icon: "fa-regular fa-square-check"
    },
    {
      id: 5,
      text: "Sports Excellence Scholarship",
      icon: "fa-regular fa-square-check"
    },
    {
      id: 6,
      text: "KRM Group Alumni & Sibling Scholarship",
      icon: "fa-regular fa-square-check"
    },
    {
      id: 7,
      text: "Need-based Financial Aid",
      icon: "fa-regular fa-square-check"
    }
  ],
  footerDescription: "Secure your scholarship with our streamlined application process and dedicated support.",
  button: {
    text: "Apply for Scholarship",
    icon: "fa-solid fa-arrow-right"
  },
  backgroundImage: "/landingpage/mba-2025/scholar.webp"
};