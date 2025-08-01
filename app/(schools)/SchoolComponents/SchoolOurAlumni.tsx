import AlumniLogoCard from "./schoolglobalcomponent/AlumniLogoCard";

const SchoolOurAlumni = () => {
  return (
    <section className="py-14">
      <div className="max-w-[1664px] mx-auto w-full text-center">
        <h3 className="mb-14 text-4xl font-bold">Our Alumni Work At</h3>
        <div className="grid grid-cols-4 gap-8">
            <AlumniLogoCard />
            <AlumniLogoCard />
            <AlumniLogoCard />
            <AlumniLogoCard />
        </div>
      </div>
    </section>
  );
};

export default SchoolOurAlumni;
