import Image from "next/image";

const ArtMuralEvent = () => {
  return (
    <section className="py-[50px] bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full flex items-center gap-14">
        <div className="w-1/2 text-white">
          <h3 className="text-[38px] font-bold mb-5">Art Mural Event</h3>
          <p>
            K.R. Mangalam University, in collaboration with Somany Ceramics,
            recently concluded an engaging four-day tile art mural event. Led by
            Mr. Anshuman Chakravarty, Head of Marketing & Communication at
            Somany Ceramics, and Mr. Sujit Mohanty, GVT Vertical Head, the event
            celebrated the creativity of talented students. Certificates were
            awarded to commend their contributions to the wall tile art mural,
            showcasing an inspiring fusion of art and sustainability in
            architectural design.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src="/industry-connect/Workshop-on-Japanese-Cuisine.webp"
            width={766}
            height={430}
            alt=""
            className="h-[430px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ArtMuralEvent;
