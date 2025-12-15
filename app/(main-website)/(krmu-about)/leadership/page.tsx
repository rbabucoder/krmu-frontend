import { getLeadershipData } from "@/lib/api/leadership";
import { Leaderships } from "./comp/Leaderships";

const page = async () => {

  const leadershipData = await getLeadershipData();
  const leaderships = leadershipData?.leadership


  return <Leaderships data={leaderships} />;
};

export default page;
