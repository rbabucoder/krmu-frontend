import Image from "next/image";
import Link from "next/link";

const CIF = () => {
  return (
    <section className="bg-[url(/research/facbg.webp)] bg-cover bg-center pt-[50px] pb-[30px]">
      <div className="max-w-[1664px] mx-auto w-full flex gap-10">
        <div className="text-white w-3/5">
          <h3 className="text-4xl font-semibold mb-5">
            Central Instrumentation Facility (CIF)
          </h3>
          <p>
            K.R. Mangalam University boasts many specialised research
            laboratories, each equipped with modern technology to support a wide
            array of academic and scientific inquiries. Our labs cater to
            diverse disciplines, enabling groundbreaking research and
            innovation.
          </p>
          <br />
          <p>
            At the heart of our research infrastructure is the Central
            Instrumentation Facility (CIF). This premier facility is a resource
            hub for our researchers, providing access to high-end instruments
            for advanced experimental and analytical work. Key instruments
            available at CIF include HPLC, UV-VIS spectrophotometer.
          </p>
        </div>
        <div className="w-2/5">
          <Image
            src="/research/cifslide.webp"
            width={600}
            height={438}
            alt=""
          />
        </div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex items-center justify-center mt-10">
        <Link
          href="#"
          className="blink-effect bg-[#e31e24] py-2.5 px-5 leading-[1] inline-block text-white rounded-[4px]"
        >
          Know More
        </Link>
      </div>
    </section>
  );
};

export default CIF;
