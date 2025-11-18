import Image from "next/image";
import Link from "next/link";

const IPR = () => {
  return (
    <section className="py-10 bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full flex items-center gap-10">
        <div className="w-1/2 text-white">
          <h2 className="text-5xl font-semibold">
            IPR, Legal & Ethical Matters Cell
          </h2>
          <br />
          <p>
            Intellectual property rights are crucial in fostering innovation,
            creativity, and economic growth. They provide creators and
            innovators with the assurance that their efforts will be protected,
            encouraging them to invest in research and development and bring
            their ideas to the market.
          </p>
          <br />
          <p>
            Intellectual Property (IP) plays a significant role in providing a
            competitive edge to an organization. The intangible assets of an
            organization – such as knowhow, inventions, brands, designs and
            other creative and innovative products are, in present times, more
            valuable than its physical assets.
          </p>
          <br />
          <p>
            With this backdrop, Intellectual Property Rights (IPR) cell seeks to
            provide guidance to academic and non-academic staff, students,
            scholars, and outside agencies alike on the practices and rules of
            the University regarding IPR and related obligations (which include
            the nature of IP, its ownership, exploitation, technology-transfer,
            and confidentiality requirements). With the initiative to fulfil the
            commitment of the University towards promoting academic freedom and
            providing a conducive environment for research and development.
          </p>
          <Link href="#" className=" blink-effect common-btn-3 mt-5">
            Know More
          </Link>
        </div>
        <div className="w-1/2 flex justify-center">
            <Image src="/research/ipr.webp" width={600} height={438} alt="" />
        </div>
      </div>
    </section>
  );
};

export default IPR;
