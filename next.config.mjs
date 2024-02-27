/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_GHOST_API_URL,
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "static.ghost.org",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
