import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')
  const totalChars = text.length
  let globalIndex = 0

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('').map((char) => {
          const idx = globalIndex
          globalIndex++
          return { char, idx }
        })
        // Account for space character
        if (wordIndex < words.length - 1) {
          globalIndex++
        }

        return (
          <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {wordChars.map(({ char, idx }) => (
              <CharSpan
                key={idx}
                char={char}
                index={idx}
                total={totalChars}
                progress={scrollYProgress}
              />
            ))}
            {wordIndex < words.length - 1 && '\u00A0'}
          </span>
        )
      })}
    </p>
  )
}

function CharSpan({
  char,
  index,
  total,
  progress,
}: {
  char: string
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const start = index / total
  const end = start + 1 / total
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ visibility: 'hidden' }}>{char}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {char}
      </motion.span>
    </span>
  )
}
