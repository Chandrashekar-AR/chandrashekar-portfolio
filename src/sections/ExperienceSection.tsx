import { useState } from 'react'
import { MapPin } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { BRANDSHARK_EXPERIENCE, ADMITRA_EXPERIENCE } from '../config/experience'
import type { ExperienceCard } from '../config/experience'

/**
 * Journey section — two experience cards (Brandshark | AdMitra).
 * Copy is sourced verbatim from the resume (src/config/experience.ts);
 * logos and campaign artwork live in that same config file.
 */

/* Literal class strings so Tailwind's JIT picks every one of them up. */
const ACCENT = {
  yellow: {
    card:
      'border-[#FBBF24]/25 shadow-[0_0_50px_rgba(251,191,36,0.08)] hover:border-[#FBBF24]/55 hover:shadow-[0_0_60px_rgba(251,191,36,0.16)]',
    wash: 'bg-[radial-gradient(120%_120%_at_10%_0%,rgba(251,191,36,0.12),transparent_62%)]',
    tile: 'border-[#FBBF24]/40 bg-[#FBBF24]/10',
    tileText: 'text-[#FDE047]',
    dot: 'bg-[#FBBF24] shadow-[0_0_10px_rgba(251,191,36,0.75)]',
    dotSoft: 'bg-[#FBBF24]/45',
    rail: 'from-[#FBBF24]/70 via-[#FBBF24]/25',
    bullet: 'bg-[#FBBF24] shadow-[0_0_8px_rgba(251,191,36,0.7)]',
    metric: 'font-semibold text-[#FDE047]',
    pill: 'border-[#FBBF24]/30 bg-[#FBBF24]/10 text-[#FDE68A]',
    resource: 'border-[#FBBF24]/35 bg-[#0C0C0C]',
    resourceHover:
      'hover:border-[#FBBF24]/75 hover:bg-[#FBBF24]/[0.08] hover:shadow-[0_0_22px_-6px_rgba(251,191,36,0.55)]',
    resourceIcon: 'text-[#FDE047]',
    resourceLabel: 'text-[#FDE68A]',
  },
  blue: {
    card:
      'border-[#3B82F6]/25 shadow-[0_0_50px_rgba(59,130,246,0.07)] hover:border-[#3B82F6]/55 hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]',
    wash: 'bg-[radial-gradient(120%_120%_at_10%_0%,rgba(59,130,246,0.12),transparent_62%)]',
    tile: 'border-[#3B82F6]/40 bg-[#3B82F6]/10',
    tileText: 'text-[#93C5FD]',
    dot: 'bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.75)]',
    dotSoft: 'bg-[#3B82F6]/45',
    rail: 'from-[#3B82F6]/70 via-[#3B82F6]/25',
    bullet: 'bg-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.7)]',
    metric: 'font-semibold text-[#93C5FD]',
    pill: 'border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#93C5FD]',
    resource: 'border-[#3B82F6]/35 bg-[#0C0C0C]',
    resourceHover:
      'hover:border-[#3B82F6]/75 hover:bg-[#3B82F6]/[0.08] hover:shadow-[0_0_22px_-6px_rgba(59,130,246,0.5)]',
    resourceIcon: 'text-[#93C5FD]',
    resourceLabel: 'text-[#BFDBFE]',
  },
} as const

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Splits a resume bullet into tokens, accenting metrics and emphasis words. */
function HighlightText({ card, text }: { card: ExperienceCard; text: string }) {
  const accent = ACCENT[card.accent]
  const words = card.emphasis ?? []
  const pattern = new RegExp(`(${[...words.map(escapeRegex), '\\d+\\+'].join('|')})`, 'g')

  return (
    <>
      {text.split(pattern).map((part, index) => {
        if (/^\d+\+$/.test(part)) {
          return (
            <span key={index} className={accent.metric}>
              {part}
            </span>
          )
        }
        if (words.includes(part)) {
          return (
            <span key={index} className="font-medium text-[#D7E2EA]">
              {part}
            </span>
          )
        }
        return <span key={index}>{part}</span>
      })}
    </>
  )
}

