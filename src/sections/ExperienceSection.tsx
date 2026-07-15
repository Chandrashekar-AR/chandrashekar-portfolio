import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'

interface TimelineItem {
  id: string
  role: string
  company: string
  period: string
  type: string
  status: string
  description: string
  highlights: string[]
  tags: string[]
}

const TIMELINE: TimelineItem[] = [
  {
    id: 'creative-head-intern',
    role: 'Creative Head Intern',
    company: 'High-Growth Startup',
    period: '2025 — Present',
    type: 'Primary Role',
    status: 'current',
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

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>('creative-head-intern')

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none"
            style={{
              fontSize: 'clamp(3rem, 12vw, 160px)',
              background: 'linear-gradient(180deg, #FEFCE8 0%, #FEF9C3 25%, #FDE047 50%, #FBBF24 75%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Journey
          </h2>
        </FadeIn>

        {/* Timeline list */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l border-[#D7E2EA]/20 flex flex-col gap-16 md:gap-20">
          {TIMELINE.map((item, idx) => {
            const isExpanded = expandedId === item.id
            return (
              <div key={item.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-6 z-10 flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 bg-[#0C0C0C] transition-all duration-300
                      ${isExpanded ? 'border-[#D7E2EA] scale-125' : 'border-[#D7E2EA]/30'}`}
                  />
                </div>

                <FadeIn delay={idx * 0.1} y={30}>
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className={`group cursor-pointer rounded-[30px] border-2 p-6 sm:p-8 md:p-10 transition-all duration-400 select-none
                      ${isExpanded
                        ? 'border-[#D7E2EA] bg-[#0C0C0C]'
                        : 'border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40'
                      }`}
                  >
                    {/* Header info */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="font-semibold text-lg sm:text-xl uppercase tracking-wider text-[#D7E2EA]">
                            {item.role}
                          </h3>
                          {item.status === 'current' && (
                            <span className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase border border-green-500/30 text-green-400 bg-green-500/5 px-2.5 py-0.5 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-[#D7E2EA]/60 text-sm font-medium">
                          {item.company}
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end gap-1 flex-shrink-0">
                        <span className="text-xs font-mono text-[#D7E2EA]/40 uppercase tracking-widest">
                          {item.period}
                        </span>
                        <span className="text-[10px] font-mono text-[#D7E2EA]/30 uppercase tracking-wider">
                          {item.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#D7E2EA]/60 text-sm sm:text-base leading-relaxed font-light mb-6">
                      {item.description}
                    </p>

                    {/* Show toggle text */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[#D7E2EA]/40 uppercase group-hover:text-[#D7E2EA]/80 transition-colors">
                      <span>{isExpanded ? 'Collapse highlights —' : 'View highlights +'}</span>
                    </div>

                    {/* Accordion content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[#D7E2EA]/10 mt-8 pt-8">
                            <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#D7E2EA]/40 mb-4">
                              Key Highlights
                            </h4>
                            <ul className="flex flex-col gap-3 mb-8">
                              {item.highlights.map((highlight, hIdx) => (
                                <li
                                  key={hIdx}
                                  className="flex items-start gap-3 text-sm text-[#D7E2EA]/70 leading-relaxed font-light"
                                >
                                  <span className="text-[#D7E2EA]/40 select-none mt-0.5">•</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] font-mono tracking-wider text-[#D7E2EA]/50 border border-[#D7E2EA]/15 bg-[#D7E2EA]/5 px-3 py-1.5 rounded-full uppercase"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
