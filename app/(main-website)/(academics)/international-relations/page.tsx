import InterRelaionForAdmission from "./comp/InterRelaionForAdmission";
import InterRelationActivities from "./comp/InterRelationActivities";
import InterRelationCertified from "./comp/InterRelationCertified";
import InterRelationContent from "./comp/InterRelationContent";
import InterRelationForeign from "./comp/InterRelationForeign";
import InterRelationForm from "./comp/InterRelationForm";
import InterRelationGlobal from "./comp/InterRelationGlobal";
import InterRelationHero from "./comp/InterRelationHero";
import InterRelationRoles from "./comp/InterRelationRoles";
import InterRelationStudentExchange from "./comp/InterRelationStudentExchange";
import InterRelationWorkshop from "./comp/InterRelationWorkshop";

const page = () => {
  return (
    <>
      <InterRelationHero />
      <InterRelationContent />
      <InterRelationRoles />
      <InterRelationActivities />
      <InterRelationWorkshop />
      {/* <InterRelationCertified /> */}
      <InterRelationForeign />
      <InterRelationGlobal />
      <InterRelaionForAdmission />
      <InterRelationForm />
      <InterRelationStudentExchange />
    </>
  );
};

export default page;
