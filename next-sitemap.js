/** @type {import('next-sitemap').IConfig} */

const SITE_URL = "https://example.com";

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  exclude : [
    '/components*'
  ],
  alternateRefs: [
    {
      href: "https://example.com/en",
      hreflang: "en",
    },
    {
      href: "https://example.com/fr",
      hreflang: "fr",
    },
    {
      href: "https://example.com/es",
      hreflang: "es",
    },
    {
      href: "https://example.com/ar",
      hreflang: "ar",
    },
  ],
};
