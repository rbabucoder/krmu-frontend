import { phdId } from "../constant/lpnpf";
import PhdCounter from "./commonComponent/PhdCounter";
import PhdHeroSection from "./commonComponent/PhdHeroSection";
import PhdImportantNotification from "./commonComponent/PhdImportantNotification";
import PhdSuperComputer from "./commonComponent/PhdSuperComputer";
import PhdWhyphd from "./commonComponent/PhdWhyphd";

const page = async () => {
  const phdFormId = phdId;

  return (
    <>
      <PhdHeroSection formId={phdFormId}  />
      <PhdCounter />
      <PhdImportantNotification />
      <PhdWhyphd />
      <PhdSuperComputer />
    </>
    
  );
};

export default page;
