import Video from "../components/Videos/Video";

const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <Video />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col text-center text-white px-4 md:px-0">
          <p className="text-xl md:text-2xl font-light">
            Discover the world of possibilities with K.R. Mangalam University
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-4">
            We Shape Futures
          </h1>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
