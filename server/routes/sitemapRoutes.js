import express from 'express';
import Blog from '../models/Blog.js';
import { routesConfig } from '../../client/src/routesConfig.js'; // Import config instead
const router = express.Router();

const BASE_URL = process.env.BASE_URL || 'https://yourdomain.com';

// Routes to exclude from sitemap
const excludedPaths = [
  '/admin/panel',
  '/admin/login', 
  '/admin/signup',
  '/admin/sitemap',
  '/blog/:slug', // Dynamic route handled separately
  
];

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ updatedAt: -1 });

    // Filter and extract paths from routesConfig
    const staticPaths = routesConfig
      .filter(route => !excludedPaths.includes(route.path))
      .map(route => route.path);

    // Generate URLs
    const urls = [
      ...staticPaths.map(path => ({
        loc: `${BASE_URL}${path}`,
        changefreq: path === '/' ? 'daily' : 'monthly',
        priority: path === '/' ? 1.0 : 0.8,
      })),
      ...blogs.map(blog => ({
        loc: `${BASE_URL}/blog/${blog.slug}`,
        lastmod: blog.updatedAt?.toISOString(),
        changefreq: 'weekly',
        priority: 0.9,
      })),
    ];

    // Build XML
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(sitemapXml);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error generating sitemap');
  }
});

export default router;