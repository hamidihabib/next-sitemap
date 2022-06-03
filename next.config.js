/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");

module.exports = withPWA({
  nextConfig,
  i18n,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === 'development',
  },
});
