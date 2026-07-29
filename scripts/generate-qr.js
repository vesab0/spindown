import { create } from 'qrcode'
import sharp from 'sharp'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'qr-codes')

const DARK = '#000000'

const targets = [
  { name: 'spindown-site', url: 'https://spindown.flossk.org' },
  { name: 'spindown-discord', url: 'https://discord.gg/rzBhAQ76jg' },
]

function d20Icon(cx, cy, r, tilt = 12) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 3
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
  })
  const hex = pts.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' ')

  return `
    <g transform="rotate(${tilt} ${cx} ${cy})">
      <polygon points="${hex}" fill="${DARK}" stroke="${DARK}" stroke-width="${(r * 0.1).toFixed(2)}" stroke-linejoin="round"/>
    </g>`
}

function buildSvg(url) {
  const qr = create(url, { errorCorrectionLevel: 'H' })
  const n = qr.modules.size
  const data = qr.modules.data
  const margin = 4
  const size = n + margin * 2

  const iconR = size * 0.075
  const center = size / 2
  const clearR = iconR * 1.5

  let rects = ''
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (!data[y * n + x]) continue
      const mx = x + margin + 0.5
      const my = y + margin + 0.5
      if (Math.hypot(mx - center, my - center) < clearR) continue
      rects += `<rect x="${x + margin}" y="${y + margin}" width="1.02" height="1.02" fill="${DARK}"/>`
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="1024" height="1024" shape-rendering="crispEdges">
  ${rects}
  <g shape-rendering="geometricPrecision">
    ${d20Icon(center, center, iconR)}
  </g>
</svg>`
}

await mkdir(OUT, { recursive: true })

for (const { name, url } of targets) {
  const svg = buildSvg(url)
  const svgPath = join(OUT, `${name}.svg`)
  const pngPath = join(OUT, `${name}.png`)
  await writeFile(svgPath, svg)
  await sharp(Buffer.from(svg)).resize(1024, 1024).png().toFile(pngPath)
  console.log(`✓ ${name}  ->  ${url}`)
}

console.log(`\nDone. Files in: ${OUT}`)
