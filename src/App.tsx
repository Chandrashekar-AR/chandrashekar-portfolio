import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './sections/HeroSection.tsx'
import MarqueeSection from './sections/MarqueeSection.tsx'
import AboutSection from './sections/AboutSection.tsx'
import ServicesSection from './sections/ServicesSection.tsx'
import ProjectsSection from './sections/ProjectsSection.tsx'
import SkillsSection from './sections/SkillsSection.tsx'
import ExperienceSection from './sections/ExperienceSection.tsx'
import CertificationsSection from './sections/CertificationsSection.tsx'
import ContactSection from './sections/ContactSection.tsx'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#experience' },
  { label: 'Credentials', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function App() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sectionIds = ['about', 'services', 'projects', 'skills', 'experience', 'certifications', 'contact']
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    }

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(callback, observerOptions)

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ overflowX: 'clip' }} className="relative bg-[#0C0C0C] text-[#D7E2EA]">
      {/* Floating glassmorphic header navbar */}
      <motion.header
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-6 left-1/2 z-50 bg-[#090909]/90 backdrop-blur-md border border-[#222222]/80 rounded-full px-8 py-3.5 flex gap-4 sm:gap-6 md:gap-8 items-center justify-center max-w-[95vw] shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
      >
        {NAV_LINKS.map((item) => {
          const isActive = activeSection === item.href
          return (
            <a
              key={item.label}
              href={item.href}
              className={`uppercase tracking-widest text-[9px] min-[360px]:text-[10px] sm:text-[11px] md:text-xs font-bold transition-all duration-300 no-underline select-none
                ${isActive ? 'text-white scale-105' : 'text-[#D7E2EA]/40 hover:text-white/80'}`}
            >
              {item.label}
            </a>
          )
        })}
      </motion.header>

      {/* Sections rendering */}
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  )
}
