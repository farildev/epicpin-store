import React from 'react';
import { ArrowLeft } from 'lucide-react';

const AnnounceDetailLoading = () => {
  return (
    <div className="min-h-dvh pt-[120px]">
      <div className="siteContainer">
        {/* Back link skeleton */}
        <div className="flex items-center gap-1 mb-6 animate-pulse">
          <ArrowLeft size={14} className="text-gray-300" />
          <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
        </div>

        {/* Hero image skeleton */}
        <div className="w-full h-[300px] bg-gray-300 dark:bg-gray-700 rounded-lg mb-8 animate-pulse"></div>

        {/* Title skeleton */}
        <div className="space-y-2 mb-4 animate-pulse">
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        </div>

        {/* Meta info skeleton */}
        <div className="flex items-center gap-4 mb-8 animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-24"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-20"></div>
        </div>

        {/* Content skeleton */}
        <div className="prose max-w-none space-y-4 animate-pulse">
          {/* Paragraph skeletons */}
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className={`h-4 bg-gray-200 dark:bg-gray-600 rounded ${
                index % 4 === 0
                  ? 'w-full'
                  : index % 4 === 1
                    ? 'w-5/6'
                    : index % 4 === 2
                      ? 'w-4/5'
                      : 'w-3/4'
              }`}
            ></div>
          ))}

          {/* Heading skeleton */}
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mt-8"></div>

          {/* More paragraph skeletons */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index + 12}
              className={`h-4 bg-gray-200 dark:bg-gray-600 rounded ${
                index % 3 === 0 ? 'w-full' : index % 3 === 1 ? 'w-5/6' : 'w-4/5'
              }`}
            ></div>
          ))}

          {/* Another heading skeleton */}
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mt-6"></div>

          {/* Final paragraph skeletons */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index + 20}
              className={`h-4 bg-gray-200 dark:bg-gray-600 rounded ${
                index % 3 === 0 ? 'w-full' : index % 3 === 1 ? 'w-4/5' : 'w-3/4'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnounceDetailLoading;
