#!/usr/bin/env node
import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const GAMES_DIR = path.join(ROOT, 'games')
let PORT = process.env.PLAYER_PORT ? Number(process.env.PLAYER_PORT) : 5174

function contentType(file) {
  const ext = path.extname(file).toLowerCase()
  switch (ext) {
    case '.html': return 'text/html'
    case '.js': return 'application/javascript'
    case '.mjs': return 'application/javascript'
    case '.wasm': return 'application/wasm'
    case '.css': return 'text/css'
    case '.png': return 'image/png'
    case '.jpg': case '.jpeg': return 'image/jpeg'
    case '.gif': return 'image/gif'
    case '.svg': return 'image/svg+xml'
    case '.json': return 'application/json'
    default: return 'application/octet-stream'
  }
}

const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url || '/')
  if (url.startsWith('/proxy')) {
    ;(async () => {
      const u = new URL(req.url, `http://localhost:${PORT}`)
      const remote = u.searchParams.get('u')
      if (!remote) {
        res.writeHead(400)
        res.end('missing url')
        return
      }
      try {
        const upstream = await fetch(remote)
        const buffer = await upstream.arrayBuffer()
        const ct = upstream.headers.get('content-type') || 'application/octet-stream'
        res.setHeader('Content-Type', ct)
        res.setHeader('Cross-Origin-Resource-Policy', 'same-origin')
        res.writeHead(200)
        res.end(Buffer.from(buffer))
      } catch (e) {
        res.writeHead(502)
        res.end('upstream error')
      }
    })()
    return
  }
  const parts = url.split('/').filter(Boolean)
  let gameKey = parts[0]
  let relParts = parts.slice(1)
  if (gameKey === 'games' && parts[1]) {
    gameKey = parts[1]
    relParts = parts.slice(2)
  }

  if (!gameKey) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Player server: visit /<gameName>/')
    return
  }

  const relPath = relParts.join('/') || 'index.html'
  const candidate = path.join(GAMES_DIR, gameKey, relPath)

  if (!candidate.startsWith(path.join(GAMES_DIR, gameKey))) {
    res.writeHead(400)
    res.end('Bad request')
    return
  }

  fs.stat(candidate, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404)
      res.end('Not found')
      return
    }

    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin')
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp')
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin')

    if (relPath === 'index.html' || contentType(candidate) === 'text/html') {
      fs.readFile(candidate, 'utf8', (readErr, data) => {
        if (readErr) {
          res.writeHead(500)
          res.end('Error')
          return
        }
        const baseTag = `<base href="/${gameKey}/">`
        let out = data
        if (out.includes('<head')) {
          out = out.replace(/<head([^>]*)>/i, (m) => `${m}\n    ${baseTag}`)
        } else {
          out = `${baseTag}\n${out}`
        }
        res.setHeader('Content-Type', 'text/html')
        res.end(out)
      })
      return
    }

    const stream = fs.createReadStream(candidate)
    res.setHeader('Content-Type', contentType(candidate))
    stream.pipe(res)
  })
})

function startServer(port) {
  server.listen(port, () => {
    console.log(`Player server listening on http://localhost:${port}/<gameName>/`)
  }).on('error', (err) => {
    if (err && err.code === 'EADDRINUSE') {
      PORT = port + 1
      startServer(PORT)
    } else {
      console.error('Player server error', err)
      process.exit(1)
    }
  })
}

startServer(PORT)
