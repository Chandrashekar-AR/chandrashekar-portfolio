import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import BlurText from './BlurText'

function useInView(threshold = 0.05) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const CERTS = [
  {
    id: 'google-ai-design',
    title: 'Generative AI for Design',
    issuer: 'Google / DeepMind',
    date: '2025',
    category: 'AI & Generative Media',
    icon: '◈',
    color: 'indigo',
    credential: 'GGL-GAID-2025',
    description: 'Mastery in generative AI workflows for visual content production, prompt architecture, and multi-modal creative systems.',
    featured: true,
  },
  {
    id: 'visual-brand-strategy',
    title: 'Visual Brand Strategy',
    issuer: 'CXL Institute',
    date: '2025',
    category: 'Brand & Strategy',
    icon: '◎',
    color: 'purple',
    credential: 'CXL-VBS-2025',
    description: 'Advanced frameworks for brand positioning, visual identity systems, and cross-channel campaign architecture.',
    featured: true,
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics & VFX',
    issuer: 'Adobe Education',
    date: '2024',
    category: 'Creative Production',
    icon: '⬡',
    color: 'pink',
    credential: 'ADO-MGX-2024',
    description: 'Professional motion design, After Effects compositing, and broadcast-quality visual effects production.',
    featured: false,
  },
  {
    id: 'ui-design-systems',
    title: 'Design Systems & UI Architecture',
    issuer: 'Google UX Design',
    date: '2024',
    category: 'Interface Design',
    icon: '◉',
    color: 'violet',
    credential: 'GGL-DSU-2024',
    description: 'Building scalable component libraries, design tokens, and systematic UI frameworks in Figma and React.',
    featured: false,
  },
  {
    id: 'cinematic-storytelling',
    title: 'Cinematic Storytelling',
    issuer: 'MasterClass',
    date: '2024',
    category: 'Narrative & Direction',
    icon: '◈',
    color: 'amber',
    credential: 'MCS-CNS-2024',
    description: 'Film-level narrative construction, visual pacing, shot composition theory, and director\'s eye development.',
    featured: false,
  },
  {
    id: 'prompt-engineering',
    title: 'Advanced Prompt Engineering',
    issuer: 'Anthropic / DeepLearning.AI',
    date: '2025',
    category: 'AI & Generative Media',
    icon: '◉',
    color: 'emerald',
    credential: 'DLA-APE-2025',
    description: 'Systematic prompt architecture for LLMs and multimodal AI systems applied to creative production pipelines.',
    featured: true,
  },
]

const COLOR_MAP = {
  indigo: {
    bg: 'bg-indigo-950/30',
    border: 'border-indigo-500/20',
    hoverBorder: 'group-hover:border-indigo-400/50',
    icon: 'text-indigo-400',
    badge: 'bg-indigo-900/40 text-indigo-300 border-indigo-500/20',
    glow: '0 20px 60px rgba(99,102,241,0.12)',
    dot: 'bg-indigo-400',
  },
  purple: {
    bg: 'bg-purple-950/30',
    border: 'border-purple-500/20',
    hoverBorder: 'group-hover:border-purple-400/50',
    icon: 'text-purple-400',
    badge: 'bg-purple-900/40 text-purple-300 border-purple-500/20',
    glow: '0 20px 60px rgba(168,85,247,0.12)',
    dot: 'bg-purple-400',
  },
  pink: {
    bg: 'bg-pink-950/20',
    border: 'border-pink-500/20',
    hoverBorder: 'group-hover:border-pink-400/50',
    icon: 'text-pink-400',
    badge: 'bg-pink-900/40 text-pink-300 border-pink-500/20',
    glow: '0 20px 60px rgba(236,72,153,0.12)',
    dot: 'bg-pink-400',
  },
  violet: {
    bg: 'bg-violet-950/30',
    border: 'border-violet-500/20',
    hoverBorder: 'group-hover:border-violet-400/50',
    icon: 'text-violet-400',
    badge: 'bg-violet-900/40 text-violet-300 border-violet-500/20',
    glow: '0 20px 60px rgba(139,92,246,0.12)',
    dot: 'bg-violet-400',
  },
  amber: {
    bg: 'bg-amber-950/20',
    border: 'border-amber-500/20',
    hoverBorder: 'group-hover:border-amber-400/50',
    icon: 'text-amber-400',
    badge: 'bg-amber-900/40 text-amber-300 border-amber-500/20',
    glow: '0 20px 60px rgba(245,158,11,0.10)',
    dot: 'bg-amber-400',
  },
  emerald: {
    bg: 'bg-emerald-950/20',
    border: 'border-emerald-500/20',
    hoverBorder: 'group-hover:border-emerald-400/50',
    icon: 'text-emerald-400',
    badge: 'bg-emerald-900/40 text-emerald-300 border-emerald-500/20',
    glow: '0 20px 60px rgba(52,211,153,0.10)',
    dot: 'bg-emerald-400',
  },
}

