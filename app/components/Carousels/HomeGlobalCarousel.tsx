import Image from "next/image";

const HomeGlobalCarousel = () => {
  return (
    <>
        <div className="flex flex-wrap justify-center  sm:justify-between items-center">
        <Image src="/houstan-300x76.webp" width={150} height={107} alt="Houston" />
        <Image src="/confusious.webp" width={140} height={140} alt="Confusious" />
        <Image src="/dubna.webp" width={150} height={107} alt="Dubna" />
        <Image src="/ferrarri-300x300.webp" width={150} height={107} alt="Ferrari" />
        </div>
    </>
  )
};

export default HomeGlobalCarousel;
