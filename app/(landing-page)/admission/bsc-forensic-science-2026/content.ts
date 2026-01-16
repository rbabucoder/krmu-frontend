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
       B.Sc. Forensic Science
      </span>
      <br />
      PROGRAMMES 2026-27 
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
    title: "56.6 LPA",
    subtitle: "Highest Package",
  },
  {
    title: "800+",
    subtitle: "Top Recruiters",
  },
  {
    title: "₹21 Cr",
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
  heading: "Why Choose KRMU for the B.Sc. Forensic Science Courses?",
  subheading: "Accurate Analysis of Evidences For Concrete Conclusions",
  content: `The B.Sc. Forensic Science programmes intend to offer KRMU students an opportunity to apply science in the pursuit of justice. This multidisciplinary course strives to equip the learners with in-depth knowledge of forensic biology, toxicology, chemistry, ballistics, cyber forensics, and crime scene investigation. The curriculum is designed to meet the increasing reliance on scientific evidence in legal and criminal proceedings, thereby meeting the growing demand for trained forensic experts across government agencies, law enforcement departments, private labs, and legal consultancy firms.
`,
  imgUrl: `/landingpage/common/whykrmtest.png`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `NEP-Aligned Curriculum with Flexible Options for Research Integration.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Advanced Forensic Labs with the Latest Tools for Real-World Case Analysis.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Industry Exposure Through Field Visits, Forensic Agency Collaborations, and Expert-Led Workshops.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Hands-On Learning with Crime Scene Simulation, Forensic Photography, and Digital Forensics.`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `100% Placement Assistance in Top Forensic Labs, Law Enforcement, and Private Consultancies.`,
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
  heading: `KRMU’s B.Sc. Forensic Science Courses`,
  specilisationCard: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Sc. (Hons.) Forensic Science`,
      desc: `The Bachelor of Science (B.Sc.) Hons. in Forensic Science offered by KRMU is a multidisciplinary undergraduate program designed to prepare students for careers in crime investigation and forensic analysis. The meticulously drafted course combines principles of science, law, and technology to help students understand how scientific methods are applied to solve crimes. Students study core subjects such as forensic biology, forensic chemistry, toxicology, fingerprint analysis, questioned documents, and criminology.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Passed the 10+2 or equivalent examination from any recognised board/ University in Science (Physics/Chemistry/Biology/Mathematics) with minimum 50% aggregate marks.`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,30,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Sc. (Hons. / Hons. with Research) Forensic Science`,
      desc: `The program at K.R. Mangalam University aims to develop critical thinking, observation, analytical skills, and attention to detail, which are essential for forensic professionals. Graduates of this course can pursue careers as forensic analysts, crime scene investigators, laboratory technicians, or research assistants. They may also opt for higher studies such as M.Sc. in Forensic Science, Criminology, or related fields.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Passed the 10+2 or equivalent examination from any recognised board/ University in Science (Physics/Chemistry/Biology/Mathematics) with minimum 50% aggregate marks.`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,30,000`,
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
      quote: `My three years in the Forensic Science Department at K.R. Mangalam University have been a transformative journey filled with learning, growth, and invaluable life lessons. These years have shaped me into a more self-reliant and confident individual, preparing me to carve my own path in life. The memories and experiences I’ve gained here will always be cherished. I am deeply grateful to my amazing faculty, whose guidance has been instrumental in my academic and personal growth. KRMU will always be a part of me!`,
      name: "Prakati Joshi",
      programme: "B.Sc. (Hons) Forensic Science",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `My name is Prayankar Rudra Paul, and I am a final-year student of B.Sc. (Hons.) Forensic Science at K.R. Mangalam University. My journey as an undergraduate student at this esteemed institution has been truly remarkable. As a student of the Department of Forensic Science, I  have had the privilege of gaining extensive hands-on experience through various internships. One of the most significant opportunities was working with the State Crime Records Bureau, Agartala, Tripura, where I analysed over 600+ registered FIR cases under the guidance of the Superintendent of Police.`,
      name: "Prayankar Rudra Paul",
      programme: "B.Sc. (Hons) Forensic Science",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `My three years at K.R. Mangalam University have been transformative and enriching, blending theoretical knowledge with extensive practical exposure. The police station training provided first-hand experience in investigative procedures, law enforcement protocols, and crime scene management, bridging the gap between classroom learning and real-world applications. Additionally, the CBI & CFSL training deepened my understanding of forensic methodologies, modern investigative techniques, and advanced technology in forensic science, boosting my confidence in practical scenarios. The supportive faculty and state-of-the-art facilities fostered critical thinking and hands-on learning, essential for a successful career.`,
      name: "Khushboo",
      programme: "B.Sc. (Hons) Forensic Science",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `My journey at K.R. Mangalam University has been truly transformative. The supportive faculty, advanced facilities, and hands-on curriculum in the Forensic Science Department have equipped me with practical skills in crime scene investigation and laboratory analysis. Opportunities for research, internships, and collaboration with law enforcement have enriched my learning, preparing me for a successful career in forensic science. Grateful for this experience, I take pride in being a KRMU graduate and highly recommend this program to those passionate about solving crimes through science.`,
      name: "Divya Panwar",
      programme: "B.Sc. (Hons) Forensic Science",
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
  description: `The K.R. Mangalam University offers strong support for the B.Sc. Forensic Science students in the form of an Advanced Forensic Lab with the latest tools for practical learning in physics, chemistry, and instrumentation. Expert faculty in the form of experienced professors with real-world and academic forensic experience, regular sessions with forensic experts and webinars are all designed for practical skill-building and career readiness.`,
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
  heading: "Life as a B.Sc. Forensic Science Student at KRMU",
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
    "",
  faqs: [
    {
      id: "item-1",
      question:
        "What makes K.R. Mangalam University’s Forensic Science programme unique? ",
      answer: `They provide practical insights, exposure to industry trends, and valuable networking opportunities with leading architects and designers.`,
    },
    {
      id: "item-2",
      question: "What skills will one develop in a B.Arch. programme?",
      answer: `You will cultivate creative design solutions, technical competence in construction and modelling, and effective communication of your ideas through visual, oral, and written means.`,
    },
    {
      id: "item-3",
      question: "Does KRMU provide hostel accommodation?",
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
