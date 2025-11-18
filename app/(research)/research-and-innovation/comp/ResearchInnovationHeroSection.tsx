import Image from "next/image";
import Link from "next/link";

const ResearchInnovationHeroSection = () => {
  return (
    <section className="pt-20 pb-5 bg-[url(/research/duotone-2.webp)] bg-cover bg-center">
      <div className="max-w-[1664px] mx-auto w-full flex gap-16">
        <div className="w-1/2">
          <h1 className="text-[64px] my-12 leading-[1.2] font-semibold mb-10">Innovating for a Better Tomorrow</h1>
          <p className="text-xl leading-[1.5] text-justify mb-5">
            Join us at K.R. Mangalam University, where our research ambitions
            shape the future, and our pursuit of knowledge creates a lasting
            impact. At the heart of K.R. Mangalam University lies a profound
            commitment to research excellence. Our scholarly endeavors are not
            just about advancing academic knowledge; they are about solving
            real-world problems, contributing to societal development, and
            shaping future innovations. Our research spans diverse domains,
            blending traditional disciplines with cutting-edge studies in AI,
            materials science, and social welfare. We offer an environment that
            nurtures creativity, encourages interdisciplinary collaboration, an
            fosters a global perspective in addressing the challenges of our
            times.
          </p>
          <Link href="#" className="bg-[#e31e24] py-2.5 px-5 inline-block rounded-[4px] text-xl text-white leading-2.5 blink-effect">Policies and Publications</Link>
        </div>
        <div className="w-1/2">
          <Image
            src="/research/hero.webp"
            width={768}
            height={768}
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ResearchInnovationHeroSection;
