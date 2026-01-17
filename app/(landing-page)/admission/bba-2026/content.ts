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
       BBA 
      </span>
      <br />
      PROGRAMMES 2026-27
    `,
  desc: `Start Building Your Future in Business and Management`,
  heroBg: "/landingpage/bba-2026/bba-bg.webp",
  middleImg: "/landingpage/bba-2026/middle-img.webp",
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
    title: "Up To ₹27 Cr",
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
    imgUrl: "/landingpage/bba-2026/prominent/accenture.png",
    alt: "accenture Logo",
  },
  {
    imgUrl: "/landingpage/bba-2026/prominent/amazon.png",
    alt: "amazon Logo",
  },
  {
    imgUrl: "/landingpage/bba-2026/prominent/deloitte.png",
    alt: "deloitte Logo",
  },
  {
    imgUrl: "/landingpage/bba-2026/prominent/kpmg.png",
    alt: "kpmg Logo",
  },
  {
    imgUrl: "/landingpage/bba-2026/prominent/pepsico.png",
    alt: "pepsico Logo",
  },
];

export const whyKRM: WhyKRMSection = {
  heading: "Why Opt for BBA Programmes of KRMU?",
  subheading: "Shape Your Future with a Career-Focused Business Education",
  content: `The BBA programmes at K.R. Mangalam University provide the groundwork for future business executives to succeed in a variety of corporate positions or entrepreneurial endeavours. Our program, which is in line with NEP criteria, guarantees flexibility in length (3 or 4 years), combining academic knowledge with practical experience and real-world insights.`,
  imgUrl: `/landingpage/common/building.webp`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/bba-2026/why-opt/1-Card.jpg",
      content: `Multiple Specialisation Options in a NEP-Aligned Structure`,
    },
    {
      imgUrl: "/landingpage/bba-2026/why-opt/2-Card.jpg",
      content: `Industry Partnerships Providing Real-World Education and Placements`,
    },
    {
      imgUrl: "/landingpage/bba-2026/why-opt/3-Card.jpg",
      content: `Mentoring from Skilled Academics and Business Experts`,
    },
    {
      imgUrl: "/landingpage/bba-2026/why-opt/4-Card.jpg",
      content: `Contemporary Campus Facilities Designed for Experiential and Interactive Education`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn From <br /> Industry Experts`,
  description: `KRMU partners with major organisations to provide <br /> industry-specific training.`,
  cta: {
    label: "Apply for BBA 2026",
    href: "#",
  },
  cards: [
    {
      imgUrl:
        "/landingpage/bba-2026/experts/iide.webp",
      alt: "IIDE",
      title: "",
    },
    {
      imgUrl:
        "/landingpage/bba-2026/experts/ey-logo.webp",
      alt: "EY Logo",
      title: "",
    },
    {
      imgUrl:
        "/landingpage/bba-2026/experts/samatrix.webp",
      alt: "Samatrix Logo",
      title: "",
    },
    {
      imgUrl:
        "/landingpage/bba-2026/experts/grant.webp",
      alt: "Grant Logo",
      title: "",
    },
    {
      imgUrl:
        "/landingpage/bba-2026/experts/gcec.webp",
      alt: "GCEC Logo",
      title: "",
    },
  ],
  bannerImg: "/landingpage/common/indus-exp.webp",
};

