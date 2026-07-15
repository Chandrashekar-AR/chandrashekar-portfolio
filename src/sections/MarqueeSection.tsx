import { useRef, useEffect, useState } from 'react'

const ALL_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

const ROW1_IMAGES = ALL_IMAGES.slice(0, 11)
const ROW2_IMAGES = ALL_IMAGES.slice(11)

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const rawOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(rawOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const row1Triple = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES]
  const row2Triple = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES]

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 — moves RIGHT on scroll */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1Triple.map((url, i) => (
            <img
              key={`r1-${i}`}
              src={url}
              alt=""
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>

        {/* Row 2 — moves LEFT on scroll */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2Triple.map((url, i) => (
            <img
              key={`r2-${i}`}
              src={url}
              alt=""
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
