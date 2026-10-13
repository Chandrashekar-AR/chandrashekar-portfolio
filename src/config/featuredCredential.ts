/**
 * ══════════════════════════════════════════════════════════════════════
 *  FEATURED CREDENTIAL CARD — GOOGLE AI PROFESSIONAL CERTIFICATE
 *  ▸ THIS IS THE ONLY FILE YOU NEED TO EDIT TO SET YOUR LINK / IMAGES
 * ══════════════════════════════════════════════════════════════════════
 *
 *  1) credentialUrl
 *     Credential VERIFICATION page (opens in a new tab):
 *       "https://www.coursera.org/account/accomplishments/specialization/<ID>"
 *     Leave empty and the button renders as a non-clickable chip until
 *     you paste the real link — no fake URL is ever generated.
 *
 *  2) googleLogoUrl (optional)
 *     Direct URL of the official Google logo image. When empty, the
 *     card falls back to the official Google "G" SVG built into the
 *     component (same paths already used elsewhere in this portfolio).
 *
 *  3) certificateImageUrl (optional)
 *     Direct URL (or an imported asset path) of YOUR REAL certificate
 *     preview. When empty, the right-hand preview column is hidden —
 *     no placeholder / fake certificate is ever rendered.
 *
 *  Nothing else in the codebase needs to change.
 */

export interface FeaturedCredential {
  /** Small mono label above the title. */
  issuer: string
  /** Certificate title shown on the card. */
  title: string
  /** Credential button label (external-link icon is appended automatically). */
  buttonLabel: string
  /** Credential verification page — opens in a new tab. */
  credentialUrl: string
  /** Optional Google logo image source ('' = built-in official SVG). */
  googleLogoUrl: string
  /** Optional certificate preview image source ('' = preview hidden). */
  certificateImageUrl: string
}

export const GOOGLE_AI_CREDENTIAL: FeaturedCredential = {
  issuer: 'GOOGLE',
  title: 'AI Professional Certificate',
  buttonLabel: 'VIEW CREDENTIAL',

  /* ── ✎ PASTE YOUR CREDENTIAL LINK HERE ───────────────────────────── */
  // Coursera — Google AI Professional Certificate (specialization).
  credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/EYEO5YNUSCHM',
  /* ────────────────────────────────────────────────────────────────── */

  /* ── ✎ OPTIONAL IMAGE SOURCES ────────────────────────────────────── */
  googleLogoUrl: '',
  certificateImageUrl: '',
  /* ────────────────────────────────────────────────────────────────── */
}
