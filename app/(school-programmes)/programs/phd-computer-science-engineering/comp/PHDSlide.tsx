import Image from "next/image";

const PHDSlide = () => {
  return (
    <section className="bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full flex min-h-[130px] h-full">
        <Image
          src="/cutback.webp"
          width={304}
          height={84}
          alt=""
          className="object-contain"
        />
        <Image
          src="/cutback.webp"
          width={304}
          height={84}
          alt=""
          className="object-contain"
        />
        <Image
          src="/cutback.webp"
          width={304}
          height={84}
          alt=""
          className="object-contain"
        />
        <Image
          src="/cutback.webp"
          width={304}
          height={84}
          alt=""
          className="object-contain"
        />
        <Image
          src="/cutback.webp"
          width={304}
          height={84}
          alt=""
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default PHDSlide;
