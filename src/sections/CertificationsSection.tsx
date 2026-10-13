import FadeIn from '../components/FadeIn'
import GoogleCredentialCard from '../components/GoogleCredentialCard'

/**
 * Credentials section — a single, featured credential card.
 * (Link + optional image sources live in src/config/featuredCredential.ts)
 */
export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
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
            Credentials
          </h2>
        </FadeIn>

        {/* Featured credential — Google AI Professional Certificate */}
        <FadeIn delay={0.1} y={30}>
          <GoogleCredentialCard />
        </FadeIn>
      </div>
    </section>
  )
}
