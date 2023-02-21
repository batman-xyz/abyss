/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
