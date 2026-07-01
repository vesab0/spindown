export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#1a1a1a] flex items-center justify-between px-10 h-[64px]">
      <img src="/spindown-logo.png" alt="Spindown" className="h-[56px] w-auto object-contain" />
      <ul className="flex items-center gap-10 list-none">
        {['Resources', 'Games', 'People'].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="font-akshar text-white text-[18px] font-semibold tracking-wide hover:text-[#D93A44] transition-colors no-underline"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
