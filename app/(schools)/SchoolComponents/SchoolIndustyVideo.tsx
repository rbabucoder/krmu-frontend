import { VIDEOIFRAME } from "@/lib/types/schools";

type Props = {
  heading: string;
  videoCards: VIDEOIFRAME[];
};

const SchoolIndustyVideo = ({ heading, videoCards }: Props) => {
  return (
    <section className="py-5 px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h4 className="text-2xl md:text-5xl text-center font-bold mb-5">
          {heading}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-5">
          {videoCards &&
            videoCards?.map((video) => {
              return (
                <div className="w-full" key={video?.id}>
                  <div
                    className="w-full"
                    dangerouslySetInnerHTML={{
                      __html: video?.videoiframefield,
                    }}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default SchoolIndustyVideo;
