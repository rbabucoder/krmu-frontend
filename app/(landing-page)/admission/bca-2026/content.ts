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
      BCA (UG)
      </span>
      <br />
      PROGRAMMES 2026
    `,
  desc: `Immerse yourself in an inspiring environment that nurtures creativity, ignites innovation, and transforms ideas into impactful design solutions.`,
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
  heading: "Why Select KRMU's BCA (UG) Programmes?",
  subheading: "Future-Ready Learning in Computer Applications",
  content: `The BCA programmes of K.R. Mangalam University (KRMU), created in partnership with international IT giants, provides a dynamic fusion of theory and hands-on learning. Our programmes train you for a successful career in technology by emphasising innovation, exposure to the industry, and practical skills.`,
  imgUrl: `/landingpage/common/whykrmtest.png`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Flexible Duration and NEP-Aligned Structure (3 or 4 years)`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Academic Assistance from Leaders in the Industry, such as IBM, Microsoft Certifications, and EC-Council`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Advanced Laboratories and Practical Instruction in Up-and-Coming Technologies`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Mentoring by Skilled Teachers and Technology Experts`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Robust Placement Assistance and International Certifications`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "Why KR Mangalam PhD?",
  heading: `Learn From <br /> Industry Experts`,
  description: `KRMU partners with major organisations to provide <br /> industry-specific training.`,
  cta: {
    label: "Apply for B.Des Programme",
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
  subheading: `Begin your journey into the IT industry by choosing KRMU’s BCA (UG) programmes.`,
  heading: `Our BCA (UG) Programmes`,
  specilisationCard: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BCA (AI & Data Science) with Academic Support of IBM & Powered by Microsoft Certifications`,
      desc: `Gain hands-on expertise in Artificial Intelligence, Data Science, and Machine Learning through industry-aligned learning. Build practical skills with real-world datasets, intelligent systems, and advanced analytics tools. Prepare for high-growth careers by mastering technologies that drive digital transformation across industries.
`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10 + 2 with a minimum of 50% in any stream from any accredited board or university.`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs. 1,65,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BCA (Hons. / Hons. with Research) AI & Data Science with Academic Support of IBM & Powered by Microsoft Certifications`,
      desc: `Through industry-aligned learning, develop practical competence in machine learning, data science, and artificial intelligence. Develop useful skills using intelligent systems, real-world information, and sophisticated analytics tools. Learn the technologies that propel digital change across sectors to get ready for high-growth employment.
`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10 + 2 with a minimum of 50% in any stream from any accredited board or university.`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs. 1,65,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BCA (Cyber Security) with Academic Support of EC-Council`,
      desc: `Learn ethical hacking, network security, and cyber defence with the BCA (Cyber Security) programme at K.R. Mangalam University. The course offers hands-on experience with real-world cyber threats, penetration testing, and vulnerability assessment, equipping students with practical skills to protect digital systems and data. Students also gain expertise in industry-standard tools and techniques, preparing them for careers in cyber security, digital forensics, and IT risk management.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `3 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10 + 2 with a minimum of 50% in any stream from any accredited board or university.`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs. 1,65,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `BCA (Hons. / Hons. with Research) Cyber Security with Academic Support of EC-Council`,
      desc: `This programme teaches ethical hacking, network security, and cyber defence. The course gives students practical skills to safeguard digital systems and data by providing them with hands-on experience with real-world cyber threats, penetration testing, and vulnerability assessment. Additionally, students acquire proficiency with industry-standard tools and methods, qualifying them for professions in IT risk management, digital forensics, and cyber security. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `10 + 2 with a minimum of 50% in any stream from any accredited board or university.`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs. 1,65,000`,
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
    label: "Apply for B.Des Programme",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: "Students’ Testimonials",
  heading: `Why do Aspirants Prefer KRMU?`,
  testimonials: [
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `K.R. Mangalam University has truly transformed my career. The BCA (AI & Data Science) 
program not only provided me with technical expertise but also honed my problem-solving and 
analytical skills. The university encouraged us to participate in hackathons, industry projects, 
and internships, which gave me hands-on experience in real-world AI applications. Today, I am 
working as a Sales manager at Rally M`,
      name: "Rishav Bakshi",
      programme: "Sales manager at Rally Motors",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `Looking back at my journey at K.R. Mangalam University, I feel grateful for the incredible 
opportunities I received as a BCA (AI & Data Science) student. The curriculum was designed 
in collaboration with industry experts, ensuring we were up to date with the latest AI trends. 
The mentorship from experienced faculty, research-driven approach, and exposure to AI tools 
like TensorFlow, PyTorch, and Big Data analytics helped me secure my dream job in the tech 
industry. I highly recommend this programme to anyone passionate about AI and data science!
`,
      name: "Parminder Singh",
      programme: "",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `Enrolling in the BCA (AI & Data Science) programme at K.R. Mangalam University was one of the best decisions of my academic journey. The well-structured curriculum, combined with practical exposure through hands-on projects, helped me build a strong foundation in machine learning, data analytics, and cloud computing. The faculty’s guidance and the state-of-the-art labs played a crucial role in enhancing my technical skills. Thanks to the university’s placement cell, I secured a job at a leading AI firm, and I feel confident about tackling industry challenges`,
      name: "Annanya Agarwal ",
      programme: "",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `K.R. Mangalam University didn’t just provide me with a degree—it shaped my career. The BCA (AI & Data Science) programme gave me the technical expertise, industry exposure, and confidence  to work on AI-driven solutions. The university’s tie-ups with industry leaders, guest lectures from AI professionals, and project-based learning approach made a significant difference in my  professional journey. Today, as a Data Analyst, I use the knowledge and skills I gained at KRMU daily. If you're looking for a programme that bridges the gap between academics and industry, this is the place to be!`,
      name: "Shivangi Sharma",
      programme: "",
    },
  ],
};

