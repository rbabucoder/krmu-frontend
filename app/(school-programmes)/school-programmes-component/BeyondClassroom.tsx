import BeyondClassroomSlider from "../school-prog-global-comps/BeyondClassroomSlider";

const BeyondClassroom = () => {
  return (
    <section className="prog-global-padding">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="text-center">
          <h2 className="text-[40px] font-semibold text-[#0a41a1]">
            Beyond <span className="text-[#db2a1a]">the Classroom</span>
          </h2>
          <p className="sub-heading text-center">
            Our experiential learning programs bridge the gap between academics
            and industry by providing hands on exposure through hackathons, live
            projects, research initiatives, and corporate internships. Students
            engage in real-world problem-solving, collaborate with industry
            leaders, participate in technical bootcamps, and gain
            entrepreneurial insights through startup incubation programs. With
            opportunities for international competitions and industry training,
            the curriculum ensures graduates are well equipped to thrive in the
            evolving tech landscape.
          </p>
        </div>
      </div>
      <BeyondClassroomSlider />
    </section>
  );
};

export default BeyondClassroom;
