import { instrumentSerif } from "../lib/font";

const yearPointers = [
  {
    year: {
      id: 1,
      heading:
        "Build strong foundations in global media and multimedia storytelling",
      subHeading:
        "You reconnect with core media theory and then quickly move into advanced multimedia practice.",
      yearpointer: [
        "Learn how communication theories and models actually show up in real media, platforms and audience behaviour",
        "Study current affairs and global media so you can connect local stories with global context",
        "Learn how fact checking, verification and media literacy are done in professional newsrooms",
        "Practise multimedia journalism through writing, visuals and digital first story formats",
        "Learn the art of photography and image editing to create visual stories that match professional standards",
        "Learn how to use graphic design and AI tools to design posts, packages and visual communication for modern platforms",
        "Understand media laws and ethics so your work is legally sound and ethically responsible",
        "Explore advertising and brand communication and how messages are crafted for campaigns",
        "Learn how television and video journalism work from pre production to on screen delivery",
        "Practise radio and podcasting for audio first storytelling and shows",
        "Learn audio and video editing so you can independently cut news pieces, features and digital content",
        "Learn how digital content is produced, packaged and distributed across platforms",
      ],
    },
  },
  {
    year: {
      id: 2,
      heading:
        "Go deep into creator economy, research, data and digital entrepreneurship",
      subHeading:
        "You shift from only producing content to also researching audiences, building communities and designing media projects and ventures.",
      yearpointer: [
        "Learn communication research methods so you can design studies, surveys and audience insights for media projects",
        "Explore theatre and performing arts to improve your expression, presence and storytelling performance",
        "Learn how the creator economy actually works, and how communities around creators and media brands are built and managed",
        "Study integrated marketing communication so you can design 360 degree campaigns across media, digital and on ground",

        "Learn film and OTT production processes, from concept to screen, to understand long form visual storytelling",
        "Learn data journalism and visualisation so you can turn numbers and datasets into accessible stories and visuals",

        "Study digital marketing to understand performance campaigns, funnels, targeting and measurement",
        "Learn mobile journalism so you can report, shoot, edit and publish using mobile first tools and workflows",
        "Study development communication to see how media can influence policy, social change and public opinion",
        "Work on digital media entrepreneurship projects where you plan and build a media or content based venture",
        "Complete a dissertation or capstone project that integrates research, practice and critical thinking",
        "Earn a MOOC certification as part of your learning path",
      ],
    },
  },
];
const WhatWillYouStudy = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-[1200px] mx-auto w-full">
        <h3
          className={`text-xl md:text-4xl lg:text-6xl ${instrumentSerif.className} text-center mb-3`}
        >
          What you will study over 2 years
        </h3>
        <p className="text-xl text-center italic text-gray-500 font-medium">
          From theory and global media to creator economy, research, data
          journalism and digital entrepreneurship.
        </p>
        {yearPointers &&
          yearPointers?.map((item) => {
            return (
              <div
                key={item.year.id}
                className={`bg-[#E31E23] py-10 px-20 rounded-2xl text-white my-10 relative `}
              >
                <span
                  className="absolute -bottom-10 -right-5 text-[400px]
              text-white/30 leading-[1] font-bold"
                >
                  {item.year.id}
                </span>
                <h4 className="font-bold text-5xl leading-tight mb-3">
                  {item?.year?.heading}
                </h4>
                <p className="text-xl">{item?.year?.subHeading}</p>
                <ul
                  className={`pl-20 text-xl italic flex flex-col gap-5 my-8 list-disc max-w-4xl`}
                >
                  {item?.year?.yearpointer?.map((pointer, i) => (
                    <li key={i}>{pointer}</li>
                  ))}
                </ul>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default WhatWillYouStudy;
