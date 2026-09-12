import { useEffect, useState } from 'react'
import { loadGalleryImages } from '../utils/loadGalleryImages'

const INTERVAL_MS = 4500

export default function IntroCarousel() {
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let cancelled = false
    async function load() {
      const found = await loadGalleryImages('/event-pictures')
      if (cancelled) return
      const direct = (found ?? []).filter((path) => path.split('/').length === 3)
      setImages(direct)
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (images.length < 2) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [images.length])

return (
    <section className="bg-[#1a1a1a] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
        <div className="group md:w-[74%]">
          <div className="relative aspect-video w-full overflow-hidden rounded-sm">
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Spindown event photo ${i + 1}`}
                draggable={false}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${i === index ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 transition-opacity md:opacity-0 md:group-hover:opacity-100">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 md:w-[24%]">
          <p className="font-akshar text-[24px] font-bold leading-relaxed text-white">
            Spindown is a FLOSSK branch of Game developers, designers and enthusiasts.
          </p>
          <p className="font-akshar text-[20px] leading-tight text-white/75 md:text-[22px]">
            We aim to bring together developers and designers to grow Kosova's game development community. It's a community built on the simple idea that people who love making games should have a place to find each other, share what they know, and grow together.
          </p>
          <p className="font-akshar text-[20px] leading-tight text-white/75 md:text-[22px]">
            At its core, Spindown is about people first, Kosova's game development scene grows stronger when we connect and support each other
          </p>
          
        
        </div>
      </div>
    </section>
  )
}