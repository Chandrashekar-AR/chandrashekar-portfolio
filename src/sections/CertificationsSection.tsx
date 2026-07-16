import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'

interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  category: string
  icon: string
  credential: string
  description: string
  featured: boolean
}

const CERTS: Certification[] = [
  {
    id: 'google-ai-design',
    title: 'Generative AI for Design',
    issuer: 'Google / DeepMind',
    date: '2025',
    category: 'AI & Generative Media',
    icon: '◈',
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
    credential: 'DLA-APE-2025',
    description: 'Systematic prompt architecture for LLMs and multimodal AI systems applied to creative production pipelines.',
    featured: true,
  },
]

export default function CertificationsSection() {
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...Array.from(new Set(CERTS.map((c) => c.category)))]
  const filteredCerts = filter === 'All' ? CERTS : CERTS.filter((c) => c.category === filter)

  return (
    <section
      id="certifications"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center mb-12 sm:mb-16 md:mb-20 leading-none"
            style={{
              fontSize: 'clamp(1.75rem, 5.5vw, 80px)',
              background: 'linear-gradient(180deg, #FEFCE8 0%, #FEF9C3 25%, #FDE047 50%, #FBBF24 75%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Credentials
          </h2>
        </FadeIn>

        {/* Categories filters */}
        <FadeIn delay={0.15} y={30}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16" role="group">
            {categories.map((cat) => {
              const isActive = filter === cat
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 sm:px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer border uppercase
                    ${isActive
                      ? 'bg-[#D7E2EA] border-[#D7E2EA] text-[#0C0C0C]'
                      : 'bg-transparent border-[#D7E2EA]/20 text-[#D7E2EA]/50 hover:text-[#D7E2EA] hover:border-[#D7E2EA]/50'
                    }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </FadeIn>

        {/* Certs Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={cert.id}
                className={`group relative rounded-[30px] border-2 p-6 sm:p-8 bg-[#0C0C0C] flex flex-col justify-between gap-6 transition-all duration-300 min-h-[340px]
                  ${cert.featured
                    ? 'border-[#D7E2EA]/40'
                    : 'border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40'
                  }`}
              >
                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute -top-3.5 left-8 z-10">
                    <span className="text-[9px] font-mono tracking-widest font-bold uppercase border border-[#D7E2EA] bg-[#D7E2EA] text-[#0C0C0C] px-3 py-1 rounded-full">
                      ★ Featured
                    </span>
                  </div>
                )}

                {/* Card Top */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl border-2 border-[#D7E2EA]/20 bg-[#0C0C0C] flex items-center justify-center text-[#D7E2EA] text-lg font-bold">
                      {cert.icon}
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-[#D7E2EA]/40 uppercase">
                      {cert.category}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-base sm:text-lg uppercase tracking-wide text-[#D7E2EA] leading-snug group-hover:text-white transition-colors duration-200">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#D7E2EA]/60">
                      <span>{cert.issuer}</span>
                      <span className="text-[#D7E2EA]/30">•</span>
                      <span className="text-[#D7E2EA]/40 font-mono font-normal">{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-[#D7E2EA]/50 text-xs leading-relaxed font-light">
                    {cert.description}
                  </p>
                </div>

                {/* Card Bottom / ID */}
                <div className="flex items-center justify-between border-t border-[#D7E2EA]/10 pt-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA]/40" />
                    <span className="text-[10px] font-mono text-[#D7E2EA]/40 uppercase tracking-widest">
                      {cert.credential}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#D7E2EA]/30 group-hover:text-[#D7E2EA] transition-colors duration-300">
                    ✓ Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Row */}
        <FadeIn delay={0.4} y={30}>
          <div className="mt-20 border-t-2 border-[#D7E2EA]/10 pt-16 flex flex-wrap gap-8 sm:gap-16 justify-center text-center">
            {[
              { value: `${CERTS.length}`, label: 'Certifications' },
              { value: '4', label: 'Disciplines' },
              { value: '2024–25', label: 'Issued' },
              { value: '100%', label: 'Verified' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 min-w-[120px]">
                <span className="text-3xl font-black text-[#D7E2EA] uppercase leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] text-[#D7E2EA]/40 tracking-widest uppercase font-mono">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
