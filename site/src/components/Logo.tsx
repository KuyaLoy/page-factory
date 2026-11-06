/** The Project Factory mark: a 9:16 frame with a play triangle on lime. */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="7" fill="#D5FF35" />
      <rect x="10" y="5" width="12" height="22" rx="2.5" fill="none" stroke="#101211" strokeWidth="2.4" />
      <path d="M14.2 12.4v7.2l5.6-3.6z" fill="#101211" />
    </svg>
  )
}
