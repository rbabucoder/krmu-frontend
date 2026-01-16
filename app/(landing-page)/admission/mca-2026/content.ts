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
import { PGTestimonial, PGTestimonialsBlock, ProgramCardType } from "../PGType";

export const heroContent: HeroContent = {
  title: `
            Click, Code & Conquer <br />
            with <span class="text-[#e31e24]">MCA</span> Programmes<br />
             2026-27
          `,
  description:
    "The MCA courses are meticulously prepared to enable students to comprehend complex coding processes that, in turn, lead to a successful career path.",
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
      value: "100%",
      label: "Placement Assistance",
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
  description: `<p>K.R. Mangalam University is a prominent university in Gurugram that was founded in 2013 under the Haryana Private University Act. The university's NAAC Grade "A" accreditation demonstrates a strong dedication to academic excellence, high-quality instruction, and continuous development.</p> <br /> 
  <p>The MBA programmes provided by K.R. Mangalam University, via their curriculum, offer strong professional growth and excellent earning potential by combining fundamental business concepts with dedicated hands-on learning experience. It's a very popular course among individuals who desire jobs with a global perspective.
</p>`,
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
  sectionTitle:
    "Why Choose KRMU for the Master of Business Administration (MBA) Courses?",

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
    title: "Master of Computer Applications (MCA)",
    description:
      "K.R. Mangalam University offers cutting-edge equipment, state-of-the-art labs, and industry-focused education to improve hands-on learning. Through projects, internships, and seminars, the curriculum places a strong emphasis on professional abilities, creativity, and problem-solving. Graduates are equipped for a variety of professions in the quickly changing IT sector across international technology-driven organisations, such as software developers, system analysts, data specialists, or entrepreneurs.",
    format: "Full-time",
    duration: "2 Years",
    eligibility:
      "Any graduation degree with Mathematics at 10+2 level or at Graduation level with minimum 50% aggregate marks.",
    focus: "Software Development, Data & Systems",
    annualFee: "Rs 1,20,000",
  },
  {
    image: "/landingpage/common/dummy.png",
    title: "Bachelor of Computer Applications (BCA)",
    description:
      "The BCA program focuses on building strong foundations in computer science, programming, and modern application development with hands-on industry exposure.",
    format: "Full-time",
    duration: "3 Years",
    eligibility:
      "10+2 with Mathematics or equivalent with minimum 50% aggregate marks.",
    focus: "Programming & Application Development",
    annualFee: "Rs 1,10,000",
  },
];

export const prospectusDownloadContent: ProspectusDownloadContent = {
  title: "Download the M.C.A Programme Prospectus",
  description:
    "Download the M.C.A. programme prospectus to explore programme details, specialisations, curriculum, and career prospects.",
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
    eyebrow: "Our Testimonials",
    title: "Why our schoolers love and trust",
    highlight: "K.R. Mangalam University?",
  },

  items: [
    {
      brand: "",
      text: "K.R. Mangalam University has truly transformed my career. The program not only provided me with technical expertise but also honed my problem-solving and analytical skills. The university encouraged us to participate in hackathons, industry projects, and internships, which gave me hands-on experience in real-world AI applications. Today, I am working as a Sales manager at Rally Motors, and I owe my success to the incredible faculty and supportive environment at KRMU.",
      author: "Rishav Bakshi",
      color: "bg-[#EAF6FF]",
      featured: false,
    },
    {
      brand: "",
      text: "Looking back at my journey at K.R. Mangalam University, I feel grateful for the incredible opportunities I received here. The curriculum was designed in collaboration with industry experts, ensuring we were up to date with the latest AI trends. The mentorship from experienced faculty, research-driven approach, and exposure to AI tools like TensorFlow, PyTorch, and Big Data analytics helped me secure my dream job in the tech industry. I highly recommend this programme to anyone passionate about AI and data science!",
      author: "Parminder Singh",
      color: "bg-white",
      featured: false,
    },
    {
      brand: "",
      text: "Studying at K.R. Mangalam University was one of the best decisions of my academic journey. The well-structured curriculum, combined with practical exposure through hands-on projects, helped me build a strong foundation in machine learning, data analytics, and cloud computing. The faculty’s guidance and the state-of-the-art labs played a crucial role in enhancing my technical skills. Thanks to the university’s placement cell, I secured a job at a leading AI firm, and I feel confident about tackling industry challenges.",
      author: "Annanya Agarwal",
      color: "bg-white",
      featured: false,
    },
    {
      brand: "",
      text: "K.R. Mangalam University didn’t just provide me with a degree—it shaped my career. The MCA programme gave me the technical expertise, industry exposure, and confidence to work on AI-driven solutions. The university’s tie-ups with industry leaders, guest lectures from AI professionals, and project-based learning approach made a significant difference in my professional journey. Today, as a Data Analyst, I use the knowledge and skills I gained at KRMU daily. If you're looking for a programme that bridges the gap between academics and industry, this is the place to be!",
      author: "Shivangi Sharma",
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
      title: "Register Online Through Our Portal",
      points: [
        // "Complete the online application form through the official admissions portal.",
      ],
    },
    {
      step: "2",
      title: "Submit Your Academic Credentials & Application Fee",
      points: [],
    },
    {
      step: "3",
      title: "Appear for KREE (Entrance Exam)",
      points: [],
    },
    {
      step: "4",
      title: "Attend the Faculty Led Interview",
      points: [],
    },
    {
      step: "5",
      title: "Receive Your Admission Offer",
      points: [],
    },
  ],
};

