/**
 * ══════════════════════════════════════════════════════════════════════
 *  JOURNEY SECTION — TWO EXPERIENCE CARDS (Brandshark | AdMitra)
 *  ▸ Source of truth: ChandrashekarAR_AI_.pdf (resume)
 *  ▸ THIS IS THE ONLY FILE YOU NEED TO EDIT TO SET LOGOS, DRIVE LINKS
 *    AND OPTIONAL GALLERY
 * ══════════════════════════════════════════════════════════════════════
 *
 *  1) logoUrl (optional)
 *     Direct URL (or imported asset path) of the OFFICIAL company logo.
 *     When empty, a typographic monogram tile is rendered instead —
 *     no fake logo image is ever generated.
 *
 *  2) gallery (optional — not used right now)
 *     The AdMitra card renders highlights + client badges only, with no
 *     campaign visuals. To bring the image grid back, add
 *     `gallery: [{ brand, imageUrl }, …]` to a card — the section renders
 *     it whenever the array is present. Use a real artwork URL per client
 *     ('' = caption-only tile, never a fake image).
 *
 *  3) resources (optional — Brandshark card)
 *     Two gold buttons rendered above the CLIENTS strip. Each entry is
 *     { label, icon, url }: paste a Google Drive share link (Drive ▸
 *     Share ▸ "Anyone with the link" ▸ Viewer) into `url` and the button
 *     opens it in a new tab. Leave url '' and the button renders a
 *     non-clickable "LINK COMING SOON" state — never a fake link.
 *
 *  4) All copy below is taken verbatim from the resume. Do not invent
 *     metrics, dates, clients or achievements here.
 */

import { Images, PlayCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type ExperienceAccent = 'yellow' | 'blue'

export interface GalleryItem {
  /** Client name shown as the tile caption. */
  brand: string
  /** Real campaign image — '' renders a neutral caption-only tile. */
  imageUrl: string
}

/** Gold resource button (Brandshark card) — e.g. a Google Drive folder. */
export interface CardResource {
  /** Short uppercase button label. */
  label: string
  /** lucide icon shown left of the label. */
  icon: LucideIcon
  /** Drive link ('' = disabled "LINK COMING SOON" state, never a fake URL). */
  url: string
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
  /** Resource buttons rendered just above the client strip. */
  resources?: CardResource[]
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
  // Square 447x447 logo — fills the square tile edge-to-edge (object-contain),
  // centered and vertically aligned with the company name.
  logoUrl: 'https://i.postimg.cc/LX7MDNk6/0ef4289d-9294-42d5-ac2b-37ef69291c01.png',
  /* ────────────────────────────────────────────────────────────────── */
  monogram: 'B',

  highlights: [
    'Spearheaded end-to-end AI UGC video production for brands including Kopiko, Popees India, Directoo, OWIS, and Brushers, managing complete workflows from storyboarding to final ad delivery using generative AI tools such as Runway, HeyGen, and Grok Imagine.',
    'Partnered with US client Verixxa to produce and deliver 20+ targeted AI video ad assets optimized for Instagram and social media performance.',
  ],
  emphasis: ['Runway', 'HeyGen', 'Grok Imagine'],

  /* ── ✎ PASTE YOUR TWO GOOGLE DRIVE LINKS HERE ────────────────────── */
  /* Drive ▸ Share ▸ General access ▸ "Anyone with the link" ▸ Viewer. */
  resources: [
    // AI-generated video ads, UGC videos, cinematic stories, etc.
    { label: 'AI Videos', icon: PlayCircle, url: 'https://drive.google.com/drive/folders/1YpnedCKJCDjLeU4clOBwUqtHFgdQwek5?usp=sharing' }, // YOUR_AI_VIDEOS_DRIVE_LINK
    // AI-generated thumbnails and visual creative assets.
    { label: 'AI Thumbnails', icon: Images, url: 'https://drive.google.com/drive/folders/1koy_jS63b2Tytq5MBkgjbyrXPhhdCPsO?usp=sharing' }, // YOUR_AI_THUMBNAILS_DRIVE_LINK
  ],
  /* ────────────────────────────────────────────────────────────────── */

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
  // Official ADMITRA lockup (arrow mark + wordmark), trimmed of its
  // transparent padding → 776×202 (≈3.84:1). Rendered at a fixed height
  // left of the company name, vertically centred with it.
  logoUrl: '/admitra-logo.png',
  /* ────────────────────────────────────────────────────────────────── */
  monogram: 'A',

  highlights: [
    'Led the creation of AI-powered video and poster advertisements, transforming brand ideas into storyboards and localized scripts in multiple languages.',
    'Managed creative production workflows delivering 50+ localized advertisements monthly for Montra Electric, EkoTejas, Greaves Electric Mobility (Ampere), and Lincoln Pharma.',
    'Collaborated directly with co-founders to launch campaigns optimized for Instagram Reels and Facebook Ads.',
  ],
  emphasis: ['AI-powered', 'Instagram Reels', 'Facebook Ads'],

  clients: ['Montra Electric', 'EkoTejas', 'Ampere', 'Lincoln Pharma'],
}

export const EXPERIENCE_CARDS: ExperienceCard[] = [
  BRANDSHARK_EXPERIENCE,
  ADMITRA_EXPERIENCE,
]
