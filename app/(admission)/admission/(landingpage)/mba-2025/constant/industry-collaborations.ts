// Types and constants for Industry Collaborations section
export interface IndustryCollaboration {
  id: number;
  logo: string;
  alt: string;
  name: string;
  width?: string;
}

export interface IndustryCollaborationsData {
  badgeText?: string;
  heading?: {
    highlighted: string;
    normal: string;
  };
  description?: string;
  collaborations?: IndustryCollaboration[];
}


// Configuration for MBA 2025
export const mba2025IndustryCollaborations: IndustryCollaborationsData = {
  badgeText: "Industry Collaborations",
  heading: {
    highlighted: "Learn From",
    normal: "Industry Experts"
  },
  description: "K.R. Mangalam University has collaborated with leading organisations to offer hands-on training, expert-led guest lectures, and placement opportunities, ensuring our students graduate industry-ready.",
  collaborations: [
    {
      id: 1,
      logo: "/landingpage/mba-2025/discover/ibm.svg",
      alt: "IBM",
      name: "IBM"
    },
    {
      id: 2,
      logo: "/landingpage/mba-2025/iide.webp",
      alt: "IIDE",
      name: "IIDE"
    },
    {
      id: 3,
      logo: "/landingpage/mba-2025/Grandthornton.png",
      alt: "Grant Thornton",
      name: "Grant Thornton"
    },
    {
      id: 4,
      logo: "/landingpage/mba-2025/eydark.webp",
      alt: "EY",
      name: "EY",
      width: "100px"
    }
  ]
};