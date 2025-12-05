// Types and constants for Curriculum section
export interface CurriculumItem {
  id: number;
  text: string;
}

export interface CurriculumYear {
  id: number;
  year: string;
  title: string;
  items: CurriculumItem[];
  highlight: string;
  footerText?: string;
}

export interface CurriculumData {
  badgeText?: string;
  heading?: {
    highlighted: string;
    normal: string;
  };
  description?: string;
  years?: CurriculumYear[];
}


// Configuration for MBA 2025
export const mba2025Curriculum: CurriculumData = {
  badgeText: "MBA 2025 Curriculum Overview",
  heading: {
    highlighted: "Innovative Curriculum",
    normal: "Designed for Tomorrow's Business Leaders"
  },
  description: "Our MBA 2025 curriculum combines cutting-edge business theories with practical industry exposure, preparing students to excel in the dynamic global business environment.",
  years: [
    {
      id: 1,
      year: "Year 1",
      title: "Foundation & Core Concepts",
      items: [
        { id: 1, text: "Business Management Principles" },
        { id: 2, text: "Financial Accounting & Analysis" },
        { id: 3, text: "Digital Marketing Fundamentals" },
        { id: 4, text: "Business Communication & Ethics" }
      ],
      highlight: "Focus on Analytical Tools, Case Studies, and Team Projects"
    },
    {
      id: 2,
      year: "Year 2",
      title: "Advanced Specialisations",
      items: [
        { id: 1, text: "Strategic Leadership & Management" },
        { id: 2, text: "Advanced Specialisation Courses" },
        { id: 3, text: "Business Research Methodology" }
      ],
      highlight: "Paid Summer Internship with Industry Partners"
    },
    {
      id: 3,
      year: "Final Semester",
      title: "Industry Integration",
      items: [
        { id: 1, text: "Live Industry Project & Dissertation" },
        { id: 2, text: "Specialisation Electives" }
      ],
      highlight: "Industry Mentorship & Guest Lectures from Global Experts"
    }
  ]
};