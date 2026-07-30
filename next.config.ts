import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. A stray package-lock.json exists in
  // the parent (home) directory, and without this Next.js may infer the wrong root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
