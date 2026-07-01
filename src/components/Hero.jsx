import { useRef, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import D20 from './D20'

function LinkedInIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="5" fill="#1a1a1a" />
      <path d="M13.5 14.5H10.5V25.5H13.5V14.5ZM12 13.25C13.1 13.25 14 12.35 14 11.25C14 10.15 13.1 9.25 12 9.25C10.9 9.25 10 10.15 10 11.25C10 12.35 10.9 13.25 12 13.25ZM25.5 25.5H22.5V19.75C22.5 17.95 21.85 17 20.5 17C19.05 17 18.5 18.05 18.5 19.75V25.5H15.5V14.5H18.5V15.85C19.1 14.9 20.2 14.25 21.75 14.25C24 14.25 25.5 15.75 25.5 18.5V25.5Z" fill="white" />
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="5" fill="#1a1a1a" />
      <path d="M24.5 12.5C23.3 11.95 22 11.55 20.65 11.33C20.63 11.33 20.62 11.33 20.61 11.34C20.44 11.64 20.24 12.03 20.1 12.34C18.67 12.13 17.25 12.13 15.85 12.34C15.71 12.02 15.5 11.64 15.33 11.34C15.32 11.33 15.31 11.33 15.3 11.33C13.95 11.55 12.62 11.95 11.5 12.5C11.49 12.5 11.48 12.51 11.47 12.52C9.2 15.9 8.59 19.19 8.9 22.44C8.9 22.46 8.91 22.47 8.92 22.48C10.42 23.59 11.87 24.27 13.3 24.72C13.31 24.72 13.32 24.72 13.33 24.71C13.69 24.21 14.01 23.68 14.28 23.12C14.29 23.1 14.28 23.07 14.26 23.07C13.74 22.87 13.24 22.62 12.77 22.33C12.75 22.32 12.75 22.29 12.76 22.28C12.87 22.2 12.97 22.12 13.07 22.04C13.08 22.03 13.1 22.03 13.11 22.04C15.97 23.35 19.06 23.35 21.89 22.04C21.9 22.03 21.92 22.03 21.93 22.04C22.03 22.12 22.13 22.2 22.24 22.28C22.26 22.29 22.25 22.32 22.23 22.33C21.76 22.63 21.26 22.87 20.74 23.07C20.72 23.07 20.71 23.1 20.72 23.12C21 23.68 21.32 24.21 21.67 24.71C21.68 24.72 21.69 24.72 21.7 24.72C23.14 24.27 24.59 23.59 26.08 22.48C26.09 22.47 26.1 22.46 26.1 22.44C26.47 18.67 25.5 15.41 24.53 12.52C24.52 12.51 24.51 12.5 24.5 12.5ZM15.18 20.45C14.28 20.45 13.54 19.63 13.54 18.63C13.54 17.63 14.27 16.81 15.18 16.81C16.1 16.81 16.83 17.64 16.82 18.63C16.82 19.63 16.09 20.45 15.18 20.45ZM20.82 20.45C19.92 20.45 19.18 19.63 19.18 18.63C19.18 17.63 19.91 16.81 20.82 16.81C21.73 16.81 22.46 17.64 22.46 18.63C22.46 19.63 21.74 20.45 20.82 20.45Z" fill="white" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="5" fill="#1a1a1a" />
      <path d="M18 12C15.79 12 15.52 12.01 14.68 12.05C13.85 12.09 13.27 12.22 12.76 12.42C12.24 12.62 11.8 12.9 11.36 13.36C10.9 13.8 10.62 14.24 10.42 14.76C10.22 15.27 10.09 15.85 10.05 16.68C10.01 17.52 10 17.79 10 20C10 22.21 10.01 22.48 10.05 23.32C10.09 24.15 10.22 24.73 10.42 25.24C10.62 25.76 10.9 26.2 11.36 26.64C11.8 27.1 12.24 27.38 12.76 27.58C13.27 27.78 13.85 27.91 14.68 27.95C15.52 27.99 15.79 28 18 28C20.21 28 20.48 27.99 21.32 27.95C22.15 27.91 22.73 27.78 23.24 27.58C23.76 27.38 24.2 27.1 24.64 26.64C25.1 26.2 25.38 25.76 25.58 25.24C25.78 24.73 25.91 24.15 25.95 23.32C25.99 22.48 26 22.21 26 20C26 17.79 25.99 17.52 25.95 16.68C25.91 15.85 25.78 15.27 25.58 14.76C25.38 14.24 25.1 13.8 24.64 13.36C24.2 12.9 23.76 12.62 23.24 12.42C22.73 12.22 22.15 12.09 21.32 12.05C20.48 12.01 20.21 12 18 12ZM18 13.44C20.17 13.44 20.42 13.45 21.25 13.49C22.01 13.53 22.43 13.65 22.71 13.76C23.08 13.9 23.35 14.08 23.63 14.37C23.92 14.65 24.1 14.92 24.24 15.29C24.35 15.57 24.47 15.99 24.51 16.75C24.55 17.58 24.56 17.83 24.56 20C24.56 22.17 24.55 22.42 24.51 23.25C24.47 24.01 24.35 24.43 24.24 24.71C24.1 25.08 23.92 25.35 23.63 25.63C23.35 25.92 23.08 26.1 22.71 26.24C22.43 26.35 22.01 26.47 21.25 26.51C20.42 26.55 20.17 26.56 18 26.56C15.83 26.56 15.58 26.55 14.75 26.51C13.99 26.47 13.57 26.35 13.29 26.24C12.92 26.1 12.65 25.92 12.37 25.63C12.08 25.35 11.9 25.08 11.76 24.71C11.65 24.43 11.53 24.01 11.49 23.25C11.45 22.42 11.44 22.17 11.44 20C11.44 17.83 11.45 17.58 11.49 16.75C11.53 15.99 11.65 15.57 11.76 15.29C11.9 14.92 12.08 14.65 12.37 14.37C12.65 14.08 12.92 13.9 13.29 13.76C13.57 13.65 13.99 13.53 14.75 13.49C15.58 13.45 15.83 13.44 18 13.44ZM18 15.89C15.69 15.89 13.82 17.76 13.82 20.07C13.82 22.38 15.69 24.25 18 24.25C20.31 24.25 22.18 22.38 22.18 20.07C22.18 17.76 20.31 15.89 18 15.89ZM18 22.81C16.49 22.81 15.26 21.58 15.26 20.07C15.26 18.56 16.49 17.33 18 17.33C19.51 17.33 20.74 18.56 20.74 20.07C20.74 21.58 19.51 22.81 18 22.81ZM23.23 15.73C23.23 16.26 22.8 16.69 22.27 16.69C21.74 16.69 21.31 16.26 21.31 15.73C21.31 15.2 21.74 14.77 22.27 14.77C22.8 14.77 23.23 15.2 23.23 15.73Z" fill="white" />
    </svg>
  )
}

