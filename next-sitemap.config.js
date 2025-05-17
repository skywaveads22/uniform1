/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://skywaveads22.github.io/uniform1',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [
    '/server-sitemap.xml'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
} 