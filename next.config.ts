import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the dev server be opened on 127.0.0.1 as well as localhost.
  allowedDevOrigins: ["127.0.0.1"],
  cacheComponents: true,
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
