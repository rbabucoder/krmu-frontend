import Image from "next/image";

const SEMCESlide = () => {
  return (
    <div className="relative">
      <Image
        src="/semce/semce-slides/item-1.webp"
        width={1140}
        height={600}
        alt=""
        className="w-full"
      />
      <div className="absolute text-center bottom-20 left-0 w-full text-white">
        <h4 className="text-7xl instrument-serif font-light">
          Journalism & Storytelling
        </h4>
        <p className="text-3xl font-light">
          Write stories, report news, anchor broadcasts, build narrative skills
        </p>
      </div>
    </div>
  );
};

export default SEMCESlide;
