import type { NextConfig } from "next";

interface WatchOptions {
  poll: number;
  aggregateTimeout: number;
}

interface WebpackDevMiddlewareConfig {
  watchOptions: WatchOptions;
}

const nextConfig: NextConfig = {
  webpackDevMiddleware: (
    config: WebpackDevMiddlewareConfig
  ): WebpackDevMiddlewareConfig => {
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300, // Delay before rebuilding
    };
    return config;
  },
};

export default nextConfig;
