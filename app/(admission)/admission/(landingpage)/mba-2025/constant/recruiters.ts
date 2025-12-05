// Types and constants for Recruiters & Testimonials section
export interface RecruiterLogo {
  src: string;
  alt: string;
  company: string;
}

export interface StudentTestimonial {
  id: number;
  name: string;
  company: string;
  package: string;
  image: string;
  alt: string;
}

export interface HighlightPoint {
  id: number;
  text: string;
  icon: string;
}

// Recruiter logos data
export const recruiterLogos: RecruiterLogo[] = [
  { src: "/landingpage/mba-2025/accenture.svg", alt: "Accenture", company: "Accenture" },
  { src: "/landingpage/mba-2025/apple.svg", alt: "Apple", company: "Apple" },
  { src: "/landingpage/mba-2025/amazon.svg", alt: "Amazon", company: "Amazon" },
  { src: "/landingpage/mba-2025/deliotte.svg", alt: "Deloitte", company: "Deloitte" },
  { src: "/landingpage/mba-2025/icici.svg", alt: "ICICI Bank", company: "ICICI Bank" },
  { src: "/landingpage/mba-2025/tcs-logo.webp", alt: "TCS", company: "TCS" },
  { src: "/landingpage/mba-2025/infosys.svg", alt: "Infosys", company: "Infosys" },
];

// Student testimonials data
export const studentTestimonials: StudentTestimonial[] = [
  { id: 1, name: "Rishav Bakshi", company: "Ferrari Québec", package: "56.6 LPA", image: "/landingpage/mba-2025/56.6.jpeg", alt: "Rishav Bakshi" },
  { id: 2, name: "Daksh Mehta", company: "UNIAS", package: "36 LPA", image: "/landingpage/mba-2025/1.webp", alt: "Daksh Mehta" },
  { id: 3, name: "Abhinav Anand", company: "Cargoflash", package: "24 LPA", image: "/landingpage/mba-2025/2.webp", alt: "Abhinav Anand" },
  { id: 4, name: "Abhinav Sinha", company: "Nirmata Technologies Pvt. Ltd.", package: "20 LPA", image: "/landingpage/mba-2025/4.webp", alt: "Abhinav Sinha" },
];

// Highlight points data
export const highlightPoints: HighlightPoint[] = [
  { id: 1, text: "700+ Recruiters", icon: "fa-regular fa-square-check" },
  { id: 2, text: "56.6 LPA Highest Package", icon: "fa-regular fa-square-check" },
  { id: 3, text: "7.25 LPA Average Package", icon: "fa-regular fa-square-check" },
  { id: 4, text: "Scholarships Worth Up To ₹21 Cr", icon: "fa-regular fa-square-check" },
];