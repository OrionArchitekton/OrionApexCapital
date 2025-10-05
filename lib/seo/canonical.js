/**
 * Canonical URL utility for SEO
 * Generates absolute canonical URLs with special handling for aliases
 */

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.orionapexcapital.com";

/**
 * Get canonical URL for a given path
 * @param {string} path - The path to generate canonical for
 * @returns {string} Absolute canonical URL
 */
export function getCanonical(path) {
  // Handle special alias case: /services/client-services -> /freelance
  if (path === "/services/client-services") {
    return `${BASE_URL}/freelance`;
  }
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Return absolute URL
  return `${BASE_URL}${normalizedPath}`;
}

/**
 * Get all primary route paths that need canonical URLs
 * @returns {string[]} Array of route paths
 */
export function getPrimaryRoutes() {
  return [
    '/',
    '/services',
    '/freelance',
    '/about',
    '/insights',
    '/contact'
  ];
}

/**
 * Check if a path is an alias that should canonicalize to another path
 * @param {string} path - The path to check
 * @returns {string|null} The canonical path if it's an alias, null otherwise
 */
export function getAliasCanonical(path) {
  const aliases = {
    '/services/client-services': '/freelance'
  };
  
  return aliases[path] || null;
}