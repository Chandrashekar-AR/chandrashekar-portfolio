import { useEffect } from 'react'
import { ExternalLink, Film, Play } from 'lucide-react'
import { MONTRA_VIDEO_PROJECT } from '../config/videoShowcase'
import type { ShowcaseAccent, VideoProject } from '../config/videoShowcase'

/* ────────────────────────────────────────────────────────────────────────
 *  ACCENT TOKENS
 *  Every value is a literal Tailwind class string so the JIT compiler picks
 *  it up. The card layout never changes — only these colours do, which is
 *  what keeps the purple Lincoln card pixel-identical to the cyan Montra one.
 * ──────────────────────────────────────────────────────────────────────── */
interface AccentTokens {
  /** Outer card border + ambient glow */
  card: string
  /** Category label in the card header */
  category: string
  /** "Watch Film" pill (default / hover) */
  watch: string
  /** "Watch Film" pill when no video link is configured */
  watchDisabled: string
  /** Thumbnail frame border (rest / hover) */
  frame: string
  /** Thumbnail hover glow */
  frameGlow: string
  /** Live dot on the thumbnail chip */
  dot: string
  /** Resolution chip border + text */
  chip: string
  /** Circular play button (rest / hover glow) */
  play: string
  playHover: string
  /** Pulse ring behind the play button */
  playRing: string
  playIcon: string
  /** Keyboard focus ring on the thumbnail link */
  focus: string
  /** Eyebrow rule + text */
  eyebrowRule: string
  eyebrow: string
  /** Highlighted word inside the title (class + fill colour) */
  titleWord: string
  titleWordColor: string
  /** Role panel */
  rolePanel: string
  roleIcon: string
  roleLabel: string
}

const ACCENTS: Record<ShowcaseAccent, AccentTokens> = {
  cyan: {
    card: 'border-cyan-400/30 shadow-[0_0_80px_rgba(34,211,238,0.06)]',
    category: 'text-cyan-400/90',
    watch:
      'border-cyan-400/50 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]',
    watchDisabled: 'border-cyan-400/25 text-cyan-300/50',
    frame: 'border-cyan-400/25 group-hover:border-cyan-400/70',
    frameGlow: 'group-hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]',
    dot: 'bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.7)]',
    chip: 'border-cyan-400/30 text-cyan-300',
    play:
      'border-cyan-400/70 bg-cyan-400/15 shadow-[0_0_25px_rgba(34,211,238,0.45)]',
    playHover:
      'group-hover:bg-cyan-400/30 group-hover:shadow-[0_0_45px_rgba(34,211,238,0.75)]',
    playRing: 'border-cyan-400/40',
    playIcon: 'fill-cyan-50 text-cyan-50',
    focus: 'focus-visible:outline-cyan-400',
    eyebrowRule: 'bg-cyan-400/50',
    eyebrow: 'text-cyan-400',
    titleWord: 'text-cyan-400',
    titleWordColor: '#06b6d4',
    rolePanel: 'border-cyan-400/30 bg-cyan-400/[0.07]',
    roleIcon:
      'border-cyan-400/50 text-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.25)]',
    roleLabel: 'text-cyan-400/80',
  },
  purple: {
    card: 'border-purple-400/30 shadow-[0_0_80px_rgba(192,132,252,0.06)]',
    category: 'text-purple-400/90',
    watch:
      'border-purple-400/50 bg-purple-400/10 text-purple-300 hover:bg-purple-400 hover:text-black hover:shadow-[0_0_30px_rgba(192,132,252,0.45)]',
    watchDisabled: 'border-purple-400/25 text-purple-300/50',
    frame: 'border-purple-400/25 group-hover:border-purple-400/70',
    frameGlow: 'group-hover:shadow-[0_0_40px_rgba(192,132,252,0.15)]',
    dot: 'bg-purple-400 shadow-[0_0_10px_2px_rgba(192,132,252,0.7)]',
    chip: 'border-purple-400/30 text-purple-300',
    play:
      'border-purple-400/70 bg-purple-400/15 shadow-[0_0_25px_rgba(192,132,252,0.45)]',
    playHover:
      'group-hover:bg-purple-400/30 group-hover:shadow-[0_0_45px_rgba(192,132,252,0.75)]',
    playRing: 'border-purple-400/40',
    playIcon: 'fill-purple-50 text-purple-50',
    focus: 'focus-visible:outline-purple-400',
    eyebrowRule: 'bg-purple-400/50',
    eyebrow: 'text-purple-400',
    titleWord: 'text-purple-400',
    titleWordColor: '#c084fc',
    rolePanel: 'border-purple-400/30 bg-purple-400/[0.07]',
    roleIcon:
      'border-purple-400/50 text-purple-400 shadow-[0_0_18px_rgba(192,132,252,0.25)]',
    roleLabel: 'text-purple-400/80',
  },
  magenta: {
    card: 'border-[#EC4899]/30 shadow-[0_0_80px_rgba(236,72,153,0.06)]',
    category: 'text-[#EC4899]/90',
    watch:
      'border-[#EC4899]/50 bg-[#EC4899]/10 text-[#F9A8D4] hover:bg-[#EC4899] hover:text-black hover:shadow-[0_0_30px_rgba(236,72,153,0.45)]',
    watchDisabled: 'border-[#EC4899]/25 text-[#F9A8D4]/50',
    frame: 'border-[#EC4899]/25 group-hover:border-[#EC4899]/70',
    frameGlow: 'group-hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]',
    dot: 'bg-[#EC4899] shadow-[0_0_10px_2px_rgba(236,72,153,0.7)]',
    chip: 'border-[#EC4899]/30 text-[#F9A8D4]',
    play:
      'border-[#EC4899]/70 bg-[#EC4899]/15 shadow-[0_0_25px_rgba(236,72,153,0.45)]',
    playHover:
      'group-hover:bg-[#EC4899]/30 group-hover:shadow-[0_0_45px_rgba(236,72,153,0.75)]',
    playRing: 'border-[#EC4899]/40',
    playIcon: 'fill-pink-100 text-pink-100',
    focus: 'focus-visible:outline-[#EC4899]',
    eyebrowRule: 'bg-[#EC4899]/50',
    eyebrow: 'text-[#EC4899]',
    titleWord: 'text-[#EC4899]',
    titleWordColor: '#ec4899',
    rolePanel: 'border-[#EC4899]/30 bg-[#EC4899]/[0.07]',
    roleIcon:
      'border-[#EC4899]/50 text-[#EC4899] shadow-[0_0_18px_rgba(236,72,153,0.25)]',
    roleLabel: 'text-[#EC4899]/80',
  },
}

