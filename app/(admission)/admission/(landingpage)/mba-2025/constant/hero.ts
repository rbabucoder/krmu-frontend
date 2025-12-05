// Types and constants for Hero component
export interface HeroData {
  headingLines: string[];
  highlightedWords: {
    [key: number]: number[]; // lineIndex: [wordIndex]
  };
  redTextLines: {
    [key: number]: number[]; // lineIndex: [wordIndex]
  };
  ctaButton: {
    text: string;
    icon?: string;
  };
  formWidgetId: string;
  formHeight?: string;
  backgroundImage?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  showPill?: boolean;
  pillText?: string;
}

// Configuration matching your exact design
export const mba2025HeroConfig: HeroData = {
  headingLines: [
    "Learn from the Top 1% of",
    "industry experts from",
    "EY, IIDE, and IBM",
    "with our MBA programme"
  ],
  highlightedWords: {
    0: [2, 3, 4], // "Top 1%"
    3: [3] // "MBA"
  },
  redTextLines: {
    2: [0, 1, 2, 3] // "EY, IIDE, and IBM"
  },
  ctaButton: {
    text: "Apply Now",
    icon: "fa-solid fa-arrow-right"
  },
  formWidgetId: "70d97092be6d93eed32d53d664e6b5b1",
  formHeight: "550px",
  backgroundImage: "/landingpage/mba-2025/4_MBA.jpg",
  stats: [
    { value: "56.6 LPA", label: "Highest Package" },
    { value: "Upto 21Cr", label: "Scholarship" },
    { value: "700+", label: "Recruiters" },
    { value: "100%", label: "Placement Assistance" }
  ],
  showPill: false,
  pillText: "Empower Your Leadership Journey"
};