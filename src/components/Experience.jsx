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

const TIMELINE = [
  {
    id: 'creative-head-intern',
    role: 'Creative Head Intern',
    company: 'High-Growth Startup',
    period: '2025 — Present',
    type: 'Primary Role',
    status: 'current',
    color: 'indigo',
    description:
      'Leading end-to-end creative direction for brand campaigns, digital content strategy, and AI-augmented production workflows. Overseeing visual identity evolution, asset pipeline architecture, and cross-functional creative collaboration.',
    highlights: [
      'Architected AI-driven content pipeline producing 4K cinematic assets at 10× traditional speed',
      'Led brand identity refresh spanning 40+ touchpoints across digital and physical channels',
      'Directed commercial storyboards for 5+ major product launches with cinematic shot design',
      'Established generative media workflows using VEO 3, Imagen 4, and Runway ML',
    ],
    tags: ['Brand Direction', 'AI Production', 'Team Leadership', 'Campaign Strategy'],
  },
  {
    id: 'creative-strategist',
    role: 'Creative Strategist',
    company: 'Freelance & Consulting',
    period: '2024 — 2025',
    type: 'Strategy & Consulting',
    status: 'past',
    color: 'purple',
    description:
      'Delivered bespoke creative strategies for brands seeking elevated visual identity, content differentiation, and social media performance. Specialized in moodboard development, content architecture, and multimedia asset production.',
    highlights: [
      'Produced 200+ branded content assets for clients across fashion, F&B, and technology sectors',
      'Designed comprehensive brand style guides ensuring consistency across all channels',
      'Developed automated content generation workflows cutting production time by 60%',
      'Consulted on social media visual strategy achieving 3× engagement uplift',
    ],
    tags: ['Brand Consulting', 'Content Strategy', 'Visual Identity', 'Multimedia Production'],
  },
  {
    id: 'multimedia-producer',
    role: 'Multimedia Content Producer',
    company: 'Independent Projects',
    period: '2023 — 2024',
    type: 'Production',
    status: 'past',
    color: 'pink',
    description:
      'Hands-on production of video, motion graphics, and visual content for digital platforms. Built foundational expertise in cinematic storytelling, motion design, and the creative use of emerging AI generative tools.',
    highlights: [
      'Created and edited 50+ long-form and short-form video productions for digital audiences',
      'Developed motion graphic templates reducing future production cycles by 40%',
      'Pioneered early adoption of AI image generation tools for concept visualization',
      'Built personal brand identity system establishing distinctive visual signature',
    ],
    tags: ['Video Production', 'Motion Graphics', 'Storytelling', 'AI Tools'],
  },
]

const COLOR_ACCENT = {
  indigo: {
    dot: 'bg-indigo-500',
    ring: 'ring-indigo-500/30',
    badge: 'bg-indigo-900/40 text-indigo-300 border-indigo-500/20',
    tag: 'bg-indigo-950/60 text-indigo-400 border-indigo-500/20',
    border: 'border-indigo-500/20',
    glow: 'shadow-indigo-500/10',
    text: 'text-indigo-400',
    bullet: 'text-indigo-400',
  },
  purple: {
    dot: 'bg-purple-500',
    ring: 'ring-purple-500/30',
    badge: 'bg-purple-900/40 text-purple-300 border-purple-500/20',
    tag: 'bg-purple-950/60 text-purple-400 border-purple-500/20',
    border: 'border-purple-500/20',
    glow: 'shadow-purple-500/10',
    text: 'text-purple-400',
    bullet: 'text-purple-400',
  },
  pink: {
    dot: 'bg-pink-500',
    ring: 'ring-pink-500/30',
    badge: 'bg-pink-900/40 text-pink-300 border-pink-500/20',
    tag: 'bg-pink-950/60 text-pink-400 border-pink-500/20',
    border: 'border-pink-500/20',
    glow: 'shadow-pink-500/10',
    text: 'text-pink-400',
    bullet: 'text-pink-400',
  },
}

