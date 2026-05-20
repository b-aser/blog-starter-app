/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production' 

const nextConfig = {
  output: 'export',
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
  basePath: isProd ?  '/blog-starter-app' : '',
  images: {
    unoptimized: true,
  },
}
 
module.exports = nextConfig