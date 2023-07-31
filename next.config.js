// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  },
  images: {
    formats: ['image/webp'],
    },
})

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-',
      },
    ],
  },
}

const nextConfig = {
  experimental: {
      appDir: true,
  },
  swcMinify: true,
  optimizeFonts: true,
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "images.unsplash.com",
          },
      ],
      minimumCacheTTL: 15000000,
  },
};

module.exports = nextConfig;