/** Renders the project title with the configured word in the card accent. */
function TitleHighlight({
  text,
  highlight,
  color,
  className,
}: {
  text: string
  highlight?: string
  color: string
  className: string
}) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>

  const [before, after] = text.split(highlight)
  return (
    <>
      {before}
      <span className={className} style={{ WebkitTextFillColor: color }}>
        {highlight}
      </span>
      {after}
    </>
  )
}

interface VideoShowcaseCardProps {
  /** Project to render — defaults to the featured 04 card. */
  project?: VideoProject
}

export default function VideoShowcaseCard({ project = MONTRA_VIDEO_PROJECT }: VideoShowcaseCardProps) {
  const { thumbnailUrl, videoUrl, details } = project
  const t = ACCENTS[project.accent ?? 'cyan']
  const isPlayable = videoUrl.trim().length > 0
  const hasThumbnail = thumbnailUrl.trim().length > 0
  const role = details.find((detail) => detail.accent)
  const projectDetails = details.filter((detail) => !detail.accent)
  const resolution = projectDetails.find((detail) => detail.label === 'Resolution')

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

  const frameBase = `relative w-full overflow-hidden rounded-[24px] border ${t.frame} bg-[#050505] transition-all duration-500 sm:rounded-[32px] md:rounded-[40px]`

  const frameImg = (
    <img
      src={thumbnailUrl}
      alt={`${project.title} — video thumbnail`}
      loading="lazy"
      onError={(event) => {
        event.currentTarget.style.display = 'none'
      }}
      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    />
  )

  /* ── Single 16:9 video thumbnail (left column) ── */
  const videoFrame = (
    <div className={`${frameBase} aspect-video ${t.frameGlow}`}>
      {hasThumbnail && frameImg}

      {/* Cinematic scrim so the play button and labels stay legible on any frame */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

      {/* Playable cue — top left */}
      <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 backdrop-blur-md sm:left-4 sm:top-4">
        <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${t.dot}`} />
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#D7E2EA]/85 sm:text-[10px]">
          Play film
        </span>
      </span>

      {/* Resolution cue — bottom right */}
      {resolution && (
        <span className={`absolute bottom-3 right-3 rounded-full border ${t.chip} bg-black/50 px-3 py-1.5 backdrop-blur-md sm:bottom-4 sm:right-4`}>
          <span className="font-mono text-[9px] uppercase tracking-widest sm:text-[10px]">
            {resolution.value}
          </span>
        </span>
      )}

      {/* Circular accent play button — centered in the thumbnail */}
      <span
        className={`pointer-events-none absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 backdrop-blur-md transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14 md:h-16 md:w-16 ${t.play} ${t.playHover}`}
      >
        <span className={`video-pulse-ring absolute -inset-2 rounded-full border ${t.playRing}`} />
        <Play
          className={`relative h-4 w-4 translate-x-[1px] sm:h-5 sm:w-5 md:h-6 md:w-6 ${t.playIcon}`}
          strokeWidth={2.5}
        />
      </span>
    </div>
  )

  return (
    <div>
      <div
        className={`rounded-[40px] border-2 bg-[#0C0C0C] p-4 overflow-hidden sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8 ${t.card}`}
      >
        {/* Top row — mirrors the other project cards */}
        <div className="mb-4 flex flex-wrap items-start justify-between gap-4 sm:mb-6 sm:flex-nowrap">
          <h3
            className="hero-heading font-black leading-none flex-shrink-0"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            {project.number}
          </h3>

          <div className="flex min-w-0 flex-col gap-1 pt-2 sm:pt-4">
            <span className={`font-mono text-xs uppercase tracking-widest font-light sm:text-sm ${t.category}`}>
              {project.category}
            </span>
            <span
              className="truncate font-medium uppercase text-[#D7E2EA]"
              style={{ fontSize: 'clamp(0.9rem, 2vw, 1.5rem)' }}
            >
              {project.shortName}
            </span>
          </div>

          <div className="hidden pt-2 sm:block sm:pt-4">
            {isPlayable ? (
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/watch inline-flex flex-shrink-0 cursor-pointer items-center gap-2 rounded-full border px-8 py-3.5 font-mono text-xs uppercase tracking-widest transition-all duration-300 sm:px-10 sm:text-sm ${t.watch}`}
              >
                Watch Film
                <ExternalLink
                  size={14}
                  className="transition-transform duration-300 group-hover/watch:-translate-y-0.5 group-hover/watch:translate-x-0.5"
                />
              </a>
            ) : (
              <span className={`inline-flex flex-shrink-0 items-center gap-2 rounded-full border px-8 py-3.5 font-mono text-xs uppercase tracking-widest sm:px-10 sm:text-sm ${t.watchDisabled}`}>
                Watch Film
              </span>
            )}
          </div>
        </div>

        {/* Video (left — 40%, single 16:9 thumbnail) + details (right — 60%) */}
        <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-center md:gap-6 lg:gap-8">
          {isPlayable ? (
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Play ${project.title} — opens in a new tab`}
              className={`group block w-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 md:w-[40%] md:flex-shrink-0 ${t.focus}`}
            >
              {videoFrame}
            </a>
          ) : (
            <div className="group block w-full md:w-[40%] md:flex-shrink-0">
              {videoFrame}
            </div>
          )}

          <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <span className={`h-px w-8 sm:w-10 ${t.eyebrowRule}`} />
              <span className={`font-mono text-[10px] uppercase tracking-[0.3em] sm:text-[11px] ${t.eyebrow}`}>
                {project.kicker}
              </span>
            </div>

            <h3
              className="hero-heading font-black uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
            >
              <TitleHighlight
                text={project.title}
                highlight={project.titleHighlight}
                color={t.titleWordColor}
                className={t.titleWord}
              />
            </h3>

            <p
              className="max-w-xl font-light leading-relaxed text-[#D7E2EA]/65"
              style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)' }}
            >
              {project.description}
            </p>

            {/* Project details */}
            <div className="mt-1 grid grid-cols-3 gap-3 border-t border-[#D7E2EA]/10 pt-4 sm:gap-4 sm:pt-5">
              {projectDetails.map((detail) => (
                <div key={detail.label} className="flex min-w-0 flex-col gap-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#D7E2EA]/40 sm:text-[10px]">
                    {detail.label}
                  </span>
                  <span className="text-[13px] font-medium leading-snug text-[#D7E2EA] sm:text-sm">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Role */}
            {role && (
              <div className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${t.rolePanel}`}>
                <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border ${t.roleIcon}`}>
                  <Film size={15} />
                </span>
                <div className="min-w-0">
                  <span className={`block font-mono text-[9px] uppercase tracking-widest sm:text-[10px] ${t.roleLabel}`}>
                    {role.label}
                  </span>
                  <span className="block truncate text-[13px] font-semibold text-[#D7E2EA] sm:text-sm">
                    {role.value}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
