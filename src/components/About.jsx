import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import BlurText from './BlurText'

function useInView(threshold = 0.15) {
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

const PILLARS = [
  {
    id: 'brand-ideation',
    icon: '◈',
    title: 'Brand Ideation',
    subtitle: 'Identity Architecture',
    color: 'from-indigo-500/20 to-violet-500/10',
    borderColor: 'hover:border-indigo-500/40',
    accentColor: 'text-indigo-400',
    glowColor: 'rgba(99,102,241,0.08)',
    description:
      'Crafting brand universes with layered visual language — from typographic tone to palette psychology. Every touchpoint a deliberate signal.',
    tags: ['Visual Identity', 'Tone of Voice', 'Style Guides', 'Moodboarding'],
  },
  {
    id: 'commercial-production',
    icon: '◎',
    title: 'Commercial Asset Production',
    subtitle: 'Cinematic Pipeline',
    color: 'from-purple-500/20 to-pink-500/10',
    borderColor: 'hover:border-purple-500/40',
    accentColor: 'text-purple-400',
    glowColor: 'rgba(168,85,247,0.08)',
    description:
      'End-to-end production of commercial-grade visual assets. Storyboarding, shot design, 4K cinematic rendering, and post-production color direction.',
    tags: ['Storyboarding', 'Shot Design', '4K Rendering', 'Color Grading'],
  },
  {
    id: 'ai-pipelines',
    icon: '◉',
    title: 'AI-Driven Content Pipelines',
    subtitle: 'Generative Intelligence',
    color: 'from-pink-500/20 to-rose-500/10',
    borderColor: 'hover:border-pink-500/40',
    accentColor: 'text-pink-400',
    glowColor: 'rgba(236,72,153,0.08)',
    description:
      'Engineering automated creative workflows using generative AI — from prompt architecture to batch output curation. Scale without compromise.',
    tags: ['Prompt Engineering', 'Veo 3 / Imagen 4', 'Batch Curation', 'AI Workflows'],
  },
]

const MANIFESTO_LINES = [
  'Design is not decoration — it is the argument.',
  'Every pixel earns its place or it doesn\'t exist.',
  'Creativity without strategy is just noise.',
]

export default function About() {
  const [sectionRef, inView] = useInView(0.1)
  const [hoveredPillar, setHoveredPillar] = useState(null)
  const [manifestoIndex, setManifestoIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setManifestoIndex(i => (i + 1) % MANIFESTO_LINES.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-8 overflow-hidden"
      aria-label="Vision and About"
    >
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)',
        }}
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
          <p className="text-xs font-mono text-indigo-500 tracking-[0.4em] uppercase mb-8">
            02 / Vision
          </p>
          <h2 className="font-['Space_Grotesk'] text-5xl sm:text-6xl font-bold text-white mb-12 section-underline">
            <BlurText
              text="Creative Philosophy"
              delay={80}
              animateBy="words"
              direction="top"
            />
          </h2>
          <p className="max-w-2xl text-slate-400 text-lg leading-[2.2] tracking-wide">
            I operate at the intersection of strategic thinking, cinematic sensibility, and
            machine-augmented production — building creative systems that outlast campaigns.
          </p>
        </motion.div>

        {/* Manifesto ticker */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-24 relative overflow-hidden"
        >
          <div className="flex items-center gap-5 p-10 rounded-xl border border-slate-800/80 bg-slate-900/40">
            <div className="w-1 h-14 rounded-full bg-gradient-to-b from-indigo-400 to-purple-500 flex-shrink-0" />
            <div className="overflow-hidden h-8 flex-1">
              {MANIFESTO_LINES.map((line, i) => (
                <p
                  key={line}
                  className={`font-['Space_Grotesk'] text-lg font-medium transition-all duration-700 ${
                    i === manifestoIndex
                      ? 'opacity-100 translate-y-0 text-slate-200'
                      : 'opacity-0 absolute translate-y-4 text-transparent'
                  }`}
                  style={{ position: i === manifestoIndex ? 'relative' : 'absolute' }}
                >
                  "{line}"
                </p>
              ))}
            </div>
            <div className="flex gap-1.5">
              {MANIFESTO_LINES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setManifestoIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === manifestoIndex ? 'bg-indigo-400 w-4' : 'bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Manifesto line ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Creative Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i + 0.3 }}
              onMouseEnter={() => setHoveredPillar(pillar.id)}
              onMouseLeave={() => setHoveredPillar(null)}
              className={`relative rounded-3xl border border-slate-800/60 p-14 cursor-default transition-all duration-400
                bg-gradient-to-br ${pillar.color} ${pillar.borderColor}
                ${hoveredPillar === pillar.id ? '-translate-y-3' : ''}
              `}
              style={{
                boxShadow: hoveredPillar === pillar.id
                  ? `0 24px 60px ${pillar.glowColor}, 0 0 0 1px rgba(148,163,184,0.05)`
                  : 'none',
              }}
              id={`pillar-${pillar.id}`}
            >
              {/* Icon */}
              <div className={`text-5xl mb-12 ${pillar.accentColor} font-mono transition-transform duration-300 ${hoveredPillar === pillar.id ? 'scale-125' : ''}`}>
                {pillar.icon}
              </div>

              {/* Header */}
              <div className="mb-10">
                <p className={`text-xs font-mono tracking-[0.3em] uppercase ${pillar.accentColor} mb-4 opacity-70`}>
                  {pillar.subtitle}
                </p>
                <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white">
                  {pillar.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-[2.2] mb-12">
                {pillar.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {pillar.tags.map(tag => (
                  <span
                    key={tag}
                    className={`text-xs px-5 py-2.5 rounded-full border border-slate-700/60 text-slate-500 bg-slate-900/50 font-mono tracking-wide transition-all duration-300
                      ${hoveredPillar === pillar.id ? 'border-slate-600 text-slate-400' : ''}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover corner accent */}
              <div
                className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${pillar.accentColor.replace('text-', 'bg-')}
                  ${hoveredPillar === pillar.id ? 'opacity-100 scale-150' : 'opacity-30'}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bio strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-32 p-14 sm:p-16 rounded-3xl border border-slate-800/60 bg-slate-900/30 flex flex-col md:flex-row gap-14 items-start md:items-center"
        >
          {/* Avatar placeholder */}
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl font-bold font-['Space_Grotesk'] text-white shadow-lg shadow-indigo-500/20">
            C
          </div>
          <div className="flex-1">
            <p className="text-slate-300 text-base leading-relaxed">
              Based in <span className="text-indigo-400 font-medium">India</span> · Creative Head Intern with a relentless focus on
              <span className="text-white font-medium"> output quality</span> over output volume. I approach every project as
              a director approaches a scene — with vision, precision, and an obsession for the final frame.
            </p>
          </div>
          <div className="flex-shrink-0 text-slate-700 text-4xl font-['Space_Grotesk'] font-bold select-none">
            →
          </div>
        </motion.div>
      </div>
    </section>
  )
}
