import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export",          // 🔑 static export for S3
  images: {
    unoptimized: true,       // 🔑 S3 ke liye required
  },
};

export default nextConfig;
