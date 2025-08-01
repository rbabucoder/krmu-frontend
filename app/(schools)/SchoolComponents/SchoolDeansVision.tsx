import Image from "next/image";
import Link from "next/link";

const SchoolDeansVision = () => {
  return (
    <section
      className="py-[50px]"
      style={{
        background:
          "linear-gradient(95deg,#051630 2.69%,#0060aa 65.94%,#e31e24 97.54%)",
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-center text-white text-[64px]">
          <h4 className="leading-[1]">Know our</h4>
          <h5 className="leading-[1.2] font-bold">Dean’s vision</h5>
        </div>
        <div
          className="rounded-4xl flex"
          style={{
            background:
              "linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)",
            backdropFilter: "blur(13.410955429077px)",
          }}
        >
          <div className="w-2/6 p-[50px]">
            <Image
              src="/schools/Dr.-Pankaj-Agarwal@KRMU-1.webp"
              width={358}
              height={465}
              alt="Pankaj Aggarwal"
              className="rounded-[25px]"
            />
          </div>
          <div className="w-4/6 p-[50px] text-white">
            <p>
              The School of Engineering and Technology at K.R. Mangalam
              University, established in 2013, is dedicated to providing quality
              education, innovation, and entrepreneurship. Offering a diverse
              array of undergraduate, postgraduate, and Ph.D. programmes, the
              school emphasises cutting-edge teaching, research, and practical
              industry experience through collaborations with leading companies
              like IBM, EC-Council, Samatrix, ImaginXP, and Xebia etc. Our
              curriculum is designed to address real-world challenges by
              focusing on problem-solving, interdisciplinary learning, and skill
              development, all in alignment with industry requirements. We
              cultivate a culture of innovation and entrepreneurship, providing
              students with state-of-the-art facilities and preparing them to
              become leaders in the rapidly evolving technological landscape. We
              maintain a strong emphasis on ethical behaviour and lifelong
              learning, ensuring our students are not just academically
              proficient but also responsible global citizens.
            </p>
            <br />
            <p>
              Looking ahead, the Dean envisions a future where our school not
              only stays at the forefront of technological advancements but also
              pioneers new realms of research and innovation. By continuously
              evolving our curriculum and embracing emerging technologies, we
              aim to equip our students with the skills necessary to thrive in
              an increasingly digital and interconnected world. Our strategic
              vision includes expanding our global partnerships and fostering a
              diverse, inclusive, and forward-thinking academic community that
              anticipates and shapes the future of engineering and technology.
            </p>
            <br />
            <p className="text-[32px] mb-3.5">
              <strong>Dr. Pankaj Agarwal</strong>
            </p>
            <Link href="mailto:dean.soet@krmangalam.edu.in" className="text-base">
              dean.soet@krmangalam.edu.in
            </Link>
            <br />
            <p className="text-base">Professor & Dean</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolDeansVision;
