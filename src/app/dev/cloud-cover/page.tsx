import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloud Cover — Santa Barbara',
  description: 'Live cloud cover dashboard for Santa Barbara, CA.',
}

// --- Types ---

interface SourceDetails {
  [key: string]: number | string
}

interface Source {
  name: string
  cloud_cover_pct: number
  weight: number
  details: SourceDetails | null
}

interface SatelliteImage {
  crop_base64: string
  content_type: string
  crop_box: number[]
}

interface DashboardData {
  location: string
  latitude: number
  longitude: number
  timestamp: string
  estimate: {
    cloud_cover_pct: number
    confidence: 'high' | 'medium' | 'low'
    sources_used: number
    sources_failed: string[]
  }
  sources: Source[]
  satellite_image: SatelliteImage | null
}

// --- Mock Data ---

const MOCK_DATA: DashboardData = {
  location: 'Santa Barbara, CA',
  latitude: 34.414658,
  longitude: -119.780039,
  timestamp: '2026-04-13T18:30:00Z',
  estimate: {
    cloud_cover_pct: 72.3,
    confidence: 'high',
    sources_used: 3,
    sources_failed: [],
  },
  sources: [
    {
      name: 'open_meteo',
      cloud_cover_pct: 68.0,
      weight: 0.50,
      details: { low: 45, mid: 60, high: 72 },
    },
    {
      name: 'nws',
      cloud_cover_pct: 75.0,
      weight: 0.30,
      details: null,
    },
    {
      name: 'satellite',
      cloud_cover_pct: 80.0,
      weight: 0.20,
      details: { avg_brightness: 142.3, threshold: 130 },
    },
  ],
  satellite_image: null,
}

// --- Data Fetching ---

async function getData(): Promise<{ data: DashboardData; isMock: boolean }> {
  const apiUrl = process.env.CLOUD_COVER_API_URL
  const apiKey = process.env.CLOUD_COVER_API_KEY

  if (apiUrl && apiKey) {
    try {
      const res = await fetch(`${apiUrl}/dashboard/data`, {
        headers: { 'X-API-Key': apiKey },
        next: { revalidate: 300 },
      })
      if (!res.ok) throw new Error(`API returned ${res.status}`)
      const data: DashboardData = await res.json()
      return { data, isMock: false }
    } catch {
      return { data: MOCK_DATA, isMock: true }
    }
  }

  return { data: MOCK_DATA, isMock: true }
}

// --- Display Helpers ---

const SOURCE_CONFIG: Record<string, { label: string; color: string }> = {
  open_meteo: { label: 'Open-Meteo', color: '#3b82f6' },
  nws: { label: 'NWS', color: '#8b5cf6' },
  satellite: { label: 'Satellite', color: '#10b981' },
}

const CONFIDENCE_STYLE: Record<string, { bg: string; text: string }> = {
  high: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-400' },
  medium: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-400' },
  low: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-400' },
}

function formatTimestamp(iso: string): string {
  return new Date(iso).toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  })
}

// --- Page ---

export default async function CloudCoverPage() {
  const { data, isMock } = await getData()
  const { estimate, sources, satellite_image } = data
  const conf = CONFIDENCE_STYLE[estimate.confidence]

  return (
    <div className="pt-4">
      <h1 className="mb-1 text-xl font-bold tracking-tight">
        ☁️ Cloud Cover
      </h1>
      <p className="mb-8 text-xs text-neutral-400">
        {data.location} — {data.latitude.toFixed(4)}°N, {Math.abs(data.longitude).toFixed(4)}°W
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_280px]">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          {/* Big number + confidence */}
          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-bold tabular-nums tracking-tight">
              {estimate.cloud_cover_pct.toFixed(1)}%
            </span>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${conf.bg} ${conf.text}`}
            >
              {estimate.confidence} confidence
            </span>
          </div>

          {/* Source bars */}
          <div className="flex flex-col gap-4">
            {sources.map((src) => {
              const cfg = SOURCE_CONFIG[src.name] ?? {
                label: src.name,
                color: '#6b7280',
              }
              const weightPct = (src.weight * 100).toFixed(0)

              return (
                <div key={src.name} className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium">{cfg.label}</span>
                    <span className="text-neutral-500 dark:text-neutral-400">
                      {src.cloud_cover_pct.toFixed(1)}% · {weightPct}% weight
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${src.cloud_cover_pct}%`,
                        backgroundColor: cfg.color,
                      }}
                    />
                  </div>
                  {src.details && (
                    <div className="flex gap-2 text-[10px] text-neutral-400">
                      {Object.entries(src.details).map(([k, v]) => (
                        <span key={k}>
                          {k}: {typeof v === 'number' ? v.toFixed(1) : v}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Right column — satellite image */}
        <div className="flex flex-col gap-2">
          {satellite_image?.crop_base64 ? (
            <img
              src={`data:${satellite_image.content_type};base64,${satellite_image.crop_base64}`}
              alt="Satellite view of Santa Barbara cloud cover"
              className="w-full rounded-xl"
            />
          ) : (
            <div className="flex aspect-square w-full items-center justify-center rounded-xl border-2 border-dashed border-neutral-300 dark:border-neutral-700">
              <span className="text-xs text-neutral-400">
                Satellite image unavailable
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center gap-2 text-[11px] text-neutral-400">
        <span>{formatTimestamp(data.timestamp)}</span>
        {isMock && (
          <span className="rounded-full bg-neutral-100 px-2 py-0.5 font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
            mock data
          </span>
        )}
        <span>· {estimate.sources_used} sources</span>
      </div>
    </div>
  )
}
