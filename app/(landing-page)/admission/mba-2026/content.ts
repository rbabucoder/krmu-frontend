// content.ts

import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import {
  AboutUsContent,
  AdmissionProcessContent,
  BusinessHubSection,
  BusinessLeaderContent,
  ComeToLifeSection,
  FAQSectionData,
  HeroContent,
  IndustryExpertsContent,
  LifeAsPhDScholarSection,
  MbaComparisonContent,
  PlacementStatsContent,
  ProminentRecruiterContent,
  ProspectusDownloadContent,
} from "./contentType";
import { PGTestimonialsBlock, ProgramCardType } from "../PGType";

export const heroContent: HeroContent = {
  title: `
            Learn Today To Make A Mark On Tomorrow <br />
          with  <span class="text-[#e31e24]">MBA </span> Programmes 2026-27<br />
          `,
  description:
    "The MBA courses are structured not just for comprehending management principles but to develop the vision and resilience required to lead an era of constant change.",
  primaryCta: {
    label: "Apply Now",
    href: "#",
  },
  secondaryCta: {
    label: "Download Prospectus",
    href: "#",
  },
  image: {
    src: "/landingpage/mca-2026/image.png",
    alt: "MBA Program",
    width: 600,
    height: 400,
  },
};

export const placementStatsContent: PlacementStatsContent = {
  stats: [
    {
      value: "56.6 LPA",
      label: "Highest Package",
    },
    {
      value: "800+",
      label: "Top Recruiters",
    },
    {
      value: "₹27 Cr",
      label: "Worth of Scholarships",
    },

    {
      value: "92%",
      label: "Placement Record",
    },
  ],
  image: {
    src: "/landingpage/mca-2026/dummy.png",
    alt: "Graduate Placement",
    width: 300,
    height: 480,
  },
};

export const prominentRecruiterContent: ProminentRecruiterContent = {
  title: "Our Prominent Recruiters",

  logos: [
    {
      src: "/landingpage/bba-2026/prominent/accenture.png",
      alt: "Accenture",
      width: 160,
      height: 40,
    },
    {
      src: "/landingpage/bba-2026/prominent/accenture.png",
      alt: "Accenture",
      width: 160,
      height: 40,
    },
    {
      src: "/landingpage/bba-2026/prominent/accenture.png",
      alt: "Accenture",
      width: 160,
      height: 40,
    },
  ],

  people: [
    {
      name: "Abhinav Anand",
      package: "18 LPA",
      profileImage: {
        src: "/landingpage/mca-2026/dummy-2.png",
        alt: "Abhinav Anand",
        width: 160,
        height: 40,
      },
      companyLogo: {
        src: "/landingpage/bba-2026/prominent/accenture.png",
        alt: "Accenture",
        width: 120,
        height: 50,
      },
    },
    {
      name: "Abhinav Anand",
      package: "18 LPA",
      profileImage: {
        src: "/landingpage/mca-2026/dummy-2.png",
        alt: "Abhinav Anand",
        width: 160,
        height: 40,
      },
      companyLogo: {
        src: "/landingpage/bba-2026/prominent/accenture.png",
        alt: "Accenture",
        width: 120,
        height: 50,
      },
    },
  ],
};

export const aboutUsContent: AboutUsContent = {
  title: "About Us",
  description: `<p>K.R. Mangalam University is a prominent university in Gurugram that was founded in 2013 under the Haryana Private University Act. 
  The university's NAAC Grade "A" accreditation demonstrates a strong dedication to academic excellence, 
  high-quality instruction, and continuous development.</p> <br /><p>The MBA programmes provided by K.R. Mangalam University, via their curriculum, offer strong professional growth and excellent earning potential by combining fundamental business concepts with dedicated hands-on learning experience. It's a very popular course among individuals who desire jobs with a global perspective.</p>`,
  image: {
    src: "/landingpage/mca-2026/univ.png",
    alt: "K.R. Mangalam University Campus",
    width: 600,
    height: 300,
  },
};

export const industryExpertsContent: IndustryExpertsContent = {
  title: "Learn from Industry Leaders @ KRMU!",
  description:
    "K.R. Mangalam University takes pride in collaborating with the industry leaders who offer top-notch hands-on learning experiences to students.",

  experts: [
    {
      src: "/landingpage/mca-2026/ibm.webp",
      alt: "IBM",
      width: 300,
      height: 200,
    },
    {
      src: "/landingpage/mca-2026/ibm.webp",
      alt: "IBM",
      width: 300,
      height: 200,
    },
    {
      src: "/landingpage/mca-2026/ibm.webp",
      alt: "IBM",
      width: 300,
      height: 200,
    },
    {
      src: "/landingpage/mca-2026/ibm.webp",
      alt: "IBM",
      width: 300,
      height: 200,
    },
  ],
};

