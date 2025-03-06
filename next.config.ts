/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true,
    scrollRestoration: true
  },
  images: {
    domains: [
      'media.licdn.com',
      'www.tutorcasn.com'
    ],
  },
}

module.exports = nextConfig