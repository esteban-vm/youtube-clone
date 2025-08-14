import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'yt3.ggpht.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
}

export default nextConfig
