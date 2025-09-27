import { getVideoGallery } from "@/lib/api/video-gallery";
import VideoGalleryCard from "./VideoGalleryCard";
import VideoGalleryHero from "./VideoGalleryHero";

const page = async () => {
  const videoGalleryPageData = await getVideoGallery();

  const videosData = videoGalleryPageData?.videos;

  return (
    <>
      <VideoGalleryHero
        title={videoGalleryPageData?.Title}
        bgurl={videoGalleryPageData?.bgimage}
      />
      <section className="py-10 md:pt-20 md:pb-[60px] px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videosData &&
              videosData.map((video) => {
                return (
                  <VideoGalleryCard
                    key={video?.id}
                    title={video?.title}
                    videoframe={video?.videofield}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
