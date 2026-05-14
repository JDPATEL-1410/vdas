export default function SkeletonCard() {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(27,79,138,0.08)' }}
    >
      {/* Image skeleton */}
      <div className="aspect-16-9 skeleton-pulse bg-gray-200" />
      <div className="p-5">
        <div className="flex justify-between mb-3">
          <div className="h-3 bg-gray-200 rounded w-24 skeleton-pulse" />
          <div className="h-3 bg-gray-200 rounded w-20 skeleton-pulse" />
        </div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded w-full skeleton-pulse" />
          <div className="h-4 bg-gray-200 rounded w-4/5 skeleton-pulse" />
        </div>
        <div className="space-y-1.5 mb-4">
          <div className="h-3 bg-gray-200 rounded w-full skeleton-pulse" />
          <div className="h-3 bg-gray-200 rounded w-3/4 skeleton-pulse" />
        </div>
        <div className="h-4 bg-gray-200 rounded w-36 skeleton-pulse" />
      </div>
    </div>
  )
}
