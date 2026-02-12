"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Landing page error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Something went wrong
      </h2>
      <p className="text-gray-600 mb-6">
        We&apos;re sorry, but something unexpected happened. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-[#051630] text-white rounded-lg hover:bg-[#0a2d5e] transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
