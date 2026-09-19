/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Vercel resizes and re-encodes to AVIF/WebP at request time. With
    // `unoptimized` set, every source PNG shipped whole: the landing page
    // alone was moving about 5 MB of artwork over the wire.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 828, 1080, 1280, 1600, 1920],
  },
}

export default nextConfig
