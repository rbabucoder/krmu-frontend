import React from "react";
import HostelWellFurnished from "./HostelWellFurnished";
import HostelOnCampus from "./HostelOnCampus";
import HostelSport from "./HostelSport";
import HostelSecurity from "./HostelSecurity";
import HostelWifi from "./HostelWifi";

const HostelFacilities = () => {
  return (
    <>
      <section className="py-10 px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5">
              Hostel Facilities at K.R. Mangalam University
            </h3>
            <p>
              The university offers separate on-campus housing options for
              female and male students. Gayatri Hostel accommodates female
              students, while Vivekanand Hostel provides residence for male
              students. The university hostel would likely be a relatively large
              and comprehensive residential facility designed to accommodate
              many students. Some details of the hostel are mentioned below:
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-center md:text-left">
            <HostelWellFurnished />
            <HostelOnCampus />
            <HostelSport />
            <HostelSecurity />
          </div>
          <HostelWifi />
        </div>
      </section>
    </>
  );
};

export default HostelFacilities;
