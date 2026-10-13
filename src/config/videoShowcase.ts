/**
 * ══════════════════════════════════════════════════════════════════════
 *  PROJECT SHOWCASE CARDS (04 MONTRA, 05 LINCOLN, 03)
 *  ▸ THIS IS THE ONLY FILE YOU NEED TO EDIT TO SET YOUR LINKS
 * ══════════════════════════════════════════════════════════════════════
 *
 *  Each entry in VIDEO_PROJECTS renders one card, top → bottom.
 *
 *  0) accent
 *     'cyan' (default, Montra) or 'purple' (Lincoln Pharma PA12) —
 *     drives the card border, eyebrow, play button and hover glow.
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
export type ShowcaseAccent = 'cyan' | 'purple'

export interface VideoProject {
  /** Card index shown top-left (matches the other project cards). */
  number: string
  /** Accent colour of the card — 'cyan' by default, 'purple' for Lincoln. */
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
  description: string
  thumbnailUrl: string
  videoUrl: string
  details: VideoDetail[]
}

const montraProject: VideoProject = {
  number: '04',
  category: 'Launch Film',
  shortName: 'Montra Electric Eviator',
  kicker: 'Keynote Launch Reveal',
  title: 'MONTRA ELECTRIC EVIATOR — LAUNCH VIDEO',
  titleHighlight: 'EVIATOR',
  description:
    'Produced the keynote launch reveal video, managing end-to-end production from AI footage generation using Kling AI to final editing and big-screen projection compositing.',

  /* ── ✎ PASTE YOUR TWO LINKS HERE ─────────────────────────────────── */
  // Real frame pulled straight from your Drive video (no substitute image).
  thumbnailUrl: 'https://drive.google.com/thumbnail?id=1rlcxqjFkMZ2NTLB-W208QxzWQfjh_kVa&sz=w1600',
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
  number: '05',
  accent: 'purple',
  category: 'Product Launch',
  shortName: 'Lincoln Pharma PA12',
  kicker: 'Product Launch | Cinematic Narrative',
  title: 'LINCOLN PHARMA PA12',
  description:
    'Co-created a 15-minute product launch presentation drama under an aggressive 48-hour deadline. Managed complex voice narrations and dynamic B-roll generation.',

  /* ── ✎ PASTE YOUR TWO LINKS HERE ─────────────────────────────────── */
  // Poster frame served by Google Drive for the ACTUAL Lincoln Pharma video
  // (same convention as the Montra card). Swap in your own frame URL any
  // time — leave it empty ('') and the card falls back to the dark frame.
  thumbnailUrl: 'https://drive.google.com/thumbnail?id=1sb321CzLhbnoMsq_0BYUAaWooefdLXej&sz=w1600',
  videoUrl: 'https://drive.google.com/file/d/1sb321CzLhbnoMsq_0BYUAaWooefdLXej/view?usp=sharing',
  /* ────────────────────────────────────────────────────────────────── */

  details: [
    { label: 'Brand Scope', value: 'Pharma Launch' },
    { label: 'Deadline', value: '48-Hour Sprint' },
    { label: 'Deliverable', value: '15-Min Longform' },
    { label: 'Role', value: 'AI Video & Audio Specialist', accent: true },
  ],
}

/* ── ✎ CARD 03 — edit the fields below with your own project ──────── */
const project03: VideoProject = {
  number: '03',
  category: 'Launch Film',
  shortName: 'Montra Electric Eviator',
  kicker: 'Keynote Launch Reveal',
  title: 'MONTRA ELECTRIC EVIATOR — LAUNCH VIDEO',
  titleHighlight: 'EVIATOR',
  description:
    'Produced the keynote launch reveal video, managing end-to-end production from AI footage generation using Kling AI to final editing and big-screen projection compositing.',

  /* ── ✎ PASTE YOUR TWO LINKS HERE ─────────────────────────────────── */
  thumbnailUrl: 'https://drive.google.com/thumbnail?id=1rlcxqjFkMZ2NTLB-W208QxzWQfjh_kVa&sz=w1600',
  videoUrl: 'https://drive.google.com/file/d/1rlcxqjFkMZ2NTLB-W208QxzWQfjh_kVa/view?usp=sharing',
  /* ────────────────────────────────────────────────────────────────── */

  details: [
    { label: 'Brand Scope', value: 'Premium EV Reveal' },
    { label: 'Deliverable', value: 'Keynote Projection' },
    { label: 'Resolution', value: '4K Upscaled' },
    { label: 'Role', value: 'AI Video Producer & Editor', accent: true },
  ],
}

/** Cards render top → bottom in this order. */
export const VIDEO_PROJECTS: VideoProject[] = [
  montraProject,
  LINCOLN_VIDEO_PROJECT,
  project03,
]

export const MONTRA_VIDEO_PROJECT = montraProject
