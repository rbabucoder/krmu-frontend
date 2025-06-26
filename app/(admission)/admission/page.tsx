import About from "../AdmissionSections/About";
import AboutHeroBanner from "../AdmissionSections/AboutHeroBanner";
import AdmissionProcess from "../AdmissionSections/AdmissionProcess";
import Alumni from "../AdmissionSections/Alumni";
import Contact from "../AdmissionSections/Contact";
import FAQ from "../AdmissionSections/FAQ";
import FeeDetails from "../AdmissionSections/FeeDetails";
import Programs from "../AdmissionSections/Programs";

const page = () => {
  return (
    <>
      <AboutHeroBanner />
      <AdmissionProcess />
      <About />
      <Programs />
      <FeeDetails />
      <Alumni />
      <FAQ />
      <Contact />
    </>
  );
};

export default page;
