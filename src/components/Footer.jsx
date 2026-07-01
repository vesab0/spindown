export default function Footer() {
  const columns = [
    {
      title: 'Navigate',
      links: [
        { label: 'Resources', href: '#' },
        { label: 'Games', href: '#' },
        { label: 'People', href: '#' },
      ],
    },
    {
      title: 'Partners',
      links: [
        { label: 'anibar.org', href: 'https://anibar.org/' },
        { label: 'flossk.org', href: 'https://flossk.org/' },
        { label: 'kgia.al', href: 'https://kgia.al/' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'LinkedIn', href: '#' },
        { label: 'Discord', href: '#' },
        { label: 'Instagram', href: '#' },
      ],
    },
  ]

  return (
    <footer className="bg-[#1a1a1a] px-10 py-24">
      <div className="flex items-center justify-center gap-14">

        {/* Logo */}
        <img
          src="/spindown-logo.png"
          alt="Spindown"
          className="h-24 w-auto object-contain flex-shrink-0"
          draggable={false}
        />

        {/* Link columns */}
        <div className="flex gap-12">
          {columns.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-1">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="font-akshar text-white text-[18px] font-bold tracking-wide hover:text-[#D93A44] transition-colors no-underline"
                >
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>

      </div>
    </footer>
  )
}
