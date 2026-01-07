import Image from "next/image";
import { aboutUsContent } from "../admission/mca-2026/content";

const AboutUs = () => {
  const { title, description, image } = aboutUsContent;

  return (
    <section className="py-10 md:py-14 lg:py-20 px-4">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col-reverse lg:flex-row gap-10 items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-[#003fa1] text-2xl sm:text-3xl font-semibold mb-5">
            {title}
          </h3>

          <div
            className="text-gray-700 text-base sm:text-lg leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            className="w-full h-auto rounded-md"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
