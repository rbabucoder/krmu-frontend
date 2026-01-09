// content.ts

import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import {
  HeroContent,
  AboutUsContent,
  AdmissionProcessContent,
  BusinessHubSection,
  BusinessLeaderContent,
  ComeToLifeSection,
  FAQSectionData,
  IndustryExpertsContent,
  LifeAsPhDScholarSection,
  MbaComparisonContent,
  PlacementStatsContent,
  ProminentRecruiterContent,
  ProspectusDownloadContent,
  ProgramCardType,
  PGTestimonialsBlock,
} from "../PGType";

export const heroContent: HeroContent = {
  title: `
            Learn Today To Make A
            Mark On Tomorrow with <br /> <span class="text-[#e31e24]">MBA</span> Programmes
            
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
  description: `<p>K.R. Mangalam University is a prominent university in Gurugram that was founded in 2013 under the Haryana Private University Act. The university's NAAC Grade "A" accreditation demonstrates a strong dedication to academic excellence, high-quality instruction, and continuous development.
</p> <br /> <p>The MCA courses at K.R. Mangalam University offer a vast scope for students aiming to build successful careers in the rapidly evolving realm of technology. The Master of Computer Application programmes strive to equip the students with advanced skills in programming and software development. Moreover, the programme not only opens up diverse career opportunities in the IT and tech sector but also prepares students for entrepreneurship, research, and innovation-driven roles.
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
  sectionTitle: "Why Choose a MCA Programme at KRMU?",

  sectionDescription:
    "Master of Computer Applications is a postgraduate program designed to build strong foundations in computer science, software development, and emerging technologies. The MCA program offered by K.R. Mangalam University combines academic rigour with industry-oriented learning as modern laboratories, experienced faculty, and industry collaborations enhance practical exposure.",

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
        "Curriculum focuses equally on conceptual clarity and practical precision.",
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
        "600+ Journal articles in Scopus and WoS, 100+ Published Patents highlighting the University’s research excellence.",
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
        "100% placement assistance with over 700+ recruiters visiting the campus for placement drives every year.",
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

export const PGTestimonialsData: PGTestimonialsBlock = {
  header: {
    eyebrow: "Still in Doubt?",
    title: "Why our schoolers love and trust",
    highlight: "See What Our Students Say About Us!",
  },

  items: [
    {
      brand: "",
      text: `KRMU has been a turning point in my academic journey. The curriculum is practical, 
industry-focused, and taught by faculty who genuinely care about our growth. The 
exposure I received through live projects, workshops, and industry interactions has 
boosted my confidence and shaped my career path.
`,
      author: "Veeresh Tarnal, MBA",
      color: "bg-[#EAF6FF]",
      featured: false,
    },
    {
      brand: "",
      text: `It was a great experience studying at K.R. Mangalam University. I completed my MBA 
degree last year. And I was very much fortunate to have all my mentors who helped me 
during my post-graduation. Also, I would like to thank the training and placement cell 
for supporting each and every student.
`,
      author: "Prateek kumar, MBA",
      color: "bg-white",
      featured: false,
    },
    {
      brand: "",
      text: `No doubt I made the best choice of my career; K.R. Mangalam University is one among those 
unique institutions which help students in not only building their career but also enhances 
distinctive competencies and skill sets that help students grow in their professional life.
`,
      author: "Prachi, MBA",
      color: "bg-white",
      featured: false,
    },
    {
      brand: "",
      text: `The skill development opportunities at KRMU made a huge difference in my confidence. 
Through workshops, projects, and hands-on training, I gained practical abilities that I now 
use every day in my career.`,
      author: "Rajan Kumar, MBA",
      color: "bg-white",
      featured: false,
    },
  ],
};

// export const PGtestimonialsData: PGTestimonial[] = [
//   {
//     brand: "",
//     text: "K.R. Mangalam University has truly transformed my career. The program not only provided me with technical expertise but also honed my problem-solving and analytical skills. The university encouraged us to participate in hackathons, industry projects, and internships, which gave me hands-on experience in real-world AI applications. Today, I am working as a Sales manager at Rally Motors, and I owe my success to the incredible faculty and supportive environment at KRMU. ",
//     author: "Rishav Bakshi",
//     color: "bg-[#EAF6FF]",
//     featured: false,
//   },
//   {
//     brand: "",
//     text: "Looking back at my journey at K.R. Mangalam University, I feel grateful for the incredible opportunities I received here. The curriculum was designed in collaboration with industry experts, ensuring we were up to date with the latest AI trends. The mentorship from experienced faculty, research-driven approach, and exposure to AI tools like TensorFlow, PyTorch, and Big Data analytics helped me secure my dream job in the tech industry. I highly recommend this programme to anyone passionate about AI and data science!",
//     author: "Parminder Singh",
//     color: "bg-white",
//     featured: false,
//   },
//   {
//     brand: "",
//     text: "Studying at K.R. Mangalam University was one of the best decisions of my academic journey. The well-structured curriculum, combined with practical exposure through hands-on projects, helped me build a strong foundation in machine learning, data analytics, and cloud computing. The faculty’s guidance and the state-of-the-art labs played a crucial role in enhancing my technical skills. Thanks to the university’s placement cell, I secured a job at a leading AI firm, and I feel confident about tackling industry challenges.",
//     author: "Annanya Agarwal",
//     color: "bg-white",
//     featured: false,
//   },
//   {
//     brand: "",
//     text: "K.R. Mangalam University didn’t just provide me with a degree—it shaped my career. The MCA programme gave me the technical expertise, industry exposure, and confidence to work on AI-driven solutions. The university’s tie-ups with industry leaders, guest lectures from  AI professionals, and project-based learning approach made a significant difference in my  professional journey. Today, as a Data Analyst, I use the knowledge and skills I gained at KRMU  daily. If you're looking for a programme that bridges the gap between academics and industry, this is the place to be!",
//     author: "Shivangi Sharma",
//     color: "bg-white",
//     featured: false,
//   },
// ];
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
    title: "MBA (Fintech) with academic support of Ernst & Young (EY)",
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
    title: "MBA (Digital Marketing) with academic support of IIDE",
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
      title: "Attend the Faculty-Led Interview",
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
    "Launch your engineering career with future-ready specialisations, industry-aligned curriculum, and hands-on project learning at our modern Gurugram campus.",
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
    "",
  faqs: [
    {
      id: "item-1",
      question: "What are the eligibility criteria for the MBA programme?",
      answer: `Candidates must have completed a Bachelor’s degree from a recognised institution and meet the university’s admission standards.`,
    },
    {
      id: "item-2",
      question: "Are scholarships available at KRMU?",
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
  description: `Within a lush, green campus designed for interactive learning, research, and holistic development, K.R. Mangalam University offers state-of-the-art MBA infrastructure, including smart, air-conditioned classrooms, high-speed Wi-Fi, sophisticated computer labs, a well-stocked library with digital access, incubation centres, and career development facilities. These features are complemented by first-rate dorms, sports facilities, and a lively student body.

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
