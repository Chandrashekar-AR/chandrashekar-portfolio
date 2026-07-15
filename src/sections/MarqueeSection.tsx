import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

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
const ROW2_IMAGES = [
  ...ALL_IMAGES.slice(11),
  ...ALL_IMAGES.slice(11),
  ...ALL_IMAGES.slice(11),
  ...ALL_IMAGES.slice(11),
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
]
const CARD_WIDTH = 420
const GAP = 12
const ROW_WIDTH = (CARD_WIDTH + GAP) * 11

function MarqueeCard({ src, index, row }: { src: string; index: number; row: number }) {
  return (
    <motion.img
      src={src}
      alt=""
      className="w-[420px] h-[560px] rounded-2xl object-cover flex-shrink-0"
      loading="lazy"
      style={{ zIndex: 1 }}
      whileHover={{
        scale: 1.15,
        y: -40,
        zIndex: 100,
        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6)',
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    />
  )
}

function MarqueeRow({
  images,
  direction,
  paused,
  initialOffset = 0,
}: {
  images: string[]
  direction: 'left' | 'right'
  paused: boolean
  initialOffset?: number
}) {
  const controls = useAnimation()
  const distance = direction === 'left' ? -ROW_WIDTH : ROW_WIDTH

  useEffect(() => {
    controls.set({ x: initialOffset })

    const animate = async () => {
      while (true) {
        if (!paused) {
          await controls.start({
            x: initialOffset + distance,
            transition: { duration: 40, ease: 'linear' },
          })
          controls.set({ x: initialOffset })
        } else {
          await new Promise(r => setTimeout(r, 100))
        }
      }
    }
    animate()
    return () => controls.stop()
  }, [controls, direction, paused, initialOffset, distance])

  const triple = [...images, ...images, ...images]

  return (
    <motion.div
      animate={controls}
      className="flex gap-3 will-change-transform"
      style={{ width: `${ROW_WIDTH * 3}px`, x: initialOffset }}
    >
      {triple.map((url, i) => (
        <MarqueeCard key={`${direction}-${i}`} src={url} index={i} row={direction === 'left' ? 1 : 2} />
      ))}
    </motion.div>
  )
}

export default function MarqueeSection() {
  const [paused, setPaused] = useState(false)

  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex flex-col gap-3">
        {/* Row 1 — moves LEFT continuously, seamless loop */}
        <MarqueeRow
          images={ROW1_IMAGES}
          direction="left"
          paused={paused}
        />

        {/* Row 2 — moves RIGHT continuously, seamless loop, starts at 46th card */}
        <MarqueeRow
          images={ROW2_IMAGES}
          direction="right"
          paused={paused}
          initialOffset={-19440}
        />
      </div>
    </section>
  )
}