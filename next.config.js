/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
            loader: "custom",
          },

  trailingSlash : true,

  basePath: "/~smithgm",
}

module.exports = nextConfig
