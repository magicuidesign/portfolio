"use client"

export function GitHubContributionsFallback() {
  // Skeleton grid simulation (52 weeks x 7 days)
  const skeletonWeeks = Array.from({ length: 52 })
  const skeletonDays = Array.from({ length: 7 })

  return (
    <div className="w-full rounded-2xl border border-border/60 bg-background/50 p-6 shadow-sm backdrop-blur-sm">
      <div className="flex flex-col gap-4 animate-pulse">
        {/* Header skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-md bg-muted" />
            <div className="h-5 w-40 rounded-md bg-muted" />
          </div>
          <div className="h-4 w-28 rounded-md bg-muted" />
        </div>

        {/* Grid skeleton */}
        <div className="no-scrollbar overflow-x-auto py-2">
          <div className="flex gap-[4px] min-w-max">
            {skeletonWeeks.map((_, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-[4px]">
                {skeletonDays.map((_, dayIdx) => (
                  <div
                    key={dayIdx}
                    className="h-[12px] w-[12px] rounded-[2px] bg-muted/40"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer skeleton */}
        <div className="flex items-center justify-between pt-2">
          <div className="h-4 w-32 rounded-md bg-muted" />
          <div className="flex items-center gap-2">
            <div className="h-3 w-8 rounded bg-muted" />
            <div className="flex gap-[3px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-3 w-3 rounded-[2px] bg-muted" />
              ))}
            </div>
            <div className="h-3 w-8 rounded bg-muted" />
          </div>
        </div>
      </div>
    </div>
  )
}
