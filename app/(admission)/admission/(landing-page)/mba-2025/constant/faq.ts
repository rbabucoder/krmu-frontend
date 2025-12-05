// Types and constants for FAQ section
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQData {
  badgeText?: string;
  heading?: {
    highlighted: string;
    normal: string;
  };
  faqs?: FAQItem[];
}


// Configuration for MBA 2025
export const mba2025FAQ: FAQData = {
  badgeText: "MBA 2025 FAQs",
  heading: {
    highlighted: "Have Questions About",
    normal: "MBA 2025 Programme?"
  },
  faqs: [
    {
      id: 1,
      question: "What is the eligibility criteria for MBA 2025?",
      answer: "Candidates must have a Bachelor's degree (minimum 50% marks) from any recognized university. Final year students can also apply."
    },
    {
      id: 2,
      question: "What is the admission process for MBA 2025?",
      answer: "Admission is based on KREE entrance exam score, academic performance, and personal interview. CAT/MAT/XAT scores are also accepted."
    },
    {
      id: 3,
      question: "What specialisations are available in MBA 2025?",
      answer: "MBA 2025 offers specialisations in Finance, Marketing, HR, Business Analytics, Digital Marketing, Operations, and Fintech with industry-integrated curriculum."
    },
    {
      id: 4,
      question: "What is the duration of the MBA programme?",
      answer: "The MBA programme is a 2-year full-time course divided into 4 semesters, including a summer internship."
    },
    {
      id: 5,
      question: "What is the fee structure for MBA 2025?",
      answer: "The fee structure is competitive with various payment options. Scholarships up to 100% are available for deserving candidates."
    },
    
  ]
};