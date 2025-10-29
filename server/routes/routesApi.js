import express from 'express';
import { routesConfig } from '../../client/src/routesConfig.js'; // Import config instead
const router = express.Router();

// Routes to exclude from public listing
const excludedPaths = [
  '/admin/panel',
  '/admin/login',
  '/admin/signup', 
  '/blog/:slug', // Dynamic
];

// Categorize routes
const categorizeRoutes = () => {
  const categories = {
    static: [],
    solutions: [],
    products: [],
  };

  routesConfig.forEach(route => {
    if (excludedPaths.includes(route.path)) return;

    const { path, name } = route;

    // Categorize based on path
    if (path === '/' || path === '/contact-us' || path === '/about-us' || 
        path === '/blogs' || path === '/admin/sitemap' || path === '/banna') {
      categories.static.push({ path, name });
    } else if (path.includes('display') || path.includes('light') || path.includes('andon')) {
      categories.products.push({ path, name });
    } else {
      categories.solutions.push({ path, name });
    }
  });

  return categories;
};

router.get('/', (req, res) => {
  try {
    const categorizedRoutes = categorizeRoutes();
    res.json(categorizedRoutes);
  } catch (err) {
    console.error('Error fetching routes:', err);
    res.status(500).json({ error: 'Failed to fetch routes' });
  }
});

export default router;