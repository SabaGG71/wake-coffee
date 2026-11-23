import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the dev server be opened on 127.0.0.1 as well as localhost.
  allowedDevOrigins: ["127.0.0.1"],
  cacheComponents: true,
  images: {
    // Photos come in ready-made widths (scripts/images/variants.mjs), not
    // through Vercel's optimizer: the Hobby quota ran out (402s, 2026-11-20).
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    qualities: [75, 80],
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
