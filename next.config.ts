import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typedRoutes: true,
  devIndicators: false,
  experimental: {
    typedEnv: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'yt3.ggpht.com' },
      { protocol: 'https', hostname: 'yt3.googleusercontent.com' },
    ],
  },
}

export default nextConfig
