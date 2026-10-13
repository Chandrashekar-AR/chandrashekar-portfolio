import { Download, ArrowRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-14 sm:py-16 md:py-20" style={{ overflowX: 'clip' }}>
      {/* Main content area — min-h-screen + section padding keeps it clear of the fixed navbar without breaking centering */}
      <div className="relative z-10 flex flex-col items-center gap-y-6 sm:gap-y-7 md:gap-y-8 w-full px-6">
        {/* Name heading */}
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[4.5vw] min-[360px]:text-[4.8vw] sm:text-[5vw] md:text-[5.2vw] lg:text-[5.5vw]">
            Hi, i&apos;m Chandrashekar AR
          </h1>
        </FadeIn>

        {/* Role badge — between name and headline */}
        <FadeIn delay={0.3} y={20}>
          <div className="inline-flex items-center gap-2.5 border border-zinc-800 bg-zinc-900/50 rounded-full px-4 sm:px-5 py-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(6,182,212,0.7)] animate-pulse" />
            <span className="font-mono text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-widest text-[#D7E2EA]/70">
              AI Artist &amp; Creative Director
            </span>
          </div>
        </FadeIn>

        {/* Main headline */}
        <FadeIn delay={0.45} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-[0.95] tracking-tighter text-center select-none"
            style={{ fontSize: 'clamp(2.25rem, 6.5vw, 6.5rem)' }}
          >
            Engineering
            <br />
            Human
            <br />
            <span
              style={{
                background: 'linear-gradient(180deg, #FEFCE8 0%, #FEF9C3 25%, #FDE047 50%, #FBBF24 75%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Attention.
            </span>
          </h2>
        </FadeIn>

        {/* Call-to-action buttons — same centered axis as the headline above */}
        <FadeIn delay={0.6} y={20} className="w-full">
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {/* Primary — View resume (opens in a new tab so the portfolio stays visible) */}
            <a
              href="https://drive.google.com/file/d/17ixAMudoIWGV59rH19mxyP5UpwJk1ttm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 text-black font-mono font-bold text-[11px] sm:text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]"
              style={{
                background: 'linear-gradient(180deg, #FEFCE8 0%, #FEF9C3 25%, #FDE047 50%, #FBBF24 75%, #F59E0B 100%)',
              }}
            >
              <Download size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              [Download Resume]
            </a>

            {/* Secondary — Access portfolio (smooth-scrolls to the About section) */}
            <a
              href="#about"
              className="group inline-flex items-center gap-2.5 border border-zinc-800 font-mono text-zinc-300 text-[11px] sm:text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-all duration-300 hover:border-zinc-600 hover:text-white"
            >
              [Access Portfolio]
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