export const businessLeaderContent: BusinessLeaderContent = {
  sectionTitle: "Why Choose KRMU for the MBA Courses?",

  sectionDescription:
    "The K.R. Mangalam University (KRMU) offers MBA programme that comprises of an industry-aligned curriculum, strong practical exposure (live projects, case studies, internships with top firms like EY), specialization options, and focus on modern tech (AI, Tableau, R), plus unique perks like fully sponsored European summer schools to selected students, preparing students for dynamic corporate roles.",

  semesters: [
    {
      id: 1,
      title: "",
      duration: "",
      subtitle:
        "Programmes are designed in collaboration with Industry Leaders and Professional Experts.",
      heading: "",
      description: "",
      courses: [
        // {
        //   id: "01",
        //   title: "Management Theory & Practice",
        //   desc: "Understanding core management principles and applying them to real organizational situations.",
        //   color: "bg-blue-100",
        // },
      ],
    },
    {
      id: 2,
      title: "",
      duration: "",
      subtitle:
        "The curriculum integrates real-world industry practices for a holistic learning experience.",
      heading: "",
      description: "",
      courses: [
        // {
        //   id: "01",
        //   title: "Management Theory & Practice",
        //   desc: "Understanding core management principles and applying them to real organizational situations.",
        //   color: "bg-blue-100",
        // },
      ],
    },
    {
      id: 3,
      title: "",
      duration: "",
      subtitle:
        "Entrepreneurship and Incubation Centre and Design Thinking Lab, designed to nurture innovative startup ideas",
      heading: "",
      description: "",
      courses: [
        // {
        //   id: "01",
        //   title: "Management Theory & Practice",
        //   desc: "Understanding core management principles and applying them to real organizational situations.",
        //   color: "bg-blue-100",
        // },
      ],
    },
    {
      id: 4,
      title: "",
      duration: "",
      subtitle:
        "Students get an opportunity to attend a fully sponsored 2-week summer school at a Prestigious European University.",
      heading: "",
      description: "",
      courses: [
        // {
        //   id: "01",
        //   title: "Management Theory & Practice",
        //   desc: "Understanding core management principles and applying them to real organizational situations.",
        //   color: "bg-blue-100",
        // },
      ],
    },
    {
      id: 5,
      title: "",
      duration: "",
      subtitle:
        "100% placement assistance with Internship and Placement opportunities in leading companies.",
      heading: "",
      description: "",
      courses: [
        // {
        //   id: "01",
        //   title: "Management Theory & Practice",
        //   desc: "Understanding core management principles and applying them to real organizational situations.",
        //   color: "bg-blue-100",
        // },
      ],
    },
  ],
};

export const PGProgrammeCard: ProgramCardType = [
  {
    image: "/landingpage/common/dummy.png",
    title: "MBA with Academic Support from IBM",
    description:
      "K.R. Mangalam University offers an MBA with Academic Support from IBM, which is a specialised business degree program that focuses on Digital Transformation, Data Analytics, AI, and Cloud Computing. It integrates IBM's state-of-the-art tools, an industry-aligned curriculum, expert sessions, and certifications to provide students with practical skills and enhanced career readiness for tech-driven roles.",
    format: "",
    duration: "2 Years",
    eligibility:
      "Candidate must have a bachelor's degree or equivalent degree from a recognised university with a minimum 50% aggregate marks.",
    focus: "",
    annualFee: "Rs 3,00,000",
  },
  {
    image: "/landingpage/common/dummy.png",
    title:
      "MBA (Fintech) with academic support of Ernst & Young (EY)",
    description:
      "The two-year MBA Fintech program of K.R. Mangalam University prepares students for a career in the rapidly expanding and changing industry of technology-enabled finance. In addition to analysing the complexities of digital, open, and neo banking, blockchain, digital payments and lending solutions, growth and challenges of cryptocurrency and digital currency, financial risk management, and financial analytics, the program seeks to equip students with the fundamental skills necessary to comprehend and develop AI-driven financial products and services.",
    format: "",
    duration: "2 Years",
    eligibility:
      "Candidate must have a bachelor's degree or equivalent degree from a recognised university with a minimum 50% aggregate marks.",
    focus: "",
    annualFee: "Rs 3,50,000",
  },
  {
    image: "/landingpage/common/dummy.png",
    title:
      "MBA (Digital Marketing) with academic support of IIDE",
    description:
      "In partnership with IIDE, K.R. Mangalam University has developed the MBA (Digital Marketing) curriculum to address the changing needs of the digital marketing industry. By enrolling in this program, you will be able to strategise entrepreneurial marketing difficulties and give organisations a simplified strategy to promote their growth and sales in the digital world.",
    format: "",
    duration: "2 Years",
    eligibility:
      "Candidate must have a bachelor's degree or equivalent degree from a recognised university with a minimum 50% aggregate marks.",
    focus: "",
    annualFee: "Rs 3,50,000",
  },
];

