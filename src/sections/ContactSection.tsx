import React, { useState } from 'react'
import FadeIn from '../components/FadeIn'
import { Tooltip } from '../components/Tooltip'
import Magnet from '../components/Tooltip'

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
    handle: '',
    href: 'https://linkedin.com/in/chandrashekar-ar',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    action: '',
  },
  {
    id: 'contact-instagram',
    label: 'Instagram',
    handle: '',
    href: 'https://instagram.com/_chandrashekar.a.r_',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    action: '',
  },
  {
    id: 'contact-github',
    label: 'GitHub',
    handle: '',
    href: 'https://github.com/chandrashekar-ar',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    action: '',
  },
]

const EMAIL = 'chandrashekarar42@gmail.com'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
              className="hero-heading font-black uppercase leading-none transmit-glow"
              style={{
                fontSize: 'clamp(1.75rem, 5.5vw, 80px)',
                background: 'linear-gradient(180deg, #FEFCE8 0%, #FEF9C3 25%, #FDE047 50%, #FBBF24 75%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Transmit
            </h2>

            {/* Availability status - moved between Transmit and Email */}
            <div className="mt-10 p-5 sm:p-6 rounded-[20px] sm:rounded-[24px] border-2 border-[#FBBF24]/40 bg-[#0C0C0C] flex items-center justify-center gap-4 max-w-md mx-auto shadow-[0_0_20px_rgba(251,191,36,0.3)] shadow-[#FBBF24]/20">
              <div className="relative flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm text-[#D7E2EA] font-semibold uppercase tracking-wider">
                  Open to Opportunities / Collaborations
                </p>
              </div>
            </div>

            {/* Email Display */}
            <div className="mt-16 flex flex-col items-center gap-1">
              <Tooltip
                content={
                  <div className="flex items-center gap-2 text-[#D7E2EA]/70">
                    <svg className="w-4 h-4 text-[#FBBF24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span className="font-mono uppercase tracking-widest text-[9px]">Click to copy</span>
                  </div>
                }
                position="bottom"
                delay={150}
              >
                <button
                  onClick={handleCopy}
                  className="group relative inline-flex items-center gap-1 px-6 py-4 bg-transparent border-0 hover:border-0 rounded-[16px] transition-all duration-300 cursor-pointer select-none"
                >
                  <span
                    className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide transition-all duration-300 group-hover:scale-[1.1] relative"
                    style={{
                      fontFamily: 'Impact, "Haettenschweiler", "Franklin Gothic Bold", sans-serif',
                      background: 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    chandrashekarar42@gmail.com
                    <span className="relative inline-block">
                      m
                      {!copied && (
                        <svg
                          className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 text-[#FBBF24]/80 hover:text-[#FBBF24] transition-colors duration-200 cursor-pointer"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                      )}
                    </span>
                  </span>
                  {!copied && (
                    <p className={`
                      text-[10px] font-mono uppercase tracking-widest
                      border rounded-[8px] px-4 py-1.5 backdrop-blur-sm transition-all duration-200
                      cursor-pointer select-none whitespace-nowrap
                      opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto
                      text-[#FBBF24]/90 border-[#FBBF24]/50 bg-[#FBBF24]/10
                      hover:bg-[#FBBF24]/20 hover:border-[#FBBF24]/80 hover:text-[#FBBF24]
                      absolute bottom-[-32px] left-auto right-0
                    `}
                    >
                      Click to Copy email
                    </p>
                  )}
                  {copied && (
                    <p className="text-[10px] font-mono uppercase tracking-widest
                      border rounded-[8px] px-4 py-1.5 backdrop-blur-sm transition-all duration-300
                      cursor-default select-none whitespace-nowrap
                      text-[#00FF88] border-[#00FF88]/60 bg-[#00FF88]/10 shadow-[0_0_15px_rgba(0,255,136,0.35)] shadow-[#00FF88]/25
                      absolute bottom-[-32px] left-auto right-0
                    ">
                      Copied!
                    </p>
                  )}
                </button>
              </Tooltip>
            </div>
          </div>
        </FadeIn>

        {/* Contact Channels - Only 3 profiles */}
        <FadeIn delay={0.15} y={30} className="flex flex-col gap-6 w-full max-w-4xl mx-auto items-center">
          <h3 className="text-[10px] font-mono tracking-widest text-[#D7E2EA]/40 uppercase mb-2 text-center">
            Let's connect
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-3 w-full">
            <div className="social-links-container flex items-center gap-3 px-6 py-3 rounded-[16px] border-2 border-[#FBBF24]/40 bg-[#0C0C0C] shadow-[0_0_20px_rgba(251,191,36,0.3)] shadow-[#FBBF24]/20">
              {CONTACT_LINKS.map((link, index) => (
                <React.Fragment key={link.id}>
                  <a
                    id={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      social-link flex items-center gap-2 px-3 py-2 rounded-[10px] 
                      transition-all duration-300 select-none no-underline
                      ${link.id === 'contact-linkedin'
                        ? 'hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 hover:shadow-[0_0_25px_rgba(10,102,194,0.5)]'
                        : link.id === 'contact-github'
                          ? 'hover:bg-[#FFFFFF]/10 hover:border-[#FFFFFF]/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]'
                          : 'hover:bg-[#E1306C]/20 hover:border-[#E1306C]/50 hover:shadow-[0_0_25px_rgba(225,48,108,0.5)]'
                      }
                    `}
                  >
                    <div className={`
                      w-8 h-8 rounded-lg border border-[#D7E2EA]/10 bg-[#0c0c0c] 
                      flex items-center justify-center transition-all duration-300 flex-shrink-0
                      ${link.id === 'contact-linkedin'
                        ? 'text-[#0A66C2]/60 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:shadow-[0_0_20px_rgba(10,102,194,0.6)]'
                        : link.id === 'contact-github'
                          ? 'text-[#D7E2EA]/60 hover:text-[#FFFFFF] hover:border-[#FFFFFF]/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                          : 'text-[#E1306C]/60 hover:text-[#E1306C] hover:border-[#E1306C]/50 hover:shadow-[0_0_20px_rgba(225,48,108,0.6)]'
                      }
                    `}>
                      {link.icon}
                    </div>
                    <span className="text-[#D7E2EA] font-semibold text-xs tracking-wide uppercase hidden sm:inline">
                      {link.label}
                    </span>
                  </a>
                  {index < CONTACT_LINKS.length - 1 && (
                    <span className="text-[#D7E2EA]/30 font-mono text-xs tracking-widest flex items-center">
                      |
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </FadeIn>

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
