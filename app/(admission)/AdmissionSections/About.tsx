import AboutCard from "@/app/components/Cards/AboutCard";
import { aboutCardsData } from "@/lib/constants/about-card";
import { AchievementsData } from "@/lib/types/admission";

interface AboutWhyChooseProps {
  achievements: AchievementsData[];
  achievementstitle: string;
  achievementsdescriptions: string;
}

const About = ({
  achievements,
  achievementstitle,
  achievementsdescriptions,
}: AboutWhyChooseProps) => {
  return (
    <>
      <div id="about">
        <section className="pt-8 md:pt-12 pb-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-university-red to-university-blue text-white rounded-full px-6 py-3 shadow-lg mb-6">
                <span className="text-sm uppercase tracking-wide">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-800 font-bold">
                What Makes{" "}
                <span className="text-university-red">
                  K.R. Mangalam University
                </span>{" "}
                The <span className="text-university-blue">Best?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {`Discover the unique advantages that set us apart as one of
                India's leading private universities`}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {aboutCardsData &&
                aboutCardsData.map((card, i) => {
                  return <AboutCard key={i} cardData={card} />;
                })}
            </div>
            <div className="bg-gradient-to-br from-university-blue to-university-red rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl text-white mb-4 font-bold text-[36px]">
                  {achievementstitle}
                </h3>
                <p className="text-white/90">{achievementsdescriptions}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                {achievements &&
                  achievements.map((achievement) => {
                    return (
                      <div key={achievement?.id}>
                        <div className="text-3xl text-white mb-2 font-bold">
                          {achievement?.value}
                        </div>
                        <p className="text-white/80 text-sm">
                          {achievement?.content}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl text-gray-800 mb-8">
                Awards &amp; Recognition
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-university-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trending-up w-8 h-8 text-white"
                      aria-hidden="true"
                    >
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg mb-2 text-gray-800">
                    QS I-GAUGE Rating
                  </h4>
                  <p className="text-sm text-gray-600">
                    Diamond Rating for Academic Excellence
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-university-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shield w-8 h-8 text-white"
                      aria-hidden="true"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                    q
                  </div>
                  <h4 className="text-lg mb-2 text-gray-800">
                    Best Private University
                  </h4>
                  <p className="text-sm text-gray-600">
                    Delhi NCR Region Award
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-university-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-book-open w-8 h-8 text-white"
                      aria-hidden="true"
                    >
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg mb-2 text-gray-800">
                    Innovation Excellence
                  </h4>
                  <p className="text-sm text-gray-600">
                    Research &amp; Development Recognition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
