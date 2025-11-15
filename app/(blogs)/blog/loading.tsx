import { BlogCardSkeleton } from "@/app/components/Skeleton/BlogCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <Skeleton className="w-full pt-[140px] pb-[10%] md:py-[14%]" />

      <section className="py-[60px]">
        <div className="max-w-[1664px] mx-auto w-full flex">
          <div className="w-1/5">
            <Skeleton className="w-full min-h-80" />
          </div>

          <div className="w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Render 6 skeletons */}
            {Array.from({ length: 6 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>

          <div className="w-1/5">
            <Skeleton className="w-full min-h-80" />
          </div>
        </div>
      </section>
    </>
  );
}