export const scholarResearchImpactData: ScholarResearchImpactSection = {
  heading: "Our Scholars’ Research Impact",
  description:
    "K.R. Mangalam University offers top-notch, industry-standard facilities and specialized design labs, creating a sophisticated ecosystem of high-end studios and cutting-edge technology that empowers B.Des. students to bring their creative visions to life.",
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
    "",
  faqs: [
    {
      id: "item-1",
      question: "What design programmes are offered at the School of Architecture & Design?",
      answer: `KRMU offers several undergraduate design programmes including B.Des. in Fashion Design, Interior Design, Game Design & Animation, and UX/UI & Interaction Design. `,
    },
    {
      id: "item-2",
      question: "What is the duration of the B.Des. programmes?",
      answer: `All Bachelor of Design (B.Des.) programmes are four-year undergraduate courses designed to provide comprehensive theoretical and practical training.`,
    },
    {
      id: "item-3",
      question:
        "What subjects or skills will I learn in these design courses?",
      answer: `Students learn design fundamentals, creative process, software tools, project development, industry workshops, and domain-specific skills like fashion techniques, spatial planning, UI/UX design, or game animation.`,
    },
    {
      id: "item-4",
      question: "Does the Fashion Design course include practical and studio-based learning?",
      answer: `Yes. The programme emphasises hands-on studio work, workshops, and live projects, allowing students to translate creative concepts into finished designs and collections.
`,
    },
    {
      id: "item-5",
      question: "What career opportunities are available after completing Fashion Design at KRMU?",
      answer: `Graduates can pursue careers as fashion designers, apparel designers, fashion stylists, visual merchandisers, fashion illustrators, or start their own labels and design ventures.`,
    },
    {
      id: "item-6",
      question: "Does KRMU provide global exposure in design programmes?",
      answer: `Yes, students may get opportunities for international summer programmes, exchange experiences, and exposure to global design practices.`,
    },
    {
      id: "item-7",
      question: "What facilities support design education at KRMU?",
      answer: `The School has specialised studios, workshops, labs, and software for design practice in areas like fashion, interior spaces, animation, and UX/UI.`,
    },
    {
      id: "item-8",
      question: "Is there placement and career support for design students?",
      answer: `Yes. KRMU offers 100% placement assistance with strong industry connections, helping students secure internships and job opportunities upon graduation.`,
    },
    {
      id: "item-9",
      question: "Is hostel accommodation available for students?",
      answer: `Yes, KRMU offers modern, secure on-campus housing with all amenities.`,
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
    label: "Apply for B.Des Programme",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};
