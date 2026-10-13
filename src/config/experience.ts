/**
 * ══════════════════════════════════════════════════════════════════════
 *  JOURNEY SECTION — TWO EXPERIENCE CARDS (Brandshark | AdMitra)
 *  ▸ Source of truth: ChandrashekarAR_AI_.pdf (resume)
 *  ▸ THIS IS THE ONLY FILE YOU NEED TO EDIT TO SET LOGOS / CAMPAIGN ART
 * ══════════════════════════════════════════════════════════════════════
 *
 *  1) logoUrl (optional)
 *     Direct URL (or imported asset path) of the OFFICIAL company logo.
 *     When empty, a typographic monogram tile is rendered instead —
 *     no fake logo image is ever generated.
 *
 *  2) gallery[].imageUrl (AdMitra card only)
 *     Real campaign artwork per client. Montra Electric and Lincoln
 *     Pharma reuse the actual Drive frames already configured for the
 *     project showcase cards (imported below, single source of truth).
 *     Leave '' for a client whose asset you have not added yet — the
 *     tile keeps its caption and shows a neutral surface (no fake image).
 *
 *  3) All copy below is taken verbatim from the resume. Do not invent
 *     metrics, dates, clients or achievements here.
 */

import { MONTRA_VIDEO_PROJECT, LINCOLN_VIDEO_PROJECT } from './videoShowcase'

export type ExperienceAccent = 'yellow' | 'blue'

export interface GalleryItem {
  /** Client name shown as the tile caption. */
  brand: string
  /** Real campaign image — '' renders a neutral caption-only tile. */
  imageUrl: string
}

export interface ExperienceCard {
  id: string
  /** Accent treatment of the card ('yellow' = Brandshark, 'blue' = AdMitra). */
  accent: ExperienceAccent
  company: string
  role: string
  /** Employment dates exactly as written on the resume. */
  period: string
  location: string
  /** 'current' renders the pulsing Active badge. */
  status: 'current' | 'past'
  /** Official logo source ('' = monogram fallback tile). */
  logoUrl: string
  /** Letter mark used while logoUrl is empty. */
  monogram: string
  /** Resume bullets — metrics (20+, 50+) are highlighted automatically. */
  highlights: string[]
  /** Words inside the highlights rendered slightly brighter (resume-sourced). */
  emphasis?: string[]
  /** Campaign visual gallery (right side of the AdMitra card). */
  gallery?: GalleryItem[]
  /** Compact client strip shown beneath the highlights. */
  clients?: string[]
}

/* ── ✎ LEFT CARD — BRANDSHARK ─────────────────────────────────────── */
export const BRANDSHARK_EXPERIENCE: ExperienceCard = {
  id: 'brandshark',
  accent: 'yellow',
  company: 'Brandshark',
  role: 'AI Content Creator',
  period: 'June 2026 – Present',
  location: 'Bengaluru, India',
  status: 'current',

  /* ── ✎ PASTE THE OFFICIAL BRANDSHARK LOGO HERE ───────────────────── */
  logoUrl: '',
  /* ────────────────────────────────────────────────────────────────── */
  monogram: 'B',

  highlights: [
    'Spearheaded end-to-end AI UGC video production for brands including Kopiko, Popees India, Directoo, OWIS, and Brushers, managing complete workflows from storyboarding to final ad delivery using generative AI tools such as Runway, HeyGen, and Grok Imagine.',
    'Partnered with US client Verixxa to produce and deliver 20+ targeted AI video ad assets optimized for Instagram and social media performance.',
  ],
  emphasis: ['Runway', 'HeyGen', 'Grok Imagine'],

  clients: ['Kopiko', 'Popees India', 'Directoo', 'OWIS', 'Brushers', 'Verixxa'],
}

/* ── ✎ RIGHT CARD — ADMITRA PRIVATE LIMITED ───────────────────────── */
export const ADMITRA_EXPERIENCE: ExperienceCard = {
  id: 'admitra',
  accent: 'blue',
  company: 'AdMitra Private Limited',
  role: 'Creative Head – GenAI',
  period: 'March 2026 – June 2026',
  location: 'Bengaluru, India',
  status: 'past',

  /* ── ✎ PASTE THE OFFICIAL ADMITRA LOGO HERE ──────────────────────── */
  logoUrl: '',
  /* ────────────────────────────────────────────────────────────────── */
  monogram: 'A',

  highlights: [
    'Led the creation of AI-powered video and poster advertisements, transforming brand ideas into storyboards and localized scripts in multiple languages.',
    'Managed creative production workflows delivering 50+ localized advertisements monthly for Montra Electric, EkoTejas, Greaves Electric Mobility (Ampere), and Lincoln Pharma.',
    'Collaborated directly with co-founders to launch campaigns optimized for Instagram Reels and Facebook Ads.',
  ],
  emphasis: ['AI-powered', 'Instagram Reels', 'Facebook Ads'],

  gallery: [
    { brand: 'Montra Electric', imageUrl: MONTRA_VIDEO_PROJECT.thumbnailUrl },
    /* ── ✎ PASTE AMPERE / EKOTEJAS CAMPAIGN ART BELOW ("" = caption only) ── */
    { brand: 'Ampere', imageUrl: '' },
    { brand: 'EkoTejas', imageUrl: '' },
    /* ────────────────────────────────────────────────────────────────── */
    { brand: 'Lincoln Pharma', imageUrl: LINCOLN_VIDEO_PROJECT.thumbnailUrl },
  ],

  clients: ['Montra Electric', 'EkoTejas', 'Ampere', 'Lincoln Pharma'],
}

export const EXPERIENCE_CARDS: ExperienceCard[] = [
  BRANDSHARK_EXPERIENCE,
  ADMITRA_EXPERIENCE,
]
