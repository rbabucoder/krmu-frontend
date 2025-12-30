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
      Pharmacy 
      </span>
      <br />
      PROGRAMMES 2026
    `,
  desc: `Unlock a world of opportunities with Pharmacy programmes offering D.Pharm., B.Pharm., and Master’s in Pharm. Gain industry-focused education for modern healthcare, build strong foundations in pharmaceutical sciences, explore specialised pathways, access hands-on training with advanced technology, and benefit from industry partnerships that prepare you for confident, career-ready roles in the pharmacy sector. `,
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
    subtitle: "Highest Package",
  },
  {
    title: "800+",
    subtitle: "Top Recruiters",
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
  heading: "Why Choose Pharmacy Programmes at KRMU? ",
  subheading: "Build a Career That Impacts Lives ",
  content: `K.R. Mangalam University offers industry-aligned Pharmacy programmes, including D. Pharm., B.Pharm., and master's programmes in pharmacy, developed to meet global healthcare standards. Designed with pharmaceutical and healthcare experts, these programmes build strong scientific foundations, practical lab skills, industry exposure, internships, and placement support for career-ready professionals. `,
  imgUrl: `/landingpage/common/whykrmtest.png`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `    Programmes shaped through consultation with experienced professionals from healthcare industry `,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `    Hands-on scientific training focused on real-world practices and professional excellence `,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `    Gain advanced knowledge, insights, and mentorship directly from industry experts .`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `    Interactive sessions with leading pharmacists and physiotherapy professionals `,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "Why KR Mangalam PhD?",
  heading: `Learn from <br /> Leaders @ KRMU!
`,
  description: `K.R. Mangalam University takes pride in collaborating with industry leaders and skill professionals who offer unparalleled hands-on learning experiences to students.`,
  cta: {
    label: "Apply for B.Tech 2026",
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
  subheading: `Choose your specialisations based on your interests and career goals. 

Our pharma programmes & specialisations `,
  heading: `Our pharma programmes & specialisations   `,
  specilisationCard: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `D.Pharm. `,
      desc: `The programme blends theory and practical learning to build strong pharmacy skills. Through classes, lab work, and hands-on training, students gain essential knowledge of chemistry, pharmacology, biochemistry, and toxicology for successful pharmacy careers.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `2 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `    Candidates must have passed 10+2 or an equivalent science qualification with physics, chemistry, and biology or mathematics, as approved by the Pharmacy Council of India. `,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Pharm. `,
      desc: `The programme offers in-depth pharmaceutical education with strong scientific foundations. It blends advanced theory, laboratory training, industry exposure, and practical learning to prepare students for professional roles in drug development, research, production, and healthcare sectors.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `    Candidates must have passed 10+2 with physics, chemistry, and biology or maths, securing at least 50% marks from a recognised board. Applicants must be 17 years or older by 31 December of the admission year `,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `Master of Pharmacy (M.Pharm.) – Pharmaceutics `,
      desc: `    The M.Pharm. Pharmaceutics programme focuses on advanced drug development and production. It covers pharmaceutics, drug delivery systems, manufacturing processes, industry advancements, and research-based learning, preparing students with strong scientific and practical expertise across four semesters. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `2 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Candidates must hold a B.Pharmacy degree from a PCI-approved Indian institution with at least 55% aggregate marks and be registered with the State Pharmacy Council or obtain registration within one month of admission.`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `Master of Pharmacy (M.Pharm.) – Pharmacology `,
      desc: `       The M.Pharm. in pharmacology programme focuses on drug science, mechanisms, and therapeutic applications. It combines advanced theoretical learning with hands-on laboratory training, research, and projects, preparing graduates for careers in pharmaceutical, healthcare, and biomedical fields. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `2 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `    Candidates must hold a B.Pharmacy degree from a PCI-approved Indian institution with at least 55% aggregate marks and be registered with the State Pharmacy Council or obtain registration within one month of admission. `,
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
  heading: "Learn From Industry Experts",
  highlight: "Opportunity That Transforms",
  cta: {
    label: "Apply for Pharmacy Programmes 2026-27",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Our Testimonials ",
  heading: `Why do our schoolers love and trust K.R. Mangalam University? `,
  testimonials: [
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: ` The institution played a key role in shaping my journey. Supportive faculty encouraged critical thinking and helped me grow both personally and professionally.
`,
      name: "Gaurav Kaushik",
      programme: "PMBI",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `My academic experience stood out for its strong mix of theory and practical exposure, guided by dedicated teachers who truly invested in student success.
`,
      name: "Hardik Madaan",
      programme: "Abbott",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `I experienced a strong sense of belonging and collaboration, where peers and mentors consistently motivated one another to learn and improve. `,
      name: "Nikita",
      programme: "Assistant Professor ",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `My journey transformed me into a confident professional, equipped with relevant skills, lasting values, and a mindset of continuous growth. `,
      name: "Ashwani Yadav",
      programme: "Micro Labs",
    },
  ],
};

export const scholarResearchImpactData: ScholarResearchImpactSection = {
  heading: "World-Class Facilities at KRMU for Pharma Programmes ",
  description:
    "K.R. Mangalam University offers a modern campus designed to support advanced pharmaceutical education and practical learning. Smart classrooms, high-speed Wi-Fi, and well-equipped pharma laboratories enable effective learning and hands-on training. The central library offers extensive academic and research resources, while seminar halls, innovation spaces, hostels, and recreational facilities ensure a balanced campus experience.",
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
  heading: `Modern Facilities & State-of-the Art Infrastructure`,
  description: `The conceptual knowledge is imparted to students in modern smart classrooms that are equipped with interactive whiteboards and seamless tech integration. The availability of the latest software systems and powerful PCs enables students to develop skills necessary for advanced modelling and construction preparation`,
  footerText: ``,
  cta: {
    label: "Apply for Pharmacy Programmes 2026–27",
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
  heading: "Got Questions? We've Got Answers",
  description:
    "",
  faqs: [
    {
      id: "item-1",
      question:
        "What are the eligibility criteria for Pharmacy programmes? ",
      answer: `For D.Pharm., candidates must complete 10+2 with Physics, Chemistry, and Mathematics or Biology. For B.Pharm., candidates must complete 10+2 with physics, chemistry, mathematics or biology and meet the university’s admission criteria. For M.Pharm., candidates must hold a B.Pharm. degree from a recognised institution with at least 55% aggregate marks. `,
    },
    {
      id: "item-2",
      question: "Are scholarships available? ",
      answer: `Yes, K.R. Mangalam University offers merit-based and need-based scholarships. Students can visit the official scholarships page for detailed information. `,
    },
    {
      id: "item-3",
      question: "What placement support does the university provide?",
      answer: `The university offers dedicated placement support, including industry collaborations, mock interviews, career guidance, and placement drives with leading pharmaceutical and healthcare organisations. `,
    },
    {
      id: "item-4",
      question: "What practical exposure will students receive? ",
      answer: `Students gain hands-on experience through laboratory work, hospital pharmacy training, industrial visits, and internships with reputed pharmaceutical companies. `,
    },
    {
      id: "item-5",
      question: "Is hostel accommodation available on campus? ",
      answer: `Yes, the university provides secure and comfortable on-campus hostel facilities with modern amenities and 24/7 support. `,
    },
    {
      id: "item-6",
      question: "Can students pursue research projects during the course?",
      answer: `Yes, the programmes encourage research through advanced laboratory facilities and faculty mentorship to support academic and industry-focused projects. `,
    },
    {
      id: "item-7",
      question: "Which are the best M.Pharm. colleges in Delhi NCR? ",
      answer: `For students exploring M.Pharm. colleges in Gurgaon and Delhi NCR, K.R. Mangalam University offers a well-structured M.Pharm. programme. Admissions for M.Pharm. 2025 are currently open. `,
    },
    {
      id: "item-8",
      question: "Is there an entrance exam for B.Pharm. admission?",
      answer: `B.Pharm. admission may or may not require an entrance examination. K.R. Mangalam University conducts its own KREE entrance exam for B.Pharm. admissions. Some pharmacy colleges also accept national-level exams such as CUET or NEET, as per eligibility norms. `,
    },
  ],
};

export const businessHubData: BusinessHubSection = {
  heading: `Learn at One of India’s Biggest <br /> Business Hubs, Gurgaon`,
  description:
    "Launch your engineering career with future-ready specialisations, industry-aligned curriculum, and hands-on project learning at our modern Gurugram campus.",
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
    label: "Apply for Pharmacy Programmes 2026-27",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};
