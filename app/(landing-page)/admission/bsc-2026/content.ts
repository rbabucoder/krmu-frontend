import {
  ApplySectionData,
  BusinessHubSection,
  ComeToLifeSection,
  CounterItem,
  FAQSectionData,
  HeroContent,
  HeroMarqueeSection,
  IndustryExpertsSection,
  LifeAsPhDScholarSection,
  OpportunitySection,
  ProminentRecruit,
  ScholarResearchImpactSection,
  SpecialisationSection,
  TestimonialsSection,
  WhyKRMSection,
} from "./contentype";

// Usage types
export const Hero: HeroContent = {
  title: `
      ADMISSIONS <br />
      OPEN FOR <br />
      <span class="text-[#fcd404] text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold">
       B.Sc.
      </span>
      <br />
      PROGRAMMES 2026
    `,
  desc: `Begin a focused and future-oriented academic journey with B.Sc. programmes designed to strengthen scientific thinking, problem-solving, and practical skills. Choose from specialised disciplines aligned with your interests, gain hands-on learning exposure, and prepare for confident, career-ready roles across emerging and established industries. `,
};

export const heroMarqueeData: HeroMarqueeSection = {
  messages: [
    "Priority Application Deadline: January 15, 2026 | Only 45 Fellowship Positions Available | Early Application",
    "Priority Application Deadline: January 15, 2026 | Only 45 Fellowship Positions Available | Early Application",
    "Priority Application Deadline: January 15, 2026 | Only 45 Fellowship Positions Available | Early Application",
  ],
  bgColor: "#e31e24",
  speedClass: "animate-marquee",
};

export const Counters: CounterItem[] = [
  {
    title: "7.25 LPA",
    subtitle: "Average Package",
  },
  {
    title: "800+",
    subtitle: "visiting recruiters",
  },
  {
    title: "₹27Cr",
    subtitle: "Worth of Scholarships",
  },
  {
    title: "100%",
    subtitle: "Placement Assistance",
  },
];

