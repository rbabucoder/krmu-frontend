// data/programs.ts
export type Program = {
  id: string;
  level: "ug" | "pg" | "doctoral";
  title: string;
  description: string;
  duration: string;
  format: string;
  eligibility: string;
  image: string;
  link: string;
};

export const programs: Program[] = [
  {
    id: "bajmc",
    level: "ug",
    title: "Bachelor of Arts in Journalism & Mass Communication (BAJMC)",
    description:
      "A future-ready undergraduate programme focused on journalism, digital media, content creation, and storytelling.",
    duration: "3 Years / 4 Years (Honours)",
    format: "Full-time, On Campus",
    eligibility:
      "Passed 10+2 or equivalent from a recognised board in any stream with minimum 50% aggregate marks",
    image: "/semce/programs/bajmc.webp",
    link: "/programs/bajmc",
  },
  {
    id: "ma-jmc",
    level: "pg",
    title: `Masters of Arts in Journalism
& Mass Communication (MAJMC)`,
    description:
      "An advanced programme for students and professionals looking to build expertise in journalism, content strategy, digital media, and communication leadership.",
    duration: "2 Years",
    format: "Full-time, On Campus",
    eligibility:
      "Bachelor’s degree or equivalent from a recognised university with minimum 50% aggregate marks",
    image: "/semce/programs/majmc.webp",
    link: "/programs/majmc",
  },
  {
    id: "phd-media",
    level: "doctoral",
    title: "Ph.D. in Media & Communication",
    description:
      "Research-focused doctoral programme in media studies, communication theory, and cultural studies.",
    duration: "Minimum 3 Years",
    format: "Full-time / Part-time",
    eligibility:
      "Master’s degree with minimum 55% marks and qualified entrance test",
    image: "/semce/programs/phdmc   .webp",
    link: "/programs/phd-media",
  },
];
