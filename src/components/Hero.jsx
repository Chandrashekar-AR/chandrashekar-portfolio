import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import BlurText from './BlurText'

const TYPED_STRINGS = [
  'Brand Narrative Architect',
  'Cinematic Visual Strategist',
  'AI Multimedia Director',
  'Creative Head Intern',
]

function useTypewriter(strings, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [stringIndex, setStringIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[stringIndex]
    let timeout

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), speed)
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), speed / 2)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setStringIndex(i => (i + 1) % strings.length)
    }

    setDisplay(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, stringIndex, strings, speed, pause])

  return display
}

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const STATS = [
  { value: '20+', label: 'Cinematic Projects' },
  { value: '4K', label: 'AI Video Production' },
  { value: '∞', label: 'Creative Iterations' },
  { value: '360°', label: 'Brand Coverage' },
]

export default function Hero({ scrollTo }) {
  const typed = useTypewriter(TYPED_STRINGS)
  const [heroRef, heroInView] = useInView(0.1)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div id="hero" ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          transition: 'transform 0.1s ease',
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-indigo-500/20 bg-indigo-950/40 text-xs text-indigo-400 font-mono tracking-widest uppercase mb-16"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Creative Head Intern — Available for Vision-Led Projects
        </motion.div>

        {/* Main heading */}
        <h1 className="font-impact text-6xl sm:text-8xl lg:text-9xl font-black leading-none tracking-tighter mb-16 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 uppercase">
          <BlurText
            text="Chandrashekar"
            delay={50}
            animateBy="letters"
            direction="top"
            className="text-white justify-center font-impact"
          />
          <BlurText
            text="AR"
            delay={100}
            animateBy="letters"
            direction="bottom"
            className="gradient-text justify-center font-impact"
          />
        </h1>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="h-12 flex items-center justify-center mb-16"
        >
          <p className="text-xl sm:text-2xl font-['Space_Grotesk'] font-light text-slate-400 tracking-wide">
            <span className="text-indigo-300">{typed}</span>
            <span className="cursor-blink text-indigo-400 ml-0.5">|</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="max-w-2xl mx-auto text-slate-500 text-base sm:text-lg leading-[2.15] mb-20 font-light tracking-wide"
        >
          Orchestrating high-impact brand narratives, cinematic commercial storyboards, and automated{' '}
          <span className="text-slate-300">AI-powered multimedia pipelines</span> that shape culture and
          move audiences. From concept to render — every frame with intent.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-8 justify-center mb-32"
        >
          <button
            className="btn-primary font-['Space_Grotesk']"
            onClick={() => scrollTo('about')}
            id="hero-explore-btn"
          >
            ↓ Explore Direction
          </button>
          <button
            className="btn-outline font-['Space_Grotesk']"
            onClick={() => scrollTo('contact')}
            id="hero-brief-btn"
          >
            Initiate Brief →
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-slate-800/60 rounded-2xl overflow-hidden max-w-3xl mx-auto bg-slate-800/20"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-12 px-6 bg-slate-950/80 hover:bg-slate-900/80 transition-colors duration-300 group"
            >
              <span className="text-3xl font-bold font-['Space_Grotesk'] gradient-text group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="text-xs text-slate-600 mt-3 tracking-widest uppercase font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => scrollTo('about')}
        aria-label="Scroll down"
      >
        <span className="text-xs text-slate-700 tracking-widest uppercase font-mono group-hover:text-slate-500 transition-colors">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5 group-hover:border-indigo-500/50 transition-colors">
          <div className="w-0.5 h-2 bg-indigo-400 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </div>
  )
}
