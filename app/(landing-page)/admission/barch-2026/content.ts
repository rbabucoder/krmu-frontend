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
       Bachelor of <br /> Architecture
      </span>
      <br />
      PROGRAMMES 2026
    `,
  desc: `Start Building Your Future in Business and Management`,
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
    title: "Up To ₹21 Cr",
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
  heading: "What makes KRMU the Best option for the B.Arch Course?",
  subheading: "From Drawing Design Sketches to Building Skyscrapers",
  content: `Developed by the expert professionals in the field, K.R. Mangalam University's five-year B.Arch program offers architecture education through practical projects, immersive sessions, insightful workshops, and valuable insights into the intricacies of architectural planning. The university's multidisciplinary strategy aims to ensure that the holistic development of its students, who will be influencing the architectural world in the future, remains a top priority.`,
  imgUrl: `/landingpage/common/whykrmtest.png`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Emphasis on Hands-on-learning, Practical experience with sophisticated software for advanced modelling and construction preparation.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Portfolio Development Guidance for Internship and Job Prospects in Architectural Firms, Government Organisations, etc.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Participation in live projects and real-world assignments.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `100% Placement and Internship Assistance.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Global Exposure in the form of a paid visit to 2 weeks of summer school at a Prestigious European university.`,
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
  subheading: ``,
  heading: `KRMU’s B.Arch Programme`,
  specilisationCard: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `Bachelor of Architecture`,
      desc: `The KRMU's Bachelor of Architecture (B.Arch) equips the students with all the necessary skills and theoretical knowledge they require to plan, design and construct structures, buildings and various functional spaces by integrating artistic aesthetics and technology in a seamless manner. This degree aims to cultivate both analytical and creative thinking, equipping students to navigate modern-world challenges while building successful careers.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `5 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Candidates must have passed the 10+2 or equivalent examination with Physics and Mathematics as compulsory subjects, along with one of the following: Chemistry, Biology, a Technical Vocational subject, Computer Science, Information Technology, Informatics Practices, Engineering Graphics, or Business Studies, with at least 45% aggregate marks. Alternatively, candidates may have passed the 10+3 Diploma Examination with Mathematics as a compulsory subject and at least 45% aggregate marks.`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,90,000`,
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
    label: "Apply for B.Arch. Programme",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Students’ Testimonials",
  heading: `Still in Doubt? <br /> See What Our Students Say About Us!`,
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
  heading: `Modern Facilities & State-of-the Art Infrastructure`,
  description: `The conceptual knowledge is imparted to students in modern smart classrooms that are equipped with interactive whiteboards and seamless tech integration. The availability of the latest software systems and powerful PCs enables students to develop skills necessary for advanced modelling and construction preparation`,
  footerText: ``,
  cta: {
    label: "Apply for B.Arch. Programme ",
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
  heading: "Frequently Asked Questions",
  description:
    "K.R. Mangalam University offers Ph.D. programmes in a wide array of fields, encouraging cross-disciplinary exploration and innovation.",
  faqs: [
    {
      id: "item-1",
      question: "What is the role of workshops and guest lectures in the B.Arch. curriculum?",
      answer: `They provide practical insights, exposure to industry trends, and valuable networking opportunities with leading architects and designers.`,
    },
    {
      id: "item-2",
      question: "What skills will one develop in a B.Arch. programme?",
      answer: `You will cultivate creative design solutions, technical competence in construction and modelling, and effective communication of your ideas through visual, oral, and written means.`,
    },
    {
      id: "item-3",
      question:
        "Does KRMU provide hostel accommodation?",
      answer: `Yes, KRMU provides separate hostels for boys and girls with modern amenities and 24/7 security.`,
    },
    {
      id: "item-4",
      question: "What kind of projects are involved in the B.Arch. programme?",
      answer: `The programme includes understanding elements of designing, being able to design from a single unit to complex projects such as mixed-use buildings, commercial complexes, institutional buildings, resorts, hospitals, housing and also large-scale urban design projects.`,
    },
    {
      id: "item-5",
      question: "Are there internship opportunities in the B.Arch. programme?",
      answer: `Yes, the strong industry collaborations of K.R. Mangalam University ensure robust internship and placement opportunities with reputed architectural firms and design studios.`,
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
    label: "Apply for B.Arch. Programme",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};
