/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/my-portfolio",
  output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
