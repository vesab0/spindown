export const config = {
  runtime: 'edge'
}

export default async function (req) {
  try {
    const url = new URL(req.url)
    const u = url.searchParams.get('u')
    if (!u) return new Response('missing url', { status: 400 })

    if (!/^https?:\/\//.test(u)) return new Response('invalid url', { status: 400 })

    const upstream = await fetch(u)
    if (!upstream.ok) return new Response('upstream error', { status: 502 })

    const buffer = await upstream.arrayBuffer()
    const ct = upstream.headers.get('content-type') || 'application/octet-stream'

    const headers = new Headers()
    headers.set('Content-Type', ct)
    headers.set('Cross-Origin-Resource-Policy', 'same-origin')

    return new Response(buffer, { status: 200, headers })
  } catch (e) {
    return new Response('proxy error', { status: 502 })
  }
}