export const prospectusDownloadContent: ProspectusDownloadContent = {
  title: "Download the MBA Programme Prospectus",
  description:
    "Download the MBA programme prospectus to explore programme details, specialisations, curriculum, and career prospects.",
  button: {
    label: "Download Now",
    href: "#", // can be file link or NPF popup later
  },
  image: {
    src: "/images/prospectus-girls.png",
    alt: "MBA Prospectus",
  },
};
export const PGTestimonialsData: PGTestimonialsBlock = {
  header: {
    eyebrow: "Students’ Testimonials ",
    title: "Why do Aspirants Prefer KRMU?",
    highlight: "",
  },

  items: [
    {
      brand: "",
      text: "KRMU has been a turning point in my academic journey. The curriculum is practical, industry-focused, and taught by faculty who genuinely care about our growth. The exposure I received through live projects, workshops, and industry interactions has boosted my confidence and shaped my career path.",
      author: "Veeresh Tarnal, MBA",
      color: "bg-[#EAF6FF]",
      featured: false,
    },
    {
      brand: "",
      text: "It was a great experience studying at K.R. Mangalam University. I completed my MBA degree last year. And I was very fortunate to have all my mentors who helped me during my post-graduation. Also, I would like to thank the training and placement cell for supporting each and every student.",
      author: "Prateek kumar, MBA",
      color: "bg-white",
      featured: false,
    },
    {
      brand: "",
      text: "No doubt, I made the best choice of my career; K.R. Mangalam University is one among those unique institutions which help students not only in building their career but also enhance distinctive competencies and skill sets that help students grow in their professional lives.",
      author: "Prachi, MBA",
      color: "bg-white",
      featured: false,
    },
    {
      brand: "",
      text: "The skill development opportunities at KRMU made a huge difference in my confidence. Through workshops, projects, and hands-on training, I gained practical abilities that I now use it every day in my career.",
      author: "Rajan Kumar, MBA",
      color: "bg-white",
      featured: false,
    },
  ],
};

export const admissionProcessContent: AdmissionProcessContent = {
  eyebrow: "Admission Process",

  title: "Take The First Step Towards Your Future",

  description:
    "K.R. Mangalam University has collaborated with leading organisations to offer hands-on training, expert-led guest lectures.",

  cta: {
    label: "Apply Now",
    href: "#",
  },

  steps: [
    {
      step: "1",
      title: "Register Online Through the KRMU Portal",
      points: [
        // "Complete the online application form through the official admissions portal.",
      ],
    },
    {
      step: "2",
      title: "Submit Academic Documents & Application Fee",
      points: [],
    },
    {
      step: "3",
      title: "Take the KREE (Entrance Exam)",
      points: [],
    },
    {
      step: "4",
      title: "Attend the Faculty Led Interview",
      points: [],
    },
    {
      step: "5",
      title: "Receive Admission Confirmation",
      points: [],
    },
  ],
};

export const mbaComparisonContent: MbaComparisonContent = {
  title: "vs MBA at KRMU",
  highlight: "MBA at a Traditional University",
  description:
    "The program at KRMU emphasizes real-world learning through internships, business simulations, and industry-driven projects.",

  traditionalHeader: "Traditional University",
  krmuHeader: "K.R. Mangalam University",

  rows: [
    {
      icon: BookOpen,
      label: "Curriculum",
      traditional: "Conventional syllabus with limited industry or contemporary relevance",
      krmu: {
        title:
          "Industry-aligned and interdisciplinary curriculum updated to current academic and professional needs",
        desc: "",
      },
    },
    {
      icon: Lightbulb,
      label: "Pedagogy",
      traditional: "Primarily lecture-based and theory-driven learning",
      krmu: {
        title:
          "Experiential learning through case studies, projects, presentations, and research-based activities",
        desc: "",
      },
    },
    {
      icon: GraduationCap,
      label: "Faculty",
      traditional:
        "Largely academic, with minimal practical or field exposure",
      krmu: {
        title:
          "Experienced academicians and practitioners with strong research and domain expertise",
        desc: "",
      },
    },
    {
      icon: Briefcase,
      label: "Career Exposure",
      traditional: "Limited career guidance and traditional career pathways",
      krmu: {
        title:
          "Career-oriented training, research exposure, internships, and guidance for civil services, academia, and professional roles",
        desc: "",
      },
    },
    {
      icon: Award,
      label: "Assessment System",
      traditional: "End-term, theory-focused examinations",
      krmu: {
        title:
          "Continuous assessment through assignments, projects, presentations, and practical evaluations",
        desc: "",
      },
    },
  ],
};

