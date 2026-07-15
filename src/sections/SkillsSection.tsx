import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import chatgptNewLogo from '../assets/chatgpt_new.png'
import claudeNewLogo from '../assets/claude_new.png'
import geminiNewLogo from '../assets/gemini_new.png'
import falNewLogo from '../assets/fal_new.png'
import higgsfieldNewLogo from '../assets/higgsfield_new.png'
import runwayNewLogo from '../assets/runway_new.png'
import comfyNewLogo from '../assets/comfy_new.png'
import midjourneyNewLogo from '../assets/midjourney_new.png'
import nanobananaNewLogo from '../assets/nanobanana_new.png'
import klingNewLogo from '../assets/kling_new.png'
import adobeNewLogo from '../assets/adobe_new.png'
import seedanceNewLogo from '../assets/seedance_new.png'
import heygenNewLogo from '../assets/heygen_new.png'
import elevenlabsNewLogo from '../assets/elevenlabs_new.png'
import vnEditorNewLogo from '../assets/vn_editor_new.png'
import davinciNewLogo from '../assets/davinci_new.png'
import canvaNewLogo from '../assets/canva_new.png'

// ---------------------------------------------------------
// SVGs for Tools (High-Fidelity Replicas)
// ---------------------------------------------------------

function ChatGPTIcon() {
  return (
    <img src={chatgptNewLogo} alt="ChatGPT" className="w-6 h-6 object-contain rounded" />
  )
}

function ClaudeIcon() {
  return (
    <img src={claudeNewLogo} alt="Claude" className="w-6 h-6 object-contain rounded" />
  )
}

function GeminiIcon() {
  return (
    <img src={geminiNewLogo} alt="Gemini" className="w-6 h-6 object-contain rounded" />
  )
}

function StoryboardingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#A0AEC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <circle cx="7.5" cy="7.5" r="1" fill="#A0AEC0" />
      <circle cx="16.5" cy="7.5" r="1" fill="#A0AEC0" />
      <line x1="6" y1="16" x2="9" y2="16" />
      <path d="M15 15l1.5 1.5L18 15" />
    </svg>
  )
}

function NarrativeDesignIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#A0AEC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
      <line x1="8" y1="9" x2="10" y2="9" />
    </svg>
  )
}

function CustomApiWorkflowsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#63B3ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

// Named "Proprietary Platforms" in code to match config, but draws laptop/monitor representation
function ProprietaryPlatformsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#A0AEC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  )
}

function FalAIIcon() {
  return (
    <img src={falNewLogo} alt="Fal AI" className="w-6 h-6 object-contain rounded" />
  )
}

function HiggsfieldIcon() {
  return (
    <img src={higgsfieldNewLogo} alt="Higgsfield AI" className="w-6 h-6 object-contain rounded" />
  )
}

function RunwayIcon() {
  return (
    <img src={runwayNewLogo} alt="Runway" className="w-6 h-6 object-contain rounded" />
  )
}

function ComfyUIIcon() {
  return (
    <img src={comfyNewLogo} alt="ComfyUI" className="w-6 h-6 object-contain rounded" />
  )
}

function GPTImageIcon() {
  return (
    <img src={chatgptNewLogo} alt="GPT Image" className="w-6 h-6 object-contain rounded" />
  )
}

function NanobananaIcon() {
  return (
    <img src={nanobananaNewLogo} alt="Nanobanana" className="w-6 h-6 object-contain rounded" />
  )
}

function MidjourneyIcon() {
  return (
    <img src={midjourneyNewLogo} alt="Midjourney" className="w-6 h-6 object-contain rounded" />
  )
}

function KlingIcon() {
  return (
    <img src={klingNewLogo} alt="Kling" className="w-6 h-6 object-contain rounded" />
  )
}

function VeoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.67-.35-1.37-.35-2.09z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  )
}

function Gen4TurboIcon() {
  return (
    <img src={runwayNewLogo} alt="Gen-4 Turbo" className="w-6 h-6 object-contain rounded" />
  )
}

