import Image from "next/image";

const SEMCEConversationSection = () => {
  return (
    // <section className="w-full  bg-white">
    //   <div className="">

    //     {/* Wrapper */}
    //     <div className="relative  overflow-hidden">

    //       {/* Background Image */}
    //       <Image
    //         src="/wp-content/semce/semce-video-thumbnail.webp" // <-- change path
    //         alt="SEMCE Conversations"
    //         width={1400}
    //         height={700}
    //         className="w-full h-[500px] md:h-[800px] object-cover object-center"
    //         priority
    //       />

    //       {/* Red Overlay */}
    //       <div className="absolute inset-0 bg-red-700/75"></div>

    //       {/* Border Frame */}
    //       <div className="absolute inset-6 rounded-2xl border border-white/70 pointer-events-none"></div>

    //       {/* Play Button */}
    //       <div className="absolute inset-0 flex items-center justify-center">
    //         <button className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-white text-white hover:scale-110 transition">

    //           {/* Triangle */}
    //           <div className="ml-1 w-0 h-0 border-l-[14px] border-l-white border-y-[10px] border-y-transparent"></div>
    //         </button>
    //       </div>

    //       {/* Bottom Left Text */}
    //       <div className="absolute bottom-12 left-12 text-white">
    //         <h3 className="text-3xl md:text-4xl font-serif">
    //           The SEMCE
    //         </h3>
    //         <p className="text-3xl md:text-4xl italic font-light">
    //           Conversations
    //         </p>
    //       </div>

    //     </div>
    //   </div>
    // </section>
    <section className="py-10">
      <div className="max-w-[800px] mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">The SEMCE Conversations</h2>
          <h3 className="text-3xl font-semibold">Purpose of the section</h3>
          <p className="mt-2 text-gray-600">
            A media-first section showcasing podcasts, talks, and video
            conversations that reflect life, learning, and thinking at SEMCE.
            Not limited to the Dean. Can include founders, faculty, students,
            creators, and industry guests.
          </p>
        </div>
      </div>
      <iframe
        width="100%"
        height="800"
        src="https://www.youtube.com/embed/8IFKA22GHmg?si=tC2xF-Ru7soX7b7L"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default SEMCEConversationSection;
