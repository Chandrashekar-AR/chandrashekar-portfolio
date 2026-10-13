interface LiveProjectButtonProps {
  className?: string
  href?: string
  label?: string
}

export default function LiveProjectButton({ className = '', href, label = 'Live Project' }: LiveProjectButtonProps) {
  const classes = `rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
    font-medium uppercase tracking-widest
    px-8 py-3 sm:px-10 sm:py-3.5
    text-sm sm:text-base
    hover:bg-[#D7E2EA]/10 transition-colors duration-200
    cursor-pointer flex-shrink-0
    ${className}`

  // When an href is provided, render an anchor so the button actually opens the target.
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {label}
      </a>
    )
  }

  return (
    <button className={classes}>
      {label}
    </button>
  )
}