export default function Hero() {
  const mouseDelta = useRef({ x: 0, y: 0 })
  const lastMousePos = useRef(null)
  const spinKick = useRef(null)

  const handleApply = useCallback(() => {
    spinKick.current = { x: (Math.random() - 0.5) * 6, y: 6 + Math.random() * 4 }
  }, [])

  const handleDiceMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    if (lastMousePos.current) {
      mouseDelta.current.x += (x - lastMousePos.current.x) / rect.width
      mouseDelta.current.y += (y - lastMousePos.current.y) / rect.height
    }
    lastMousePos.current = { x, y }
  }, [])

  const handleDiceMouseLeave = useCallback(() => {
    lastMousePos.current = null
  }, [])

  return (
    <section
      className="flex flex-col items-center bg-[#60BAFF] min-h-[calc(100vh-64px)] pt-10 pb-4 px-4"
    >
      {/* Title */}
      <img
        src="/title.png"
        alt="SPINDOWN"
        className="w-[min(880px,92vw)] h-auto object-contain select-none"
        draggable={false}
      />

      {/* 3D D20 */}
      <div
        className="dice-canvas -mt-32 -mb-20 cursor-grab active:cursor-grabbing"
        style={{ width: 600, height: 600, marginLeft: 'auto', marginRight: 'auto' }}
        onMouseMove={handleDiceMouseMove}
        onMouseLeave={handleDiceMouseLeave}
      >
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[4, 6, 5]} intensity={1.4} />
          <directionalLight position={[-4, -3, 2]} intensity={0.3} color="#ffcccc" />
          <D20 mouseDelta={mouseDelta} spinKick={spinKick} />
        </Canvas>
      </div>

      {/* Date */}
      <p className="font-akshar text-white text-[28px] font-semibold tracking-wide mt-2">
        07 - 09 August &nbsp;|&nbsp; Prishtina Hacker Space
      </p>

      {/* CTA Button */}
      <a
        href="#"
        onClick={handleApply}
        className="
          font-akshar font-bold tracking-[0.14em] text-[22px] text-white
          bg-[#D93A44] border-[3px] border-[#651014]
          px-20 py-4 mt-5 rounded-sm
          shadow-[0_5px_0_#651014]
          hover:-translate-y-[2px] hover:shadow-[0_7px_0_#651014]
          active:translate-y-[2px] active:shadow-[0_2px_0_#651014]
          transition-all duration-100
          no-underline inline-block
        "
      >
        APPLY NOW
      </a>

      {/* Social Icons */}
      <div className="flex items-center gap-5 mt-7">
        {[
          { label: 'LinkedIn', Icon: LinkedInIcon },
          { label: 'Discord', Icon: DiscordIcon },
          { label: 'Instagram', Icon: InstagramIcon },
        ].map(({ label, Icon }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="hover:scale-110 transition-transform duration-150"
          >
            <Icon />
          </a>
        ))}
      </div>
    </section>
  )
}