// Recruiters list
export const prominentRecruiters: ProminentRecruit[] = [
  {
    imgUrl:
      "https://www.krmangalam.edu.in/admission/law-2025/assets/trilegal.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl:
      "https://www.krmangalam.edu.in/admission/btech-2025-b/assets/images/accenture.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl:
      "https://krmangalam.edu.in/admission/mba-2025/assets/images/deliotte.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl:
      "https://krmangalam.edu.in/admission/mba-2025/assets/images/deliotte.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl:
      "https://krmangalam.edu.in/admission/mba-2025/assets/images/deliotte.svg",
    alt: "Recruiter Logo",
  },
  {
    imgUrl:
      "https://krmangalam.edu.in/admission/mba-2025/assets/images/deliotte.svg",
    alt: "Recruiter Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "Why Choose B.Sc. Programmes at KRMU?",
  subheading: "Build a Career Grounded in Knowledge and Skills ",
  content: `K.R. Mangalam University offers thoughtfully designed B.Sc. programmes that focus on strong scientific fundamentals, analytical thinking, and practical application. With expert faculty, hands-on learning, interdisciplinary exposure, and structured career support, students are prepared for industry roles, research opportunities, and higher education. `,
  imgUrl: `/landingpage/common/whykrmtest.png`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Interdisciplinary, Research-Driven, updated according to NEP guidelines `,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Prolific Researchers, Visionary, adaptable `,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Problem-Based Learning, Flipped Classroom, Peer Teaching `,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Well-equipped and organized labs, Cutting-edge research facilities`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "What Makes B.A. Programmes at K.R.M.U Stand Out? ",
  heading: `Learn from <br /> Industry Expert
`,
  description: `The B.Sc. programmes at KRMU are enriched by academic and professional inputs from experienced knowledge partners. `,
  cta: {
    label: "B.A. Programmes: 2026-27",
    href: "#",
  },
  cards: [
    {
      imgUrl:
        "https://krmangalam.edu.in/admission/mba-2025/assets/images/apple.svg",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl:
        "https://krmangalam.edu.in/admission/mba-2025/assets/images/apple.svg",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl:
        "https://krmangalam.edu.in/admission/mba-2025/assets/images/apple.svg",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
    {
      imgUrl:
        "https://krmangalam.edu.in/admission/mba-2025/assets/images/apple.svg",
      alt: "Apple Logo",
      title: "AI and Machine Learning Courses",
    },
  ],
  bannerImg: "/landingpage/common/dummy2.png",
};

export const specialisationData: SpecialisationSection = {
  subheading: `Choose your specialisations based on your interests and career goals.`,
  heading: `Our B.Sc. programmes & specialisations `,
  specilisationCard: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Sc. (Hons. / Hons. with Research ) Physics `,
      desc: `A programme that builds strong foundations in physics while introducing advanced theories and research-based learning. With modern laboratories and cutting-edge technology, students gain hands-on experience and develop analytical skills for deeper exploration in physics.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or an equivalent examination from a recognised board or university with PCB or PCM and a minimum of 50% aggregate marks.`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Sc. (Hons. / Hons. with Research) Chemistry `,
      desc: `    The programme blends strong theoretical foundations with practical and research-based learning in Chemistry. It builds advanced subject knowledge, research skills, and applied expertise, while offering hands-on training and internship exposure to support higher studies and research-driven careers. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or an equivalent examination from a recognised board or university with PCB or PCM, securing at least 50% aggregate marks. `,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Sc. (Hons.) Forensic Science `,
      desc: `    The programme prepares students for investigative careers through hands-on training, scientific analysis, and practical exposure. It builds strong foundations in forensic techniques, crime scene investigation, and laboratory skills aligned with modern criminal justice needs. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or an equivalent examination in Science (Physics, Chemistry, Biology, or Mathematics) from a recognised board or university with at least 50% aggregate marks. `,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Sc. (Hons. / Hons. with Research) Forensic Science`,
      desc: `    The programme blends theory with hands-on training, equipping students with practical skills in crime scene investigation, evidence handling, and forensic analysis through advanced laboratory exposure. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `    Passed 10+2 or an equivalent examination from a recognized board or university with Physics, Chemistry, Biology, or Mathematics as subjects, securing a minimum of 50% aggregate marks. `,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `Integrated/Dual Degree B.Sc.-M.Sc. (Forensic Science) `,
      desc: `    The programme offers strong theoretical and practical training in forensic science, preparing students for crime scene analysis and careers in investigation agencies, legal firms, and forensic laboratories through industry-relevant coursework and field-based learning. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Passed 10+2 or equivalent examination from any recognized board/university in any stream with minimum 50% aggregate Marks.`,
        },
      ],
    },
  ],
};

export const opportunityData: OpportunitySection = {
  image: {
    src: "/landingpage/common/test2.png",
    alt: "Industry Expert",
    width: 300,
    height: 400,
  },
  heading: "Learn From Knowledge Partners ",
  highlight: "Opportunity That Transforms",
  cta: {
    label: "Apply for B.Sc. Programmes 2026",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Our Testimonials",
  heading: `Why do our schoolers love and trust K.R. Mangalam University?`,
  testimonials: [
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `SOAD's B.Arch program at K.R. Mangalam University is an incubator of creativity and 
excellence. It provided me with the platform and guidance to thrive as an aspiring 
Architect.
`,
      name: "Ar. Divya Kharbanda",
      programme: "B.Arch- Design Cell, New Delhi",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `As a B.Arch student, I'm inspired daily by the dynamic environment of classes, empowering 
me to push boundaries and innovate in architecture.
`,
      name: "Keerti Diwedi",
      programme: "B.Arch- Gold Medalist, Arcop Associates, New Delhi",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `From KRMU's School of Architecture & Design to Auctus Wear, I carry the essence of design 
excellence instilled by the university.`,
      name: "Lalita",
      programme: "Auctus Wear",
    },
  ],
};

export const scholarResearchImpactData: ScholarResearchImpactSection = {
  heading: "Our Scholars’ Research Impact",
  description:
    "PhD candidates trust peer experiences more than institutional marketing. Real stories address fear of isolation, funding concerns, and career uncertainty.",
  slides: [
    {
      image: "/landingpage/common/image.png",
      alt: "Research Impact 1",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Research Impact 2",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Research Impact 3",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Research Impact 4",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Research Impact 5",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Rahul Khanna",
      role: "PhD Journalism & Mass Communication",
      image: "/landingpage/common/dummy.png",
      quote:
        "My research at K.R. Mangalam University on social media's influence in modern society has been incredibly fulfilling. The mentorship and focus on real-world change truly set this programme apart.",
    },
    {
      id: 2,
      name: "Prerna Singh",
      role: "PhD Scholar",
      image: "/testimonials/prerna.jpg",
      quote:
        "The encouragement and diverse opportunities I received throughout my PhD at KRMU were beyond my expectations.",
    },
    {
      id: 3,
      name: "Rajeev Kumar",
      role: "PhD Graduate",
      image: "/testimonials/rajeev.jpg",
      quote:
        "KRMU's expert faculty guidance pushed me to achieve much more than I believed possible.",
    },
  ],
};

export const comeToLifeData: ComeToLifeSection = {
  heading: `World-Class Facilities at KRMU for B.Sc. Programmes `,
  description: `K.R. Mangalam University provides a dynamic campus designed to support academic excellence and holistic development. Advanced classrooms, high-speed Wi-Fi, modern laboratories, a central library, hostels, and recreational spaces together create a balanced and enriching learning environment. `,
  footerText: ``,
  cta: {
    label: "Apply for B.Sc. Programmes 2026–27",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/common/image.png",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Research Facility",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Innovation Center",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Library & Resources",
    },
    {
      image: "/landingpage/common/image.png",
      alt: "Campus Infrastructure",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as a BBA (UG) Student at KRMU",
  description: "",
  image: {
    src: "/landingpage/common/test44.jpeg",
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

export const faqSectionData: FAQSectionData = {
  eyebrow: "(FAQs)",
  heading: "Got Questions? We've Got Answers ",
  description:
    "K.R. Mangalam University offers Ph.D. programmes in a wide array of fields, encouraging cross-disciplinary exploration and innovation.",
  faqs: [
    {
      id: "item-1",
      question:
        "What is B.Sc. (Hons. / Hons. with Research)?",
      answer: `It is an undergraduate science programme offering in-depth subject knowledge, with the research track including advanced coursework and a research project. `,
    },
    {
      id: "item-2",
      question: "What is the duration of the programme?",
      answer: ` The programme is typically completed in four years. `,
    },
    {
      id: "item-3",
      question: "What are the career prospects after this course?",
      answer: `Graduates can work in research labs, industry roles, analytics, education, and applied science sectors.`,
    },
    {
      id: "item-4",
      question: "Can I pursue higher education after this programme? ",
      answer: `Yes, students can opt for M.Sc., PhD, or other specialised postgraduate programmes.`,
    },
    {
      id: "item-5",
      question: "What kind of internships are offered? ",
      answer: `Students gain internships with research organisations, industry partners, and laboratories.`,
    },
    {
      id: "item-6",
      question: "Are there opportunities for government jobs? ",
      answer: `Yes, graduates are eligible for various government and public sector roles. `,
    },
    {
      id: "item-7",
      question: "Does the university provide placement assistance?  ",
      answer: `Yes, dedicated placement support helps students prepare for employment opportunities.`,
    },
    {
      id: "item-8",
      question: "What is the eligibility for admission?  ",
      answer: `Candidates must have passed 10+2 in the Science stream from a recognised board. `,
    },
    {
      id: "item-9",
      question: "Does the programme offer international exposure?",
      answer: `Yes, students may access global collaborations, exchange programmes, and study exposure. `,
    },
    {
      id: "item-10",
      question: "Are scholarships available for B.Sc. students? ",
      answer: `Yes, the university offers merit-based and need-based scholarships.`,
    },
  ],
};

export const businessHubData: BusinessHubSection = {
  heading: `Learn at One of India’s Biggest <br /> Business Hubs, Gurgaon`,
  description:
    "Launch your career with future-ready specialisations, industry-aligned curriculum, and hands-on project learning at our modern Gurugram campus.",
  highlights: [
    { text: "UGC Approved University" },
    { text: "NAAC A+ Accredited" },
    { text: "175+ PhDs Awarded" },
    { text: "₹60,000 Annual Fellowship" },
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

export const applySectionData: ApplySectionData = {
  heading: `Apply for K.R. Mangalam <br /> University now`,
  description: "Start Your Adventure Right Now at K.R. Mangalam University",
  cta: {
    label: "Apply for B.Arch. Programme",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};
