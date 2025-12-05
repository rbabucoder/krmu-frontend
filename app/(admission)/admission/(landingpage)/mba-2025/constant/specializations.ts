// Types and constants for Specializations section
export interface CareerRole {
  id: number;
  name: string;
}

export interface IndustryPartner {
  id: number;
  logo: string;
  alt: string;
  className?: string;
}

export interface Specialization {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  careerRoles: CareerRole[];
  industryPartners: IndustryPartner[];
}

export interface SpecializationsData {
  badgeText?: string;
  heading?: {
    highlighted: string;
    normal: string;
  };
  specializations?: Specialization[];
}

// Default configuration
export const defaultSpecializations: SpecializationsData = {
  badgeText: "Discover Your Path",
  heading: {
    highlighted: "Specialisations",
    normal: "That Define Future Business Leaders"
  },
  specializations: [
    {
      id: 1,
      title: "MBA in Finance",
      description: "Master corporate finance, investment strategies, and risk management to thrive in today's global financial markets.",
      icon: "/landingpage/mba-2025/fin.webp",
      iconAlt: "Finance",
      careerRoles: [
        { id: 1, name: "Financial Analyst" },
        { id: 2, name: "Investment Banker" },
        { id: 3, name: "Corporate Finance Manager" }
      ],
      industryPartners: [
        { id: 1, logo: "/landingpage/mba-2025/discover/ibm.svg", alt: "IBM" }
      ]
    },
    {
      id: 2,
      title: "MBA in Marketing",
      description: "Develop cutting-edge marketing strategies, harness digital tools, and learn consumer behaviour for impactful brand building.",
      icon: "/landingpage/mba-2025/marketing.webp",
      iconAlt: "Marketing",
      careerRoles: [
        { id: 1, name: "Brand Manager" },
        { id: 2, name: "Digital Marketing Specialist" },
        { id: 3, name: "Market Research Analyst" }
      ],
      industryPartners: [
        { id: 1, logo: "/landingpage/mba-2025/discover/ibm.svg", alt: "IBM" }
      ]
    },
    {
      id: 3,
      title: "MBA in Human Resource Management",
      description: "Learn to shape corporate culture, drive talent acquisition, and manage organisational development for sustainable growth.",
      icon: "/landingpage/mba-2025/hrm.webp",
      iconAlt: "Human Resource Management",
      careerRoles: [
        { id: 1, name: "HR Manager" },
        { id: 2, name: "Talent Acquisition Specialist" },
        { id: 3, name: "Organisational Development Consultant" }
      ],
      industryPartners: [
        { id: 1, logo: "/landingpage/mba-2025/discover/ibm.svg", alt: "IBM", className: "ec_council_img" }
      ]
    },
    {
      id: 4,
      title: "MBA in Business Analytics",
      description: "Leverage data-driven insights to optimise business decisions, forecast trends, and create competitive advantages.",
      icon: "/landingpage/mba-2025/bus-ana.webp",
      iconAlt: "Business Analytics",
      careerRoles: [
        { id: 1, name: "Business Analyst" },
        { id: 2, name: "Data Consultant" },
        { id: 3, name: "Analytics Manager" }
      ],
      industryPartners: [
        { id: 1, logo: "/landingpage/mba-2025/discover/ibm.svg", alt: "IBM" }
      ]
    },
    {
      id: 5,
      title: "MBA in Operations",
      description: "Learn to optimise supply chains, production, inventory, and logistics, focusing on efficiency, cost management, quality control, and strategic planning.",
      icon: "/landingpage/mba-2025/mba-operations.png",
      iconAlt: "Operations",
      careerRoles: [
        { id: 1, name: "Operations Manager" },
        { id: 2, name: "Logistics Manager" },
        { id: 3, name: "Supply Chain Manager" }
      ],
      industryPartners: [
        { id: 1, logo: "/landingpage/mba-2025/discover/ibm.svg", alt: "IBM" }
      ]
    },
    {
      id: 6,
      title: "MBA in Digital Marketing",
      description: "Learn to create, implement, and manage online marketing strategies using digital channels to drive business growth and customer engagement.",
      icon: "/landingpage/mba-2025/mba-digital-marketing.png",
      iconAlt: "Digital Marketing",
      careerRoles: [
        { id: 1, name: "Digital Marketing Manager" },
        { id: 2, name: "Social Media Manager" },
        { id: 3, name: "Brand Manager" }
      ],
      industryPartners: [
        { id: 1, logo: "/landingpage/mba-2025/iide.webp", alt: "IIDE" }
      ]
    },
    {
      id: 7,
      title: "MBA in Fintech",
      description: "Learn to manage and innovate financial technologies, combining finance with technology to improve financial services and operations.",
      icon: "/landingpage/mba-2025/mba-fintech.png",
      iconAlt: "Fintech",
      careerRoles: [
        { id: 1, name: "Fintech Product Manager" },
        { id: 2, name: "Blockchain Developer" },
        { id: 3, name: "Financial Analyst (Fintech)" }
      ],
      industryPartners: [
        { id: 1, logo: "/landingpage/mba-2025/ey-logo-dark.webp", alt: "EY", className: "h-20" }
      ]
    }
  ]
};

// Configuration for MBA 2025
export const mba2025Specializations: SpecializationsData = {
  badgeText: "Discover Your Career Path",
  heading: {
    highlighted: "MBA 2025 Specialisations",
    normal: "That Shape Future Business Leaders"
  },
  specializations: defaultSpecializations.specializations
};