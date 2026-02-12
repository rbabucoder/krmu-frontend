const OverviewLifeBeyond = () => {
  return (
    <section className="bg-[url(/gradient-2.webp)] bg-cover bg-no-repeat bg-center px-4 py-5 lg:py-0" id="lifeBeyond">
      <div className="max-w-main mx-auto w-full flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 text-white lg:pt-section-lg lg:pr-[60px] lg:pb-section lg:pl-[100px]">
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.3] mb-5">
            A Life Beyond <br /> Academics
          </h2>
          <p>
            Welcome to a world where education meets excitement! At K.R.
            Mangalam University (KRMU), we believe that university life should
            be a perfect blend of learning, growth, and fun. Our campus is not
            just a place to study; it’s where you’ll make memories that last a
            lifetime.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <iframe
            width="100%"
            height="432"
            src="https://www.youtube.com/embed/fvbEreUXZVU?si=OA22YOD_02bqdkn_"
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

export default OverviewLifeBeyond;
