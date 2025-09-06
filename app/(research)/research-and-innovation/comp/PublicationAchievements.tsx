import Image from "next/image";

const PublicationAchievements = () => {
  return (
    <section className="pt-[30px] bg-[#393c68]">
      <div className="max-w-[1664px] mx-auto w-full flex items-center">
        <div className="text-white w-1/2">
          <h3 className="text-5xl font-semibold mb-5">
            Publications and Achievements
          </h3>
          <p>
            K.R. Mangalam University has made significant scholarly
            contributions, evidenced by over 3,000 publications and a Scopus
            h-index of 3000 and Citation Index of KRMU= 9.2. This record
            reflects the depth and impact of our research. Furthermore, our
            commitment to innovation is demonstrated by our repository of over a
            hundred patents, spanning diverse disciplines and showcasing the
            practical application of our research. Opportunities for Researchers
            and Students.
          </p>
          <div className="grid grid-cols-3">
            <div className="flex flex-col justify-center text-center p-8 text-white">
              <span className="text-[50px] leading-[1]">3000+</span>
              <span className="text-xl uppercase">Publications</span>
            </div>
            <div className="flex flex-col justify-center text-center p-8 text-white">
              <span className="text-[50px] leading-[1]">7.6</span>
              <span className="text-xl uppercase">CITATION INDEX</span>
            </div>
            <div className="flex flex-col justify-center text-center p-8 text-white">
              <span className="text-[50px] leading-[1]">47</span>
              <span className="text-xl">H INDEX</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
            <Image src="/research/hand.webp" width={601} height={677} alt="" />
        </div>
      </div>
    </section>
  );
};

export default PublicationAchievements;
