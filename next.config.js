/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ["avatars.githubusercontent.com"]
    },
    env: {
        BASE_URL: process.env.BASE_URL,
    }
}

module.exports = nextConfig;