import { Activity } from "@/components/contribution-graph"

function levelFromQuartile(levelStr?: string, count: number = 0): number {
  if (!levelStr) {
    if (count === 0) return 0
    if (count <= 2) return 1
    if (count <= 4) return 2
    if (count <= 7) return 3
    return 4
  }

  switch (levelStr.toUpperCase()) {
    case "NONE":
      return 0
    case "FIRST_QUARTILE":
      return 1
    case "SECOND_QUARTILE":
      return 2
    case "THIRD_QUARTILE":
      return 3
    case "FOURTH_QUARTILE":
      return 4
    default:
      if (typeof levelStr === "number") return levelStr
      return count > 0 ? 1 : 0
  }
}

export async function getCachedContributions(
  username: string
): Promise<Activity[]> {
  const targetUsername = username || "udayahire2"

  // 1. Try Deno GitHub Contributions API (Live real data)
  try {
    const res = await fetch(
      `https://github-contributions-api.deno.dev/${targetUsername}.json?flat=true`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (res.ok) {
      const data = await res.json()
      const rawList = data?.contributions || []
      if (Array.isArray(rawList) && rawList.length > 0) {
        return rawList.map((item: any) => {
          const count = item.contributionCount ?? item.count ?? 0
          return {
            date: item.date,
            count: count,
            level: levelFromQuartile(item.contributionLevel || item.level, count),
          }
        })
      }
    }
  } catch (err) {
    console.warn("Primary GitHub contributions fetch error:", err)
  }

  // 2. Try Vercel GitHub Contributions API as fallback
  try {
    const res = await fetch(
      `https://github-contributions-api.jasonwei512.vercel.app/v1/${targetUsername}`,
      {
        next: { revalidate: 3600 },
      }
    )

    if (res.ok) {
      const data = await res.json()
      const rawList = data?.contributions || (Array.isArray(data) ? data : [])
      if (Array.isArray(rawList) && rawList.length > 0) {
        return rawList.map((item: any) => ({
          date: item.date,
          count: item.count ?? 0,
          level: item.level ?? (item.count > 0 ? 1 : 0),
        }))
      }
    }
  } catch (err) {
    console.warn("Secondary GitHub contributions fetch error:", err)
  }

  // 3. Last fallback (in case both external APIs are unreachable)
  return generateFallbackContributions()
}

function generateFallbackContributions(): Activity[] {
  const activities: Activity[] = []
  const today = new Date()
  const days = 365

  for (let i = days; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const dateStr = d.toISOString().split("T")[0] as string

    const isWeekend = d.getDay() === 0 || d.getDay() === 6
    const pseudoRandom = (d.getDate() * 13 + d.getMonth() * 7) % 10
    const count = isWeekend ? (pseudoRandom > 7 ? 2 : 0) : pseudoRandom > 3 ? pseudoRandom % 5 : 0
    let level = 0
    if (count > 0 && count <= 2) level = 1
    else if (count > 2 && count <= 4) level = 2
    else if (count > 4 && count <= 7) level = 3
    else if (count > 7) level = 4

    activities.push({
      date: dateStr,
      count,
      level,
    })
  }

  return activities
}
