import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true
  },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};

export default nextConfig;
