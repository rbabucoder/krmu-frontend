import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";


 
 interface VideoProps {
  video: StrapiMedia | null;
}
 
 
 const Video = ({video} : VideoProps) => {
  if (!video) return null;

  console.log(video);

  const videoUrl = `http://localhost:1337${video.url}`;


  
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
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Video;