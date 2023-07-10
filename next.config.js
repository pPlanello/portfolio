/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.github.com',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
