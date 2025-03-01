export const AnimalCardSkeleton = () => (
  <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
    <div className="w-full h-60 bg-gray-200"></div>

    <div className="p-4">
      <div className="w-3/4 h-5 bg-gray-300 rounded mb-2"></div>

      <div className="w-1/2 h-4 bg-gray-300 rounded mb-3"></div>

      <div className="flex gap-2">
        <div className="w-16 h-6 bg-gray-300 rounded"></div>
        <div className="w-16 h-6 bg-gray-300 rounded"></div>
        <div className="w-16 h-6 bg-gray-300 rounded"></div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="w-20 h-4 bg-gray-300 rounded"></div>
        <div className="w-16 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
);
