import { useState, useEffect, useRef, useCallback } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import './index.css'

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'Vision' },
  { id: 'skills', label: 'Arsenal' },
  { id: 'experience', label: 'Journey' },
  { id: 'certifications', label: 'Credentials' },
  { id: 'contact', label: 'Transmit' },
]

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navRefs = useRef({})
  const observerRef = useRef(null)

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for active section detection
  useEffect(() => {
    const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    )

    sections.forEach(s => observerRef.current.observe(s))
    return () => observerRef.current?.disconnect()
  }, [])

  // Update nav indicator position
  useEffect(() => {
    const el = navRefs.current[activeSection]
    if (el) {
      const { offsetLeft, offsetWidth } = el
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth })
    }
  }, [activeSection])

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMenuOpen(false)
    }
  }, [])

  return (
    <div className="noise-overlay relative min-h-screen bg-slate-950 text-slate-200">

      {/* Fixed ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="aurora-bg w-[600px] h-[600px] bg-indigo-600 -top-32 -left-32" />
        <div className="aurora-bg w-[500px] h-[500px] bg-purple-700 top-1/3 -right-48" style={{ animationDelay: '3s' }} />
        <div className="aurora-bg w-[400px] h-[400px] bg-violet-600 bottom-0 left-1/4" style={{ animationDelay: '6s' }} />
      </div>

      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass py-3 border-b border-slate-800/60'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Name */}
          <button
            onClick={() => scrollTo('hero')}
            className="group flex items-center gap-3 cursor-pointer"
            aria-label="Go to top"
            id="nav-logo"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm font-mono">
              C
            </span>
            <span className="font-semibold text-sm tracking-widest text-slate-300 group-hover:text-white transition-colors uppercase font-['Space_Grotesk']">
              Chandrashekar AR
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 relative">
            {/* Sliding indicator */}
            <span
              className="absolute bottom-0 h-[1.5px] bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full transition-all duration-400 ease-in-out pointer-events-none"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              aria-hidden="true"
            />
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                ref={el => { navRefs.current[item.id] = el }}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 text-xs font-medium tracking-widest uppercase transition-colors duration-300 cursor-pointer rounded-sm
                  ${activeSection === item.id ? 'text-indigo-300' : 'text-slate-500 hover:text-slate-200'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollTo('contact')}
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-widest uppercase hover:bg-indigo-600/40 hover:border-indigo-400/60 hover:text-indigo-200 transition-all duration-300 cursor-pointer"
            id="nav-cta"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Open to Work
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="nav-mobile-toggle"
          >
            <span className={`w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass border-t border-slate-800/60 px-6 py-4 flex flex-col gap-2">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left py-2 px-3 rounded-lg text-sm font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer
                  ${activeSection === item.id
                    ? 'text-indigo-300 bg-indigo-600/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main>
        <Hero scrollTo={scrollTo} />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}