export const specialisationData: SpecialisationSection = {
  subheading: `Choose from KRMU’s BBA  programmes and start building your future in business and management.`,
  heading: `Our BBA  Programmes`,
  specilisationCard: [
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-hr.jpg",
      title: `BBA (Human Resource)`,
      desc: `With an emphasis on human capital, strategic HR techniques, and people-oriented leadership, you may become an expert in talent management and organisational success.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
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
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-hr.jpg",
      title: `BBA (Hons. / Hons. with Research) Human Resource`,
      desc: `You may become an authority in talent management and organisational performance by focussing on human capital, strategic HR approaches, and people-oriented leadership.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
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
      imgUrl: "/landingpage/bba-2026/programs/bba-marketing.jpg",
      title: `BBA Marketing`,
      desc: `With a BBA in Marketing, explore the realms of branding, consumer behaviour, and marketing tactics to develop successful marketing campaigns and spur company expansion.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
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
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-marketing.jpg",
      title: `BBA (Hons. / Hons. with Research) Marketing`,
      desc: `Investigate branding, consumer behaviour, and marketing strategies with a BBA in marketing to create effective marketing campaigns and promote business growth.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
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
      imgUrl: "/landingpage/bba-2026/programs/bba-finance.jpg",
      title: `BBA Finance`,
      desc: `Gain expertise in risk management, investment techniques, and corporate finance to position yourself for leadership in the financial industry.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
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
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-finance.jpg",
      title: `BBA (Hons. /Hons. with Research) Finance`,
      desc: `Develop your corporate finance, investment, and risk management abilities to position yourself for leadership in the financial industry.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,70,000`,
        },
      ],
    },
    {
      imgUrl:
        "/landingpage/bba-2026/programs/bba-digital-marketing-with-academic-support-of-iide.jpg",
      title: `BBA (Digital Marketing) with Academic Support of IIDE`,
      desc: `Proficiency in online branding, performance marketing, and social media analytics can help you succeed in the digital economy. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
      ],
    },
    {
      imgUrl:
        "/landingpage/bba-2026/programs/bba-hons-digital-marketing-with-academic-support-of-iide.jpg",
      title: `BBA (Hons./ Hons. with Research) in Digital Marketing with Academic Support of IIDE`,
      desc: `You can succeed in the digital economy if you are proficient in social media analytics, performance marketing, and online branding.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-International-business.jpg",
      title: `BBA International Business`,
      desc: `Gain knowledge of international trade, cross-cultural management, and international marketing techniques to get ready for a worldwide career.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
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
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-international-business.jpg",
      title: `BBA (Hons./ Hons. with Research) International Business`,
      desc: `Learn about international trade, cross-cultural management, and international marketing tactics to get ready for a worldwide job.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
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
      imgUrl: "/landingpage/bba-2026/programs/bba-travel-tourism.jpg",
      title: `BBA (Travel & Tourism)`,
      desc: `Give yourself the abilities and information required to succeed in the fast-paced global tourist sector.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
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
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-travel-tourism.jpg",
      title: `BBA (Hons. / Hons. with Research) Travel & Tourism`,
      desc: `Give yourself the skills and knowledge needed to thrive in the rapidly evolving global tourism industry. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
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
      imgUrl: "/landingpage/bba-2026/programs/bba-ey.jpg",
      title: `BBA  (Business Analytics) with Academic Support of Ernst & Young (EY)`,
      desc: `Discover how to use decision-making tools, predictive analytics, and data visualisation to solve business problems.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,10,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-ey.jpg",
      title: `BBA Hons. / Hons. with Research) (Business Analytics) with academic support of Ernst & Young (EY)`,
      desc: `Discover how to use decision-making tools, predictive analytics, and data visualisation to solve business problems.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,10,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-gcec.jpg",
      title: `BBA (Hons. / Hons. with Research) Entrepreneurship with Academic Support of GCEC Global Foundation`,
      desc: `You may use startup ideation, venture financing, and lean management strategies to transform innovative ideas into successful enterprises with a BBA in Entrepreneurship. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-icf-grant-thornton.jpg",
      title: `BBA (International Accounting and Finance) (ACCA – UK) with Academic Support of Grant Thornton`,
      desc: `To focus on financial reporting and worldwide finance standards, pursue an internationally acknowledged ACCA-aligned programme.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-icf-grant-thornton.jpg",
      title: `BBA (Hons. / Hons. with Research) International Accounting and Finance (ACCA – UK) with academic support of Grant Thornton`,
      desc: `Pursue a globally recognised ACCA-aligned curriculum with an emphasis on financial reporting and global finance standards.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-logistics-safexpress.jpg",
      title: `BBA (Logistics and Supply Chain Management) with academic support of Safexpress)`,
      desc: `With knowledge of procurement, warehousing, and logistics technology, focus on supply chain and logistics strategy.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-logistics-safexpress.jpg",
      title: `BBA (Hons. / Hons. with Research) Logistics and Supply Chain Management with Academic Support of Safexpress`,
      desc: `Focus on supply chain and logistics strategy and have knowledge of procurement, warehousing, and logistics technology.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/bba-2026/programs/bba-hons-logistics-safexpress.jpg",
      title: `BBA (Entrepreneurship) with Academic Support of GCEC Global Foundation`,
      desc: `With a BBA in Entrepreneurship, you can turn creative concepts into profitable businesses through startup ideation, venture capital, and learn management techniques.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10+2 with a minimum of 50% marks`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,05,000`,
        },
      ],
    },
  ],
};

export const opportunityData: OpportunitySection = {
  image: {
    src: "/landingpage/bba-2026/opp/opp.png",
    alt: "Industry Expert",
    width: 300,
    height: 400,
  },
  heading: "Learn From Industry Experts",
  highlight: "Opportunity That Transforms",
  cta: {
    label: "Apply for BBA  2026-2027",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Students’ Testimonials",
  heading: `Why Do Our Students Trust Us?`,
  testimonials: [
    {
      image: "/landingpage/bba-2026/testimonials/1.jpg",
      videoUrl: "#",
      quote: `Navigating through the BBA programme has been enlightening. The faculty's 
guidance and the practical approach to learning have been invaluable. It has 
equipped me with the skills and knowledge necessary for success in the business 
realm.`,
      name: "Ayush Rajput",
      programme: "",
    },
    {
      image: "/landingpage/bba-2026/testimonials/2.jpg",
      videoUrl: "#",
      quote: `Choosing BBA has been pivotal for my career aspirations. The curriculum's balance 
of theory and practical exposure has sharpened my business acumen. Grateful for 
the supportive learning environment and dedicated faculty.`,
      name: "Ankita",
      programme: "",
    },
    {
      image: "/landingpage/bba-2026/testimonials/3.jpg",
      videoUrl: "#",
      quote: `Embracing the BBA program has been transformative. The dynamic learning 
environment and emphasis on real-world applications have empowered me with the 
skills needed to excel in business management and leadership roles.`,
      name: "Arjun Sude",
      programme: "",
    },
    {
      image: "/landingpage/bba-2026/testimonials/4.jpg",
      videoUrl: "#",
      quote: `Embarking on the BBA journey has been rewarding. The interactive sessions, industry 
exposure, and supportive faculty. `,
      name: "Kalpana",
      programme: "BBA",
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
  description: `K.R. Mangalam University offers a modern and student-centric campus designed to support effective learning and holistic development for BBA undergraduates. The university provides smart classrooms, a well-equipped central library with digital resources, computer and analytics labs, and seminar halls to enhance academic engagement. Dedicated spaces for innovation, entrepreneurship, and skill development create an environment that encourages practical learning, collaboration, and professional growth.`,
  footerText: ``,
  cta: {
    label: "Apply for BBA  2026-2027 ",
    href: "#",
  },
  slides: [
    {
      image: "/landingpage/common/infra/1.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/2.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/3.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/4.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/5.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/6.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/7.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/8.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/9.webp",
      alt: "World Class Lab",
    },
    {
      image: "/landingpage/common/infra/10.webp",
      alt: "World Class Lab",
    },
  ],
};

export const lifeAsPhDScholarData: LifeAsPhDScholarSection = {
  heading: "Life as a BBA  Student at KRMU",
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

export const faqSectionData: FAQSectionData = {
  eyebrow: "(FAQs)",
  heading: "Frequently Asked Questions",
  description:
    "",
  faqs: [
    {
      id: "item-1",
      question: "What teaching methods are used in the BBA programmes?",
      answer: `The BBA curriculum emphasizes: <br /> <br /><ul> <li>Case studies</li><li>Live projects</li><li> Internships</li><li>Industry interaction </li> <li>Presentations, simulations, and experiential learning</li></ul>`,
    },
    {
      id: "item-2",
      question: "Are internships mandatory in the BBA programme?",
      answer: `Yes. Internships and live projects are an integral part of the BBA curriculum to provide real-world business exposure and practical learning.`,
    },
    {
      id: "item-3",
      question:
        "What career opportunities are available after completing BBA from KRMU?",
      answer: `Graduates can pursue careers in: <br /><br /> 
       <ul>
        <li>Marketing, HR, Finance, Operations</li>
        <li>Business Analytics & Digital Marketing</li>
        <li>Banking, Consulting, Logistics & Supply Chain</li>
        <li>Entrepreneurship & Family Business</li>
       </ul>
       <br />
       They may also opt for MBA, PGDM, professional certifications (ACCA, CFA, etc.), or start their own ventures.

      `,
    },
    {
      id: "item-4",
      question: "Does the university provide placement support?",
      answer: `Yes. KRMU has a dedicated Career Development & Placement Cell that supports students through:
 <br /><br /> 
       <ul>
        <li>Career counselling</li>
        <li>Skill development workshops</li>
        <li>Internships</li>
        <li>Campus placements with reputed organisations</li>
       </ul>`,
    },
    {
      id: "item-5",
      question: "Are scholarships available for BBA students?",
      answer: `Yes. KRMU offers merit-based and need-based scholarships as per university norms and applicable guidelines.`,
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
    label: "Apply for BBA  2026-2027",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};
