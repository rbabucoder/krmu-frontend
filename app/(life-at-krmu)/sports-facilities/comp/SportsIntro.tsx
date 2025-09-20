const SportsIntro = () => {
  return (
    <section className="py-[30px]">
      <div className="max-w-[1664px] mx-auto w-full flex items-center gap-10">
        <div className="w-1/2">
          <h3 className="text-[42px] font-bold mb-5">Introduction</h3>
          <p className="text-[22px]">
            K.R. Mangalam University provides cutting-edge facilities aimed at
            nurturing not just academic excellence but also physical fitness and
            sportsmanship among its student body. With sprawling campuses
            equipped with numerous playgrounds and indoor courts, the University
            creates an environment conducive to holistic development.
          </p>
        </div>
        <div className="w-1/2">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/FECIXDXykNQ?si=RsQbYLpsUplW6CC4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SportsIntro;
