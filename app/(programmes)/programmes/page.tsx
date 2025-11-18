import ProgrammesAlumni from "./comp/ProgrammesAlumni";
import ProgrammesConnectWithUs from "./comp/ProgrammesConnectWithUs";
import ProgrammesOurLocation from "./comp/ProgrammesOurLocation";
import ProgrammesSearch from "./comp/ProgrammesSearch";

const page = () => {
  return (
    <>
      <ProgrammesSearch />
      <ProgrammesAlumni />
      <ProgrammesOurLocation />
      <ProgrammesConnectWithUs />
    </>
  );
};

export default page;
