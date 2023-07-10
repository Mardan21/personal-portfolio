/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.publicdomainpictures.net',
        port: '',
        pathname: '/pictures/**'
      },
    ],
  },
}

module.exports = nextConfig