function SeedanceIcon() {
  return (
    <img src={seedanceNewLogo} alt="Seedance" className="w-6 h-6 object-contain rounded" />
  )
}

function HeygenIcon() {
  return (
    <img src={heygenNewLogo} alt="Heygen" className="w-6 h-6 object-contain rounded" />
  )
}

function KlingAvatarIcon() {
  return (
    <img src={klingNewLogo} alt="Kling AI Avatar" className="w-6 h-6 object-contain rounded" />
  )
}

function CanvaIcon() {
  return (
    <img src={canvaNewLogo} alt="Canva" className="w-6 h-6 object-contain rounded" />
  )
}

// Also named Creative Cloud (represents CC gradient double-loop)
function CreativeCloudIcon() {
  return (
    <img src={adobeNewLogo} alt="Creative Cloud" className="w-10 h-10 object-contain rounded" />
  )
}

function ElevenlabsIcon() {
  return (
    <img src={elevenlabsNewLogo} alt="Elevenlabs" className="w-6 h-6 object-contain rounded" />
  )
}

function PremiereProIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#00005C" stroke="#9090FF" strokeWidth="1.5" />
      <text x="12" y="15.5" fill="#9090FF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">Pr</text>
    </svg>
  )
}

function VNEditorIcon() {
  return (
    <img src={vnEditorNewLogo} alt="VN Editor" className="w-6 h-6 object-contain rounded" />
  )
}

function DaVinciResolveIcon() {
  return (
    <img src={davinciNewLogo} alt="DaVinci Resolve" className="w-6 h-6 object-contain rounded" />
  )
}

// ---------------------------------------------------------
// Category Icons
// ---------------------------------------------------------

function CodeCategoryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#D7E2EA]/70">
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1" />
      <path d="M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
    </svg>
  )
}

function VideoCategoryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#D7E2EA]/70">
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  )
}

function LayersCategoryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#D7E2EA]/70">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function BrainCategoryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#D7E2EA]/70">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
    </svg>
  )
}

function FilmCategoryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#D7E2EA]/70">
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <line x1="7" y1="2" x2="7" y2="22" />
      <line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="2" y1="7" x2="7" y2="7" />
      <line x1="2" y1="17" x2="7" y2="17" />
      <line x1="17" y1="17" x2="22" y2="17" />
      <line x1="17" y1="7" x2="22" y2="7" />
    </svg>
  )
}

function UserCategoryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#D7E2EA]/70">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function AudioCategoryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#D7E2EA]/70">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="17" y1="9" x2="17" y2="15" />
      <line x1="22" y1="12" x2="22" y2="12" />
      <line x1="7" y1="8" x2="7" y2="16" />
      <line x1="2" y1="12" x2="2" y2="12" />
    </svg>
  )
}

// ---------------------------------------------------------
// Tool configurations
// ---------------------------------------------------------

interface Tool {
  name: string
  icon: () => JSX.Element
  glowClass: string
  isLearning?: boolean
  isEmpty?: boolean
}

interface StackLevel {
  levelNum: string
  title: string
  icon: () => JSX.Element
  tools: Tool[]
}

