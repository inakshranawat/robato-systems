// routesConfig.js - Pure data, no React imports
export const routesConfig = [
  // Main Pages
  { path: '/', name: 'Home' },
  { path: '/contact-us', name: 'Contact' },
  { path: '/about-us', name: 'About Us' },
  { path: '/blogs', name: 'Blogs' },
  { path: '/blog/:slug', name: 'Blog Detail' },
  { path: '/admin/sitemap', name: 'Sitemap' },

  // Admin
  { path: '/admin/panel', name: 'Admin Panel' },
  { path: '/admin/login', name: 'Admin Login' },
  { path: '/admin/signup', name: 'Admin Signup' },

  // Solutions
  { path: '/aerospace-defense', name: 'Aerospace' },
  { path: '/automotive', name: 'Automotive' },
  { path: '/contract-manufacturers', name: 'Contract Manufacturers' },
  { path: '/heavy-machinery', name: 'Heavy Machinery' },
  { path: '/medical-devices', name: 'Medical Devices' },
  { path: '/oil-gas', name: 'Oil & Gas' },
  { path: '/production-monitoring', name: 'Production Monitoring' },
  { path: '/condition-monitoring', name: 'Condition Monitoring' },
  { path: '/predictive-maintenance', name: 'Predictive Maintenance' },
  { path: '/process-optimization', name: 'Process Optimization' },
  { path: '/machine-builders', name: 'Machine Builders' },

  // Products
  { path: '/production-counter-display', name: 'Production Counter Display' },
  { path: '/andon-board-display', name: 'Andon Board Display' },
  { path: '/industrial-parameter-display', name: 'Industrial Parameter Display' },
  { path: '/andon-signal-tower-light', name: 'Andon Signal Tower Light' },
  { path: '/wireless-andon-tower-light', name: 'Wireless Andon Tower Light' },
  { path: '/cloud-andon-tower-light', name: 'Cloud Andon Tower Light' },
  { path: '/electronic-message-display', name: 'Electronic Message Display' },
  { path: '/andon-tower-light', name: 'Andon Tower Light' },
];