/** Company identity: logo (or monogram fallback) + name + location. */
function CardIdentity({ card }: { card: ExperienceCard }) {
  const accent = ACCENT[card.accent]
  const [logoOk, setLogoOk] = useState(true)
  const showLogo = Boolean(card.logoUrl) && logoOk

  return (
    <header className="relative z-10 flex items-start gap-3 sm:gap-4">
      <div
        className={`relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border-2 sm:h-14 sm:w-14 ${accent.tile}`}
      >
        <span className={`text-lg font-black uppercase sm:text-xl ${accent.tileText}`}>
          {card.monogram}
        </span>
        {showLogo && (
          <img
            src={card.logoUrl}
            alt={`${card.company} logo`}
            onError={() => setLogoOk(false)}
            className="absolute inset-0 h-full w-full bg-[#0C0C0C] object-contain p-1.5"
          />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h3
          className="hero-heading font-black uppercase leading-[0.95]"
          style={{ fontSize: 'clamp(1.35rem, 3vw, 2.15rem)' }}
        >
          {card.company}
        </h3>
        <p className="mt-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#D7E2EA]/45 sm:text-[11px]">
          <MapPin size={11} className="shrink-0" aria-hidden="true" />
          {card.location}
        </p>
      </div>
    </header>
  )
}

/** Compact client / brand strip pinned to the bottom of a card. */
function ClientStrip({ card }: { card: ExperienceCard }) {
  const accent = ACCENT[card.accent]
  if (!card.clients || card.clients.length === 0) return null

  return (
    <footer className="relative z-10 mt-6 border-t border-[#D7E2EA]/10 pt-4 sm:pt-5">
      <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7E2EA]/40">
        Clients
      </span>
      <ul className="mt-3 flex flex-wrap gap-2">
        {card.clients.map((client) => (
          <li
            key={client}
            className={`rounded-full border px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-wider sm:text-[10px] ${accent.pill}`}
          >
            {client}
          </li>
        ))}
      </ul>
    </footer>
  )
}

/**
 * Resource buttons (Brandshark) — gold accents from the card's accent set.
 * A configured url renders a new-tab link; an empty url renders a
 * non-clickable "LINK COMING SOON" state (never a placeholder destination).
 */
function ResourceButtons({ card }: { card: ExperienceCard }) {
  const accent = ACCENT[card.accent]
  const resources = card.resources ?? []
  if (resources.length === 0) return null

  /* Shared shell — labels are short, so both buttons sit side by side on
     desktop and wrap to a clean stack only when the card gets narrow. */
  const shell =
    'flex min-w-0 basis-[152px] flex-1 items-center gap-2 rounded-xl border px-3.5 py-2.5'

  return (
    <div className="relative z-10 mt-5 flex flex-wrap gap-2.5 sm:gap-3">
      {resources.map(({ label, url, icon: Icon }) => {
        const isLive = url.trim().length > 0

        if (isLive) {
          return (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} — opens in a new tab`}
              className={`${shell} ${accent.resource} ${accent.resourceHover} transition-[border-color,background-color,box-shadow] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBBF24]`}
            >
              <Icon
                aria-hidden="true"
                strokeWidth={2}
                className={`h-3.5 w-3.5 shrink-0 ${accent.resourceIcon}`}
              />
              <span
                className={`truncate font-mono text-[10px] font-bold uppercase tracking-[0.2em] sm:text-[11px] ${accent.resourceLabel}`}
              >
                {label}
              </span>
            </a>
          )
        }

        return (
          <span
            key={label}
            aria-disabled="true"
            className={`${shell} cursor-default border-[#D7E2EA]/12 bg-[#0C0C0C]/60 opacity-60`}
          >
            <Icon aria-hidden="true" strokeWidth={2} className="h-3.5 w-3.5 shrink-0 text-[#D7E2EA]/40" />
            <span className="truncate font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#D7E2EA]/60 sm:text-[11px]">
              {label}
            </span>
            <span className="ml-auto hidden shrink-0 font-mono text-[8px] uppercase tracking-[0.15em] text-[#D7E2EA]/35 sm:inline">
              Link coming soon
            </span>
          </span>
        )
      })}
    </div>
  )
}

/** Left card body — employment + achievements as a vertical timeline. */
function TimelineBody({ card }: { card: ExperienceCard }) {
  const accent = ACCENT[card.accent]

  return (
    <div className="relative mt-6">
      <span
        aria-hidden="true"
        className={`absolute bottom-3 left-[6px] top-3 w-px bg-gradient-to-b to-transparent ${accent.rail}`}
      />

      <ol className="relative flex flex-col gap-6 sm:gap-7">
        {/* Employment node */}
        <li className="relative pl-6 sm:pl-7">
          <span
            aria-hidden="true"
            className={`absolute left-0 top-1.5 h-3 w-3 rounded-full ${accent.dot}`}
          />
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#D7E2EA] sm:text-base">
              {card.role}
            </h4>
            {card.status === 'current' && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/5 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-green-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 motion-reduce:animate-none" />
                Active
              </span>
            )}
          </div>
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-[#D7E2EA]/45 sm:text-[11px]">
            {card.period}
          </p>
        </li>

        {/* Achievement nodes */}
        {card.highlights.map((highlight, index) => (
          <li key={index} className="relative pl-6 sm:pl-7">
            <span
              aria-hidden="true"
              className={`absolute left-[1px] top-[5px] h-2 w-2 rounded-full ${accent.dotSoft}`}
            />
            <p className="text-[13px] font-light leading-relaxed text-[#D7E2EA]/65 sm:text-sm">
              <HighlightText card={card} text={highlight} />
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}

/** Right card body — highlights column (+ optional gallery) + client badges. */
function HighlightsGalleryBody({ card }: { card: ExperienceCard }) {
  const accent = ACCENT[card.accent]
  const gallery = card.gallery ?? []
  const hasGallery = gallery.length > 0

  return (
    <>
      {/* Role + tenure */}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-sm font-semibold uppercase tracking-wide text-[#D7E2EA] sm:text-base">
          {card.role}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7E2EA]/45 sm:text-[11px]">
          {card.period}
        </span>
      </div>

      <div
        className={`mt-5 flex flex-col gap-6 ${hasGallery ? 'xl:flex-row xl:gap-5' : ''}`}
      >
        {/* Experience highlights — readable text column */}
        <div className="min-w-0 flex-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7E2EA]/40">
            Experience Highlights
          </span>
          <ul className="mt-3 flex flex-col gap-3.5">
            {card.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${accent.bullet}`}
                />
                <p className="text-[13px] font-light leading-relaxed text-[#D7E2EA]/65 sm:text-sm">
                  <HighlightText card={card} text={highlight} />
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Campaign visual gallery — rendered only when the card has one */}
        {hasGallery && (
          <div className="w-full shrink-0 xl:w-[44%]">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#D7E2EA]/40">
              Campaign Visuals
            </span>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-2.5">
              {gallery.map((item) => (
                <figure
                  key={item.brand}
                  className="group/tile relative aspect-[4/3] overflow-hidden rounded-[16px] border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.04]"
                >
                  {item.imageUrl.trim().length > 0 && (
                    <img
                      src={item.imageUrl}
                      alt={`${item.brand} campaign visual`}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none'
                      }}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/tile:scale-105 motion-reduce:group-hover/tile:scale-100"
                    />
                  )}
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-2.5 pb-1.5 pt-5 font-mono text-[8px] uppercase tracking-wider text-[#D7E2EA]/85 sm:text-[9px]">
                    {item.brand}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none"
            style={{
              fontSize: 'clamp(1.75rem, 5.5vw, 80px)',
              background: 'linear-gradient(180deg, #FEFCE8 0%, #FEF9C3 25%, #FDE047 50%, #FBBF24 75%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Journey
          </h2>
        </FadeIn>

        {/* Two experience cards — Brandshark (yellow) | AdMitra (blue) */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2">
          {[
            { card: BRANDSHARK_EXPERIENCE, body: 'timeline' as const, delay: 0.1 },
            { card: ADMITRA_EXPERIENCE, body: 'gallery' as const, delay: 0.2 },
          ].map(({ card, body, delay }) => {
            const accent = ACCENT[card.accent]

            return (
              <FadeIn key={card.id} delay={delay} y={30} className="h-full">
                <article
                  aria-label={`${card.company} — ${card.role}`}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[30px] border-2 bg-[#0C0C0C] p-6 transition-[border-color,box-shadow] duration-300 ease-out sm:p-8 ${accent.card}`}
                >
                  {/* Subtle ambient wash in the card's accent colour */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 ${accent.wash}`}
                  />

                  <CardIdentity card={card} />

                  <div className="relative z-10 mt-5 flex-1 border-t border-[#D7E2EA]/10 pt-5">
                    {body === 'timeline' ? (
                      <TimelineBody card={card} />
                    ) : (
                      <HighlightsGalleryBody card={card} />
                    )}
                  </div>

                  {/* Resource links (Brandshark only — sits in the slack
                      above the pinned CLIENTS strip) */}
                  <ResourceButtons card={card} />

                  <ClientStrip card={card} />
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
