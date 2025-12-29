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
       B.Sc. (Hons.) Agriculture
      </span>
      <br />
      PROGRAMMES 2026-27 
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
  heading: "Why Choose B.Sc. (Hons.) Agriculture Course at KRMU?",
  subheading: "Shape Your Future with a Career-Focused Business Education",
  content: `K.R. Mangalam University’s Agriculture Programmes blend strong theoretical knowledge with hands-on training to prepare students for real-world agricultural challenges. Through field visits, workshops, expert lectures, and practical exposure, students gain insight into modern farming practices. Supported by experienced faculty, advanced laboratories, and research facilities, the programme encourages learning in areas such as agronomy, soil science, and sustainable agriculture, shaping skilled and industry-ready professionals.`,
  imgUrl: `/landingpage/common/whykrmtest.png`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `MIndustry-aligned curriculum designed by agricultural experts, integrating scientific theory with hands-on farming and field practices`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Mentorship by experienced agri-professionals and researchers with strong industry and academic backgrounds`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Future-ready programme that equips students with skills aligned to evolving agricultural technologies and sustainable practices`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Student-centric infrastructure, including modern laboratories, research farms, and smart classrooms to enhance learning and campus life`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "Why KR Mangalam PhD?",
  heading: `Learn From <br /> Industry Experts`,
  description: `KRMU partners with major organisations to provide <br /> industry-specific training.`,
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
  subheading: `Your Future, Our Priority`,
  heading: `KRMU’s B.Sc. (Hons.) Agriculture Programme`,
  specilisationCard: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Sc. (Hons.) Agriculture`,
      desc: `This four-year undergraduate programme equips students with strong agrarian knowledge and practical skills. Structured in line with ICAR guidelines, the curriculum addresses key agricultural challenges and aligns with current industry standards. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Must have passed 10+2 or equivalent examination from any recognised board/university in Physics, Chemistry, Maths/Biology/Agriculture with a minimumof  50% aggregate marks. `,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 1,40,000`,
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
    label: "Apply for BBA (UG) 2026-2027",
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
      quote: `My journey as a B.Sc. (Hons.) EMT student at K.R. Mangalam University has been truly 
enriching. The university offers a supportive learning environment, experienced faculty, 
and strong practical exposure that have helped me build a solid foundation in medical 
Knowledge`,
      name: "Kashish Pal",
      programme: "B.Sc. (Hons.) EMT",
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
      quote: `I am proud to be a student of K.R. Mangalam University, pursuing B.Sc. (Hons.) in Cardiovascular Technology. The university offers an excellent academic environment with advanced infrastructure, well-equipped laboratories, and a strong focus on practical and Clinical Learning.
`,
      name: "Divyanshu University",
      programme: "B.Sc. (Hons)",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `K.R. Mangalam University offers state-of-the-art laboratories, modern classrooms, a well-stocked library, sports facilities, hostels, and innovation hubs that greatly enhance the student learning experience. The Emergency Medical Technology program prepared me to become skilled healthcare professionals capable of delivering pre-hospital emergency care and basic life support.`,
      name: "Anshu ",
      programme: "B.Sc. (Hons.) EMT",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `My experience at K.R. Mangalam University has been extremely positive and enriching. The university provides a nurturing academic environment where students are encouraged to learn, grow, and excel.`,
      name: "Vanshika",
      programme: "B.Sc (Hons.)",
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
  heading: `World-Class Facilities at KRMU for B.Sc.`,
  description: ` K.R. Mangalam University offers a modern campus designed to support academic excellence and hands-on learning for B.Sc. students. Smart classrooms with advanced teaching tools and high-speed Wi-Fi create an interactive learning environment. Well-equipped laboratories enable practical training, experimentation, and skill development across disciplines. The central library provides extensive print and digital resources to support learning and research. Dedicated seminar halls, collaborative spaces, and innovation areas encourage teamwork and creative thinking. Beyond academics, the campus features secure hostels, sports and recreational facilities, and round-the-clock connectivity, ensuring a balanced and enriching student life.`,
  footerText: ``,
  cta: {
    label: "Apply for B.Sc. 2026–2027",
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
    label: "Apply for UG Programme  ",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};