import { getKRMUCampusFacility } from "@/lib/api/krmu-campus-facility";
import KrmuCampusHero from "./comp/KrmuCampusHero";
import StateofTheArt from "./comp/StateofTheArt";
import LabsWorkshops from "./comp/LabsWorkshops";
import ModernClassroom from "./comp/ModernClassroom";
import RobustSeamless from "./comp/RobustSeamless";
import ComfyHostel from "./comp/ComfyHostel";
import SportsFitness from "./comp/SportsFitness";
import ResearchSupport from "./comp/ResearchSupport";
import AestheticsCafeteria from "./comp/AestheticsCafeteria";

const page = async () => {
  const pageData = await getKRMUCampusFacility();

  const stateOfTheArt = pageData?.state_of_art;
  const labsWorkshop = pageData?.lab_workshops;
  const modernClassroom = pageData?.modern_classroom;
  const ComfyClassroom = pageData?.comfy_hostel;
  const sportsFitness = pageData?.sport_fitness;
  const researchSupport = pageData?.research_support;
  const aestheticsCafeteria = pageData?.aesthetics_cafeteria;

  return (
    <>
      <KrmuCampusHero />
      {stateOfTheArt && <StateofTheArt stateOfTheArt={stateOfTheArt} />}
      {labsWorkshop && <LabsWorkshops labsWorkshop={labsWorkshop} />}
      {modernClassroom && <ModernClassroom modernClassroom={modernClassroom} />}
      <RobustSeamless />
      {ComfyClassroom && <ComfyHostel comfyClassroom={ComfyClassroom} />}
      {sportsFitness && <SportsFitness sportFitness={sportsFitness} />}
      {researchSupport && <ResearchSupport researchSupport={researchSupport} />}
      {aestheticsCafeteria && (
        <AestheticsCafeteria aestheticsCafeteria={aestheticsCafeteria} />
      )}
    </>
  );
};

export default page;
