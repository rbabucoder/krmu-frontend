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
            Deepen Your Legal Expertise that’ll <br /> Define Your Future <br />
          with  <span class="text-[#e31e24]">LL.M.</span> Programmes 2026-27<br />
          `,
  description: "Advance Your Legal Expertise. Lead with Specialisation.",
  primaryCta: {
    label: "Apply Now",
    href: "#",
  },
  secondaryCta: {
    label: "Download Prospectus",
    href: "#",
  },
  image: {
    src: "/landingpage/llm-2026/image.png",
    alt: "MBA Program",
    width: 600,
    height: 400,
  },
  bgImage: "/landingpage/llm-2026/llm.webp",
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
  description: `<p>K.R. Mangalam University is a prominent university in Gurugram that was founded in 2013 under the Haryana Private University Act. The university's NAAC Grade "A" accreditation demonstrates a strong dedication to academic excellence, high-quality instruction, and continuous development.</p> <br /><p>The Master of Laws (LL.M.) is a postgraduate programme intended to offer in-depth expertise in a particular field of law. By providing advanced insights into areas including international law, corporate law, intellectual property law, criminal law, and commercial law, earning an LL.M. improves legal knowledge and professional prospects. The curriculum strengthens professionals' practice and skills by giving them a better awareness of changing laws and regulations, building on their core legal knowledge. Graduates can explore employment opportunities in various fields, including corporate law, real estate, consulting, legal process outsourcing, and more.</p>`,
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
  sectionTitle: "Preparing the Next Generation of Legal Thought Leaders",

  sectionDescription:
    "The LL.M. programme at K.R. Mangalam University is designed for law graduates who seek advanced legal knowledge, research expertise, and specialisation in emerging and core areas of law.",

  semesters: [
    {
      id: 1,
      title: "",
      duration: "",
      subtitle:
        "Specially Designed Curriculum in Consultation with Top Experts and Law Practitioners",
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
        "Consistent Mentoring by Acclaimed Academicians, Judges, Industry Experts from Top Law Firms and Senior Advocates from High Courts and The Supreme Court of India",
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
        "Develop Strong Analytical and Creative Skills Essential for Legal Professions",
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
        "Practical Exposure through Moot Court Practices, Field Studies, and Legal Aid Sessions",
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
      subtitle: "100% Placement Support and Internship Opportunities",
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
    title: "LL.M. in Corporate Law",
    description:
      "The LL.M. in Corporate Law is designed to develop advanced expertise in corporate governance, mergers and acquisitions, compliance, and commercial regulations. The programme equips law graduates with in-depth legal insight, strategic thinking, and practical exposure to address complex corporate and business legal challenges in a globalised economy.",
    format: "",
    duration: "1 Years",
    eligibility:
      "The candidate must hold an LL.B. degree with at least 50% of the possible points from an accredited university.",
    focus: "",
    annualFee: "Rs 1,50,000",
  },
  {
    image: "/landingpage/common/dummy.png",
    title: "LL.M. in Human Rights and Humanitarian Law",
    description:
      "The LL.M. in Human Rights and Humanitarian Law focuses on the protection and promotion of human dignity through advanced study of international human rights frameworks, humanitarian principles, and global justice systems. The programme prepares legal professionals to address contemporary human rights challenges through critical analysis, research, and policy-oriented legal practice.",
    format: "",
    duration: "1 Years",
    eligibility:
      "The candidate must hold an LL.B. degree with at least 50% of the possible points from an accredited university.",
    focus: "",
    annualFee: "Rs 1,50,000",
  },
  {
    image: "/landingpage/common/dummy.png",
    title: "LL.M. in Criminal Law",
    description:
      "The LL.M. in Criminal Law offers advanced study of criminal justice systems, penal laws, and procedural frameworks. The programme develops strong analytical, research, and advocacy skills, preparing legal professionals to address complex criminal cases, policy reforms, and evolving challenges in the justice system.",
    format: "",
    duration: "1 Years",
    eligibility:
      "The candidate must hold an LL.B. degree with at least 50% of the possible points from an accredited university.",
    focus: "",
    annualFee: "Rs 1,50,000",
  },
  {
    image: "/landingpage/common/dummy.png",
    title: "LL.M. in Intellectual Property Rights",
    description:
      "The LL.M. in Intellectual Property Rights equips legal professionals with advanced knowledge of patents, trademarks, copyrights, and emerging IP laws in the digital and innovation-driven economy. The programme develops expertise in IP protection, enforcement, and policy, preparing graduates for specialised legal practice, corporate advisory roles, and research in intellectual property law.",
    format: "",
    duration: "1 Years",
    eligibility:
      "The candidate must hold an LL.B. degree with at least 50% of the possible points from an accredited university.",
    focus: "",
    annualFee: "Rs 1,50,000",
  },
  {
    image: "/landingpage/common/dummy.png",
    title: "LL.M. in Cyber Law",
    description:
      "The LL.M. in Cyber Law focuses on the legal and regulatory frameworks governing cyberspace, data protection, and digital transactions. The programme equips legal professionals with specialised knowledge to address cyber crimes, privacy issues, and emerging challenges in technology-driven legal environments.",
    format: "",
    duration: "1 Years",
    eligibility:
      "The candidate must hold an LL.B. degree with at least 50% of the possible points from an accredited university.",
    focus: "",
    annualFee: "Rs 1,50,000",
  },
  {
    image: "/landingpage/common/dummy.png",
    title: "LL.M. in Alternative Dispute Resolution",
    description:
      "The LL.M. in Alternative Dispute Resolution focuses on modern dispute resolution mechanisms, including arbitration, mediation, and negotiation. The programme develops advanced legal, analytical, and advocacy skills, preparing professionals to resolve complex disputes efficiently across commercial, corporate, and international legal settings.",
    format: "",
    duration: "1 Years",
    eligibility:
      "The candidate must hold an LL.B. degree with at least 50% of the possible points from an accredited university.",
    focus: "",
    annualFee: "Rs 1,50,000",
  },
];

export const prospectusDownloadContent: ProspectusDownloadContent = {
  title: "Download the LL.M. Programme prospectus",
  description:
    "Download the LL.M. programme prospectus to explore programme details, specialisations, curriculum, and career prospects.",
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
    title: "Why do Aspirants Prefer KRMU?",
    highlight: "",
  },

  items: [
    {
      brand: "",
      text: "Pursuing a LLM  at the  University of Edinburgh deepened my understanding of global corporate governance, equipping me with analytical skills for a successful legal career.",
      author: "TANMAYA JHA",
      color: "bg-[#EAF6FF]",
      featured: false,
    },
    {
      brand: "",
      text: "Proud K.R. Mangalam University alumni, my journey from student to professional  was enriched by diverse cultural and academic engagements, shaping my future personally and professionally. Immersed in a vibrant academic environment, guided by distinguished professors, I gained confidence and insight into the leg",
      author: "SAGAR KUMAR",
      color: "bg-white",
      featured: false,
    },
    {
      brand: "",
      text: "Blessed to join KRMU, its top-notch infrastructure and supportive atmosphere enriched my learning journey. Grateful to professors for their expertise. Now, as a director at 'Ataraxia IP,' I aim to apply KRMU's teachings to achieve my goals",
      author: "KOMAL SHARMA",
      color: "bg-white",
      featured: false,
    },
    {
      brand: "",
      text: "Navigating Legal Frontiers with K.R. Mangalam University My journey at K.R. Mangalam University transformed me, fostering my confidence and competence in law. As an alumnus, I'm grateful for experiences like coordinating the Legal Aid Committee and serving as a Social Media Ambassador, amplifying social  responsibility. Over 15 internships honed my skills, paving the way for roles as a Legal Consultant and founder of a law firm. K.R. Mangalam's interdisciplinary approach and faculty support laid the foundation for my success, instilling values of integrity and compassion. Thank you for shaping me into the legal professional I am today.",
      author: "JAI SIKAND",
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
  title: "vs LL.M. at KRMU",
  highlight: "LL.M. at a Traditional University",
  description:
    "The program at KRMU emphasizes real-world learning through internships, business simulations, and industry-driven projects.",

  traditionalHeader: "Traditional University",
  krmuHeader: "K.R. Mangalam University",

  rows: [
    {
      icon: BookOpen,
      label: "Curriculum",
      traditional: "Theory-heavy with limited focus on emerging legal areas.",
      krmu: {
        title:
          "Industry-aligned curriculum with specialisations in contemporary and evolving areas of law.",
        desc: "",
      },
    },
    {
      icon: Lightbulb,
      label: "Pedagogy",
      traditional: "Primarily lecture-based teaching methods.",
      krmu: {
        title:
          "Experiential learning through case studies, research projects, seminars, and practical exposure.",
        desc: "",
      },
    },
    {
      icon: GraduationCap,
      label: "Faculty",
      traditional:
        "Predominantly academic faculty with limited industry interaction.",
      krmu: {
        title:
          "Experienced academicians supported by legal practitioners, jurists, and industry experts.",
        desc: "",
      },
    },
    {
      icon: Briefcase,
      label: "Placements",
      traditional: "Limited placement assistance and industry networking.",
      krmu: {
        title:
          "Dedicated career support with industry connections, internships, and professional guidance.",
        desc: "",
      },
    },
    {
      icon: Award,
      label: "Assessment System",
      traditional: "Rigid and exam-centric evaluation.",
      krmu: {
        title:
          "Continuous assessment through research work, presentations, projects, and examinations.",
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
      question: "How long does the LL.M. program last?",
      answer: `The program lasts for a full year.`,
    },
    {
      id: "item-2",
      question:
        "What are the requirements to be eligible for the LL.M. program?",
      answer: `Candidates must hold an LL.B. degree with at least 50% of the possible points from an accredited university.`,
    },
    {
      id: "item-3",
      question: "Which specialisations are available in the LL.M. programme?",
      answer: `Corporate law, human rights and humanitarian law, criminal law, intellectual property rights, alternative dispute resolution, and cyber law are among the specialisations offered by the program.`,
    },
    {
      id: "item-4",
      question: "Is there a hybrid version of the LL.M. programme?",
      answer: `Indeed, a hybrid style of delivery is used for the LL.M. programme. You get the best of both worlds by using online materials in addition to attending in-person classes on Saturdays.`,
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
    label: "Apply for LL.M. 2026-2027",
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