export const mbaComparisonContent: MbaComparisonContent = {
  title: "vs Traditional MBA",
  highlight: "K.R. Mangalam University",
  description:
    "The program at KRMU emphasizes real-world learning through internships, business simulations, and industry-driven projects.",

  traditionalHeader: "Traditional University",
  krmuHeader: "K.R. Mangalam University",

  rows: [
    {
      icon: BookOpen,
      label: "Curriculum",
      traditional:
        "Conventional syllabus with limited industry or contemporary relevance",
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
      traditional: "Largely academic, with minimal practical or field exposure",
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
  description:
    "K.R. Mangalam University offers Ph.D. programmes in a wide array of fields, encouraging cross-disciplinary exploration and innovation.",
  faqs: [
    {
      id: "item-1",
      question: "What is the average salary of an MCA graduate?",
      answer: `In India, an MCA graduate can bag a starting package of 5-8 LPA after graduating.`,
    },
    {
      id: "item-2",
      question: "What skills will a student learn from KRMU’s MCA programme?",
      answer: `The MCA programmes at K.R. Mangalam University focus on helping students develop technical skills like web development, analytical thinking, data structures, and much more.`,
    },
    {
      id: "item-3",
      question: "Does KRMU provide hostel accommodation?",
      answer: `Yes, KRMU provides separate hostels for boys and girls with modern amenities and 24/7 security.`,
    },
    {
      id: "item-4",
      question: "Does the programme include industry exposure?",
      answer: `Yes, the K.R. Mangalam University offers internships, field visits, and guest lectures by expert professionals.`,
    },
    {
      id: "item-5",
      question: "Does KRMU provide placement support?",
      answer: `Yes, the K.R. Mangalam University offers 100% placement assistance with over 700+ recruiters visiting the campus for placement drives.`,
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as an MCA Student at KRMU ",
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
  heading: `Modern Facilities & State-of-the Art Infrastructure`,
  description: `Strong support is provided to MCA students by K.R. Mangalam University. The institution has cutting-edge computer labs with the latest equipment, sophisticated tools, and industry-standard software for practical projects, research, and simulations. To promote an immersive learning environment, classrooms are equipped with smart technology, such as interactive whiteboards, projectors, high-speed Wi-Fi, and comfortable, ergonomic seating. They also have central air conditioning. For in-depth study and research, students have access to a well-stocked central library with a comprehensive selection of books, periodicals, research materials, and e-resources.

`,
  footerText: ``,
  cta: {
    label: "Apply for Law (UG) 2026-2027",
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
