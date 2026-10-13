import { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { GOOGLE_AI_CREDENTIAL } from '../config/featuredCredential'
import type { FeaturedCredential } from '../config/featuredCredential'

/** Official Google "G" mark (same 4-colour paths used elsewhere in this portfolio). */
function GoogleLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.67-.35-1.37-.35-2.09z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  )
}

interface GoogleCredentialCardProps {
  /** Credential to render — defaults to the Google AI Professional Certificate. */
  credential?: FeaturedCredential
}

export default function GoogleCredentialCard({ credential = GOOGLE_AI_CREDENTIAL }: GoogleCredentialCardProps) {
  const { issuer, title, buttonLabel, credentialUrl, googleLogoUrl, certificateImageUrl } = credential

  const hasLink = credentialUrl.trim().length > 0
  const hasLogoUrl = googleLogoUrl.trim().length > 0
  const [previewFailed, setPreviewFailed] = useState(false)

  const hasPreview = certificateImageUrl.trim().length > 0 && !previewFailed

  // Dev-only nudge so the credential link / preview never ship empty by accident.
  useEffect(() => {
    if (!import.meta.env.DEV) return
    const missing: string[] = []
    if (!hasLink) missing.push('credentialUrl')
    if (!certificateImageUrl.trim()) missing.push('certificateImageUrl')
    if (missing.length > 0) {
      console.warn(
        `[featuredCredential] Missing value(s): ${missing.join(', ')} — paste them in src/config/featuredCredential.ts`,
      )
    }
  }, [hasLink, certificateImageUrl])

  const credentialAction = hasLink ? (
    <a
      href={credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${buttonLabel} — ${title} by ${issuer} (opens in a new tab)`}
      className="group/watch mt-1 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border border-[#EF4444]/45 bg-[#EF4444]/10 px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-[#FCA5A5] transition-all duration-300 ease-out
        hover:border-[#EF4444] hover:bg-[#EF4444] hover:text-black hover:shadow-[0_0_25px_rgba(239,68,68,0.45)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]
        group-hover:border-[#EF4444]/75 group-hover:bg-[#EF4444]/20 group-hover:text-[#FEE2E2]
        group-focus-within:border-[#EF4444]/75 group-focus-within:bg-[#EF4444]/20 group-focus-within:text-[#FEE2E2]
        sm:px-5 sm:text-xs"
    >
      {buttonLabel}
      <ExternalLink
        size={13}
        className="transition-transform duration-300 ease-out group-hover/watch:-translate-y-0.5 group-hover/watch:translate-x-0.5"
      />
    </a>
  ) : (
    <span
      title="Add your link in src/config/featuredCredential.ts"
      className="mt-1 inline-flex w-fit select-none items-center gap-2 rounded-full border border-[#EF4444]/25 bg-[#EF4444]/[0.06] px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-[#FCA5A5]/70 sm:px-5 sm:text-xs"
    >
      {buttonLabel}
      <ExternalLink size={13} className="opacity-60" />
    </span>
  )

  return (
    <div
      className="credential-card group relative overflow-hidden rounded-[30px] border-2 border-[#D7E2EA]/10 bg-[#0A0A0A]
        transition-[border-color,box-shadow,background-color] duration-300 ease-out
        hover:border-[#EF4444]/55 hover:shadow-[0_0_40px_rgba(239,68,68,0.16),0_0_90px_rgba(239,68,68,0.07)]
        focus-within:border-[#EF4444]/55 focus-within:shadow-[0_0_40px_rgba(239,68,68,0.16),0_0_90px_rgba(239,68,68,0.07)]"
    >
      {/* Very subtle red ambient wash — fades in on hover / keyboard focus */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_130%_at_12%_50%,rgba(239,68,68,0.13),rgba(239,68,68,0.04)_45%,transparent_72%)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
      />

      <div className="relative z-10 flex items-stretch">
        {/* Left — logo, centred in its own area */}
        <div className="flex w-20 shrink-0 items-center justify-center py-6 sm:w-32 sm:py-7 md:w-40">
          {hasLogoUrl ? (
            <img
              src={googleLogoUrl}
              alt="Google"
              className="h-8 w-auto max-w-full object-contain sm:h-10"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
              }}
            />
          ) : (
            <GoogleLogo className="h-8 w-8 sm:h-10 sm:w-10" />
          )}
        </div>

        {/* Thin vertical divider */}
        <span
          aria-hidden="true"
          className="w-px shrink-0 self-stretch bg-[#D7E2EA]/10 transition-colors duration-300 ease-out group-hover:bg-[#EF4444]/35 group-focus-within:bg-[#EF4444]/35"
        />

        {/* Centre — issuer, title, credential action */}
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 px-4 py-6 sm:gap-3 sm:px-7 sm:py-7 md:px-9">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D7E2EA]/50 sm:text-xs">
            {issuer}
          </span>

          <h3
            className="hero-heading font-black uppercase leading-[0.95] tracking-tight break-words"
            style={{ fontSize: 'clamp(1.1rem, 3vw, 2.25rem)' }}
          >
            {title}
          </h3>

          {credentialAction}
        </div>

        {/* Right — real certificate preview, cropped by the card edge */}
        {hasPreview && (
          <div className="relative hidden w-[32%] shrink-0 self-stretch md:block">
            <div className="absolute inset-y-0 left-3 right-[-14%] overflow-hidden rounded-l-[18px] transition-transform duration-300 ease-out group-hover:scale-[1.02]">
              <img
                src={certificateImageUrl}
                alt={`${issuer} ${title} — certificate preview`}
                loading="lazy"
                onError={() => setPreviewFailed(true)}
                className="h-full w-full object-cover object-left"
              />
              {/* Soft scrim so the preview melts into the card */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
