import Link from "next/link";

const OverviewTreasure = () => {
  return (
    <>
      <div className="bg-[url(/wp-content/images/treasure.jpeg)] bg-cover bg-top bg-no-repeat gap-8 flex flex-col lg:flex-row">
        <div
          className="lg:w-1/3 mx-4 md:mx-8 px-container-px pt-[55px] pb-[222px] text-white"
          style={{
            background:
              "linear-gradient(180deg,#051630 22%,rgba(5,22,48,0) 100%)",
          }}
        >
          <h4 className="text-3xl md:text-5xl font-semibold">
            A Treasure Trove of Learning Resources
          </h4>
          <p className="my-5">
            With thousands of volumes, journals, and digital resources, KRMU’s
            library is not just a collection of books but a quiet haven for
            thinkers, creators, and dreamers.
          </p>
          <Link
            href="/library"
            className="bg-krmu-red text-white py-[11px] px-[23px] hover:bg-krmu-navy text-base font-semibold rounded-badge inline-block"
          >
            Know More
          </Link>
        </div>
        <div className="lg:w-2/3"></div>
      </div>
    </>
  );
};

export default OverviewTreasure;