export default function Experience() {
  const [sectionRef, inView] = useInView(0.05)
  const [expanded, setExpanded] = useState('creative-head-intern')

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative px-8 overflow-hidden"
      aria-label="Journey and Experience"
    >
      {/* Subtle divider line */}
      <div
        className="absolute left-6 right-6 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.15), transparent)' }}
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
          <p className="text-xs font-mono text-pink-500 tracking-[0.4em] uppercase mb-8">
            04 / Journey
          </p>
          <h2 className="font-['Space_Grotesk'] text-5xl sm:text-6xl font-bold text-white mb-12 section-underline">
            <BlurText
              text="The Trajectory"
              delay={80}
              animateBy="words"
              direction="top"
            />
          </h2>
          <p className="max-w-2xl text-slate-400 text-lg leading-[2.2] tracking-wide">
            A deliberate path from independent creation to strategic creative leadership —
            each chapter building toward greater impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px hidden sm:block"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.3) 10%, rgba(168,85,247,0.3) 60%, transparent)',
              transform: 'translateX(-50%)',
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-24">
            {TIMELINE.map((item, i) => {
              const c = COLOR_ACCENT[item.color]
              const isExpanded = expanded === item.id
              const isEven = i % 2 === 0

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className={`relative flex gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  id={`timeline-${item.id}`}
                >
                  {/* Content side */}
                  <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <button
                      onClick={() => setExpanded(isExpanded ? null : item.id)}
                      className={`w-full text-left ${isEven ? 'md:text-right' : ''} cursor-pointer`}
                      aria-expanded={isExpanded}
                      aria-controls={`timeline-details-${item.id}`}
                    >
                      <div
                        className={`inline-block glass-card rounded-2xl p-10 text-left transition-all duration-400
                          ${isExpanded ? `border-${item.color}-500/30 shadow-xl ${c.glow}` : ''}
                          w-full md:w-auto md:min-w-[380px] max-w-xl`}
                      >
                        {/* Status & type */}
                        <div className={`flex items-center gap-3 mb-6 ${isEven ? 'md:justify-end' : ''}`}>
                          {item.status === 'current' && (
                            <span className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border font-mono ${c.badge}`}>
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Active
                            </span>
                          )}
                          <span className={`text-xs font-mono text-slate-600`}>{item.type}</span>
                        </div>

                        {/* Role */}
                        <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white mb-3">
                          {item.role}
                        </h3>
                        <div className={`flex items-center gap-3 mb-6 ${isEven ? 'md:justify-end' : ''}`}>
                          <span className={`text-sm font-medium ${c.text}`}>{item.company}</span>
                          <span className="text-slate-700 text-xs">·</span>
                          <span className="text-xs font-mono text-slate-600">{item.period}</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-[2.05] tracking-wide">{item.description}</p>

                        {/* Expand toggle */}
                        <div className={`mt-5 flex items-center gap-1 ${isEven ? 'md:justify-end' : ''}`}>
                          <span className={`text-xs font-mono transition-colors ${c.text}`}>
                            {isExpanded ? 'Collapse ↑' : 'View highlights ↓'}
                          </span>
                        </div>
                      </div>
                    </button>

                    {/* Expanded details */}
                    <div
                      id={`timeline-details-${item.id}`}
                      className={`overflow-hidden transition-all duration-500 ease-in-out
                        ${isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                    >
                      <div className={`rounded-2xl border ${c.border} bg-slate-900/40 p-10 text-left`}>
                        <h4 className={`text-xs font-mono tracking-widest uppercase ${c.text} mb-5`}>
                          Key Highlights
                        </h4>
                        <ul className="space-y-6">
                          {item.highlights.map((h, j) => (
                            <li key={j} className="flex items-start gap-4 text-sm text-slate-400 leading-[2.0]">
                              <span className={`${c.bullet} mt-0.5 flex-shrink-0 font-bold`}>›</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-4 mt-10">
                          {item.tags.map(tag => (
                            <span key={tag} className={`text-xs px-3 py-1.5 rounded-full border font-mono ${c.tag}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot (hidden on mobile) */}
                  <div className="hidden sm:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ${c.dot} ring-4 ${c.ring} ring-offset-2 ring-offset-slate-950`} />
                  </div>

                  {/* Empty spacer on the other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
