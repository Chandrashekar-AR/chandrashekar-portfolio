import FadeIn from '../components/FadeIn'
import ReelShowcaseCard from '../components/ReelShowcaseCard'
import VideoShowcaseCard from '../components/VideoShowcaseCard'
import { VIDEO_PROJECTS } from '../config/videoShowcase'
import type { VideoProject } from '../config/videoShowcase'

/** Picks the card component that matches the project's configured layout. */
function ProjectCard({ project }: { project: VideoProject }) {
  if (project.layout === 'reel') return <ReelShowcaseCard project={project} />
  return <VideoShowcaseCard project={project} />
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Header — same container as the card so both share one column */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none"
            style={{
              fontSize: 'clamp(1.75rem, 5.5vw, 80px)',
              background: 'linear-gradient(180deg, #FEFCE8 0%, #FEF9C3 25%, #FDE047 50%, #FBBF24 75%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Featured video showcase cards (04 MONTRA, 05 LINCOLN,
            03 DIESEL DRAMA REEL) — links, metrics and accent themes are
            configured in src/config/videoShowcase.ts */}
        {VIDEO_PROJECTS.map((project, index) => (
          <FadeIn
            key={project.number}
            delay={0.1}
            y={40}
            className={index === 0 ? '' : 'mt-12 sm:mt-16 md:mt-24'}
          >
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
