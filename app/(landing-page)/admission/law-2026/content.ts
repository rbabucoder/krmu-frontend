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
        Law (UG)
      </span>
      <br />
      PROGRAMMES 2026
    `,
  desc: `Shape Your Legal Journey with Practical and Career-Focused Learning.`,
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
    subtitle: "Recruiters",
  },
  {
    title: "Up To ₹21 Cr",
    subtitle: "Worth of Scholarships",
  },
  {
    title: "56.6 LPA",
    subtitle: "Highest Package",
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
  heading: "Why Choose Undergraduate Law Programmes at KRMU?",
  subheading: "Where Legal Theory Meets Real-World Practice",
  content: `Undergraduate Law Programmes at K.R. Mangalam University provides internationally relevant, industry-aligned programs aimed at producing capable and socially conscious attorneys. Our graduates are prepared to succeed in corporate law, litigation, public policy, and other fields thanks to a curriculum developed by legal professionals, practical experience, and interdisciplinary learning.`,
  imgUrl: `/landingpage/common/whykrmtest.png`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Curriculum that incorporates moot courts and real-world case studies`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Strong mentoring by retired judges, legal scholars, and active advocates`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Solid placement connections with top corporations, law firms, and legal organisations`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Study travels and international partnerships`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Focused skill development in research, advocacy, and legal writing combined with student-centered instruction`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "Why KR Mangalam PhD?",
  heading: `Learn From <br /> Industry Experts`,
  description:
    "K.R. Mangalam University has collaborated with leading organisations to offer hands-on training, expert-led guest lectures.",
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
  subheading: "Choose from KRMU’s undergraduate law programmes and begin your journey into the legal profession.",
  heading: `Our Undergraduate Law Programmes`,
  specilisationCard: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BA. LL.B. (Hons.)`,
      desc: `With this five-year integrated BA LLB programme that combines the arts and law, learn about the socio-legal aspects of law.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `5 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,85,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BBA. LL.B. (Hons.)`,
      desc: `With this five-year integrated curriculum that combines business administration and law, you may get ready for corporate legal difficulties. A thorough grasp of legal frameworks and managerial concepts is provided by the course.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `5 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,85,000`,
        },
      ],
    },
      {
      imgUrl: "/landingpage/common/dummy.png",
      title: `LL.B. (Hons.)`,
      desc: `With this three-year undergraduate programme, graduates from any subject can enter the legal field. The course provides a thorough examination of procedural legislation and legal concepts. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `5 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,60,000`,
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
    label: "Apply for B.Tech 2026",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Our Testimonials",
  heading: `Why our schoolers loves and <br /> trust K.R. Mangalam University?`,
  testimonials: [
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `Completing BBA.LLB (Hons) from K.R. Mangalam University in 2023 enhanced my 
legal reasoning and business acumen. Pursuing a Master's in Corporate Law at the 
University of Edinburgh deepened my understanding of global corporate governance, 
equipping me with analytical skills for a successful legal career.`,
      name: "TANMAYA JHA",
      programme: "BBA LL.B. (Hons.) ",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `Proud K.R. Mangalam University alumni, my journey from student to professional 
was enriched by diverse cultural and academic engagements, shaping my future 
personally and professionally. Immersed in a vibrant academic environment, guided 
by distinguished professors, I gained confidence and insight into the legal career. 
After graduating, I applied my experiences to a fulfilling career journey.`,
      name: "SAGAR KUMAR",
      programme: "B.A. LL.B. (Hons.)",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `Proud K.R. Mangalam University alumni, my journey from student to professional 
was enriched by diverse cultural and academic engagements, shaping my future 
personally and professionally. Immersed in a vibrant academic environment, guided 
by distinguished professors, I gained confidence and insight into the legal career. 
After graduating, I applied my experiences to a fulfilling career journey.`,
      name: "KOMAL SHARMA",
      programme: "BBA LL. B. (Hons.)",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `My journey at K.R. Mangalam University transformed me, fostering my confidence and 
competence in law. As an alumnus, I'm grateful for experiences like coordinating the 
Legal Aid Committee and serving as a Social Media Ambassador, amplifying social 
responsibility. Over 15 internships honed my skills, paving the way for roles as a Legal 
Consultant and founder of a law firm. K.R. Mangalam's interdisciplinary approach and 
faculty support laid the foundation for my success, instilling values of integrity and 
compassion. Thank you for shaping me into the legal professional I am today.`,
      name: "JAI SIKAND",
      programme: "B.A. LL.B. (Hons.)",
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
  heading: `World-Class Infrastructure`,
  description: `K.R. Mangalam University provides a world-class academic environment that supports effective teaching, learning, and research in legal education.
   The university is equipped with modern infrastructure and advanced learning resources designed to meet the academic and professional 
   requirements of undergraduate law programmes.
`,
  footerText: ``,
  cta: {
    label: "Apply for Law (UG) 2026-2027",
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
  heading: "Life as a Law (UG) Student at KRMU ",
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
      question: "What are the eligibility criteria for law admission at KRMU?",
      answer: `10+2 with a minimum of 50% aggregate marks is required for Integrated LL.B. Programs (BBA LL.B. / B.A. LL.B.). <br />
        A bachelor's degree in any field with at least 50% of the possible points is required for LL.B. (Hons.).`,
    },
    {
      id: "item-2",
      question: "Are there any scholarships available?",
      answer: `Indeed, both need-based and merit-based scholarships are available at K.R. Mangalam University. For further information, see our scholarship page.`,
    },
    {
      id: "item-3",
      question: "What kind of placement assistance does the institution offer?",
      answer: `We offer committed placement support, including industry partnerships, simulated interviews, and placement drives with leading corporate and legal recruiters.`,
    },
    {
      id: "item-4",
      question: "What distinguishes BBA LLB from BA LLB?",
      answer: `In every Indian LLB school, an LLB program lasts around three years. However, the course length is often five years if you're studying an integrated LL.B. program, like as a B.A. LL.B. or a BBA LLB in India.`,
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
    label: "Apply for Law (UG) 2026-2027",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};
