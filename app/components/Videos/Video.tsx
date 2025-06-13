const Video = () => {
  return (
    <>
      <video
        className="w-auto min-w-full min-h-[600px] lg:min-h-screen max-w-none"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Video;
