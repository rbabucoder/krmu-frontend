import AlumniCard from "@/app/components/Cards/AlumniCard";
import { alumniData } from "@/lib/constants/alumni";


const Alumni = () => {
  return (
    <>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-800 font-bold">
              Voice of Our{" "}
              <span className="text-university-blue font-bold">Alumni</span>
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our successful graduates
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {alumniData &&
              alumniData.map((alumni) => {
                return <AlumniCard key={alumni.id} cardData={alumni} />;
              })}
          </div>
          <div className="mt-16 bg-gradient-to-r from-university-blue to-university-red rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">15,000+</div>
                <p className="text-blue-100">Alumni Worldwide</p>
              </div>
              <div>
                <div className="text-3xl mb-2">30+</div>
                <p className="text-blue-100">Countries</p>
              </div>
              <div>
                <div className="text-3xl mb-2">95%</div>
                <p className="text-blue-100">Employment Rate</p>
              </div>
              <div>
                <div className="text-3xl mb-2">₹9 LPA</div>
                <p className="text-blue-100">Average Package</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Alumni;
