export default function Loading() {
  return (
    <div className="p-6 space-y-4">
      <div className="h-6 w-1/3 bg-gray-200 animate-pulse rounded"></div>
      <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
      <div className="h-4 w-5/6 bg-gray-200 animate-pulse rounded"></div>
      <div className="h-4 w-2/3 bg-gray-200 animate-pulse rounded"></div>
    </div>
  );
}
