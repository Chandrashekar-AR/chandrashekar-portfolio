import { useRef, useState, useEffect, type ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export function Magnet({
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

export interface TooltipProps {
  children: ReactNode
  content: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  className?: string
  contentClassName?: string
}

export function Tooltip({
  children,
  content,
  position = 'top',
  delay = 200,
  className = '',
  contentClassName = '',
}: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null)
  const childRef = useRef<HTMLDivElement>(null)

  const show = () => {
    const id = setTimeout(() => setVisible(true), delay)
    setTimeoutId(id)
  }

  const hide = () => {
    if (timeoutId) clearTimeout(timeoutId)
    setVisible(false)
  }

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [timeoutId])

  const positionStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-3',
    left: 'right-full top-1/2 -translate-y-1/2 mr-3',
    right: 'left-full top-1/2 -translate-y-1/2 ml-3',
  }

  const arrowStyles = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-[#0C0C0C] border-transparent border-4',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-[#0C0C0C] border-transparent border-4',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-[#0C0C0C] border-transparent border-4',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-[#0C0C0C] border-transparent border-4',
  }

  return (
    <div
      ref={childRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && (
        <div
          className={`
            fixed z-[100] pointer-events-none
            px-3 py-2 rounded-md text-xs font-mono uppercase tracking-widest
            text-[#D7E2EA]/70
            animate-fade-in-up
            ${positionStyles[position]}
            ${contentClassName}
          `}
          style={{
            background: 'rgba(12, 12, 12, 0.9)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(215, 226, 234, 0.15)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
          }}
        >
          {content}
          <div
            className="absolute w-0 h-0"
            style={{
              borderWidth: '6px',
              borderStyle: 'solid',
            }}
          >
            <div className={arrowStyles[position]} />
          </div>
        </div>
      )}
    </div>
  )
}

const positionStyles: Record<string, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-3',
  left: 'right-full top-1/2 -translate-y-1/2 mr-3',
  right: 'left-full top-1/2 -translate-y-1/2 ml-3',
}

const arrowStyles: Record<string, string> = {
  top: 'top-full left-1/2 -translate-x-1/2 border-t-[#0C0C0C] border-transparent border-4',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-[#0C0C0C] border-transparent border-4',
  left: 'left-full top-1/2 -translate-y-1/2 border-l-[#0C0C0C] border-transparent border-4',
  right: 'right-full top-1/2 -translate-y-1/2 border-r-[#0C0C0C] border-transparent border-4',
}

export default Magnet