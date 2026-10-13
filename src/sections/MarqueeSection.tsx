import {
  Aperture,
  BarChart3,
  UserRound,
  LayoutGrid,
  Mic,
  Scissors,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import FadeIn from '../components/FadeIn'

interface Capability {
  number: string
  name: string
  subtitle: string
  icon: LucideIcon
  featured?: boolean
}

const CAPABILITIES: Capability[] = [
  {
    number: '01',
    name: 'AI Creative Direction',
    subtitle: 'Concept design and Prompt Engineering using Higgsfield and Runway',
    icon: Aperture,
  },
  {
    number: '02',
    name: 'Content Research & Styling',
    subtitle: 'Storyboarding and visual references using Chatgpt, Claude and Grok',
    icon: BarChart3,
    featured: true,
  },
  {
    number: '03',
    name: 'Character Building',
    subtitle: 'Character consistency using Nanobanana and GPT image',
    icon: UserRound,
  },
  {
    number: '04',
    name: 'Storyboarding & Pre-Visuals',
    subtitle: 'Breaking scripts into scenes and shots, planning camera angles, framing, transitions.',
    icon: LayoutGrid,
  },
  {
    number: '05',
    name: 'AI Audio & Narration Design',
    subtitle: 'AI lipsync visuals using Heygen and Voiceovers using Elevenlabs',
    icon: Mic,
  },
  {
    number: '06',
    name: 'Video Editing',
    subtitle: 'Assembling generated footage using Davinci Resolve and VN Editor',
    icon: Scissors,
  },
]

function CapabilityCard({ item, index }: { item: Capability; index: number }) {
  const Icon = item.icon

  return (
    <li className="h-full">
      <FadeIn delay={index * 0.06} y={24} className="h-full">
        <article
          className={`group flex h-full flex-col gap-2.5 rounded-2xl border p-5 transition-all duration-300 sm:gap-3 sm:p-6 md:p-7
            ${item.featured
              ? 'border-cyan-400/40 bg-cyan-400/[0.06]'
              : 'border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.03]'
            }
            hover:border-cyan-400/50 hover:bg-[#D7E2EA]/[0.07] hover:shadow-[0_0_45px_-18px_rgba(34,211,238,0.45)]`}
        >
          <div className="flex items-start justify-between gap-3">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-400/80">
              {item.number}
            </span>
            <Icon
              aria-hidden="true"
              strokeWidth={1.5}
              className="h-5 w-5 shrink-0 text-cyan-400/70 transition-colors duration-300 group-hover:text-cyan-300"
            />
          </div>

          <h3 className="mt-1 text-[15px] font-bold uppercase leading-snug tracking-tight text-[#D7E2EA] transition-colors duration-300 group-hover:text-white sm:text-base md:text-lg">
            {item.name}
          </h3>

          <p className="font-mono text-[10px] uppercase leading-relaxed tracking-widest text-[#D7E2EA]/45 transition-colors duration-300 group-hover:text-[#D7E2EA]/70 sm:text-[11px]">
            {item.subtitle}
          </p>

          <span
            aria-hidden="true"
            className={`mt-auto block h-px transition-all duration-300 ${item.featured
              ? 'w-full bg-cyan-400/60'
              : 'w-8 bg-cyan-400/40 group-hover:w-full group-hover:bg-cyan-400'
              }`}
          />
        </article>
      </FadeIn>
    </li>
  )
}

export default function MarqueeSection() {
  return (
    <section id="core-capabilities" className="bg-[#0C0C0C] py-20 sm:py-24 md:py-32 overflow-hidden">
      {/* Section heading — matches the "About me" heading style exactly */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{
            fontSize: 'clamp(1.75rem, 5.5vw, 80px)',
            background: 'linear-gradient(180deg, #FEFCE8 0%, #FEF9C3 25%, #FDE047 50%, #FBBF24 75%, #F59E0B 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          CORE CAPABILITIES
        </h2>
      </FadeIn>

      {/* Capability cards — 1 col mobile / 2 cols tablet / 3 cols desktop */}
      <ul className="mx-auto grid max-w-6xl list-none grid-cols-1 gap-4 px-5 sm:grid-cols-2 sm:gap-5 sm:px-8 md:gap-6 md:px-10 lg:grid-cols-3">
        {CAPABILITIES.map((item, i) => (
          <CapabilityCard key={item.number} item={item} index={i} />
        ))}
      </ul>
    </section>
  )
}
