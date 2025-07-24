import { getTopbarData } from "@/lib/api/common";
import Header from "./Header";

const HeaderWrapper = async () => {
  const topbarData = await getTopbarData();
  const topbarmenus = topbarData?.TopbarMenuItems;
  const topbarsociallinks = topbarData?.topbarsociallinks;

  return (
    <Header topbarmenu={topbarmenus} topbarsociallinks={topbarsociallinks} />
  );
};

export default HeaderWrapper;