export const businessHubData: BusinessHubSection = {
  heading: `Learn at One of India’s Biggest <br /> Business Hubs, Gurgaon`,
  description:
    "Launch your career with future-ready specialisations, industry-aligned curriculum, and hands-on project learning at our modern Gurugram campus.",
  highlights: [
    { text: "UGC Approved University" },
    { text: "NAAC ‘A’ Accredited" },
    { text: "100+ Programmes" },
    { text: "18K+ Alumni Base" },
  ],
  mapImage: {
    src: "/landingpage/common/map.webp",
    alt: "Campus Location Map",
    width: 520,
    height: 300,
  },
  formNote: `No charges for enquiry. <br /> We will contact you within 24–48 hours.`,
  formImage: {
    src: "/landing/hero-form.png",
    alt: "Admission Form",
    width: 480,
    height: 640,
  },
};

export const faqSectionData: FAQSectionData = {
  eyebrow: "(FAQs)",
  heading: "Frequently Asked Questions",
  description: "",
  faqs: [
    {
      id: "item-1",
      question: "What are the eligibility criteria for the MBA programme?",
      answer: `Candidates must have completed a Bachelor’s degree from a recognised institution and meet the university’s admission standards.`,
    },
    {
      id: "item-2",
      question:
        "Are scholarships available at KRMU?",
      answer: `Yes, K.R. Mangalam University offers merit-based and need-based scholarships. Visit our scholarships page for more details.`,
    },
    {
      id: "item-3",
      question: "Does KRMU provide hostel accommodation?",
      answer: `Yes, KRMU provides separate hostels for boys and girls with modern amenities and 24/7 security.`,
    },
    {
      id: "item-4",
      question: "What placement support does the university provide?",
      answer: `The K.R. Mangalam University provides dedicated placement assistance, including industry collaborations, mock interviews, and placement drives with top recruiters.`,
    },
    {
      id: "item-5",
      question: "What are the available specialisations in the MBA programme?",
      answer: `The KRMU offers specialisations in Finance, Marketing, HR, Business Analytics, Operations, Digital Marketing, Technology Management, Product Management, IT, Entrepreneurship, and Fintech.`,
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life @ KRMU",
  description: "",
  image: {
    src: "/landingpage/common/collage.webp",
    alt: "Life as a PhD Scholar at KR Mangalam",
  },
  facilities: [
    // { id: 1, title: "24/7 security and medical facilities" },
    // { id: 2, title: "Sports and recreation centers" },
    // { id: 3, title: "Cafeteria and food courts" },
    // { id: 4, title: "Peer mentorship programs" },
    // { id: 5, title: "PhD scholar association activities" },
  ],
  additionalFacilities: [
    // { id: 6, title: "Cafeteria and food courts" },
    // { id: 7, title: "Peer mentorship programs" },
    // { id: 8, title: "PhD scholar association activities" },
    // { id: 9, title: "Transportation connectivity" },
  ],
};

export const comeToLifeData: ComeToLifeSection = {
  heading: `World-Class Facilities & Infrastructure`,
  description: `The modern facilities of K.R. Mangalam University intend to provide strong support to students. The institution has cutting-edge computer labs with the latest equipment, sophisticated tools, and industry-standard software for practical projects, research, and simulations. To promote an immersive learning environment, classrooms are equipped with smart technology, such as interactive whiteboards, projectors, high-speed Wi-Fi, and comfortable, ergonomic seating. They also have central air conditioning. For in-depth study and research, students have access to a well-stocked central library with a comprehensive selection of books, periodicals, research materials, and e-resources.`,
  footerText: ``,
  cta: {
    label: "Apply for MBA 2026-2027",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/common/infra/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/2.webp",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/common/infra/3.webp",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/common/infra/4.webp",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/common/infra/5.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/common/infra/6.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/common/infra/7.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/common/infra/8.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/common/infra/9.webp",
      alt: "Campus Infrastructure",
    },
    {
      image: "/landingpage/common/infra/10.webp",
      alt: "Campus Infrastructure",
    },
  ],
};
