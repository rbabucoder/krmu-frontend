import Image from "next/image";

const PlacementRate = () => {
  return (
    <section className="py-20 px-0 bg-[#f9fafb]" id="programs">
      <div className="max-w-[1200px] px-4 sm:px-6 mx-auto w-full">
        <div className="max-w-[700px] mx-auto mb-12 text-center">
          <span className="inline-block py-1 px-3 bg-[#2c7da01a] text-[#2c7da0] text-sm font-bold uppercase rounded-full mb-4">
            Why KRMU Law?
          </span>
          <h2 className="text-[40px] mb-4 font-bold">
            92% Placement Rate. <br />
            Here's How We Do It.
          </h2>
          <p className="text-[#4b5563] text-lg">
            While other law schools focus on theory, we focus on one thing:
            making you hireable. Moot courts, internships, industry projects,
            and a location that puts you at the center of corporate India.
          </p>
        </div>
        <div className="grid gap-6">
                <div className="flex lg:flex-row overflow-hidden bg-white shadow-[0_10px_15px_-3px_rgb(0_0_0/0.1),0_4px_6px_-4px_rgb(0_0_0/_0.1)] rounded-2xl transition-all 
            duration-[250ms] ease-out">
                        <div className="why-image">
                            <Image src="images/life/3.webp"
                                 alt="KRMU moot court in session"
                                 width="600"
                                 height="400"
                                 className="w-full h-full aspect-video overflow-hidden flex-[0_0_45%] object-cover" />
                        </div>
                        <div className="why-content">
                            <div className="why-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/></svg>
                            </div>
                            <h3>Learn by Doing, Not Just Reading</h3>
                            <p>Our moot court isn't a once-a-semester event—it's woven into your curriculum. Draft real petitions, argue real cases, and build the confidence that sets you apart in interviews.</p>
                            <ul className="why-list">
                                <li>Mandatory moot court participation every semester</li>
                                <li>Legal aid clinic serving 500+ community members yearly</li>
                                <li>Mock trial competitions with practicing judges</li>
                            </ul>
                        </div>
                    </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementRate;
