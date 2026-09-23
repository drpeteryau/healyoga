import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // The same export is served from both /healyoga/ on github.io and / on the
  // custom domain. Relative asset URLs work in both locations; an absolute
  // basePath only works on one of them.
  assetPrefix: ".",
  env: {
    // Client-rendered public images need the same relative prefix as Next.js
    // assets so they work at both hosting paths.
    NEXT_PUBLIC_BASE_PATH: ".",
  },
};

export default nextConfig;
