import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'



export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      {/* Main content area */}
      <div className="flex-1 relative flex flex-col justify-between px-6 md:px-10">
        {/* Contact button aligned with fixed navbar */}
        <div className="absolute top-6 right-6 md:right-10 z-20">
          <FadeIn delay={0.5}>
            <ContactButton />
          </FadeIn>
        </div>

        {/* Hero heading */}
        <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-full z-0 select-none pointer-events-none">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[5vw] min-[360px]:text-[5.2vw] sm:text-[5.5vw] md:text-[5.8vw] lg:text-[6.2vw]">
              Hi, i&apos;m Chandrashekar AR
            </h1>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}
