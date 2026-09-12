import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'dev-proxy-assets',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          try {
            if (!req.url) return next()
            const url = new URL(req.url, `http://localhost`)
            if (!url.pathname.startsWith('/proxy')) return next()

            const remote = url.searchParams.get('u')
            if (!remote) {
              res.statusCode = 400
              res.end('missing url')
              return
            }

            const upstream = await fetch(remote)
            const buffer = await upstream.arrayBuffer()
            const ct = upstream.headers.get('content-type') || 'application/octet-stream'
            res.setHeader('Content-Type', ct)
            res.setHeader('Cross-Origin-Resource-Policy', 'same-origin')
            res.statusCode = 200
            res.end(Buffer.from(buffer))
            return
          } catch (e) {
            console.error('proxy error', e)
            res.statusCode = 502
            res.end('upstream error')
            return
          }
        })
      },
      configurePreviewServer(server) {
        server.middlewares.use(async (req, res, next) => {
          try {
            if (!req.url) return next()
            const url = new URL(req.url, `http://localhost`)
            if (!url.pathname.startsWith('/proxy')) return next()

            const remote = url.searchParams.get('u')
            if (!remote) {
              res.statusCode = 400
              res.end('missing url')
              return
            }

            const upstream = await fetch(remote)
            const buffer = await upstream.arrayBuffer()
            const ct = upstream.headers.get('content-type') || 'application/octet-stream'
            res.setHeader('Content-Type', ct)
            res.setHeader('Cross-Origin-Resource-Policy', 'same-origin')
            res.statusCode = 200
            res.end(Buffer.from(buffer))
            return
          } catch (e) {
            console.error('proxy error', e)
            res.statusCode = 502
            res.end('upstream error')
            return
          }
        })
      }
    }
  ],
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  preview: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
})
