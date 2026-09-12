import { useState, useEffect, useRef } from 'react'
import { GAMES } from '../data/gamesData'
import { loadGalleryImages, getPlaceholderGallery } from '../utils/loadGalleryImages'

function Gallery({ item, w = 1200, h = 700 }) {
  const isImagePath = typeof item === 'string' && (item.includes('/') || /\.(png|jpg|jpeg|gif|webp)$/i.test(item))
  
  if (isImagePath) {
    return <img src={item} alt="Gallery" className="h-full w-full object-cover" />
  }
  
  return <PlaceholderImg text={item} w={w} h={h} />
}

function PlaceholderImg({ text, w = 1200, h = 700 }) {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'>
      <rect width='100%' height='100%' fill='%230d0d0d' />
      <rect x='6%' y='10%' width='88%' height='80%' fill='%231a1a1a' opacity='0.06' />
      <text x='50%' y='50%' font-family='Akshar, sans-serif' font-size='24' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle'>${text}</text>
    </svg>`
  const src = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
  return <img src={src} alt={text} className="h-full w-full object-cover" />
}

function FullscreenIcon({ exit = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {exit ? (
        <>
          <path d="M8 3v3a2 2 0 0 1-2 2H3" />
          <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
          <path d="M3 16h3a2 2 0 0 1 2 2v3" />
          <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
        </>
      ) : (
        <>
          <path d="M8 3H5a2 2 0 0 0-2 2v3" />
          <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
          <path d="M3 16v3a2 2 0 0 0 2 2h3" />
          <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
        </>
      )}
    </svg>
  )
}

export default function GamesPage() {
  const [selected, setSelected] = useState(() => GAMES.map(() => 0))
  const [openGame, setOpenGame] = useState(null)
  const [loadedGalleries, setLoadedGalleries] = useState({})
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [controlsVisible, setControlsVisible] = useState(true)
  const controlsTimerRef = useRef(null)
  const exitingFullscreenRef = useRef(false)
  const gameModalRef = useRef(null)

  useEffect(() => {
    async function loadAllGalleries() {
      const galleries = {}
      for (const game of GAMES) {
        const images = await loadGalleryImages(game.galleryFolder)
        galleries[game.id] = images || getPlaceholderGallery()
      }
      setLoadedGalleries(galleries)
    }
    loadAllGalleries()
  }, [])

  const wakeControls = () => {
    if (!document.fullscreenElement) return
    setControlsVisible(true)
    if (controlsTimerRef.current) {
      clearTimeout(controlsTimerRef.current)
    }
    controlsTimerRef.current = setTimeout(() => {
      if (document.fullscreenElement) {
        setControlsVisible(false)
      }
    }, 2500)
  }

  const closePlayer = () => {
    setOpenGame(null)
    setIsFullscreen(false)
    setControlsVisible(true)
    if (controlsTimerRef.current) {
      clearTimeout(controlsTimerRef.current)
    }
    if (document.fullscreenElement) {
      exitingFullscreenRef.current = true
      document.exitFullscreen()
    }
  }

  const toggleFullscreen = async () => {
    if (!gameModalRef.current) return
    try {
      if (isFullscreen) {
        exitingFullscreenRef.current = true
        await document.exitFullscreen()
        setIsFullscreen(false)
        setControlsVisible(true)
      } else {
        await gameModalRef.current.requestFullscreen()
        setIsFullscreen(true)
        wakeControls()
      }
    } catch (err) {
      console.error('Fullscreen error:', err)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && openGame) {
        closePlayer()
      }
    }

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false)
        setControlsVisible(true)
        if (!exitingFullscreenRef.current) {
          closePlayer()
        }
        exitingFullscreenRef.current = false
      }
    }

    if (openGame) {
      window.addEventListener('keydown', handleKeyDown)
      document.addEventListener('fullscreenchange', handleFullscreenChange)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('fullscreenchange', handleFullscreenChange)
      }
    }
  }, [openGame])

  const openPlayer = (game) => {
    setOpenGame(game)
  }

  return (
    <main className="bg-[#1a1a1a] px-5 py-14 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl text-white">
        <p className="font-akshar text-[18px] font-bold uppercase tracking-[0.18em] text-[#60BAFF] md:text-[22px]">Spindown Game Jam</p>
        <h1 className="font-akshar text-[56px] font-bold leading-[0.92] md:text-[72px]">Game Jam Games</h1>
        <p className="mt-3 max-w-3xl font-akshar text-[20px] leading-tight text-white/70 md:text-[24px]">The 6 amazing games created during the Spindown Game Jam.</p>

        <div className="mt-10 space-y-14">
          {GAMES.map((game, gIndex) => {
            const gallery = loadedGalleries[game.id] || getPlaceholderGallery()
            const current = selected[gIndex] || 0
            const setThumb = (i) => setSelected((prev) => prev.map((v, idx) => (idx === gIndex ? i : v)))
            const isWinner = game.isWinner

            return (
              <div key={game.id} className={`grid gap-6 p-6 ${isWinner ? 'bg-white/[0.05] border border-white/10' : 'bg-white/[0.03]'} ${isWinner ? 'md:grid-cols-1' : 'md:grid-cols-[1.7fr_1fr]'}`}>
                <div className="flex flex-col gap-4">
                  <div className="relative bg-[#0d0d0d] shadow-[0_8px_0_#651014] overflow-hidden min-h-[340px]">
                    <div className="absolute left-3 top-1/2 z-10 -translate-y-1/2">
                      <button
                        type="button"
                        aria-label="Previous"
                        onClick={() => setThumb((current - 1 + gallery.length) % gallery.length)}
                        className="grid h-12 w-12 place-items-center bg-[#60BAFF] text-[#1a1a1a] font-bold"
                      >
                        ‹
                      </button>
                    </div>

                    <div className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                      <button
                        type="button"
                        aria-label="Next"
                        onClick={() => setThumb((current + 1) % gallery.length)}
                        className="grid h-12 w-12 place-items-center bg-[#60BAFF] text-[#1a1a1a] font-bold"
                      >
                        ›
                      </button>
                    </div>

                    <div className="w-full aspect-video">
                      <Gallery item={gallery[current]} w={1200} h={675} />
                    </div>
                  </div>

                  <div className="mt-3 flex gap-3">
                    {gallery.map((t, i) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setThumb(i)}
                        className={`h-20 w-28 overflow-hidden bg-[#0d0d0d] transition-transform hover:-translate-y-0.5 ${i === current ? 'ring-4 ring-[#D93A44]' : ''}`}
                      >
                        <Gallery item={t} w={400} h={240} />
                      </button>
                    ))}
                  </div>
                </div>

                <aside className={`flex flex-col justify-between gap-4 ${isWinner ? 'md:col-span-1' : ''}`}>
                  <div>
                    {isWinner && (
                      <p className="font-akshar text-[14px] font-bold uppercase tracking-[0.14em] text-[#D4AF37] mb-2">
                        🏆 Game Jam Champion
                      </p>
                    )}
                    <h2 className={`font-akshar font-bold leading-none text-white ${isWinner ? 'text-[40px] md:text-[48px]' : 'text-[28px] md:text-[34px]'}`}>{game.title}</h2>
                    
                    {isWinner && game.winnerReason && (
                      <p className="mt-3 font-akshar text-[16px] font-semibold leading-snug text-white">{game.winnerReason}</p>
                    )}
                    
                    <p className="mt-3 font-akshar text-[16px] leading-snug text-white/70">{game.desc}</p>

                    {game.communityFavorite && (
                      <div className="mt-4 flex items-center gap-2">
                        <span className="inline-flex w-fit bg-white/[0.08] px-3 py-1 font-akshar text-[13px] font-bold uppercase tracking-[0.14em] text-white/70">
                          ❤️ Community Favorite
                        </span>
                      </div>
                    )}

                    <div className="mt-6">
                      <p className="font-akshar text-[13px] font-bold uppercase tracking-[0.14em] text-white/60 mb-3">Team</p>
                      <div className="space-y-2">
                        {game.teamMembers.map((member) => (
                          <p key={member.name} className="font-akshar text-[14px] text-white/80">
                            {member.name} — {member.role}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => openPlayer(game)}
                      className="bg-[#D93A44] px-6 py-3 font-akshar text-[18px] font-bold text-white transition-transform hover:-translate-y-0.5"
                    >
                      Play
                    </button>
                    <a
                      href={game.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="font-akshar text-[15px] text-white/70 underline"
                    >
                      View GitHub ↗
                    </a>
                  </div>
                </aside>
              </div>
            )
          })}
        </div>
      </div>

      {openGame && (
        <div 
          className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-6"
          onClick={closePlayer}
        >
          <div 
            ref={gameModalRef}
            className={`relative mx-auto overflow-hidden ${isFullscreen ? 'h-full w-full max-w-none' : 'w-full max-w-5xl'} bg-[#0d0d0d] shadow-[0_12px_0_#651014]`}
            onClick={(e) => e.stopPropagation()}
            onMouseMove={wakeControls}
            onMouseEnter={wakeControls}
          >
            <div
              className={`absolute right-3 top-3 z-20 flex items-center gap-2 transition-opacity duration-200 ${isFullscreen && !controlsVisible ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
            >
              <button
                type="button"
                onClick={toggleFullscreen}
                className="grid h-9 w-9 place-items-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/25"
                title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              >
                <FullscreenIcon exit={isFullscreen} />
              </button>
              <button
                type="button"
                onClick={closePlayer}
                className="flex h-9 items-center gap-1.5 rounded-md bg-white/10 px-3 font-akshar text-[14px] font-bold text-white transition-colors hover:bg-white/25"
              >
                Close
              </button>
            </div>

            {openGame.openedExternally ? (
              <div className="p-6">
                <h3 className="font-akshar text-[20px] font-bold text-white">Opened in a new tab</h3>
                <p className="mt-2 text-white/75">This browser tab is not cross-origin isolated, which prevents SharedArrayBuffer from being available inside an embedded iframe. The game was opened in a new tab to run correctly. To enable in-page play, ensure the site is served with COOP/COEP headers and that `window.crossOriginIsolated` is true in the top-level page.</p>
                <p className="mt-3 text-white/70">Quick checks: open DevTools in the app and run <code>window.crossOriginIsolated</code> (should be <code>true</code>), and in the game frame run <code>typeof SharedArrayBuffer</code>.</p>
              </div>
              ) : (
              <iframe
                title={openGame.title}
                src={encodeURI(openGame.entry)}
                className={`${isFullscreen ? 'h-full w-full' : 'h-[70vh] w-full'} bg-black`}
              />
            )}
          </div>
        </div>
      )}
    </main>
  )
}
