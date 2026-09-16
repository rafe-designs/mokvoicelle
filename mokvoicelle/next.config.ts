import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use standalone server build to bypass static export worker constraints
  output: "standalone",
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;