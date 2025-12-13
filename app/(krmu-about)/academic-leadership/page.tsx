import { getAcademicLeadershipData } from "@/lib/api/academic-leadership";
import { AcademicLeaderships } from "./comp/AcademicLeaderships";

const page = async () => {
  const acadLeadershipData = await getAcademicLeadershipData();



  const acadLeaderships = acadLeadershipData?.academic_leadership;

  return <AcademicLeaderships data={acadLeaderships} />;
};

export default page;
