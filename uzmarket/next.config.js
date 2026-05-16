/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Set turbopack root to avoid the workspace-root warning
  turbopack: {
    root: __dirname
  }
}

module.exports = nextConfig;
