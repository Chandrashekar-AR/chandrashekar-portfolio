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

const CONTACT_LINKS = [
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    handle: 'chandrashekar-ar',
    href: 'https://linkedin.com/in/chandrashekar-ar',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'indigo',
    action: 'Connect',
  },
  {
    id: 'contact-github',
    label: 'GitHub',
    handle: 'chandrashekar-ar',
    href: 'https://github.com/chandrashekar-ar',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: 'purple',
    action: 'Follow',
  },
  {
    id: 'contact-email',
    label: 'Direct Email',
    handle: 'chandrashekar.ar@email.com',
    href: 'mailto:chandrashekar.ar@email.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
    color: 'pink',
    action: 'Message',
  },
]

const COLOR_MAP = {
  indigo: {
    bg: 'bg-indigo-950/30',
    border: 'border-indigo-500/20',
    hoverBorder: 'hover:border-indigo-400/50',
    icon: 'text-indigo-400',
    button: 'bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 border-indigo-500/30 hover:border-indigo-400/60',
    glow: 'hover:shadow-indigo-500/10',
    dot: 'bg-indigo-500',
  },
  purple: {
    bg: 'bg-purple-950/30',
    border: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-400/50',
    icon: 'text-purple-400',
    button: 'bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 border-purple-500/30 hover:border-purple-400/60',
    glow: 'hover:shadow-purple-500/10',
    dot: 'bg-purple-500',
  },
  pink: {
    bg: 'bg-pink-950/20',
    border: 'border-pink-500/20',
    hoverBorder: 'hover:border-pink-400/50',
    icon: 'text-pink-400',
    button: 'bg-pink-600/20 hover:bg-pink-600/40 text-pink-300 border-pink-500/30 hover:border-pink-400/60',
    glow: 'hover:shadow-pink-500/10',
    dot: 'bg-pink-500',
  },
}

export default function Contact() {
  const [sectionRef, inView] = useInView(0.05)
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const inputClass = (field) => `
    w-full bg-slate-900/60 border rounded-xl px-6.5 py-5 text-slate-200 text-sm placeholder-slate-700
    outline-none transition-all duration-300 font-['Inter'] leading-relaxed
    ${focusedField === field
      ? 'border-indigo-500/60 bg-slate-900/80 shadow-lg shadow-indigo-500/5'
      : 'border-slate-800 hover:border-slate-700'
    }
  `

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-8 overflow-hidden"
      aria-label="Contact and Transmission"
    >
      <div
        className="absolute left-6 right-6 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(236,72,153,0.15), transparent)' }}
        aria-hidden="true"
      />

      {/* Bottom radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-28 text-center"
        >
          <p className="text-xs font-mono text-pink-500 tracking-[0.4em] uppercase mb-8">
            06 / Transmission
          </p>
          <h2 className="font-['Space_Grotesk'] text-5xl sm:text-6xl font-bold text-white mb-10">
            <BlurText
              text="Let's Build Something"
              delay={80}
              animateBy="words"
              direction="top"
              className="justify-center"
            />
            <span className="block mt-4">
              <BlurText
                text="Exceptional"
                delay={120}
                animateBy="words"
                direction="bottom"
                className="gradient-text justify-center"
              />
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-[2.2] tracking-wide">
            Whether you're launching a brand, directing a campaign, or seeking a creative collaborator —
            I'm open to conversations that lead somewhere remarkable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">

          {/* LEFT: Contact channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xs font-mono text-slate-600 tracking-widest uppercase mb-10">
              Transmission Channels
            </p>

            {CONTACT_LINKS.map((link, i) => {
              const c = COLOR_MAP[link.color]
              return (
                <motion.a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target={link.label !== 'Direct Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                  className={`flex items-center gap-8 p-8 rounded-2xl border transition-all duration-400 group cursor-pointer no-underline
                    ${c.bg} ${c.border} ${c.hoverBorder} hover:-translate-y-1 hover:shadow-xl ${c.glow}`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${c.border} bg-slate-900/60 ${c.icon} group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold font-['Space_Grotesk'] text-sm mb-0.5">{link.label}</p>
                    <p className="text-slate-600 text-xs font-mono truncate group-hover:text-slate-500 transition-colors tracking-wide">
                      {link.handle}
                    </p>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all duration-300 tracking-wide ${c.button}`}>
                    {link.action} →
                  </span>
                </motion.a>
              )
            })}

            {/* Availability status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-14 p-8 rounded-2xl border border-slate-800/60 bg-slate-900/30 flex items-center gap-6"
            >
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
              </div>
              <div>
                <p className="text-sm text-slate-300 font-medium tracking-wide">Open to Opportunities</p>
                <p className="text-xs text-slate-600 font-mono mt-1">
                  Internships · Freelance · Creative Collaborations
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass-card rounded-2xl p-12">
              <p className="text-xs font-mono text-slate-600 tracking-widest uppercase mb-10">
                Send a Direct Brief
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl mb-4 shadow-lg shadow-indigo-500/20">
                    ✓
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white mb-2">
                    Transmission Received
                  </h3>
                  <p className="text-slate-500 text-sm">
                    I'll be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  id="contact-form"
                >
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-600 tracking-widest uppercase mb-4">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClass('name')}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-600 tracking-widest uppercase mb-4">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClass('email')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-600 tracking-widest uppercase mb-4">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="Project brief, collaboration, inquiry..."
                      value={formState.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClass('subject')}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-600 tracking-widest uppercase mb-4">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your vision, project scope, or creative challenge..."
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClass('message')} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    className="btn-primary w-full justify-center flex items-center gap-3 font-['Space_Grotesk']"
                  >
                    <span>Transmit Brief</span>
                    <span className="text-lg">→</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-40 pt-12 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs font-mono">
              C
            </span>
            <span className="text-slate-600 text-sm font-['Space_Grotesk'] tracking-widest uppercase">
              Chandrashekar AR
            </span>
          </div>

          <p className="text-xs text-slate-800 font-mono tracking-wide">
            © 2025 · Creative Head & Visual Strategist · Built with React & Tailwind CSS
          </p>

          <div className="flex items-center gap-1 text-xs font-mono text-slate-800">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
            <span>Crafted with intent.</span>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
