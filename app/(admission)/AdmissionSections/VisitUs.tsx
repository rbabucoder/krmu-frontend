import ContactInfo from "./VisitUs/ContactInfo";
import HowToReach from "./VisitUs/HowToReach";
import CampusLocation from "./VisitUs/CampusLocation";
import CampusHighlights from "./VisitUs/CampusHighlights";
import VirtualTour from "./VisitUs/VirtualTour";
import WhyLocationMatter from "./VisitUs/WhyLocationMatter";
import { getVisitUsData } from "@/lib/api/admission";

const VisitUs = async () => {
  const visitUsData = await getVisitUsData();
  console.log("visitUsData", visitUsData);
  return (
    <>
      <div id="contact">
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-red-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-white rounded-full px-6 py-3 shadow-md mb-6">
                <span className="text-university-blue text-sm uppercase tracking-wide">
                  {visitUsData?.badgetext}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-800 font-bold">
                {visitUsData?.beforehighlighttext}{" "}
                <span className="text-university-red">
                  {visitUsData?.highlighttext}
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {visitUsData?.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start break-all">
              <div className="space-y-8">
                <ContactInfo />
                <HowToReach />
              </div>
              <div className="space-y-8">
                <CampusLocation />
                <CampusHighlights />
                <VirtualTour />
              </div>
            </div>
            <WhyLocationMatter />
          </div>
        </section>
      </div>
    </>
  );
};

export default VisitUs;
