import { useState } from 'react'

const NAV_ITEMS = [
  { label: 'Resources', disabled: true },
  { label: 'Games', disabled: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#1a1a1a]">
      <div className="flex items-center justify-between px-6 md:px-10 h-[64px]">
        <img src="/spindown-logo.png" alt="Spindown" className="h-[56px] w-auto object-contain" />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {NAV_ITEMS.map(({ label, disabled }) => (
            <li key={label}>
              <a
                href="#"
                aria-disabled={disabled}
                onClick={disabled ? (e) => e.preventDefault() : undefined}
                className={`font-akshar text-white text-[18px] font-semibold tracking-wide transition-colors no-underline ${disabled ? 'opacity-40 cursor-not-allowed' : 'hover:text-[#D93A44]'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-white transition-all duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden list-none bg-[#1a1a1a] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map(({ label, disabled }) => (
            <li key={label}>
              <a
                href="#"
                aria-disabled={disabled}
                onClick={disabled ? (e) => e.preventDefault() : () => setOpen(false)}
                className={`font-akshar text-white text-[18px] font-semibold tracking-wide transition-colors no-underline ${disabled ? 'opacity-40 cursor-not-allowed' : 'hover:text-[#D93A44]'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
