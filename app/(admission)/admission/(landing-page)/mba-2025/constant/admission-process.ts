// Types and constants for Admission Process section
export interface AdmissionStep {
  id: number;
  number: string;
  text: string;
}

export interface AdmissionProcessData {
  badgeText?: string;
  heading?: {
    highlighted: string;
    normal: string;
  };
  steps?: AdmissionStep[];
  buttons?: {
    apply: {
      text: string;
      icon: string;
    };
    contact: {
      text: string;
      icon: string;
    };
  };
  image?: {
    src: string;
    alt: string;
  };
}


// Configuration for MBA 2025
export const mba2025AdmissionProcess: AdmissionProcessData = {
  badgeText: "MBA 2025 Admission Process",
  heading: {
    highlighted: "Start Your MBA Journey",
    normal: "With Simple Steps"
  },
  steps: [
    {
      id: 1,
      number: "01",
      text: "Online Registration & Profile Creation"
    },
    {
      id: 2,
      number: "02",
      text: "Document Submission & Application Fee Payment"
    },
    {
      id: 3,
      number: "03",
      text: "KREE Entrance Exam or Valid CAT/MAT/XAT Score"
    },
    {
      id: 4,
      number: "04",
      text: "Personal Interview with Faculty Panel"
    },
    {
      id: 5,
      number: "05",
      text: "Admission Offer & Fee Payment"
    }
  ],
  buttons: {
    apply: {
      text: "Apply for MBA 2025",
      icon: "fa-solid fa-arrow-right"
    },
    contact: {
      text: "Get Admission Guidance",
      icon: "/landingpage/mba-2025/common/message.svg"
    }
  },
  image: {
    src: "/landingpage/mba-2025/steps.webp",
    alt: "MBA 2025 Admission Process"
  }
};