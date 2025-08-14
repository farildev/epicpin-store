import React from 'react';

const AnnouncesLoading = () => {
  return (
    <div className="min-h-dvh pt-[120px]">
      <div className="siteContainer">
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-32 mb-8 animate-pulse"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-100/10 rounded-lg animate-pulse"
            >
              <div className="relative h-[200px] bg-gray-300 dark:bg-gray-700 rounded-t-lg">
                <div className="absolute top-2 right-2 bg-gray-400 dark:bg-gray-600 w-16 h-6 rounded-full"></div>
              </div>

              <div className="p-4 space-y-3">
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>

                <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-4/5"></div>

                <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-24 mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncesLoading;
