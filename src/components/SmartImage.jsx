import React, { useState, useMemo, useEffect } from 'react'

function makePlaceholderDataUrl(text, width = 800, height = 450) {
  const escaped = String(text || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'><rect width='100%' height='100%' fill='#0d0d0d'/><g fill='#bdbdbd' font-family='Akshar,Arial,Helvetica,sans-serif' font-size='20' text-anchor='middle'><text x='50%' y='50%' dy='-0.4em'>${escaped}</text></g></svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

function proxify(src) {
  if (!src || typeof src !== 'string') return src
  if (src.startsWith('/proxy/') || src.includes('/proxy?') || src.startsWith('/')) return src
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return `/proxy/?u=${encodeURIComponent(src)}`
  }
  return src
}

export default function SmartImage({ src, alt = '', className = '', loading = undefined, ...props }) {
  const placeholder = useMemo(() => makePlaceholderDataUrl(alt || 'Image', 800, 450), [alt])

  const originalSrc = src
  const proxied = proxify(src)

  const [current, setCurrent] = useState(() => proxied || placeholder)

  useEffect(() => {
    const p = proxify(src)
    setCurrent(p || placeholder)
  }, [src])

  function handleError() {
    if (current && originalSrc && current !== originalSrc && (current.startsWith('/proxy') || current.includes('/proxy?'))) {
      setCurrent(originalSrc)
      return
    }

    if (current !== placeholder) setCurrent(placeholder)
  }

  return (
    <img
      src={current}
      alt={alt}
      loading={loading}
      className={className}
      onError={handleError}
      {...props}
    />
  )
}
