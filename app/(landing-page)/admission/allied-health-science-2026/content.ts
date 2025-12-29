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
       Medical & Allied Sciences
      </span>
      <br />
      PROGRAMMES 2026
    `,
  desc: `Discover the foundation of agricultural excellence with K.R. Mangalam University’s four-year agriculture programme, designed to build strong agrarian knowledge, practical expertise, and an understanding of modern farming practices.`,
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
    subtitle: "Top Recruiters",
  },
  {
    title: "₹27 Cr",
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
  heading: "Why Choose Medical and Allied Sciences Programmes at KRMU?",
  subheading: "Build a Career That Makes a Real Difference",
  content: `K.R. Mangalam University, in association with Emversity, offers industry-aligned Allied Health Sciences programmes built to global healthcare standards. Designed with doctors and practitioners, these work-integrated courses combine practical training, VR-enabled infrastructure, immersive internships, strong hospital partnerships, placement support, and international exposure to prepare students for impactful healthcare careers.`,
  imgUrl: `/landingpage/common/whykrmtest.png`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `•	Work-integrated courses with placement support and immersive industry internships`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `•	Industry-relevant curriculum co-designed with doctors and practitioners`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `•	State-of-the-art infrastructure with advanced VR labs`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `•	Strong hospital partnerships offering placements and international exposure`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "Why K.R. Mangalam allied sciences courses?",
  heading: `Learn From <br /> Industry Expert`,
  description: `Emversity offers India’s No. 1 Work-Integrated bachelor's degree in health sciences, combining academic excellence with real-world hospital training. Our programmes are designed in collaboration with leading healthcare institutions to ensure students graduate with job-ready skills and global career opportunities.
•	Students are trained using real equipment and simulations, guided by industry practitioners. 
•	Hands-on training at leading hospitals ensures students graduate with work-ready skills.
•	Experience immersive learning with advanced VR simulations and modern healthcare training facilities.
`,
  cta: {
    label: "Apply for Medical Allied Sciences 2026",
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
  subheading: `Choose your specialisation based on your interests and career goals.`,
  heading: `Our medical & allied sciences programmes & specialisations`,
  specilisationCard: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Sc. (Hons.) Emergency Medical Technology with Academic & Industry support of Emversit`,
      desc: `•	Acquire vital skills in emergency medical care, life-saving techniques, and trauma management to excel in the fast-paced world of emergency healthcare.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 + 1 Years (Including 1 Year Internship)`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Candidates must have passed 10+2 or an equivalent recognised examination with at least 50% aggregate in PCM, PCB, or PCMB.`,
        },
        // {
        //   iconUrl: "/landingpage/common/move-right.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,40,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Sc. (Hons.) Respiratory Technology with Academic & Industry Support of Emversity`,
      desc: `Learn essential skills in respiratory care, diagnostic procedures, and patient management to build a strong foundation in today’s advanced healthcare industry.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 + 1 Years (Including 1 Year Internship)`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Candidates must have passed 10+2 or an equivalent recognised examination with at least 50% aggregate in PCM, PCB, or PCMB.`,
        },
        // {
        //   iconUrl: "/landingpage/common/move-right.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,40,000`,
        // },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B. Sc. (Hons.) Cardiovascular Technology with Academic & Industry Support of Emversity`,
      desc: `Gain expertise in cardiovascular diagnostics, interventional procedures, and patient care techniques to excel in today’s advanced healthcare environment`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 + 1 Years (Including 1 Year Internship)`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Candidates must have passed 10+2 or an equivalent recognised examination with at least 50% aggregate in PCM, PCB, or PCMB.`,
        },
        // {
        //   iconUrl: "/landingpage/common/move-right.svg",
        //   title: "Annual Fee",
        //   desc: `Rs 1,40,000`,
        // },
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
    label: "Apply for BBA (UG) 2026-2027",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Students’ Testimonials",
  heading: `Why Do Our Students Trust Us? `,
  testimonials: [
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `Thrilled with my education at K.R. Mangalam University, Sohna. I learned leadership, 
time management, and embraced nature. Now, a project assistant in a DST government 
project at the university`,
      name: "Tufail",
      programme: "Project Assistant DST, Govt. of India",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `K.R. Mangalam University excels with its great environment and ragging-free campus, 
particularly in hostel life. Now a farm supervisor, I pursue my passion for natural farming.`,
      name: "Saqlain",
      programme: "Farm Supervisor, Gir Amritphal Gaushala Trust",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `At SOAS, BSc (H) Agriculture student Aayushi thrives on professor-led activities and 
competitions. Field trips offer real-world insights into agriculture.
`,
      name: "Aayushi",
      programme: "",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `K.R. Mangalam University provides us with the facilities to build live projects from lab to field 
and field to lab to increase students' knowledge and skills with the latest technologies and 
models.`,
      name: "Sagar",
      programme: "",
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
  heading: `World-Class Facilities`,
  description: `K.R. Mangalam University offers world-class facilities that support both academic learning and practical training across disciplines. Students benefit from modern classrooms, well-equipped laboratories, a comprehensive resource library, and advanced teaching aids that encourage innovative learning approaches. In addition, discipline-specific facilities such as specialised labs, field-based learning spaces, and research support for agriculture-related studies further enhance hands-on exposure. Together, these facilities ensure students are well-prepared to excel in diverse professional and academic environments.`,
  footerText: ``,
  cta: {
    label: "Apply for BBA (UG) 2026-2027 ",
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
  heading: "Life as an Agriculture Student at KRMU ",
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
      question: "What is the eligibility criteria for Medical & Allied Sciences courses?",
      answer: `Candidates must have passed Class 12 in the Science stream with Physics, Chemistry, and Biology, securing a minimum of 50% marks.`,
    },
    {
      id: "item-2",
      question: "Are scholarships available?",
      answer: `Yes, the University offers both merit-based and need-based scholarships. For detailed information, please visit the scholarships page.`,
    },
    {
      id: "item-3",
      question:
        "What placement support does the University provide?",
      answer: `The University offers dedicated placement support, including structured training and placement drives with leading recruiters.`,
    },
    {
      id: "item-4",
      question: "What B.Sc. courses are available under the Allied Health Sciences domain?",
      answer: `The University offers the following B.Sc. programmes:
      <ul>
      <li>Cardiovascular Technology</li>
      <li>Respiratory Technology</li>
      <li>Emergency Medical Technology</li>
      </ul>`,
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
  heading: `Begin Your Journey at K.R. Mangalam<br /> University now`,
  description: "Start Your Adventure Right Now at K.R. Mangalam University",
  cta: {
    label: "Apply for Education Programme ",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};