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
       B.Tech
      </span>
      <br />
      PROGRAMMES 2026-27
    `,
  desc: `Ideate, Innovate and Influence the Turf of Technology with our B.Tech Programmes comprising an industry-driven curriculum to shape tomorrow’s tech leaders`,
  heroBg: "/landingpage/bdes-2026/bdes-bg.webp",
  middleImg: "/landingpage/bdes-2026/middle-img.webp",
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
    title: "₹27 Cr",
    subtitle: "Worth of Scholarships",
  },
  {
    title: "92%",
    subtitle: "Placement Record",
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
  heading: "What makes KRMU the Best option for the B.Tech Course?",
  subheading:
    "Securing The Future of Technology with Intelligence and Integrity",
  content: `With an emphasis on cutting-edge technologies like Artificial Intelligence (AI), Machine Learning (ML), Data Science, the Internet of Things (IoT), Cyber Security, Robotics, and UI/UX Design, etc., K.R. Mangalam University's B.Tech. programme aims to give students a solid foundation in technology. Students become industry-ready by getting real-world experience through a one-year industry internship. Additionally, owing to a well-crafted industry-academia linkage, students get a plethora of opportunities for advancing their professional career and creating their own network.`,
  imgUrl: `/landingpage/common/whykrmtest.png`,
  whyKrmCards: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Future-Proof Curriculum made in collaboration with Top Engineering Experts`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Personal 1:1 Monthly Mentorship with Industry Professionals`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `1-Year Industry Internship for practical experience`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Classes by dedicated expert Instructors who have built FB Messenger, Uber, and more`,
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      content: `Build 50+ Real-World products that mimic engineering challenges`,
    },
  ],
};

export const industryExperts: IndustryExpertsSection = {
  eyebrow: "",
  heading: `Learn from <br /> Industry Leaders @ KRMU!`,
  description: `K.R. Mangalam University takes pride in collaborating with the industry leaders who offer top-notch hands-on learning experiences to students.`,
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
  subheading: `Choose from KRMU’s BBA (UG) programmes and start building your future in business and management.`,
  heading: `KRMU’s B.Tech. Programmes`,
  specilisationCard: [
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Tech. Computer Science and Engineering (CSE)`,
      desc: `The B.Tech. Computer Science and Engineering programme at K.R. Mangalam University enables students to develop a strong basic foundation in concepts like programming, algorithms, data structures, and system design. With a future-ready and industry-relevant curriculum, learners gain hands-on experience in artificial intelligence, data science, cybersecurity, cloud computing, and software engineering. Expert faculty, modern laboratories, and industry-aligned projects ensure practical exposure and innovation. Finally, Students benefit from internships, research opportunities, hackathons, and global certifications that enhance employability. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `50% marks in 10+2 examination with Physics & Maths as mandatory courses. For the remaining single course, select any course from Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/Biotechnology/ Technical Vocational subject/ Agriculture/Engineering Graphics/ Business Studies/Entrepreneurship from any recognised Board/ University.`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,30,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Tech. Computer Science and Engineering (Robotics & AI) with Academic Support of IBM & powered by Microsoft Certifications`,
      desc: `The K.R. Mangalam University’s B.Tech. Computer Science and Engineering (Robotics & AI), designed with academic support from IBM and powered by Microsoft Certifications, is an industry-aligned program that blends strong engineering foundations with hands-on learning in AI, robotics, cloud, data, and automation. IBM-led curricula and Microsoft credentials enhance employability, validating real-world skills employers seek.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Passed 10+2 examination with Physics and Mathematics as mandatory courses. For the remaining single course, select any course from Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/Biotechnology/ Technical Vocational subject/ Agriculture/Engineering Graphics/ Business Studies/Entrepreneurship from any recognised Board/ University with minimum 50% aggregate marks.`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `2,50,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Tech. Computer Science and Engineering (AI & ML) with academic support of IBM & powered by Microsoft Certifications`,
      desc: `The B.Tech. Computer Science and Engineering (AI & ML) program of K.R. Mangalam University is meticulously designed to shape industry-ready innovators. This program blends strong computer science fundamentals with cutting-edge Artificial Intelligence and Machine Learning, enhanced by academic support from IBM and powered by Microsoft Certifications. Graduates are prepared for high-demand roles such as AI engineer, data scientist, and ML developer, equipped with skills that meet evolving industry needs and drive innovation across diverse sectors.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Passed 10+2 examination with Physics and Mathematics as mandatory courses. For the remaining single course, select any course from Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/Biotechnology/ Technical Vocational subject/ Agriculture/Engineering Graphics/ Business Studies/Entrepreneurship from any recognised Board/ University with minimum 50% aggregate marks.`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,65,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Tech. CSE (Cybersecurity) with academic support of EC-Council & IBM`,
      desc: `The K.R. Mangalam University strives to build a secure future for its students with the B.Tech. CSE (Cybersecurity) programme that’s crafted to meet the growing global demand for cyber professionals. This industry-focused course is offered with academic support from EC-Council and IBM, combining strong computer science foundations with advanced cybersecurity expertise. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Passed 10+2 examination with Physics and Mathematics as mandatory courses. For the remaining single course, select any course from Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/Biotechnology/ Technical Vocational subject/ Agriculture/Engineering Graphics/ Business Studies/Entrepreneurship from any recognised Board/ University with minimum 50% aggregate marks. `,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,50,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Tech. CSE (Data Science) with the academic support of IBM`,
      desc: `The B.Tech. CSE (Data Science) programme of K.R. Mangalam University is intricately designed to create the next generation of data-driven professionals. With academic support from IBM, this industry-aligned course blends strong computer science fundamentals with advanced data science, analytics, and AI skills. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Passed 10+2 examination with Physics and Mathematics as mandatory courses. For the remaining single course, select any course from Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/Biotechnology/ Technical Vocational subject/ Agriculture/Engineering Graphics/ Business Studies/Entrepreneurship from any recognised Board/ University with minimum 50% aggregate marks. `,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,50,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Tech. CSE (Full Stack Development) with academic support of ImaginXP`,
      desc: `The students of K.R. Mangalam University enrolled in the B.Tech. CSE (Full Stack Development) programme, master the art of developing robust, scalable, and user-centric applications as well as learn to seamlessly integrate front-end design with powerful back-end infrastructure while working with modern frameworks and cloud technologies.`,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Passed 10+2 examination with Physics and Mathematics as mandatory courses. For the remaining single course, select any course from Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/Biotechnology/ Technical Vocational subject/ Agriculture/Engineering Graphics/ Business Studies/Entrepreneurship from any recognised Board/ University with minimum 50% aggregate marks.`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,50,000`,
        },
      ],
    },
    {
      imgUrl: "/landingpage/common/dummy.png",
      title: `B.Tech. CSE (UX/UI) with academic support of ImaginXP`,
      desc: `The B.Tech. CSE (UX/UI) is a four-year undergraduate programme of K.R. Mangalam University meticulously designed to provide educational excellence in technological design. In this comprehensive programme, students learn computing approaches and technologies to become User Interface (UI) and User Experience (UX) designers. With the academic association with ImaginXP, students learn practical knowledge from industry experts and have access to advanced tools. `,
      extraInfos: [
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Duration:",
          desc: `4 Years`,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Eligibility",
          desc: `Passed 10+2 examination with Physics and Mathematics as mandatory courses. For the remaining single course, select any course from Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/Biotechnology/ Technical Vocational subject/ Agriculture/Engineering Graphics/ Business Studies/Entrepreneurship from any recognised Board/ University with minimum 50% aggregate marks. `,
        },
        {
          iconUrl: "/landingpage/common/move-right.svg",
          title: "Annual Fee",
          desc: `Rs 2,50,000`,
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
    label: "Apply for B.Tech 2026-2027",
    href: "#",
  },
};

export const testimonialsData: TestimonialsSection = {
  subheading: `Still in Doubt? <br /> See What Our Students Say About Us!`,
  heading: `Students’ Testimonials`,
  testimonials: [
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `My 4 years at K.R. Mangalam University were full of learning something useful every 
day that I can carry forward through my life. I highly appreciate the efforts of my 
faculty members for being so kind and helping me with my doubts and giving me 
proper career guidance. The facilities provided really helped me fully enjoy my days.
`,
      name: "Daksh Mehta",
      programme: "B.Tech. CSE",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `I would like to extend my gratitude to the Training and Placement Cell of K.R. 
