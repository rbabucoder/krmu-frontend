// Types and constants for Footer section
export interface FooterData {
  logo?: {
    src: string;
    alt: string;
    maxWidth?: number;
  };
  copyrightText?: string;
  menuItems?: Array<{
    id: number;
    text: string;
    href: string;
  }>;
}


// Configuration for MBA 2025
export const mba2025Footer: FooterData = {
  logo: {
    src: "/landingpage/mba-2025/logo.webp",
    alt: "KRMU MBA 2025",
    maxWidth: 250
  },
  copyrightText: "© 2024 K.R. Mangalam University. MBA 2025 Admissions. All Rights Reserved.",
  menuItems: [
    
  ]
};