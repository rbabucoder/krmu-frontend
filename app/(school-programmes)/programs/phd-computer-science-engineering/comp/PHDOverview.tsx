import Image from "next/image";

const PHDOverview = () => {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1664px] mx-auto w-full flex items-center">
        <div className="w-1/2">
          <h2 className="text-[64px] font-semibold">OVERVIEW</h2>
          <p>
            Ph.D. in Computer Science & Engineering (CSE) at the School of
            Engineering and Technology (SOET), K.R. Mangalam University takes an
            applied approach to computer science theory and research. This
            programme is designed to expand one’s areas of expertise by
            exploring subjects such as Artificial Intelligence, Data Science,
            Data Analytics, Security and Privacy, Blockchains, Software
            Engineering, Modelling and Simulation, Wireless and Mobile Computing
            and Networking Computing. The Ph.D.programme is designed to prepare
            students for highly rewarding careers in academia and research labs.
          </p>
           <br />
          <p>
            Ph.D. in CSE programme at K.R. Mangalam University is designed under
            the guidance of highly qualified, experienced and recognized faculty
            in their respective fields and completely based on the research
            carried out by the scholars under the guidance of
            Supervisor/Co-Supervisor(s). Ph.D. programme caters to the following
            categories of students
          </p>
        </div>
        <div className="w-1/2">
            <Image src="/99.webp" width={768} height={396} alt="" />
        </div>
      </div>
    </section>
  );
};

export default PHDOverview;
