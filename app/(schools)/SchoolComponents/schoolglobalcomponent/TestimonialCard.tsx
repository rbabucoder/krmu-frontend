import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div
      className="bg-white rounded-b-[25px]"
      style={{
        boxShadow: "-2px 0px 20px 0px rgba(0,0,0,7%)",
      }}
    >
      <div
        className="p-5 rounded-t-[25px] text-white flex flex-col gap-4"
        style={{
          background: "linear-gradient(168deg,#051630 6.9%,#005ba1 162.66%)",
        }}
      >
        <Image
          src="/schools/mask.webp"
          width={105}
          height={105}
          alt="mask"
          className="rounded-full"
        />
        <p className="text-3xl font-medium">Rishi </p>
        <p>B.Tech. CSE</p>
      </div>
      <div className="text-lg p-5 bg-white rounded-b-[25px]">
        <p>
          {`"As my B.Tech. journey comes to an end, I am confident that the
          skills, knowledge, and experiences I gained at K.R. Mangalam
          University will serve as a solid foundation for my future endeavours.
          I am grateful for the stimulating learning environment and the
          university's assistance in moulding me into a well-rounded and
          competent professional in the field of Computer Science and
          Engineering."`}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
