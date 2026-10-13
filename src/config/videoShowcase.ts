/**
 * ══════════════════════════════════════════════════════════════════════
 *  PROJECT SHOWCASE CARDS (04 MONTRA, 05 LINCOLN, 03 DIESEL DRAMA REEL)
 *  ▸ THIS IS THE ONLY FILE YOU NEED TO EDIT TO SET YOUR LINKS
 * ══════════════════════════════════════════════════════════════════════
 *
 *  Each entry in VIDEO_PROJECTS renders one card, top → bottom.
 *
 *  0) layout + accent
 *     layout 'standard' (default) = horizontal 16:9 card (04, 05).
 *     layout 'reel' = info panel + tall 9:16 visual (03 DIESEL DRAMA).
 *     accent 'cyan' | 'purple' | 'magenta' drives the card border,
 *     eyebrow, play button and hover glow.
 *
 *  1) thumbnailUrl
 *     Direct URL of your video thumbnail (a real frame from the video
 *     works best). Examples:
 *       "https://your-cdn.com/montra-eviator-frame.jpg"
 *       "https://drive.google.com/thumbnail?id=<FILE_ID>&sz=w1920"
 *
 *  2) videoUrl
 *     Your Google Drive SHAREABLE link of the finished launch video.
 *     Drive ▸ Share ▸ General access ▸ "Anyone with the link" ▸ Viewer
 *       "https://drive.google.com/file/d/<FILE_ID>/view?usp=sharing"
 *
 *  Clicking the thumbnail / play button opens `videoUrl` in a new tab.
 *  Nothing else in the codebase needs to change.
 */

export interface VideoDetail {
  label: string
  value: string
  /** Highlights the row in the card accent colour — used for the role row. */
  accent?: boolean
}

/** Accent theme applied to a card's borders, eyebrow, play button and hovers. */
export type ShowcaseAccent = 'cyan' | 'purple' | 'magenta'

/** Dashboard overlay shown on the vertical reel visual (layout: 'reel'). */
export interface ShowcaseStat {
  label: string
  value: string
  /** 0–100 fill of the accent progress bar — set on the retention row only. */
  percent?: number
}

export interface VideoProject {
  /** Card index shown top-left (matches the other project cards). */
  number: string
  /** Card layout — 'standard' (default) or 'reel' (tall 9:16 visual). */
  layout?: 'standard' | 'reel'
  /** Accent colour of the card — 'cyan' by default. */
  accent?: ShowcaseAccent
  /** Small label in the card header + chip on the thumbnail. */
  category: string
  /** Short header name (keeps the top row from truncating). */
  shortName: string
  /** Small accent-coloured eyebrow above the main heading. */
  kicker: string
  /** Full project title shown on the right side of the card. */
  title: string
  /** Word inside `title` rendered in the accent colour (must exist in `title`). */
  titleHighlight?: string
  /** `layout: 'reel'` — headline part rendered in white (top line). */
  headlineLead?: string
  /** `layout: 'reel'` — headline part rendered in muted grey (second line). */
  headlineTail?: string
  description: string
  thumbnailUrl: string
  videoUrl: string
  /** Reel card: side-by-side metrics under the headline (label + big value). */
  details: VideoDetail[]
  /** `layout: 'reel'` — dashboard overlays on the vertical visual. */
  stats?: ShowcaseStat[]
}

const montraProject: VideoProject = {
  number: '01',
  category: 'Launch Film',
  shortName: 'Montra Electric Eviator',
  kicker: 'Keynote Launch Reveal',
  title: 'MONTRA ELECTRIC EVIATOR — LAUNCH VIDEO',
  titleHighlight: 'EVIATOR',
  description:
    'Produced the keynote launch reveal video, managing end-to-end production from AI footage generation using Kling AI to final editing and big-screen projection compositing.',

  /* ── ✎ PASTE YOUR TWO LINKS HERE ─────────────────────────────────── */
  // "Three Trucks, Three Teammates" thumbnail (1279×720 ≈ 16:9) — fills the
  // horizontal frame edge-to-edge (object-cover, no letterboxing).
  thumbnailUrl: 'https://i.postimg.cc/sgjkCkgg/Three-Trucks-Three-Teammates.png',
  videoUrl: 'https://drive.google.com/file/d/1rlcxqjFkMZ2NTLB-W208QxzWQfjh_kVa/view?usp=sharing',
  /* ────────────────────────────────────────────────────────────────── */

  details: [
    { label: 'Brand Scope', value: 'Premium EV Reveal' },
    { label: 'Deliverable', value: 'Keynote Projection' },
    { label: 'Resolution', value: '4K Upscaled' },
    { label: 'Role', value: 'AI Video Producer & Editor', accent: true },
  ],
}

