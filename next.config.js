/** @type {import('next').NextConfig} */

// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction

const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    experimental: {
    appDir: true,
    },
// Optional build-time configuration options
  sentry: {
    disableServerWebpackPlugin: true,
  },

// environment variables
    env: {
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT_ID: process.env.SENTRY_PROJECT_ID,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    SENTRY_RELEASE: process.env.SENTRY_RELEASE,
    },

  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },

};


const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, configFile, stripPrefix, urlPrefix, include, ignore

  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  // An auth token is required for uploading source maps.
  // You can get an auth token from https://sentry.io/settings/account/api/auth-tokens/
  // The token must have `project:releases` and `org:read` scopes for uploading source maps
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: true, // Suppresses all logs

  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting
module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);

// If you're using a next.config.mjs file:
// export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
