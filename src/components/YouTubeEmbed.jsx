import React, { useState, useMemo } from 'react'

export default function YouTubeEmbed({ videoId, start }) {
  const [started, setStarted] = useState(false)
  const startParam = start ? `?start=${start}` : ''
  const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  const isCrossOriginIsolated = useMemo(() => {
    try {
      return typeof window !== 'undefined' && !!window.crossOriginIsolated
    } catch (e) {
      return false
    }
  }, [])

  const openOnYouTube = () => {
    const url = `https://www.youtube.com/watch?v=${videoId}${start ? `&t=${start}s` : ''}`
    window.open(url, '_blank', 'noopener')
  }

  const handleClick = () => {
    if (isCrossOriginIsolated) {
      openOnYouTube()
      return
    }
    setStarted(true)
  }

  if (!started) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-black shadow-[0_8px_0_#651014]">
        <button
          type="button"
          onClick={handleClick}
          className="absolute inset-0 w-full h-full"
          aria-label="Play video"
        >
          <img src={thumb} alt="video thumbnail" className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="rounded-full bg-[#D93A44] p-6 text-white text-3xl">▶</div>
          </div>
        </button>
        {isCrossOriginIsolated && (
          <div className="absolute right-3 bottom-3 rounded bg-black/60 px-3 py-1 text-sm text-white">
            Embedded playback blocked — opens YouTube
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="aspect-video w-full overflow-hidden bg-black shadow-[0_8px_0_#651014]">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}${startParam}`}
        title={`YouTube video ${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