const STACK_LEVELS: StackLevel[] = [
  {
    levelNum: '01',
    title: "Creative LLM's",
    icon: CodeCategoryIcon,
    tools: [
      { name: 'ChatGPT', icon: ChatGPTIcon, glowClass: 'hover:border-[#10a37f]/50 hover:shadow-[0_0_15px_rgba(16,163,127,0.25)]' },
      { name: 'Claude', icon: ClaudeIcon, glowClass: 'hover:border-[#e05c2b]/50 hover:shadow-[0_0_15px_rgba(224,92,43,0.25)]' },
      { name: '', icon: () => <div />, glowClass: '', isEmpty: true },
      { name: 'Gemini', icon: GeminiIcon, glowClass: 'hover:border-[#9c8cff]/50 hover:shadow-[0_0_15px_rgba(156,140,255,0.25)]' },
    ],
  },
  {
    levelNum: '02',
    title: 'design process',
    icon: VideoCategoryIcon,
    tools: [
      { name: 'Storyboarding', icon: StoryboardingIcon, glowClass: 'hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]' },
      { name: 'Narrative Design', icon: NarrativeDesignIcon, glowClass: 'hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]' },
      { name: 'Custom API Workflows', icon: CustomApiWorkflowsIcon, glowClass: 'hover:border-[#63B3ED]/50 hover:shadow-[0_0_15px_rgba(99,179,237,0.25)]' },
      { name: 'Proprietary Platforms', icon: ProprietaryPlatformsIcon, glowClass: 'hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]' },
    ],
  },
  {
    levelNum: '03',
    title: 'Platforms & Workflows',
    icon: LayersCategoryIcon,
    tools: [
      { name: 'Fal AI', icon: FalAIIcon, glowClass: 'hover:border-[#FA1F75]/50 hover:shadow-[0_0_15px_rgba(250,31,117,0.25)]' },
      { name: 'Higgsfield AI', icon: HiggsfieldIcon, glowClass: 'hover:border-[#8DE83F]/50 hover:shadow-[0_0_15px_rgba(141,232,63,0.25)]' },
      { name: 'Runway', icon: RunwayIcon, glowClass: 'hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]' },
      { name: 'Comfy UI', icon: ComfyUIIcon, glowClass: 'hover:border-[#FBBF24]/50 hover:shadow-[0_0_15px_rgba(251,191,36,0.25)]', isLearning: true },
    ],
  },
  {
    levelNum: '04',
    title: 'Image Generation',
    icon: BrainCategoryIcon,
    tools: [
      { name: 'GPT Image', icon: GPTImageIcon, glowClass: 'hover:border-[#10a37f]/50 hover:shadow-[0_0_15px_rgba(16,163,127,0.25)]' },
      { name: 'Nanobanana', icon: NanobananaIcon, glowClass: 'hover:border-[#FBBF24]/50 hover:shadow-[0_0_15px_rgba(251,191,36,0.25)]' },
      { name: 'Midjourney', icon: MidjourneyIcon, glowClass: 'hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]' },
      { name: '', icon: () => <div />, glowClass: '', isEmpty: true },
    ],
  },
  {
    levelNum: '05',
    title: 'Video Generation',
    icon: VideoCategoryIcon,
    tools: [
      { name: 'Kling V3', icon: KlingIcon, glowClass: 'hover:border-[#00D4FF]/50 hover:shadow-[0_0_25px_rgba(0,212,255,0.5),_0_0_0_2px_rgba(0,212,255,0.7)]' },
      { name: 'Veo 3.1', icon: VeoIcon, glowClass: 'hover:border-[#4285F4]/40 hover:shadow-[0_0_15px_rgba(66,133,244,0.2)]' },
      { name: 'Gen-4 Turbo', icon: Gen4TurboIcon, glowClass: 'hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]' },
      { name: 'Seedance 2.0', icon: SeedanceIcon, glowClass: 'hover:border-[#3B82F6]/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)]' },
    ],
  },
  {
    levelNum: '06',
    title: 'AI Avatar & Design',
    icon: UserCategoryIcon,
    tools: [
      { name: 'Heygen', icon: HeygenIcon, glowClass: 'hover:border-[#3B82F6]/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)]' },
      { name: 'Kling AI Avatar', icon: KlingAvatarIcon, glowClass: 'hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]' },
      { name: 'Canva', icon: CanvaIcon, glowClass: 'hover:border-[#00C4CC]/50 hover:shadow-[0_0_15px_rgba(0,196,204,0.25)]' },
      { name: 'Creative Cloud', icon: CreativeCloudIcon, glowClass: 'hover:border-[#FF2200]/40 hover:shadow-[0_0_15px_rgba(255,34,0,0.2)]' },
    ],
  },
  {
    levelNum: '07',
    title: 'Post Production & Audio',
    icon: AudioCategoryIcon,
    tools: [
      { name: 'Elevenlabs', icon: ElevenlabsIcon, glowClass: 'hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]' },
      { name: 'Adobe Premiere Pro', icon: PremiereProIcon, glowClass: 'hover:border-[#9090FF]/50 hover:shadow-[0_0_15px_rgba(144,144,255,0.25)]', isLearning: true },
      { name: 'VN Video Editor', icon: VNEditorIcon, glowClass: 'hover:border-[#FFFFFF]/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]' },
      { name: 'DaVinci Resolve', icon: DaVinciResolveIcon, glowClass: 'hover:border-[#EF4444]/40 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]' },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none"
            style={{ fontSize: 'clamp(1.75rem, 5.5vw, 80px)', background: 'linear-gradient(180deg, #FEFCE8 0%, #FEF9C3 25%, #FDE047 50%, #FBBF24 75%, #F59E0B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
          >
            My Creative Suite
          </h2>
        </FadeIn>

        {/* Row 1: Levels 01 - 04 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {STACK_LEVELS.slice(0, 4).map((lvl, index) => {
            const HeaderIcon = lvl.icon
            return (
              <FadeIn key={lvl.levelNum} delay={index * 0.1} y={40} className="h-full">
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    y: -20,
                    rotateX: 4,
                    rotateY: -3,
                    boxShadow: '0 50px 100px rgba(0,0,0,0.6), 0 0 80px rgba(253,224,71,0.4), 0 0 0 2px rgba(253,224,71,0.6)',
                    borderColor: '#FDE047'
                  }}
                  whileTap={{ scale: 1.03 }}
                  transition={{ type: 'tween', duration: 0.12, ease: [0.33, 1, 0.68, 1] }}
                  className="bg-gradient-to-b from-[#111111] to-[#070707] border border-[#1f1f1f] rounded-[24px] p-6 flex flex-col h-full hover:border-[#FDE047]/60 transition-all duration-500 shadow-2xl relative overflow-hidden group perspective-1000"
                >
                  {/* Card top banner header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#141414] border border-[#242424] flex items-center justify-center">
                      <HeaderIcon />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#D7E2EA]/40 uppercase font-semibold">
                      Level {lvl.levelNum}
                    </span>
                  </div>

                  {/* Level title */}
                  <h3 className="text-white font-extrabold italic text-[15px] sm:text-[17px] tracking-wide uppercase mb-3">
                    {lvl.title}
                  </h3>

                  {/* Separator line */}
                  <div className="w-full h-[1px] bg-[#1a1a1a] mb-5" />

                  {/* Grid of tools */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    {lvl.tools.map((tool, tIdx) => {
                      if (tool.isEmpty) {
                        return <div key={`empty-${tIdx}`} className="invisible" />
                      }
                      const ToolLogo = tool.icon
                      return (
                        <motion.div
                          key={tool.name}
                          whileHover={{
                            scale: 1.15,
                            y: -8,
                            rotateX: 6,
                            rotateY: -4,
                            boxShadow: `0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(215,226,234,0.3)`
                          }}
                          whileTap={{ scale: 1.05 }}
                          transition={{ type: 'tween', duration: 0.1, ease: [0.33, 1, 0.68, 1] }}
                          className={`relative flex flex-col items-center justify-between py-4 px-2 bg-gradient-to-b from-[#121212] to-[#0a0a0a] border border-[#1b1b1b] rounded-xl cursor-pointer transition-all duration-300 group/btn ${tool.glowClass} perspective-500`}
                        >
                          {/* Learning badge overlay */}
                          {tool.isLearning && (
                            <div className="absolute -top-1.5 right-1 bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-black text-[7px] font-extrabold uppercase px-1.5 py-0.5 rounded-md tracking-wider shadow-[0_0_8px_#FBBF24] flex items-center gap-1 scale-[0.9] origin-top-right">
                              <span className="w-1 h-1 bg-black rounded-full animate-ping" />
                              learning...
                            </div>
                          )}

                          {/* Tool Logo */}
                          <div className="flex items-center justify-center h-10 mb-2">
                            <ToolLogo />
                          </div>

                          {/* Tool Name */}
                          <span className="text-[9px] sm:text-[10px] font-bold text-[#D7E2EA]/40 tracking-wider text-center uppercase group-hover/btn:text-[#D7E2EA] transition-colors leading-tight">
                            {tool.name}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              </FadeIn>
            )
          })}
        </div>

        {/* Row 2: Levels 05 - 07, centered on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-6">
          {STACK_LEVELS.slice(4).map((lvl, index) => {
            const HeaderIcon = lvl.icon
            return (
              <FadeIn
                key={lvl.levelNum}
                delay={(index + 4) * 0.1}
                y={40}
                className="w-full lg:w-[calc(25%-1.25rem)] max-w-md lg:max-w-none mx-auto lg:mx-0 h-full"
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    y: -20,
                    rotateX: 4,
                    rotateY: -3,
                    boxShadow: '0 50px 100px rgba(0,0,0,0.6), 0 0 80px rgba(253,224,71,0.4), 0 0 0 2px rgba(253,224,71,0.6)',
                    borderColor: '#FDE047'
                  }}
                  whileTap={{ scale: 1.03 }}
                  transition={{ type: 'tween', duration: 0.12, ease: [0.33, 1, 0.68, 1] }}
                  className="bg-gradient-to-b from-[#111111] to-[#070707] border border-[#1f1f1f] rounded-[24px] p-6 flex flex-col h-full hover:border-[#FDE047]/60 transition-all duration-500 shadow-2xl relative overflow-hidden group perspective-1000"
                >
                  {/* Card top banner header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#141414] border border-[#242424] flex items-center justify-center">
                      <HeaderIcon />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#D7E2EA]/40 uppercase font-semibold">
                      Level {lvl.levelNum}
                    </span>
                  </div>

                  {/* Level title */}
                  <h3 className="text-white font-extrabold italic text-[15px] sm:text-[17px] tracking-wide uppercase mb-3">
                    {lvl.title}
                  </h3>

                  {/* Separator line */}
                  <div className="w-full h-[1px] bg-[#1a1a1a] mb-5" />

                  {/* Grid of tools */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    {lvl.tools.map((tool, tIdx) => {
                      if (tool.isEmpty) {
                        return <div key={`empty-${tIdx}`} className="invisible" />
                      }
                      const ToolLogo = tool.icon
                      return (
                        <motion.div
                          key={tool.name}
                          whileHover={{
                            scale: 1.15,
                            y: -8,
                            rotateX: 6,
                            rotateY: -4,
                            boxShadow: `0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(215,226,234,0.3)`
                          }}
                          whileTap={{ scale: 1.05 }}
                          transition={{ type: 'tween', duration: 0.1, ease: [0.33, 1, 0.68, 1] }}
                          className={`relative flex flex-col items-center justify-between py-4 px-2 bg-gradient-to-b from-[#121212] to-[#0a0a0a] border border-[#1b1b1b] rounded-xl cursor-pointer transition-all duration-300 group/btn ${tool.glowClass} perspective-500`}
                        >
                          {/* Learning badge overlay */}
                          {tool.isLearning && (
                            <div className="absolute -top-1.5 right-1 bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-black text-[7px] font-extrabold uppercase px-1.5 py-0.5 rounded-md tracking-wider shadow-[0_0_8px_#FBBF24] flex items-center gap-1 scale-[0.9] origin-top-right">
                              <span className="w-1 h-1 bg-black rounded-full animate-ping" />
                              learning...
                            </div>
                          )}

                          {/* Tool Logo */}
                          <div className="flex items-center justify-center h-10 mb-2">
                            <ToolLogo />
                          </div>

                          {/* Tool Name */}
                          <span className="text-[9px] sm:text-[10px] font-bold text-[#D7E2EA]/40 tracking-wider text-center uppercase group-hover/btn:text-[#D7E2EA] transition-colors leading-tight">
                            {tool.name}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
