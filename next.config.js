/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Access .env on client side
  env: {
    API_KEY: process.env.API_KEY,
  }
}

module.exports = nextConfig