/* ── ✎ CARD 05 — LINCOLN PHARMA PA12 (purple accent card) ────────── */
export const LINCOLN_VIDEO_PROJECT: VideoProject = {
  number: '02',
  accent: 'purple',
  category: 'Product Launch',
  shortName: 'Lincoln Pharma PA12',
  kicker: 'Product Launch | Cinematic Narrative',
  title: 'LINCOLN PHARMA PA12',
  description:
    'Co-created a 15-minute product launch presentation drama under an aggressive 48-hour deadline. Managed complex voice narrations and dynamic B-roll generation.',

  /* ── ✎ PASTE YOUR TWO LINKS HERE ─────────────────────────────────── */
  // Custom "Cinematic Courtroom" thumbnail (16:9) for the Lincoln Pharma card.
  // Leave it empty ('') and the card falls back to the dark frame.
  thumbnailUrl: 'https://i.postimg.cc/pLbwcmwN/Cinematic-Courtroom-Beneath-the-Crest.png',
  videoUrl: 'https://drive.google.com/file/d/1sb321CzLhbnoMsq_0BYUAaWooefdLXej/view?usp=sharing',
  /* ────────────────────────────────────────────────────────────────── */

  details: [
    { label: 'Brand Scope', value: 'Pharma Launch' },
    { label: 'Deadline', value: '48-Hour Sprint' },
    { label: 'Deliverable', value: '15-Min Longform' },
    { label: 'Role', value: 'AI Video & Audio Specialist', accent: true },
  ],
}

/* ── ✎ CARD 03 — "DIESEL DRAMA" VIRAL REEL (vertical reel layout) ─── */
export const DIESEL_DRAMA_REEL: VideoProject = {
  number: '03',
  layout: 'reel',
  accent: 'magenta',
  category: 'Viral Campaign',
  shortName: 'Montra Electric Eviator',
  kicker: 'AI Video Specialist & Storyteller',
  title: 'THE "DIESEL DRAMA" VIRAL REEL',
  headlineLead: 'THE "DIESEL DRAMA"',
  headlineTail: 'VIRAL REEL',
  description:
    'Orchestrated the narrative pipeline for a high-impact localized social campaign. Seamlessly integrated AI-generated assets with platform-specific pacing to maximize retention and shareability across demographics.',

  /* ── ✎ PASTE YOUR TWO LINKS HERE ─────────────────────────────────── */
  // 1) thumbnailUrl — the campaign thumbnail image YOU provide (a direct
  //    image URL or an imported asset path). This Montra Eviator showcase
  //    image is 450x800 (exactly 9:16), so it fills the portrait frame
  //    edge-to-edge with no cropping or distortion.
  // 2) videoUrl — public Instagram reel of the "Diesel Drama" campaign.
  //    Clicking the vertical visual / play button opens it in a new tab.
  thumbnailUrl: 'https://i.postimg.cc/W3zppDpF/Montra-Eviator-Electric-Truck-Showcase.png',
  videoUrl: 'https://www.instagram.com/reel/DYPaSyiKxhg/',
  /* ────────────────────────────────────────────────────────────────── */

  // Performance metrics — rendered side by side under the headline.
  details: [
    { label: 'Total Reach', value: '2.2M+' },
    { label: 'Engagement', value: '21%' },
  ],

  // Dashboard overlays on the vertical visual (reference-provided values —
  // `percent` drives the thin magenta progress bar).
  stats: [
    { label: 'Retention Rate', value: '85.2%', percent: 85.2 },
    { label: 'Likes', value: '36K' },
    { label: 'Shares', value: '8k' },
  ],
}

/** Cards render top → bottom in this order. */
export const VIDEO_PROJECTS: VideoProject[] = [
  montraProject,
  LINCOLN_VIDEO_PROJECT,
  DIESEL_DRAMA_REEL,
]

export const MONTRA_VIDEO_PROJECT = montraProject
