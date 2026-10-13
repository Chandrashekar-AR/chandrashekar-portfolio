import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'

const DECORATIVE_IMAGES = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    alt: 'Moon icon',
    className: 'w-[120px] sm:w-[160px] md:w-[210px] absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    delay: 0.1,
    x: -80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    alt: '3D object',
    className: 'w-[100px] sm:w-[140px] md:w-[180px] absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
    delay: 0.25,
    x: -80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    alt: 'Lego icon',
    className: 'w-[120px] sm:w-[160px] md:w-[210px] absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    delay: 0.15,
    x: 80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    alt: '3D group',
    className: 'w-[130px] sm:w-[170px] md:w-[220px] absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
    delay: 0.3,
    x: 80,
  },
]

const ABOUT_TEXT =
  "With 9 months of experience as an AI Artist, I specialize in directing and producing AI-powered content, from cinematic microdramas and story-driven advertisements to engaging UGC-style videos. I love transforming creative ideas into compelling visual stories using cutting-edge generative AI tools. "

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 flex items-center justify-center overflow-hidden">
      {/* Decorative 3D images */}
      {DECORATIVE_IMAGES.map((img) => (
        <FadeIn
          key={img.src}
          delay={img.delay}
          x={img.x}
          y={0}
          duration={0.9}
          className={img.className}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full pointer-events-none select-none"
            draggable={false}
          />
        </FadeIn>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
            style={{
              fontSize: 'clamp(2.25rem, 7vw, 100px)',
              background: 'linear-gradient(180deg, #FEFCE8 0%, #FEF9C3 25%, #FDE047 50%, #FBBF24 75%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[600px]"
          style={{ fontSize: 'clamp(1.05rem, 2.4vw, 1.75rem)' }}
        />
      </div>
    </section>
  )
}
