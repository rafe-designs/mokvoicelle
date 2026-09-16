import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Disables strict static optimization checks on error/metadata workers
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;