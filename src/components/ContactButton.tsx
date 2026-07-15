interface ContactButtonProps {
  className?: string
}

export default function ContactButton({ className = '' }: ContactButtonProps) {
  return (
    <button
      className={`rounded-full text-white font-bold uppercase tracking-widest border border-transparent
        px-6 py-3.5 sm:px-6 sm:py-3.5 md:px-8 md:py-3.5
        text-[9px] min-[360px]:text-[10px] sm:text-[11px] md:text-xs
        cursor-pointer transition-transform duration-200 hover:scale-105
        ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(16, 1, 181, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </button>
  )
}

