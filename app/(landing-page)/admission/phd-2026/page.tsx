import { phd2026Id } from "../constant/lpnpf";
import PhdAwardsAchievements from "./commonComponent/PhdAwardsAchievements";
import PhdCounter from "./commonComponent/PhdCounter";
import PhdGlobal from "./commonComponent/PhdGlobal";
import PhdHeroSection from "./commonComponent/PhdHeroSection";
import PhdImportantNotification from "./commonComponent/PhdImportantNotification";
import PhdProgrammeOffered from "./commonComponent/PhdProgrammeOffered";
import PhdStudentTestimonials from "./commonComponent/PhdStudentTestimonials";
import PhdSuperComputer from "./commonComponent/PhdSuperComputer";
import PhdWelcomeUniversity from "./commonComponent/PhdWelcomeUniversity";
import PhdWhatsHappening from "./commonComponent/PhdWhatsHappening";
import PhdWhyphd from "./commonComponent/PhdWhyphd";

const page = async () => {
  const phdFormId = phd2026Id;

  return (
    <>
      <PhdHeroSection formId={phdFormId} />
      <PhdCounter />
      <PhdImportantNotification />
      <PhdProgrammeOffered />
      <PhdWhyphd />
      <PhdSuperComputer />
      <PhdWelcomeUniversity />
      <PhdAwardsAchievements />
      <PhdWhatsHappening />
      <PhdGlobal />
      <PhdStudentTestimonials />
    </>
  );
};

export default page;
