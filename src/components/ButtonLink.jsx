const variants = {
  primary: 'bg-accent text-on-accent hover:opacity-90',
  outline: 'border border-outline text-heading hover:border-outline-hover',
  subtle: 'border border-line text-heading hover:text-accent',
}

const sizes = {
  md: 'px-5 py-2.5',
  sm: 'px-4 py-2',
}

// A link styled as a button.
//   variant: primary (green), outline, subtle
//   size: md or sm
//   external: opens in a new tab
//   download: downloads the file instead of opening it
export default function ButtonLink({ href, variant = 'outline', size = 'md', external = false, download = false, className = '', children }) {
  return (
    <a
      href={href}
      download={download || undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-2 rounded-lg text-sm font-medium transition-all duration-200 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
