/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

module.exports = {
  nextConfig,
  env: {
    INFURA_ID: 'a5b51678f5c248c5af6c10dc7c5501ea',
    BACKEND_URL: 'https://18.221.134.53/api',
    PINATA_API_KEY: '1f8e37ec423bce5ed562',
    PINATA_SECRET_API_KEY: '12bc6c92c377a63574ac6307bff4213da8adf58b604148fb3313018948f1b864',
  },
}
