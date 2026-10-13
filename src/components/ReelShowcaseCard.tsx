import { useEffect } from 'react'
import { Play } from 'lucide-react'
import type { VideoProject } from '../config/videoShowcase'

/**
 * Card layout "reel" — the third project card.
 *
 * Left: eyebrow → oversized headline → hairline rule → two big metrics →
 *       description with a magenta accent line.
 * Right: one tall 9:16 campaign visual with a LIVE_STATS chip, a play button
 *       and dashboard overlays built as separate DOM elements (never baked
 *       into the image).
 *
 * Every value comes from src/config/videoShowcase.ts — no hardcoded copy.
 * Type, mono labels, radii and padding follow the existing card conventions.
 */
export default function ReelShowcaseCard({ project }: { project: VideoProject }) {
  const { thumbnailUrl, videoUrl, details, stats = [], headlineLead, headlineTail } = project

  const isPlayable = videoUrl.trim().length > 0
  const hasThumbnail = thumbnailUrl.trim().length > 0

  // Reference-provided overlays: the retention row owns the progress bar.
  const retention = stats.find((stat) => stat.percent !== undefined)
  const gridStats = stats.filter((stat) => stat.percent === undefined)

  // Dev-only nudge so the two editable links never ship empty by accident.
  useEffect(() => {
    if (!import.meta.env.DEV) return
    const missing: string[] = []
    if (!hasThumbnail) missing.push('thumbnailUrl')
    if (!isPlayable) missing.push('videoUrl')
    if (missing.length > 0) {
      console.warn(
        `[videoShowcase:${project.number}] Missing link(s): ${missing.join(', ')} — paste them in src/config/videoShowcase.ts`,
      )
    }
  }, [hasThumbnail, isPlayable, project.number])

  /* ── Vertical 9:16 campaign visual (right panel) ── */
  const visual = (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[26px] border border-[#D7E2EA]/15 bg-[#050505] transition-colors duration-500 group-hover:border-[#D7E2EA]/30">
      {hasThumbnail && (
        <img
          src={thumbnailUrl}
          alt={`${project.title} — campaign thumbnail`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      )}

      {/* Scrim so the chip, play button and overlays stay legible on any frame */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/55" />

      {/* LIVE_STATS chip — top centre */}
      <span className="absolute left-1/2 top-3 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 backdrop-blur-md">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#EC4899] shadow-[0_0_8px_2px_rgba(236,72,153,0.7)] motion-reduce:animate-none" />
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#D7E2EA]/85">
          Live_Stats
        </span>
      </span>

      {/* Circular accent play button — centred (only when a video is configured) */}
      {isPlayable && (
        <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#EC4899]/70 bg-[#EC4899]/15 shadow-[0_0_25px_rgba(236,72,153,0.45)] backdrop-blur-md transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
          <span className="video-pulse-ring absolute -inset-2 rounded-full border border-[#EC4899]/40" />
          <Play className="relative h-4 w-4 translate-x-[1px] fill-pink-100 text-pink-100 sm:h-5 sm:w-5" strokeWidth={2.5} />
        </span>
      )}

      {/* Performance dashboard overlay — separate UI elements */}
      {stats.length > 0 && (
        <div className="absolute inset-x-2.5 bottom-2.5 rounded-2xl border border-white/10 bg-black/60 p-3 backdrop-blur-md">
          {retention && (
            <div>
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#D7E2EA]/45 sm:text-[9px]">
                  {retention.label}
                </span>
                <span className="text-[13px] font-bold leading-none text-white sm:text-sm">
                  {retention.value}
                </span>
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#EC4899]"
                  style={{ width: `${retention.percent}%` }}
                />
              </div>
            </div>
          )}

          {gridStats.length > 0 && (
            <div
              className={`grid grid-cols-3 gap-2 border-t border-white/10 pt-2.5 ${
                retention ? 'mt-3' : ''
              }`}
            >
              {gridStats.map((stat) => (
                <div key={stat.label} className="flex min-w-0 flex-col gap-1">
                  <span className="truncate font-mono text-[8px] uppercase tracking-[0.15em] text-[#D7E2EA]/45 sm:text-[9px]">
                    {stat.label}
                  </span>
                  <span className="text-[12px] font-bold leading-none text-white sm:text-[13px]">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )

  return (
    <article className="overflow-hidden rounded-[40px] border-2 border-[#D7E2EA]/15 bg-[#0C0C0C] p-4 transition-colors duration-300 hover:border-[#D7E2EA]/35 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8">
      <div className="flex flex-col gap-7 md:flex-row md:items-stretch md:gap-0">
        {/* ── LEFT — project information ── */}
        <div className="min-w-0 flex-1 md:pr-7 lg:pr-10">
          {/* Eyebrow */}
          <span className="inline-flex items-center rounded-full border border-[#EC4899]/50 px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#F9A8D4] sm:text-[10px]">
            {project.kicker}
          </span>

          {/* Headline — lead in white, tail in muted grey */}
          <h3
            className="mt-5 font-black uppercase leading-[0.92] tracking-tight sm:mt-7"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 3.25rem)' }}
          >
            <span className="block text-white">{headlineLead}</span>
            <span className="block text-[#D7E2EA]/40">{headlineTail}</span>
          </h3>

          {/* Hairline rule */}
          <div className="mt-5 h-px w-full bg-[#D7E2EA]/15 sm:mt-6" />

          {/* Metrics — two equal columns */}
          <div className="mt-5 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6">
            {details.map((detail) => (
              <div key={detail.label} className="flex min-w-0 flex-col gap-1.5">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#D7E2EA]/45 sm:text-[10px]">
                  {detail.label}
                </span>
                <span
                  className="font-black leading-none text-white"
                  style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.5rem)' }}
                >
                  {detail.value}
                </span>
              </div>
            ))}
          </div>

          {/* Description with magenta accent line */}
          <div className="mt-6 border-l-2 border-[#EC4899] pl-4 sm:mt-7 sm:pl-5">
            <p
              className="max-w-xl font-light leading-relaxed text-[#D7E2EA]/60"
              style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1rem)' }}
            >
              {project.description}
            </p>
          </div>
        </div>

        {/* Thin vertical divider between the two panels */}
        <span
          aria-hidden="true"
          className="hidden w-px shrink-0 self-stretch bg-[#D7E2EA]/15 md:mx-7 md:block lg:mx-10"
        />

        {/* ── RIGHT — vertical campaign visual ── */}
        <div className="flex shrink-0 flex-col items-center justify-center md:w-[252px] lg:w-[300px]">
          <div className="w-full max-w-[300px]">
            {isPlayable ? (
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Play ${project.title} — opens in a new tab`}
                className="group block w-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EC4899]"
              >
                {visual}
              </a>
            ) : (
              <div className="group block w-full">{visual}</div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
