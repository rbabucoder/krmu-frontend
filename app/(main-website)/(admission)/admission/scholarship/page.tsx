import ScholarHero from "./comp/ScholarHero";
import ScholarNotes from "./comp/ScholarNotes";
import ScholarUGPG from "./comp/ScholarUGPG";

const page = () => {
  return (
    <>
      <ScholarHero />
      <ScholarUGPG />
      <ScholarNotes />
    </>
  );
};

export default page;
