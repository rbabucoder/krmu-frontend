import { BlogCardSkeleton } from "@/app/(main-website)/components/Skeleton/BlogCardSkeleton";

export default function Loading() {
  return (
    <>
      {/* <Skeleton className="w-full pt-hero-top pb-[10%] md:py-[14%]" /> */}

      <section className="py-section-lg">
        <div className="max-w-main mx-auto w-full">
          {/* <div className="w-1/5">
            <Skeleton className="w-full min-h-80" />
          </div> */}

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Render 6 skeletons */}
            {Array.from({ length: 6 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>

          {/* <div className="w-1/5">
            <Skeleton className="w-full min-h-80" />
          </div> */}
        </div>
      </section>
    </>
  );
}
