import ProgramCard from "@/app/components/Cards/ProgramCard";
import { programsData } from "@/lib/constants/programs";


const Programs = () => {
  return (
    <div id="programs">
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-university-red to-university-blue text-white rounded-full px-6 py-3 shadow-lg mb-6">
              <span className="text-sm uppercase tracking-wide">
                Academic Excellence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-800 font-bold">
              Transform your Life with the{" "}
              <span className="text-university-red">Right Programme</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our specialized programs designed to nurture
              creativity, innovation, and professional excellence across diverse
              fields
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {programsData &&
              programsData.map((program) => (
                <ProgramCard key={program.id} cardData={program} />
              ))}
          </div>
          <div className="text-center">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 has-[&gt;svg]:px-3 bg-gradient-to-r from-university-blue to-university-red hover:from-blue-700 hover:to-red-700 text-white px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View All Programmes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