function CertCard({ cert, delay, inView }) {
  const [hovered, setHovered] = useState(false)
  const c = COLOR_MAP[cert.color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative rounded-2xl border p-10 transition-all duration-400 cursor-default
        ${c.bg} ${c.border} ${cert.featured ? 'ring-1 ring-white/5' : ''}
        ${hovered ? '-translate-y-2' : ''}`}
      style={{ boxShadow: hovered ? c.glow : 'none' }}
      id={`cert-${cert.id}`}
    >
      {/* Featured badge */}
      {cert.featured && (
        <div className="absolute -top-2.5 left-5">
          <span className="text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 font-mono tracking-wider">
            ✦ Featured
          </span>
        </div>
      )}

      {/* Header row */}
      <div className="flex items-start justify-between mb-8">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl border ${c.border} bg-slate-900/60`}>
          <span className={c.icon}>{cert.icon}</span>
        </div>
        <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${c.badge}`}>
          {cert.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-['Space_Grotesk'] text-base font-semibold text-white mb-4 leading-snug group-hover:text-white transition-colors">
        {cert.title}
      </h3>

      {/* Issuer & date */}
      <div className="flex items-center gap-2.5 mb-6">
        <span className={`text-sm font-medium ${c.icon}`}>{cert.issuer}</span>
        <span className="text-slate-700 text-xs">·</span>
        <span className="text-xs font-mono text-slate-600">{cert.date}</span>
      </div>

      {/* Description */}
      <p className="text-slate-600 text-xs leading-[2.0] mb-8 group-hover:text-slate-500 transition-colors tracking-wide">
        {cert.description}
      </p>

      {/* Credential ID */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
          <span className="text-xs font-mono text-slate-700 group-hover:text-slate-600 transition-colors">
            {cert.credential}
          </span>
        </div>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all duration-300
          ${hovered ? `${c.badge} scale-110` : 'bg-slate-800/50 text-slate-700'}`}>
          ✓
        </div>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  const [sectionRef, inView] = useInView(0.05)
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...new Set(CERTS.map(c => c.category))]
  const filtered = filter === 'All' ? CERTS : CERTS.filter(c => c.category === filter)

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative px-8 overflow-hidden"
      aria-label="Verified Credentials and Certifications"
    >
      <div
        className="absolute left-6 right-6 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.15), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-28"
        >
          <p className="text-xs font-mono text-violet-500 tracking-[0.4em] uppercase mb-8">
            05 / Credentials
          </p>
          <h2 className="font-['Space_Grotesk'] text-5xl sm:text-6xl font-bold text-white mb-12 section-underline">
            <BlurText
              text="Verified Credentials"
              delay={80}
              animateBy="words"
              direction="top"
            />
          </h2>
          <p className="max-w-2xl text-slate-400 text-lg leading-[2.2] tracking-wide">
            Validated expertise across generative AI systems, brand strategy, motion design, and interface architecture.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-5 mb-16"
          role="group"
          aria-label="Filter certifications by category"
        >
          {categories.map(cat => (
            <button
              key={cat}
              id={`cert-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setFilter(cat)}
              className={`px-6.5 py-3 rounded-full text-xs font-mono tracking-wide border transition-all duration-300 cursor-pointer
                ${filter === cat
                  ? 'bg-violet-900/50 text-violet-300 border-violet-500/40'
                  : 'bg-slate-900/50 border-slate-800 text-slate-600 hover:text-slate-400 hover:border-slate-700'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Certs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((cert, i) => (
            <CertCard
              key={cert.id}
              cert={cert}
              delay={i * 0.08}
              inView={inView}
            />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-28 flex flex-wrap gap-16 justify-center text-center"
        >
          {[
            { value: `${CERTS.length}`, label: 'Certifications' },
            { value: '4', label: 'Disciplines' },
            { value: '2024–25', label: 'Issued' },
            { value: '100%', label: 'Verified' },
          ].map(stat => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-2xl font-bold font-['Space_Grotesk'] gradient-text">{stat.value}</span>
              <span className="text-xs text-slate-700 mt-2 tracking-widest uppercase font-mono">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
