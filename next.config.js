/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import { hostname } from "os";
import "./src/env.js";  // Importing your environment configuration

/** @type {import("next").NextConfig} */
const coreConfig = {
  images: {
    remotePatterns: [
      { hostname: "utfs.io" },
      { hostname: "*.ufs.sh" },
      { hostname: "ufs.sh" },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

import { withSentryConfig } from "@sentry/nextjs";

// Sentry-specific config
const config =withSentryConfig(coreConfig, {
  org: "carlos-miguel-viray",
  project: "t4gallery",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  tunnelRoute: "/monitoring",

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. 
  automaticVercelMonitors: true,
});

// Export the configuration wrapped with Sentry


export default config;
