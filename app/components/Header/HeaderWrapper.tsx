import { getHeaderMenu } from "@/lib/api/common";
import Header from "./Header";

const HeaderWrapper = async () => {
  // const topbarData = await getTopbarData();
  // const topbarmenus = topbarData?.TopbarMenuItems;
  // const topbarsociallinks = topbarData?.topbarsociallinks;

  // Main Menu

  // const mainMenuData = await getMainMenu();
  // const mainMenuItems = mainMenuData?.MainMenuItems

  const headerMenuData = await getHeaderMenu();

  const headerMenus = headerMenuData?.headermenus;

  return (
    <Header
      // topbarmenu={topbarmenus}
      // topbarsociallinks={topbarsociallinks}
      headerMenus={headerMenus}
    />
    // <StaticHeader />
  );
};

export default HeaderWrapper;
