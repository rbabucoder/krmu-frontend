import Link from "next/link";

const OverviewYourWellBeing = () => {
  return (
    <section className="py-section-lg bg-krmu-blue px-4">
      <div className="max-w-main mx-auto w-full flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/5">
          <h3 className="text-5xl font-semibold text-white">
            Your <br /> Well-Being <br /> Our Priority
          </h3>
          <Link
            href="/student-welfare"
            target="_blank"
            className="text-black text-base hover:bg-krmu-navy-light hover:text-white bg-white py-[11px] px-[23px] rounded-badge font-semibold inline-block mt-5"
          >
            Know more about Student Welfare
          </Link>
        </div>
        <div className="lg:w-3/5 text-white mt-10 lg:mt-0">
          <p>
            Student Welfare provides ample scope, opportunities, and facilities
            for the students’ all-around development of personality and
            leadership qualities. Here, all the activities are undertaken to
            promote opportunities for the youth to enhance their skills and
            talents to boost their confidence. Besides undertaking engagement
            activities regarding the facilitation of outcomes during and after
            the students’ pursuit of academic activities, the office acts as a
            channel of communication between the students and the university
            administration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewYourWellBeing;
