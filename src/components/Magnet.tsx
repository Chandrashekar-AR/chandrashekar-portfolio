import { useRef, useState, useEffect, type ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({
    transform: 'translate3d(0, 0, 0)',
    transition: inactiveTransition,
    willChange: 'transform' as const,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY

      const inX = Math.abs(distX) < rect.width / 2 + padding
      const inY = Math.abs(distY) < rect.height / 2 + padding

      if (inX && inY) {
        setStyle({
          transform: `translate3d(${distX / strength}px, ${distY / strength}px, 0)`,
          transition: activeTransition,
          willChange: 'transform',
        })
      } else {
        setStyle(prev => {
          if (prev.transform === 'translate3d(0, 0, 0)') return prev
          return {
            transform: 'translate3d(0, 0, 0)',
            transition: inactiveTransition,
            willChange: 'transform',
          }
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [padding, strength, activeTransition, inactiveTransition])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
