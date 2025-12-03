import { getProgrammePageData } from "@/lib/api/programme";
import ProgrammesAlumni from "./comp/ProgrammesAlumni";
import ProgrammesConnectWithUs from "./comp/ProgrammesConnectWithUs";
import ProgrammesOurLocation from "./comp/ProgrammesOurLocation";
import ProgrammesSearch from "./comp/ProgrammesSearch";

const page = async () => {
  const ProgrammeData = await getProgrammePageData();
  const programmeAlumnis = ProgrammeData?.alumni;


  return (
    <>
      <ProgrammesSearch />
      <ProgrammesAlumni alumniData={programmeAlumnis} />
      <ProgrammesOurLocation />
      <ProgrammesConnectWithUs />
    </>
  );
};

export default page;
