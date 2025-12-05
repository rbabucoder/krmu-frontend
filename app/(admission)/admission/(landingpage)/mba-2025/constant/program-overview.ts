// Types and constants for Programme Overview section
export interface ProgramPoint {
  id: number;
  text: string;
  icon?: string;
}

export interface ProgramOverviewData {
  badgeText?: string;
  heading?: {
    normal: string;
    highlighted: string;
  };
  description?: string;
  points?: ProgramPoint[];
  image?: {
    src: string;
    alt: string;
    className?: string;
  };
}


// Configuration for MBA 2025
export const mba2025ProgramOverview: ProgramOverviewData = {
  badgeText: "MBA 2025 Programme Overview",
  heading: {
    normal: "Why Choose Our MBA",
    highlighted: "Programme 2025?"
  },
  description: "K.R. Mangalam University's MBA 2025 programme is meticulously designed to transform business aspirants into industry leaders. With a globally benchmarked curriculum developed by top industry practitioners and academicians, our programme equips students with essential skills in strategic decision-making, leadership, and practical industry experience.",
  points: [
    {
      id: 1,
      text: "Industry-Aligned Curriculum with Real-World Case Studies and Live Projects"
    },
    {
      id: 2,
      text: "Diverse Specialisations: Finance, Marketing, HR, Business Analytics, International Business, and more"
    },
    {
      id: 3,
      text: "Access to Advanced Business Simulation Labs and Digital Learning Resources"
    },
    {
      id: 4,
      text: "Robust Placement Network with 700+ Leading Corporate Partners"
    },
    {
      id: 5,
      text: "Global Learning Opportunities through International University Collaborations"
    }
  ],
  image: {
    src: "/landingpage/mba-2025/wc.webp",
    alt: "MBA 2025 Programme Overview",
    className: "why_choose_img"
  }
};