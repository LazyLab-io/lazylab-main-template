import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Add the rewrites function here
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Catches all requests to /api/...
        destination: "http://localhost:3600/v1/:path*", // And forwards them to your backend
      },
    ];
  },
};

export default nextConfig;

// Local destination when running directly on the client
//"http://localhost:3600/v1/:path*"