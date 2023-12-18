const withMdx = require('@next/mdx')({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  i18n: {
    locales: ['en-US', 'id'],
    defaultLocale: 'id',
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

module.exports = withMdx(nextConfig);
