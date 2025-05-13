/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fakhrkhaleej.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/admin/*', '/_next/*'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://fakhrkhaleej.com/sitemap.xml',
      'https://fakhrkhaleej.com/server-sitemap.xml',
    ],
  },
  exclude: ['/api/*', '/admin/*', '/_next/*', '/404', '/500'],
  generateIndexSitemap: true,
  outDir: 'public',
  changefreq: 'weekly',
  priority: 0.7,
} 