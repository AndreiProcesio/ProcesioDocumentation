import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  // Required for static export: serve images directly instead of via the
  // server-only /_next/image optimizer (which 404s on a static host).
  images: { unoptimized: true },
};

export default withMDX(config);
