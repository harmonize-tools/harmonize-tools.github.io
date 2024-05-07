/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {images: {unoptimized: true}},basePath: "",output:'export',
  images: {
      unoptimized: true
  }
};

module.exports = nextConfig