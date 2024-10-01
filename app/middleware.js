// middleware.js
import { NextResponse } from 'next/server'
import { RateLimiter } from 'limiter'

const limitersByIP = new Map()

function getLimiter(ip) {
  if (!limitersByIP.has(ip)) {
    // Allow 100 requests per IP per minute
    limitersByIP.set(
      ip,
      new RateLimiter({
        tokensPerInterval: 100,
        interval: 'minute',
        fireImmediately: true,
      })
    )
  }
  return limitersByIP.get(ip)
}

// Clean up old limiters every hour
setInterval(() => {
  const oneHourAgo = Date.now() - 60 * 60 * 1000
  for (const [ip, limiter] of limitersByIP.entries()) {
    if (limiter.lastChecked < oneHourAgo) {
      limitersByIP.delete(ip)
    }
  }
}, 60 * 60 * 1000)

export async function middleware(request) {
  const ip = request.ip ?? '127.0.0.1'
  const limiter = getLimiter(ip)

  const remainingRequests = await limiter.removeTokens(1)

  if (remainingRequests < 0) {
    console.log(`Rate limit exceeded for IP: ${ip}`)
    return new NextResponse('Too Many Requests', { status: 429 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}
