import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'

interface ContactLink {
  id: string
  label: string
  handle: string
  href: string
  icon: React.ReactNode
  action: string
}

const CONTACT_LINKS: ContactLink[] = [
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
    action: 'Follow',
  },
  {
    id: 'contact-email',
    label: 'Direct Email',
    handle: 'chandrashekarar42@gmail.com',
    href: 'mailto:chandrashekar42@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
    action: 'Message',
  },
]

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20 md:mb-28">
            <h2
              className="hero-heading font-black uppercase leading-none"
              style={{
                fontSize: 'clamp(3rem, 12vw, 160px)',
                background: 'linear-gradient(180deg, #FEFCE8 0%, #FEF9C3 25%, #FDE047 50%, #FBBF24 75%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Transmit
            </h2>
            <p className="max-w-xl mx-auto text-[#D7E2EA]/60 text-sm sm:text-base leading-relaxed mt-6 font-light">
              Whether you are launching a brand, directing a campaign, or seeking a creative collaborator — I am open to conversations that lead somewhere remarkable.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-start">
          {/* LEFT: Contact Channels */}
          <FadeIn delay={0.15} y={30} className="flex flex-col gap-6 w-full">
            <h3 className="text-[10px] font-mono tracking-widest text-[#D7E2EA]/40 uppercase mb-2">
              Transmission Channels
            </h3>

            {CONTACT_LINKS.map((link) => (
              <a
                key={link.id}
                id={link.id}
                href={link.href}
                target={link.label !== 'Direct Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 rounded-[24px] border-2 border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 hover:-translate-y-1 bg-[#0C0C0C] transition-all duration-300 group select-none no-underline"
              >
                <div className="w-12 h-12 rounded-xl border-2 border-[#D7E2EA]/10 bg-[#0c0c0c] text-[#D7E2EA]/60 group-hover:text-[#D7E2EA] group-hover:border-[#D7E2EA]/30 flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#D7E2EA] font-semibold text-sm tracking-wide uppercase mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-[#D7E2EA]/40 text-xs font-mono truncate tracking-wide">
                    {link.handle}
                  </p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest border border-[#D7E2EA]/20 text-[#D7E2EA]/50 group-hover:border-[#D7E2EA] group-hover:text-[#D7E2EA] px-3.5 py-1.5 rounded-lg transition-all duration-300">
                  {link.action} →
                </span>
              </a>
            ))}

            {/* Availability status */}
            <div className="mt-6 p-6 rounded-[24px] border-2 border-[#D7E2EA]/10 bg-[#0C0C0C] flex items-center gap-5">
              <div className="relative flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-[#D7E2EA] font-semibold uppercase tracking-wider">
                  Open to Opportunities
                </p>
                <p className="text-[10px] sm:text-xs text-[#D7E2EA]/40 font-mono uppercase tracking-wide mt-1">
                  Internships · Freelance · Collaborations
                </p>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT: Contact Form */}
          <FadeIn delay={0.25} y={30} className="w-full">
            <div className="rounded-[30px] border-2 border-[#D7E2EA]/30 bg-[#0c0c0c] p-6 sm:p-8 md:p-10">
              <h3 className="text-[10px] font-mono tracking-widest text-[#D7E2EA]/40 uppercase mb-8">
                Send a Direct Brief
              </h3>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-xl mb-4 border-2 border-white shadow-lg"
                      style={{
                        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      }}
                    >
                      ✓
                    </div>
                    <h4 className="text-lg font-semibold text-[#D7E2EA] uppercase tracking-wider mb-2">
                      Transmission Received
                    </h4>
                    <p className="text-[#D7E2EA]/50 text-xs sm:text-sm font-light">
                      I will respond to your transmission within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-[10px] font-mono text-[#D7E2EA]/40 tracking-widest uppercase mb-2"
                        >
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
                          className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA]/10 rounded-2xl px-5 py-4 text-[#D7E2EA] text-sm placeholder-[#D7E2EA]/20 outline-none focus:border-[#D7E2EA]/50 transition-all duration-300 font-medium"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-[10px] font-mono text-[#D7E2EA]/40 tracking-widest uppercase mb-2"
                        >
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
                          className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA]/10 rounded-2xl px-5 py-4 text-[#D7E2EA] text-sm placeholder-[#D7E2EA]/20 outline-none focus:border-[#D7E2EA]/50 transition-all duration-300 font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-[10px] font-mono text-[#D7E2EA]/40 tracking-widest uppercase mb-2"
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        placeholder="Project brief, inquiry, collaboration..."
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA]/10 rounded-2xl px-5 py-4 text-[#D7E2EA] text-sm placeholder-[#D7E2EA]/20 outline-none focus:border-[#D7E2EA]/50 transition-all duration-300 font-medium"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-[10px] font-mono text-[#D7E2EA]/40 tracking-widest uppercase mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me about your vision..."
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA]/10 rounded-2xl px-5 py-4 text-[#D7E2EA] text-sm placeholder-[#D7E2EA]/20 outline-none focus:border-[#D7E2EA]/50 transition-all duration-300 font-medium resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      id="contact-submit"
                      className="w-full rounded-full text-white font-semibold uppercase tracking-widest py-4 text-xs sm:text-sm cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-95"
                      style={{
                        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                        outline: '2px solid white',
                        outlineOffset: '-3px',
                      }}
                    >
                      Transmit Brief →
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>

        {/* Footer */}
        <FadeIn delay={0.4} y={20} className="w-full">
          <footer className="mt-28 sm:mt-36 pt-12 border-t-2 border-[#D7E2EA]/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[#D7E2EA]/30 text-[10px] sm:text-xs font-mono tracking-wider">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg border border-[#D7E2EA]/30 bg-[#0C0C0C] flex items-center justify-center text-[#D7E2EA] font-black text-xs">
                C
              </span>
              <span className="text-[#D7E2EA]/60 font-semibold uppercase">
                Chandrashekar AR
              </span>
            </div>

            <p className="uppercase text-center sm:text-left leading-relaxed">
              © 2026 · Creative Head & Visual Strategist · Built with React & Tailwind CSS
            </p>

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA]/40" />
              <span className="uppercase">Crafted with intent.</span>
            </div>
          </footer>
        </FadeIn>
      </div>
    </section>
  )
}
