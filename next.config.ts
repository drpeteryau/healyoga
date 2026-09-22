import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/healyoga" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: isGitHubPages ? "/healyoga/" : "",
  env: {
    // process.env.GITHUB_ACTIONS is a build-time-only Node variable — it is not
    // automatically inlined into client ("use client") bundles, so any <img src>
    // built from it resolves against the wrong origin in the browser. Declaring
    // it here makes Next.js inline the value into both server and client code.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
