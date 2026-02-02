const SEMCETestimonialCard = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl">

        {/* Blue Card */}
        <div className="
          bg-[#00579B]
          h-[220px] sm:h-[260px] md:h-[340px] lg:h-[380px]
          rounded-2xl md:rounded-[32px]
          relative
        ">
          {/* Name Tag */}
          <span
            className="
              absolute
              top-6 sm:top-8 md:top-10
              left-4 sm:left-6 md:-left-10
              bg-[#CA1B1F] text-white
              px-4 sm:px-5 md:px-6
              py-1.5 sm:py-2
              rounded-md
              font-semibold
              text-sm sm:text-base md:text-lg
              whitespace-nowrap
            "
          >
            Soumitra Halder
          </span>
        </div>

        {/* Testimonial Box */}
        <div
          className="
            mt-4                     /* ✅ mobile: normal flow */
            md:mt-0
            md:absolute              /* ✅ overlap only from md */
            md:left-1/2
            md:-bottom-20
            md:-translate-x-1/2
            w-full sm:w-[95%] md:w-[85%]
            bg-[#CA1B1F] text-white
            p-5 sm:p-6 md:p-8
            rounded-xl md:rounded-2xl
            shadow-lg
          "
        >
          <p className="text-sm sm:text-base leading-relaxed">
            At SEMCE, I didn’t just study journalism. I practiced it.
            From podcasts and ground reporting to real studio work and
            industry visits, every experience pushed me closer to the
            media world. Faculty mentorship gave me the confidence to
            step into the industry ready.
          </p>
        </div>

      </div>
    </div>
  );
};

export default SEMCETestimonialCard;
