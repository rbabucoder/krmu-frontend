import Image from "next/image";

const HomeTestimonialCard = () => {
  return (
    <div className="bg-white p-5 text-black rounded-[30px] min-h-[450px] h-full">
      <div className="flex items-center gap-4">
        <div>
          <Image
            src="/user.webp"
            width={128}
            height={128}
            alt="User"
            className="mb-5"
          />
        </div>
        <div className="font-bold text-[20px]">
          <p className="leading-[1.5]">Aryan Mishra</p>
          <p>B.Arch</p>
        </div>
      </div>
      <div>
        <p className="my-5">
          I am a third-year student at KRMIJ in the B.Arch programme. The
          programme was comprehensive and well-organized, and the instructors
          were top-notch. I feel confident that I got to know more about this
          programme and the knowledge I need to succeed in this exciting field.
        </p>
      </div>
    </div>
  );
};

export default HomeTestimonialCard;
