// Types and constants for Header component
export interface LogoData {
  src: string;
  alt: string;
  height?: number;
}

export interface ApplyButtonData {
  text: string;
  show?: boolean;
}

export interface CountdownData {
  show: boolean;
  text: string;
  targetDate?: string;
}

export interface HeaderData {
  logo?: LogoData;
  applyButton?: ApplyButtonData;
  countdown?: CountdownData;
}


// Configuration for MBA 2025
export const mba2025HeaderConfig: HeaderData = {
  logo: {
    src: "/landingpage/mba-2025/white-krm.webp",
    alt: "KRMU MBA 2025",
    height: 60
  },
  applyButton: {
    text: "Apply Now",
    show: true
  },
  countdown: {
    show: true,
    text: "MBA 2025 Admissions Closing Soon",
    targetDate: "2025-01-31"
  }
};