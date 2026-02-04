import Image from "next/image";

const LearnByCreatingCard = () => {
  return (
    <div className="bg-[#00579B] h-full md:min-h-[600px] learnbyCreatingCard">
      <h4 className="text-3xl sm:text-4xl">Build your own channel</h4>
      <p className="text-2xl font-light">
        No need to wait years to become a news anchor or storyteller start
        publishing from day one.
      </p>
      <div className="mt-10">
        <Image
          src="/semce/channel.jpg"
          width={265}
          height={192}
          alt=""
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default LearnByCreatingCard;
