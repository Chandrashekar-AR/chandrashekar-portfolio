import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import Magnet from '../components/Magnet'



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

        {/* Portrait — absolutely centered */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
          <FadeIn delay={0.6} y={30}>
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Chandrashekar AR — 3D Creator portrait"
                className="w-full pointer-events-none select-none"
                draggable={false}
              />
            </Magnet>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
