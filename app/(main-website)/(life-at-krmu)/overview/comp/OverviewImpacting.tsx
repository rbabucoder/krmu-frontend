const OverviewImpacting = () => {
  return (
    <div className="bg-[url(/gradient-3.webp)] bg-cover bg-center bg-no-repeat flex-col lg:flex-row pt-section-lg px-container-px flex gap-10 items-center">
      <div className="lg:lg:w-1/3 text-white">
        <h4 className="text-3xl md:text-h3">Making a Difference Together</h4>
        <h3 className="text-3xl md:text-5xl 2xl:text-8xl font-bold my-2.5">Impacting Lives</h3>
        <p>
          <strong>
            It allows young students to participate in various government-led
            community service activities & programmes. The objective of KRMU-NSS
            is to develop responsible personalities through community services.
          </strong>
        </p>
        <br />
        <p>
          The programmes aim to promote social welfare in students so that they
          serve society equally. NSS volunteers work closely with villagers and
          learn to live satisfactorily with limited resources. They also assist
          villagers with essential commodities such as food, clothing, and
          first-aid facilities during uncertainties. Under NSS, volunteers help
          the deprived section of society raise their living standards and live
          with dignity.
        </p>
      </div>
      <div className="lg:w-2/3">
        <div className="flex flex-col xl:flex-row gap-10 impactinglivescard">
          <div
            className="w-full xl:w-1/3 text-white p-5 rounded-[25px]"
            style={{
              background: `linear-gradient(180deg, rgba(255,255,255,0.2) 0%,rgba(255,255,255,0.12) 100%)`,
            }}
          >
            <h5 className="text-h4 font-semibold leading-[1.12]">
              Community Engagement and Understanding
            </h5>
            <ul>
              <li>
                Enabling students to understand the roots of the community
              </li>
              <li>Identifying their responsibilities towards the community</li>
              <li>
                Understanding the requirements and pain-points of the community
                and offering robust solutions
              </li>
            </ul>
          </div>
          <div
            className="w-full xl:w-1/3 text-white p-5 rounded-[25px]"
            style={{
              background: `linear-gradient(180deg, rgba(255,255,255,0.2) 0%,rgba(255,255,255,0.12) 100%)`,
            }}
          >
            <h5 className="text-h4 font-semibold leading-[1.12]">
              Personal Growth and Responsibility
            </h5>
            <ul>
              <li>Developing social and civil responsibility</li>
              <li>
                Acquiring skills to live in groups harmoniously by sharing
                duties
              </li>
              <li>
                Attaining leadership qualities, democratic attitude, and skills
                to encourage community participation
              </li>
            </ul>
          </div>
          <div
            className="w-full xl:w-1/3 text-white p-5 rounded-[25px]"
            style={{
              background: `linear-gradient(180deg, rgba(255,255,255,0.2) 0%,rgba(255,255,255,0.12) 100%)`,
            }}
          >
            <h5 className="text-h4 font-semibold leading-[1.12]">
              Crisis Management and Preparedness
            </h5>
            <ul>
              <li>
                Developing abilities to manage emergencies and national
                disasters
              </li>
              <li>Practicing national integration and social accord</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewImpacting;
