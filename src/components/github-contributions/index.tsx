"use client"

import { use, useMemo, useState } from "react"
import Link from "next/link"
import {
  Activity,
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/contribution-graph"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"
import { ArrowUpRight } from "lucide-react"

export { GitHubContributionsFallback } from "./github-contributions-fallback"
export { getCachedContributions } from "./lib/get-cached-contributions"

export type GitHubContributionsProps = {
  contributions: Promise<Activity[]> | Activity[]
  githubProfileUrl?: string
  username?: string
  className?: string
}

export function GitHubContributions({
  contributions: contributionsProp,
  githubProfileUrl = "https://github.com/udayahire2",
  username = "udayahire2",
  className,
}: GitHubContributionsProps) {
  const data =
    typeof (contributionsProp as any)?.then === "function"
      ? use(contributionsProp as Promise<Activity[]>)
      : (contributionsProp as Activity[])

  const [activeActivity, setActiveActivity] = useState<Activity | null>(null)

  const formattedDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr)
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    } catch {
      return dateStr
    }
  }

  const totalContributions = useMemo(() => {
    return data?.reduce((acc, curr) => acc + (curr.count || 0), 0) || 0
  }, [data])

  const currentYear = useMemo(() => {
    if (data && data.length > 0) {
      return new Date(data[data.length - 1].date).getFullYear()
    }
    return new Date().getFullYear()
  }, [data])

  return (
    <TooltipProvider delayDuration={0}>
      <div className="w-full rounded-2xl border border-border/70 bg-card/60 p-5 md:p-6 shadow-xs backdrop-blur-md transition-all hover:border-border">
        {/* Header */}
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border bg-muted/60 ring-1 ring-border/40 shadow-2xs">
              <Icons.github className="h-4 w-4 text-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold leading-none tracking-tight">
                  GitHub Contributions
                </h3>
                <span className="rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[11px] font-semibold text-primary">
                  {totalContributions} total
                </span>
              </div>
              <div className="text-xs text-muted-foreground mt-1.5 h-4 flex items-center">
                {activeActivity ? (
                  <p className="text-foreground font-semibold flex items-center gap-1.5 animate-in fade-in-50">
                    <span className="inline-block size-2 rounded-full bg-primary" />
                    <span>
                      {activeActivity.count === 0
                        ? "No contributions"
                        : `${activeActivity.count} contribution${activeActivity.count === 1 ? "" : "s"}`}
                    </span>
                    <span className="text-muted-foreground font-normal">
                      on {formattedDate(activeActivity.date)}
                    </span>
                  </p>
                ) : (
                  <p className="text-muted-foreground">
                    {totalContributions} contributions in {currentYear} • Hover block to inspect
                  </p>
                )}
              </div>
            </div>
          </div>

          {githubProfileUrl && (
            <Link
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/80 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent hover:border-border transition-all group w-fit"
            >
              <span>@{username}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-muted-foreground group-hover:text-foreground" />
            </Link>
          )}
        </div>

        {/* Calendar Graph Grid with Radix Tooltip */}
        <ContributionGraph data={data} className={className}>
          <ContributionGraphCalendar>
            {({ activity, dayIndex, weekIndex }) => (
              <Tooltip key={`${weekIndex}-${dayIndex}`}>
                <TooltipTrigger asChild>
                  <g>
                    <ContributionGraphBlock
                      activity={activity}
                      dayIndex={dayIndex}
                      weekIndex={weekIndex}
                      className="cursor-pointer transition-all hover:scale-125 hover:stroke-foreground/60 hover:stroke-1"
                      onMouseEnter={() => setActiveActivity(activity)}
                      onMouseLeave={() => setActiveActivity(null)}
                    >
                      <title>
                        {`${activity.count === 0 ? "No contributions" : `${activity.count} contribution${activity.count === 1 ? "" : "s"}`} on ${formattedDate(activity.date)}`}
                      </title>
                    </ContributionGraphBlock>
                  </g>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={6}
                  className="z-50 border border-border bg-popover px-3 py-1.5 text-xs shadow-md text-popover-foreground animate-in fade-in-0 zoom-in-95"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-foreground">
                      {activity.count === 0
                        ? "No contributions"
                        : `${activity.count} contribution${activity.count === 1 ? "" : "s"}`}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{formattedDate(activity.date)}</span>
                  </div>
                </TooltipContent>
              </Tooltip>
            )}
          </ContributionGraphCalendar>

          {/* Footer stats and legend */}
          <ContributionGraphFooter className="mt-4 pt-3 border-t border-border/40 text-xs">
            <ContributionGraphTotalCount className="text-xs text-muted-foreground font-medium" />
            <ContributionGraphLegend className="text-xs" />
          </ContributionGraphFooter>
        </ContributionGraph>
      </div>
    </TooltipProvider>
  )
}
