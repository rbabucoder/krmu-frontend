// Types and constants for Footer Links section
export interface SpecializationItem {
  id: number;
  name: string;
  icon: string;
}

export interface ContactInfo {
  id: number;
  type: 'phone' | 'email' | 'address';
  label: string;
  value: string;
  icon: string;
}

export interface FooterLinksData {
  specializations?: {
    leftColumn: SpecializationItem[];
    rightColumn: SpecializationItem[];
  };
  contactInfo?: ContactInfo[];
  backgroundImage?: string;
}



// Configuration for MBA 2025
export const mba2025FooterLinks: FooterLinksData = {
  specializations: {
    leftColumn: [
      { id: 1, name: "MBA in Finance", icon: "fa-regular fa-square-check" },
      { id: 2, name: "MBA in Marketing", icon: "fa-regular fa-square-check" },
      { id: 3, name: "MBA in Human Resource", icon: "fa-regular fa-square-check" },
      { id: 4, name: "MBA in Business Analytics", icon: "fa-regular fa-square-check" },
      { id: 9, name: "MBA in International Business", icon: "fa-regular fa-square-check" }
    ],
    rightColumn: [
      { id: 5, name: "MBA in Operations", icon: "fa-regular fa-square-check" },
      { id: 6, name: "MBA in Digital Marketing", icon: "fa-regular fa-square-check" },
      { id: 7, name: "MBA in Technology Management", icon: "fa-regular fa-square-check" },
      { id: 8, name: "MBA in Fintech", icon: "fa-regular fa-square-check" },
      { id: 10, name: "MBA in Entrepreneurship", icon: "fa-regular fa-square-check" }
    ]
  },
  contactInfo: [
    {
      id: 1,
      type: 'phone',
      label: "Call Us:",
      value: "+919311411717",
      icon: "fa-solid fa-phone"
    },
    {
      id: 2,
      type: 'email',
      label: "Email US:",
      value: "admissions@krmangalam.edu.in",
      icon: "fa-solid fa-envelope"
    },
    {
      id: 3,
      type: 'address',
      label: "Address:",
      value: "K.R. Mangalam University, Sohna - Gurgaon Road, Gurugram, Haryana 122103",
      icon: "fa-solid fa-location-dot"
    },
    
  ],
  backgroundImage: "/landingpage/mba-2025/footer-bg.svg"
};