Mangalam University for their continued efforts in providing ample amount of 
chances to students. I am grateful to each mentor who guided me to develop my 
academic and interpersonal skills. Choosing K.R. Mangalam University was a great 
decision that helped me to pursue my dream.
`,
      name: "Abhinav Anand",
      programme: "B.Tech. CSE",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `Choosing K.R. Mangalam University for my B.Tech in CSE was one of the best decisions 
I've ever made. The university's rigorous curriculum and industry-relevant training 
have equipped me with the tools necessary to excel in the tech world. I am proud 
to share that I am working with Debcor Engineering Pvt Ltd, earning a competitive 
salary of 17.4 LPA. The foundation I built at K.R. Mangalam has been key to my career 
advancement.
`,
      name: "Darshit Raghav",
      programme: "B.Tech. CSE",
    },
    {
      image: "/landingpage/common/dummy.png",
      videoUrl: "#",
      quote: `K.R. Mangalam University was a transformative journey for me. The exceptional 
education and hands-on experience I received in Computer Science Engineering have 
been instrumental in shaping my career. I am currently thriving as a professional at 
Nirmata Technologies India Private Ltd, with an impressive package of 20 LPA. The 
skills and knowledge I gained at K.R. Mangalam have been pivotal in achieving this 
success.
`,
      name: "Abhinav Sinha",
      programme: "B.Tech. CSE",
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
  heading: `Modern Labs & State-of-the-Art Facilities`,
  description: `Students at K.R. Mangalam University have access to modern computer labs equipped with the latest software and hardware, high-performance computing resources, and dedicated project spaces. This enables hands-on learning and experimentation with real-world technologies.`,
  footerText: ``,
  cta: {
    label: "Apply for B.Tech 2026-2027 ",
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
  heading: "Life as a B.Tech Student at KRMU",
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
  description: "",
  faqs: [
    {
      id: "item-1",
      question: "What is the placement record of the university?",
      answer: `The K.R. Mangalam University has a strong placement record with students placed in reputed organisations across various industries. Our dedicated placement cell provides career guidance and support to students. The highest package offered was 56.6 LPA.`,
    },
    {
      id: "item-2",
      question: "What campus facilities are available to students?",
      answer: `The KRMU campus is equipped with state-of-the-art facilities, including modern classrooms, laboratories, a library, sports complexes, hostels, and cafeterias, ensuring a comprehensive learning and living experience.
`,
    },
    {
      id: "item-3",
      question: "Does KRMU provide hostel accommodation?",
      answer: `Yes, KRMU provides separate hostels for boys and girls with modern amenities and 24/7 security.

      `,
    },
    {
      id: "item-4",
      question: "Does the university offer scholarships or financial aid?",
      answer: `Yes, we offer various scholarships and financial aid programmes based on academic merit, sports achievements, and economic needs. Detailed information about these programmes can be found in the scholarships section of our website.
`,
    },
    {
      id: "item-5",
      question: "Are there opportunities for international exposure?",
      answer: `KRMU often facilitates workshops and collaborative events with global industrial experts. Consult the university’s international office for more information.
`,
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
    label: "Apply for B.Tech 2026-2027",
    href: "#",
  },
  highlights: [
    { id: 1, text: "UGC Approved University" },
    { id: 2, text: "NAAC ‘A’ Accredited " },
    { id: 3, text: "18K+ Alumni Base" },
  ],
};
